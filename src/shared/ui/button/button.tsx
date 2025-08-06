import { TouchableOpacity, Text } from "react-native";
import * as Font from 'expo-font';
import { IButton } from "./button.types";
import { styles } from "./button.style"
import { useEffect, useState } from "react";

export function Button(props: IButton) {
    const { name, onPress } = props
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        Font.loadAsync({
            'GTWalsheimPro-Medium': require('../../../../assets/fonts/GTWalsheimPro-Medium.ttf'),
        }).then(() => setFontsLoaded(true));
    }, []);

    if (!fontsLoaded) return null;

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={[styles.text, {fontFamily: "GTWalsheimPro-Medium"}]}>{name}</Text>
        </TouchableOpacity>
    )
}

