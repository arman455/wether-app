import { useState, useEffect } from "react";
import { ICountry } from "../types/type";
import countriesUkr from "../../../../assets/countries-ukr.json";
import { API_KEY } from "../../../settings/settings";

export function useGetCountries() {
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchCountries() {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch("https://api.countrystatecity.in/v1/countries", {
                    headers: {
                        "X-CSCAPI-KEY": API_KEY,
                    },
                });

                console.log(response)

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const apiCountries: Array<{ name: string; iso2: string }> = await response.json();

                const formattedCountries: ICountry[] = apiCountries.map((country, idx) => {
                    const ukrCountry = countriesUkr.find(c => c.code === country.iso2);

                    return {
                        id: idx,
                        name: country.name, 
                        iso2: country.iso2,   
                        uk: ukrCountry ? ukrCountry.name : country.name
                    };
                });

                formattedCountries.sort((a, b) => a.uk.localeCompare(b.uk, "uk"));
                setCountries(formattedCountries);

            } catch (err) {
                const msg = err instanceof Error ? err.message : "Помилка завантаження країн";
                console.error("Error fetching countries:", msg);
                setError(msg);
            } finally {
                setIsLoading(false);
            }
        }

        fetchCountries();
    }, []);

    return { countries, isLoading, error };
}