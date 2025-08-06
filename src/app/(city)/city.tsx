import { View, StyleSheet } from "react-native";
import Providers from "../providers";
import { LinearGradient } from "expo-linear-gradient";
import { ChoosePage } from "../../modules/wether/ui/choosePage/choosePage"

export default function CityScreen() {
    return (
        <Providers>
            <View style={{ flexGrow: 1 }}>
                <ChoosePage></ChoosePage>
            </View>
        </Providers>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
    }
})