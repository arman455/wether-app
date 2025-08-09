import React, { useRef, useEffect, useMemo, useState } from "react";
import { SafeAreaView, FlatList, Text, View } from "react-native";
import { styles } from "./weatherForDay.style";
import SunnyDayIcon from "../icons/sunny-day-icon";
import NightIcon from "../icons/night-icon";
import SunSetIcon from "../icons/sunset-icon";
import { useWeather } from "../../../modules/wether/hooks/useWeather";
import { useLocalSearchParams } from "expo-router";
import SunriseIcon from "../icons/sunrise-icon";

export function WeatherForDay() {
    const { city } = useLocalSearchParams<{ city: string }>();
    const { data: weatherData } = useWeather(city);
    const [currentTime, setCurrentTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            setCurrentTime(`${hours}:${minutes}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);

        return () => clearInterval(interval);
    }, []);
    console.log(currentTime)

    const hourlyData = useMemo(() => {
        if (!weatherData) return [];

        const arr = weatherData.hourly.map(h => ({
            time: h.time.slice(-5),
            temp: `${Math.round(h.temp_c)}°`,
            isCurrent: false
        }));

        arr.push({
            time: to24HourFormat(weatherData.sunset),
            temp: "",
            isCurrent: false
        });
        arr.push({
            time: to24HourFormat(weatherData.sunrise),
            temp: "",
            isCurrent: false
        });
        arr.push({
            time: "Зараз",
            temp: weatherData.current.temp_c.toString(),
            isCurrent: true
        });

        return arr.sort((a, b) => a.time.localeCompare(b.time));
    }, [weatherData, currentTime]);

    const currentCondition = useMemo(() => {
        if (!weatherData) return "";

        const now = new Date();
        const currentHour = now.getHours();

        const nearest = weatherData.hourly.find(h => {
            const hour = parseInt(h.time.slice(-5, -3));
            return hour === currentHour;
        }) || weatherData.hourly[0];

        return nearest.condition;
    }, [weatherData]);

    const data = useMemo(
        () => [...hourlyData, ...hourlyData, ...hourlyData],
        [hourlyData]
    );

    const flatListRef = useRef<FlatList>(null);
    const baseLength = hourlyData.length;

    useEffect(() => {
        if (baseLength > 0) {
            setTimeout(() => {
                flatListRef.current?.scrollToIndex({
                    index: baseLength,
                    animated: false,
                });
            }, 100);
        }
    }, [baseLength]);

    function handleScrollEnd(event: any) {
        let contentOffsetX = event.nativeEvent.contentOffset.x;
        let itemWidth = 70;
        let index = Math.round(contentOffsetX / itemWidth);

        if (index < baseLength / 2) {
            flatListRef.current?.scrollToIndex({
                index: index + baseLength,
                animated: false,
            });
        } else if (index >= baseLength * 1.5) {
            flatListRef.current?.scrollToIndex({
                index: index - baseLength,
                animated: false,
            });
        }
    }

    function getIcon(time: string) {
        if (weatherData) {
            if (time === to24HourFormat(weatherData?.sunset)) return <SunSetIcon width={24} height={19} />;
            if (time === to24HourFormat(weatherData?.sunrise)) return <SunriseIcon width={24} height={19} />;

            const hourNum = parseInt(time.split(':')[0]);
            const sunriseHour = parseInt(to24HourFormat(weatherData?.sunrise).split(':')[0]);
            const sunsetHour = parseInt(to24HourFormat(weatherData?.sunset).split(':')[0]);

            if (hourNum >= sunriseHour && hourNum <= sunsetHour) {
                return <SunnyDayIcon width={24} height={19} />;
            }
        }
        return <NightIcon width={24} height={19} />;
    }

    function to24HourFormat(time12h: string) {
        if (!time12h) return "";
        const [time, modifier] = time12h.split(" ");
        let [hours, minutes] = time.split(":").map(Number);

        if (modifier?.toLowerCase() === "pm" && hours < 12) {
            hours += 12;
        }
        if (modifier?.toLowerCase() === "am" && hours === 12) {
            hours = 0;
        }

        return `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}`;
    }

    function getBottomText(time: string, temp: string) {
        if (weatherData) {
            if (time === to24HourFormat(weatherData?.sunset)) return "Захід сонця";
            if (time === to24HourFormat(weatherData?.sunrise)) return "Схід сонця";
        }
        return temp;
    }

    if (!weatherData) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{ color: "white" }}>Завантаження...</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: "100%" }}>
                <Text style={styles.title}>{currentCondition ? `${currentCondition} до кінця дня` : "Прогноз до кінця дня"}</Text>
                <View
                    style={{
                        borderColor: "#FFFFFF33",
                        borderTopWidth: 1,
                        width: "100%",
                        height: 1,
                    }}
                />
            </View>
            <FlatList
                ref={flatListRef}
                contentContainerStyle={styles.content}
                horizontal
                data={data}
                keyExtractor={(_, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={[styles.item, item.isCurrent && styles.currentItem]}>
                        <Text style={styles.time}>{item.time.slice(0, 5)}</Text>
                        {getIcon(item.time)}
                        <Text style={styles.time}>
                            {getBottomText(item.time, item.temp)}
                        </Text>
                    </View>
                )}
                getItemLayout={(_, index) => ({
                    length: 70,
                    offset: 70 * index,
                    index,
                })}
                onMomentumScrollEnd={handleScrollEnd}
                initialScrollIndex={baseLength}
            />
        </SafeAreaView>
    );
}