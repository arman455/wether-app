import React from "react";
import { View, Text } from "react-native";
import SunySoloIcon from "../icons/suny-solo-icon";
import { styles } from "./weatherForWeek.style";
import { LinearGradient } from "expo-linear-gradient";
import { useWeather } from "../../../modules/wether/hooks/useWeather";
import { useLocalSearchParams } from "expo-router";
import SunnyDayIcon from "../icons/sunny-day-icon";
import ClearIcon from "../icons/clear";
import CloudyIcon from "../icons/cloudy-icon";
import LightsIcon from "../icons/lights";
import RainIcon from "../icons/rain-icon";
import Icon176 from "../icons/176";
import Icon296 from "../icons/296";
import Icon308 from "../icons/308";
import NightIcon from "../icons/night-icon";
import Icon302 from "../icons/302";

export function WeatherForWeek() {

    const { city } = useLocalSearchParams<{ city: string }>()
    const { data: weatherData } = useWeather(city)

    console.log(weatherData?.daily.map((item) => item.icon.slice(41,42)))

    return (
        <View style={styles.container}>
            <View style={{ width: "100%" }}>
                <Text style={styles.title}>10-Денний прогноз</Text>
                <View style={styles.separator} />
            </View>

            <View style={styles.content}>
                {weatherData?.daily.map((item, index) => (
                    <View key={index} style={styles.item}>
                        <Text style={styles.day}>
                            {new Date(item.date).toLocaleDateString("uk-UA", { weekday: "short" }).toUpperCase()}
                        </Text>

                        <View style={styles.iconWrapper}>
                            {item.icon.slice(45,48) === "113" ? <SunySoloIcon width={24} height={24} /> : null}
                            {item.icon.slice(45,48) === "116" ? <SunnyDayIcon width={24} height={24} /> : null}
                            {item.icon.slice(45,48) === "119" || item.icon.slice(45,48) === "122" ? <CloudyIcon width={24} height={24} /> : null}
                            {item.icon.slice(45,48) === "176" ? <Icon176 width={24} height={24} /> : null}
                            {item.icon.slice(45,48) === "200" ? <LightsIcon width={24} height={24} /> : null}
                            {item.icon.slice(45,48) === "296" ? <Icon296 width={24} height={24} /> : null}
                            {item.icon.slice(45,48) === "305" ? <RainIcon width={24} height={24} /> : null}
                            {item.icon.slice(45,48) === "302" ? <Icon302 width={24} height={24} /> : null}
                            {item.icon.slice(45,48) === "308" ? <Icon308 width={24} height={24} /> : null}
                            {item.icon.slice(41,42) === "n" ? <NightIcon width={24} height={24} /> : null}
                        </View>
                        <View style={{flexDirection: "row", gap: 10, alignItems: "center", paddingHorizontal: 10}}>
                            <Text style={styles.day}>{item.min.toString().slice(0, 2)}°</Text>

                            <LinearGradient
                                colors={["#4DB6FF", "#FFD54F"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.gradient}
                            />

                            <Text style={styles.day}>{item.max.toString().slice(0, 2)}°</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}
