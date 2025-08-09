import { View, Text } from "react-native";
import SunnyIcon from "../icons/sunny-plus-windy-icon";
import { useLocalSearchParams } from "expo-router";
import { styles } from "./mainPoster.style";
import { useEffect, useState } from "react";
import * as Font from 'expo-font';
import { useWeather } from "../../../modules/wether/hooks/useWeather";
import CloudyWithMoonIcon from "../icons/cloudy-with-moon-icon";


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
                {data?.current.icon.slice(41, 42) === "n" ? <CloudyWithMoonIcon style={{ width: 130, height: 130 }} /> : null}
                {data?.current.icon.slice(41, 42) === "d" ? <SunnyIcon style={{ width: 100, height: 130, top: 10, left: 10 }} /> : null}
                <Text style={{ fontSize: 66, fontFamily: "Roboto-VariableFont_wdth,wght-Bold", color: "white" }}>{data?.current.temp_c}°</Text>
            </View>
            <View style={{ gap: 10 }}>
                <Text style={{ fontSize: 24, color: "white", fontFamily: "Roboto-VariableFont_wdth,wght-Bold", textAlign: "center", fontWeight: 500 }}>{data?.current.condition}</Text>
                <Text style={{ fontSize: 16, color: "white", fontFamily: "Roboto-VariableFont_wdth,wght-Bold", fontWeight: 500, textAlign: "center" }}>Макс.:{data?.current.max_today}°, мін.:{data?.current.min_today}°</Text>
            </View>
        </View>
    )
}