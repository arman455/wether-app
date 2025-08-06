import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "../../../../shared/ui/back/back";
import SunnyIcon from "../../../../shared/ui/icons/sunny-plus-windy-icon";
import { styles } from "./choosePage.style";
import { View, Text, Alert } from "react-native";
import { Button } from "../../../../shared/ui/button/button";
import SelectDropdown from "react-native-select-dropdown";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { CustomDropdown } from "../../../../shared/ui/selector/selector";
import { useGetCountry } from "../../hooks/useGetCountry";
import { useGetCitiesByCountry } from "../../hooks/useGetCities";

export function ChoosePage() {
    const [selectedCity, setSelectedCity] = useState<string | null>(null);
    const [selectedCountry, setSelectedContry] = useState<string | null>(null);
    const [choose, setChoose] = useState()
    const { cities } = useGetCitiesByCountry(selectedCountry);
    const { countryNames } = useGetCountry()
    const router = useRouter();

    function onPress() {

        if (!selectedCountry) {
            Alert.alert("Помилка", "Будь ласка, оберіть країну перед продовженням.");
            return;
        }

        if (!selectedCity) {
            Alert.alert("Помилка", "Будь ласка, оберіть місто перед продовженням.");
            return;
        }

        router.push({
            pathname: "/city",
            params: { selectedCity: selectedCity, selectedContry: selectedCountry },
        });
    }

    return (
        <SafeAreaView style={styles.main} edges={['top']}>
            <Back />
            <View style={styles.container}>
                <SunnyIcon width={200} height={200} />
                <View style={styles.mainDiv}>
                    <View style={{ gap: 24, alignItems: "center", justifyContent: "center" }}>
                        <Text style={styles.header}>Обери своє місто</Text>
                        <View style={{ gap: 16 }}>
                            <CustomDropdown
                                data={countryNames}
                                onSelect={(item) => setSelectedContry(item)}
                                placeholder="Введіть назву країни"
                            />
                            <CustomDropdown
                                data={cities}
                                onSelect={(item) => setSelectedCity(item)}
                                placeholder="Введіть назву міста"
                            />
                        </View>
                    </View>
                    <Button name="Продовжити" onPress={onPress} />
                </View>
            </View>
        </SafeAreaView>
    );
}
