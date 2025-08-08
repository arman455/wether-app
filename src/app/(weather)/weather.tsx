import { View, StyleSheet } from "react-native";
import Providers from "../providers";
import { WeatherPage } from "../../modules/wether/ui/weatherPage/weatherPage";

export default function WeatherScreen() {
    return (
        <Providers>
            <View style={{ flexGrow: 1 }}>
                <WeatherPage />
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