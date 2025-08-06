import { TouchableOpacity, Text, View, TouchableOpacityProps } from "react-native";
import BackIcon from "../icons/back";
import { IButton } from "../button/button.types";
import { useRouter } from "expo-router";
import { styles } from "./back.style";


export function Back(props: TouchableOpacityProps) {
    const router = useRouter()

    function onPress() {
        router.back()
    }
    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <BackIcon width={20} height={20} />
                <Text style={styles.text}>Назад</Text>
            </TouchableOpacity>
        </View>
    )
}