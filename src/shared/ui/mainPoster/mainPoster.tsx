import { View, Text } from "react-native";
import SunnyIcon from "../icons/sunny-plus-windy-icon";
import { useLocalSearchParams } from "expo-router";
import { styles } from "./mainPoster.style";
import { useEffect, useState } from "react";
import * as Font from 'expo-font';
import SunnySmallIcon from "../icons/sunny-icon";

export function MainPoster() {
    const { city } = useLocalSearchParams()
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        Font.loadAsync({
            'Roboto-VariableFont_wdth,wght-Bold': require('../../../../assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
        }).then(() => setFontsLoaded(true));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={[styles.mainText, {fontFamily: "Roboto-VariableFont_wdth,wght-Bold"}]}>{city}</Text>
            <View style={styles.content}>
                <SunnySmallIcon style={{width: 120, height: 130}}/>
                <Text style={{fontSize: 76, fontFamily: "Roboto-VariableFont_wdth,wght-Bold", color: "white"}}>11°</Text>
            </View>
            <View style={{gap: 10}}>
                <Text style={{fontSize: 24, color: "white", fontFamily: "Roboto-VariableFont_wdth,wght-Bold", textAlign: "center", fontWeight: 500}}>Хмарно</Text>
                <Text style={{fontSize: 16, color: "white", fontFamily: "Roboto-VariableFont_wdth,wght-Bold", fontWeight: 500}}>Макс.:11°, мін.:0°</Text>
            </View>
        </View>
    )
}