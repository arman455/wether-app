import { useState, useEffect } from "react";
import countries from "../../../../assets/countries-ukr.json";

export function useGetCitiesByCountry(selectedCountryUkr: string | null) {
    const [cities, setCities] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchCities() {
            if (!selectedCountryUkr) {
                setCities([]);
                return;
            }

            const countryObj = countries.find(c => c.name === selectedCountryUkr);
            if (!countryObj) {
                setError("Країна не знайдена");
                setCities([]);
                return;
            }

            setIsLoading(true);
            setError(null);

            try {
                const resp = await fetch(
                    `https://countriesnow.space/api/v0.1/countries/cities?iso2=${countryObj.code}`
                );
                const json = await resp.json();
                if (!json.data || !Array.isArray(json.data)) {
                    throw new Error(json.msg || "Invalid response");
                }
                setCities(json.data.sort((a: string, b: string) => a.localeCompare(b)));
            } catch (err) {
                const msg = err instanceof Error ? err.message : JSON.stringify(err);
                setError(msg);
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchCities();
    }, [selectedCountryUkr]);

    return { cities, isLoading, error };
}
