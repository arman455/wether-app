import { ScrollView } from "react-native";
import { Back } from "../../../../shared/ui/back/back";
import { styles } from "./weatherPage.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainPoster } from "../../../../shared/ui/mainPoster/mainPoster";
import { WeatherForDay } from "../../../../shared/ui/wetherForDay/weatherForDay";
import { WeatherForWeek } from "../../../../shared/ui/weatherForWeek/weatherForWeek";

export function WeatherPage() {
    return (
        <SafeAreaView style={styles.main} edges={['top']}>
            <Back />
            <ScrollView contentContainerStyle={styles.container}>
                <MainPoster />
                <WeatherForDay/>
                <WeatherForWeek/>
            </ScrollView>
        </SafeAreaView>
    )
}