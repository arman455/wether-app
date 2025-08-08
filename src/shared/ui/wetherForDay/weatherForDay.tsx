import React, { useRef, useEffect, useMemo } from "react";
import { SafeAreaView, FlatList, Text, View, Dimensions } from "react-native";
import { styles } from "./weatherForDay.style";
import SunnyDayIcon from "../icons/sunny-day-icon";
import NightIcon from "../icons/night-icon";
import SunSetIcon from "../icons/sunset-icon";

export function WeatherForDay() {

    const baseHoursArr = useMemo(() => {
        const arr = Array.from({ length: 24 }, (_, i) => {
            const h = i.toString().padStart(2, "0");
            return {
                time: h,
                temp: `${Math.floor(Math.random() * 15) + 1}°`,
            };
        });

        const index17 = arr.findIndex(h => h.time === "17");
        arr.splice(index17 + 1, 0, { time: "17:40", temp: "" });

        return arr;
    }, []);

    const data = useMemo(
        () => [...baseHoursArr, ...baseHoursArr, ...baseHoursArr],
        [baseHoursArr]
    );

    const flatListRef = useRef<FlatList>(null);
    const baseLength = baseHoursArr.length; // 25 елементів

    useEffect(() => {
        setTimeout(() => {
            flatListRef.current?.scrollToIndex({
                index: baseLength,
                animated: false,
            });
        }, 100);
    }, [baseLength]);

    function handleScrollEnd(event: any){
        let contentOffsetX = event.nativeEvent.contentOffset.x;
        let itemWidth = 51;
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
    };

    function getIcon(time: string) {
        if (time === "17:40") return <SunSetIcon width={24} height={19} />;
        const hourNum = parseInt(time);
        if (hourNum >= 4 && hourNum <= 17) {
            return <SunnyDayIcon width={24} height={19} />;
        }
        return <NightIcon width={24} height={19} />;
    };

    function getBottomText(time: string, temp: string) {
        if (time === "17:40") return "Захід сонця";
        return temp;
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: "100%" }}>
                <Text style={styles.title}>Хмарна погода до кінця дня</Text>
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
                    <View style={styles.item}>
                        <Text style={styles.time}>{item.time}</Text>
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
            />
        </SafeAreaView>
    );
}
