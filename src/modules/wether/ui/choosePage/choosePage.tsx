import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "../../../../shared/ui/back/back";
import SunnyIcon from "../../../../shared/ui/icons/sunny-plus-windy-icon";
import { styles } from "./choosePage.style";
import { View, Text, Alert } from "react-native";
import { Button } from "../../../../shared/ui/button/button";
import { useState, useRef, useCallback } from "react";
import { useRouter } from "expo-router";
import { CustomDropdown } from "../../../../shared/ui/selector/selector";
import { useGetCountries } from "../../hooks/useGetCountry";
import { useGetCities } from "../../hooks/useGetCities";
import { ICity, ICountry } from "../../types/type";
import { DropdownRef } from "../../../../shared/types/selector";

export function ChoosePage() {
    const [selectedCity, setSelectedCity] = useState<ICity | null>(null);
    const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
    const { countries, isLoading: isLoadingCountries } = useGetCountries();
    const { cities, isLoading: isLoadingCities } = useGetCities(selectedCountry?.iso2);
    const router = useRouter();
    
    const cityDropdownRef = useRef<DropdownRef>(null);
    const countryDropdownRef = useRef<DropdownRef>(null);

    const handleCountrySelect = useCallback((country: ICountry) => {
        setSelectedCountry(country);
        setSelectedCity(null);
        cityDropdownRef.current?.close();
    }, []);

    const handleCitySelect = useCallback((city: ICity) => {
        setSelectedCity(city);
    }, []);

    const handleContinue = useCallback(() => {
        if (!selectedCountry) {
            Alert.alert("Помилка", "Будь ласка, оберіть країну");
            return;
        }
        if (!selectedCity) {
            Alert.alert("Помилка", "Будь ласка, оберіть місто");
            return;
        }

        router.push({
            pathname: "/city",
            params: { 
                city: selectedCity.name, 
                country: selectedCountry.name 
            },
        });
    }, [selectedCountry, selectedCity, router]);

    return (
        <SafeAreaView style={styles.main} edges={['top']}>
            <Back />
            <View style={styles.container}>
                <SunnyIcon width={200} height={200} />
                <View style={styles.mainDiv}>
                    <View style={styles.contentWrapper}>
                        <Text style={styles.header}>Обери своє місто</Text>
                        
                        <View style={styles.dropdownsContainer}>
                            <CustomDropdown
                                ref={countryDropdownRef}
                                data={countries}
                                onSelect={handleCountrySelect}
                                placeholder="Оберіть країну"
                                disabled={false}
                            />
                            
                            <View style={styles.cityDropdownWrapper}>
                                {selectedCountry ? (
                                    <CustomDropdown
                                        ref={cityDropdownRef}
                                        data={cities}
                                        onSelect={handleCitySelect}
                                        placeholder="Оберіть місто"
                                        disabled={!selectedCountry}
                                    />
                                ) : (
                                    <View style={styles.disabledDropdown}>
                                        <Text style={styles.disabledText}>
                                            Спочатку оберіть країну
                                        </Text>
                                    </View>
                                )}
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