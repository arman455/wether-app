import { View, Text } from "react-native";
import SunnyIcon from "../icons/sunny-plus-windy-icon";
import { useLocalSearchParams } from "expo-router";
import { styles } from "./mainPoster.style";
import { useEffect, useState } from "react";
import * as Font from 'expo-font';
import { useWeather } from "../../../modules/wether/hooks/useWeather";
import CloudyWithMoonIcon from "../icons/cloudy-with-moon-icon";
import LonelySunIcon from "../icons/lonely-sun-icon";
import BigRainIcon from "../icons/big-rain-icon";
import NightRainIcon from "../icons/night-rain-icon";

export function MainPoster() {
    const { city } = useLocalSearchParams<{ city: string }>();
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const { data } = useWeather(city)

    useEffect(() => {
        Font.loadAsync({
            'Roboto-VariableFont_wdth,wght-Bold': require('../../../../assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
        }).then(() => setFontsLoaded(true));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={[styles.mainText, { fontFamily: "Roboto-VariableFont_wdth,wght-Bold" }]}>{city}</Text>
            <View style={styles.content}>
                {data && (() => {
                    const iconCode = data.current.icon.slice(45, 48);
                    const dayOrNight = data.current.icon.slice(41, 42);

                    switch (dayOrNight) {
                        case "d":
                            switch (iconCode) {
                                case "113":
                                    return <LonelySunIcon style={{ width: 130, height: 130 }} />;
                                case "116":
                                    return <SunnyIcon style={{ width: 130, height: 130, top: 10, left: 10 }} />;
                                case "176":
                                case "293":
                                case "299":
                                case "305":
                                case "308":
                                case "356":
                                    return <BigRainIcon style={{ width: 130, height: 130 }} />;
                                default:
                                    return <SunnyIcon style={{ width: 130, height: 130 }} />;
                            }

                        case "n":
                            switch (iconCode) {
                                case "113":
                                case "116":
                                case "119":
                                    return <CloudyWithMoonIcon style={{ width: 130, height: 130 }} />;
                                case "176":
                                case "293":
                                case "299":
                                case "305":
                                case "308":
                                case "356":
                                    return <NightRainIcon style={{ width: 130, height: 130 }} />;
                                default:
                                    return <CloudyWithMoonIcon style={{ width: 130, height: 130 }} />;
                            }

                        default:
                            return null;
                    }


                    return null;
                })()}

                <Text style={{ fontSize: 66, fontFamily: "Roboto-VariableFont_wdth,wght-Bold", color: "white" }}>
                    {data?.current.temp_c}°
                </Text>
            </View>
            <View style={{ gap: 10 }}>
                <Text style={{ fontSize: 24, color: "white", fontFamily: "Roboto-VariableFont_wdth,wght-Bold", textAlign: "center", fontWeight: 500 }}>{data?.current.condition}</Text>
                <Text style={{ fontSize: 16, color: "white", fontFamily: "Roboto-VariableFont_wdth,wght-Bold", fontWeight: 500, textAlign: "center" }}>Макс.:{data?.current.max_today}°, мін.:{data?.current.min_today}°</Text>
            </View>
        </View>
    )
}