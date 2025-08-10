import { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "../../../../shared/ui/back/back";
import SunnyIcon from "../../../../shared/ui/icons/sunny-plus-windy-icon";
import CloudyWithMoonIcon from "../../../../shared/ui/icons/cloudy-with-moon-icon";
import { styles } from "./choosePage.style";
import { View, Text, Alert, ActivityIndicator } from "react-native";
import { Button } from "../../../../shared/ui/button/button";
import { useRouter } from "expo-router";
import { CustomDropdown } from "../../../../shared/ui/selector/selector";
import { useGetCountries } from "../../hooks/useGetCountry";
import { useGetCities } from "../../hooks/useGetCities";
import { ICity, ICountry } from "../../types/type";
import { DropdownItem, DropdownRef } from "../../../../shared/types/selector";

export function ChoosePage() {
    const [selectedCity, setSelectedCity] = useState<ICity | null>(null);
    const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
    const [isMoon, setIsMoon] = useState(false);

    const { countries, isLoading: isLoadingCountries } = useGetCountries();
    const { cities, isLoading: isLoadingCities } = useGetCities(selectedCountry?.iso2);
    const router = useRouter();
    const cityDropdownRef = useRef<DropdownRef>(null);

    function handleCountryFocus() {
        setSelectedCountry(null);
    }

    function handleCountrySelect(item: DropdownItem | null) {
        if (item === null) {
            setSelectedCountry(null);
            setSelectedCity(null);
            setIsMoon(!isMoon);
            cityDropdownRef.current?.close();
            return;
        }

        const country: ICountry = {
            id: 0,
            name: item.name,
            uk: item.uk || item.name,
            iso2: item.iso2 || "",
        };

        if (selectedCountry?.iso2 !== country.iso2) {
            setSelectedCountry(country);
            setSelectedCity(null);
            setIsMoon(false);
            cityDropdownRef.current?.close();
        }

        setIsMoon(!isMoon);
    }

    function handleCitySelect(item: DropdownItem | null) {
        if (item === null) {
            setSelectedCity(null);
            setIsMoon(!isMoon);
            return;
        }

        const city: ICity = {
            name: item.name,
            id: 0
        };

        setSelectedCity(city);
        setIsMoon(!isMoon);
    }

    function handleContinue() {
        if (!selectedCountry) {
            Alert.alert("Помилка", "Будь ласка, оберіть країну");
            return;
        }
        if (!selectedCity) {
            Alert.alert("Помилка", "Будь ласка, оберіть місто");
            return;
        }

        router.push({
            pathname: "/weather",
            params: {
                city: selectedCity.name,
                country: selectedCountry.name,
            },
        });
    }

    return (
        <SafeAreaView style={styles.main} edges={['top']}>
            <Back />
            <View style={styles.container}>
                {isMoon ? (
                    <CloudyWithMoonIcon width={200} height={200} />
                ) : (
                    <SunnyIcon width={200} height={200} />
                )}

                <View style={styles.mainDiv}>
                    <View style={styles.contentWrapper}>
                        <Text style={styles.header}>Обери своє місто</Text>

                        <View style={styles.dropdownsContainer}>
                            {isLoadingCountries ? (
                                <ActivityIndicator size="large" color="#fff" />
                            ) : (
                                <CustomDropdown
                                    data={countries}
                                    onSelect={handleCountrySelect}
                                    onFocus={handleCountryFocus}
                                    placeholder="Оберіть країну"
                                    disabled={false}
                                    maxHeight={175}
                                />
                            )}

                            <View>
                                {selectedCountry ? (
                                    isLoadingCities ? (
                                        <ActivityIndicator size="large" color="#fff" />
                                    ) : (
                                        <CustomDropdown
                                            ref={cityDropdownRef}
                                            data={cities}
                                            onSelect={handleCitySelect}
                                            placeholder="Оберіть місто"
                                            disabled={!selectedCountry}
                                            maxHeight={250}
                                        />
                                    )
                                ) : null}
                            </View>
                        </View>
                    </View>

                    <Button
                        name="Продовжити"
                        onPress={handleContinue}
                        disabled={!selectedCity || !selectedCountry}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
