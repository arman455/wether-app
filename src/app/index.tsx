import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import * as Font from 'expo-font';
import { Button } from "../shared/ui/button/button";
import SunnyIcon from "../shared/ui/icons/sunny-plus-windy-icon";
import { useRouter } from "expo-router";

export default function Index() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const router = useRouter()

    useEffect(() => {
        Font.loadAsync({
            'GTWalsheimPro-Bold': require('../..//assets/fonts/GTWalsheimPro-Bold.ttf'),
        }).then(() => setFontsLoaded(true));
    }, []);

    function onPress() {
        router.push('/city')
    }

    return (
        <LinearGradient
            colors={['#FFFFFF', '#B0C4DE']}
            style={styles.container}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            <SafeAreaView style={styles.container} edges={['top']}>
                <SunnyIcon width={200} height={200}/>
                <View style={styles.mainDiv}>
                    <View style={{gap: 24, alignItems: "center", justifyContent: "center"}}>
                        <Text style={styles.header}>Вітаємо у додатку!</Text>
                        <Text style={styles.text}>Актуальна погода {"\n"} у будь-якому місті світу</Text>
                    </View>
                    <Button name="Обрати місто" onPress={onPress}></Button>
                </View>
            </SafeAreaView >
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
    },
    mainDiv: {
        width: 335,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 44,
    },
    header: {
        color: "#0D133F",
        fontSize: 24,
        fontFamily: "GTWalsheimPro-Bold"
    },
    text:{
        width: "100%",
        color: "#0D133F99",
        textAlign: "center",
        letterSpacing: 1.5
    }
})