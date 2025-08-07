import { useEffect, useState } from 'react';
import { DropdownItem } from '../../../shared/types/selector';
import { GEONAMES_USERNAME } from '../../../settings/settings';

export function useGetCities(countryCode: string | undefined) {
    const [cities, setCities] = useState<DropdownItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!countryCode) {
            setCities([]);
            return;
        }

        if (!GEONAMES_USERNAME) {
            setError('Будь ласка, вкажіть вірний GeoNames username у файлі хука');
            return;
        }

        async function fetchCities() {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `https://secure.geonames.org/searchJSON?country=${countryCode}&featureClass=P&maxRows=500&username=${GEONAMES_USERNAME}&lang=uk`
                );

                const data = await response.json();

                if (data.status?.value === 10) {
                    throw new Error(`GeoNames: Невірний username. Перевірте ${GEONAMES_USERNAME}`);
                }

                if (!data.geonames) {
                    throw new Error('Не вдалося отримати міста');
                }

                const cityItems: DropdownItem[] = data.geonames.map((city: any) => ({
                    name: city.name,
                }));

                setCities(cityItems.sort((a, b) => 
                    a.name.localeCompare(b.name, 'uk')
                ));

            } catch (err) {
                const msg = err instanceof Error ? err.message : 'Помилка отримання даних';
                setError(msg);
                console.error('Помилка GeoNames:', {
                    message: msg,
                    usernameUsed: GEONAMES_USERNAME,
                    countryCode
                });
            } finally {
                setIsLoading(false);
            }
        }

        fetchCities();
    }, [countryCode]);

    return { cities, isLoading, error };
}