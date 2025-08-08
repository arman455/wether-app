import React from "react";
import { View, Text } from "react-native";
import SunySoloIcon from "../icons/suny-solo-icon";
import { styles } from "./weatherForWeek.style";
import { LinearGradient } from "expo-linear-gradient";

const data = [
    { day: "Сьогодні", min: 19, max: 21, icon: "cloud" },
    { day: "Сб", min: 17, max: 19, icon: "cloud" },
    { day: "Вс", min: 20, max: 27, icon: "sun" },
    { day: "Пн", min: 20, max: 27, icon: "sun" },
    { day: "Вт", min: 20, max: 27, icon: "storm" },
    { day: "Ср", min: 20, max: 27, icon: "storm" },
    { day: "Чт", min: 20, max: 27, icon: "sun" },
    { day: "Пт", min: 18, max: 20, icon: "rain" },
    { day: "Сб", min: 18, max: 22, icon: "rain" },
    { day: "Вс", min: 20, max: 27, icon: "sun" },
];

export function WeatherForWeek() {
    return (
        <View style={styles.container}>
            <View style={{ width: "100%" }}>
                <Text style={styles.title}>10-Денний прогноз</Text>
                <View style={styles.separator} />
            </View>

            <View style={styles.content}>
                {data.map((item, index) => (
                    <View key={index} style={styles.item}>
                        <Text style={styles.day}>{item.day}</Text>

                        <View style={styles.iconWrapper}>
                            <SunySoloIcon width={24} height={24} />
                        </View>

                        <Text style={styles.temp}>{item.min}°</Text>

                        <LinearGradient
                            colors={["#4DB6FF", "#FFD54F"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradient}
                        />

                        <Text style={styles.temp}>{item.max}°</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}
