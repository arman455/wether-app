import React, { useRef, useEffect, useMemo, useState } from "react";
import { SafeAreaView, FlatList, Text, View, InteractionManager } from "react-native";
import { styles } from "./weatherForDay.style";
import SunnyDayIcon from "../icons/sunny-day-icon";
import NightIcon from "../icons/night-icon";
import SunSetIcon from "../icons/sunset-icon";
import { useWeather } from "../../../modules/wether/hooks/useWeather";
import { useLocalSearchParams } from "expo-router";
import SunriseIcon from "../icons/sunrise-icon";
import SunySoloIcon from "../icons/suny-solo-icon";
import CloudyIcon from "../icons/cloudy-icon";
import LightsIcon from "../icons/lights";
import Icon176 from "../icons/176";
import Icon296 from "../icons/296";
import RainIcon from "../icons/rain-icon";
import Icon308 from "../icons/308";
import Icon302 from "../icons/302";
import Icon176Night from "../icons/176Night";

export function WeatherForDay() {
    const { city } = useLocalSearchParams<{ city: string }>();
    const { data: weatherData } = useWeather(city);
    const [currentTime, setCurrentTime] = useState<string>("");

    useEffect(() => {
        function updateTime() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            console.log(hours)
            const minutes = now.getMinutes().toString().padStart(2, '0');
            setCurrentTime(`${hours}:${minutes}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);

        return () => clearInterval(interval);
    }, []);

    const hourlyData = useMemo(() => {
        if (!weatherData) return [];

        const arr = weatherData.hourly.map(h => ({
            time: h.time.slice(-5),
            temp: `${Math.round(h.temp_c)}°`,
            icon: h.icon,
            isCurrent: false
        }));

        arr.push({
            time: to24HourFormat(weatherData.sunset),
            temp: "",
            icon: "",
            isCurrent: false
        });
        arr.push({
            time: to24HourFormat(weatherData.sunrise),
            temp: "",
            icon: "",
            isCurrent: false
        });
        arr.push({
            time: currentTime,
            temp: weatherData.current.temp_c.toString(),
            icon: weatherData.current.icon,
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

    const data = useMemo(() => [...hourlyData, ...hourlyData, ...hourlyData], [hourlyData]);

    const flatListRef = useRef<FlatList>(null);
    const baseLength = hourlyData.length;

    const currentIndex = useMemo(() => {
        return hourlyData.findIndex(item => item.isCurrent);
    }, [hourlyData]);

    useEffect(() => {
        if (baseLength > 0 && currentIndex !== -1) {
            setTimeout(() => {
                flatListRef.current?.scrollToIndex({
                    index: baseLength + currentIndex,
                    animated: false,
                    viewPosition: 0.5
                });
            }, 100);
        }
    }, [baseLength, currentIndex]);

    function handleScrollEnd(event: any) {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const itemWidth = 51;
        const index = Math.round(contentOffsetX / itemWidth);

        if (index <= baseLength * 0.5) {
            flatListRef.current?.scrollToOffset({
                offset: (index + baseLength) * itemWidth,
                animated: false,
            });
        } else if (index >= baseLength * 1.5) {
            flatListRef.current?.scrollToOffset({
                offset: (index - baseLength) * itemWidth,
                animated: false,
            });
        }
    }

    console.log(weatherData?.daily.map((item) => item.icon.slice(41)))


    function getIcon(time: string, iconUrl: string) {
        if (!weatherData) return <NightIcon width={24} height={19} />;

        if (time === to24HourFormat(weatherData?.sunset)) {
            return <SunSetIcon width={24} height={19} />;
        }
        if (time === to24HourFormat(weatherData?.sunrise)) {
            return <SunriseIcon width={24} height={19} />;
        }

        const iconCode = iconUrl.slice(45, 48);
        const isNight = iconUrl.slice(41, 42);

        switch (isNight) {
            case "d":
                switch (iconCode) {
                    case "113":
                        return <SunySoloIcon width={24} height={24} />;
                    case "116":
                        return <SunnyDayIcon width={24} height={24} />;
                    case "119":
                    case "122":
                        return <CloudyIcon width={24} height={24} />;
                    case "176":
                        return <Icon176 width={24} height={24} />;
                    case "200":
                        return <LightsIcon width={24} height={24} />;
                    case "296":
                        return <Icon296 width={24} height={24} />;
                    case "302":
                        return <Icon302 width={24} height={24} />;
                    case "305":
                        return <RainIcon width={24} height={24} />;
                    case "308":
                        return <Icon308 width={24} height={24} />;
                    default:
                        return <SunnyDayIcon width={24} height={24} />;
                }

            case "n":
                switch (iconCode) {
                    case "113":
                        return <NightIcon width={24} height={24} />;
                    case "116":
                    case "119":
                    case "122":
                        return <CloudyIcon width={24} height={24} />;
                    case "176":
                        return <Icon176Night width={24} height={24} />;
                    case "200":
                        return <LightsIcon width={24} height={24} />;
                    case "296":
                        return <Icon296 width={24} height={24} />;
                    case "302":
                        return <Icon302 width={24} height={24} />;
                    case "305":
                        return <RainIcon width={24} height={24} />;
                    case "308":
                        return <Icon308 width={24} height={24} />;
                    default:
                        return <NightIcon width={24} height={24} />;
                }

            default:
                return null;
        }
    }


    function to24HourFormat(time12h: string) {
        if (!time12h) return "";
        const [time, modifier] = time12h.split(" ");
        let [hours, minutes] = time.split(":").map(Number);

        if (modifier === "PM" && hours < 12) {
            hours += 12;
        }
        if (modifier === "AM" && hours === 12) {
            hours = 0;
        }

        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
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

    const HourItem = React.memo(({ item, getIcon, getBottomText }: any) => {
        return (
            <View style={[styles.item, item.isCurrent && styles.currentItem]}>
                <Text style={styles.time}>{item.time.slice(0, 5)}</Text>
                {getIcon(item.time, item.icon)}
                <Text style={styles.time}>{getBottomText(item.time, item.temp)}</Text>
            </View>
        );
    });

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
                    <HourItem item={item} getIcon={getIcon} getBottomText={getBottomText} />
                )}
                getItemLayout={(_, index) => ({
                    length: 51,
                    offset: 51 * index,
                    index,
                })}
                onMomentumScrollEnd={handleScrollEnd}
                initialScrollIndex={baseLength}
                removeClippedSubviews={true}
                maxToRenderPerBatch={10}
                windowSize={5}
            />
        </SafeAreaView>
    );
}