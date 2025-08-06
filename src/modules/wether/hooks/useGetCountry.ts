import { useState, useEffect } from "react";
import countries from "../../../../assets/countries-ukr.json";

export function useGetCountry() {
    const [countryNames, setCountryNames] = useState<string[]>([]);

    useEffect(() => {
        const names = countries
            .map((item) => item.name)
            .sort((a, b) => a.localeCompare(b, "uk"));
        setCountryNames(names);
    }, []);

    return { countryNames };
}
