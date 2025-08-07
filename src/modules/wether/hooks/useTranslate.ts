import { useState } from "react";
import { apiTranslate } from "../../../settings/settings";

export function useTranslate() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function translateText(
        text: string,
        sourceLang = 'en',
        targetLang = 'uk'
    ): Promise<string> {
        setLoading(true);
        setError(null);

        if (!text.trim()) {
            setLoading(false);
            return text;
        }

        try {
            // Додаємо штучну затримку 1 секунда між запитами
            await new Promise(resolve => setTimeout(resolve, 1000));

            const response = await fetch(
                `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}&de=${encodeURIComponent(apiTranslate)}`
            );

            if (response.status === 429) {
                throw new Error("Ви перевищили ліміт запитів. Спробуйте пізніше.");
            }

            if (!response.ok) {
                throw new Error(`Помилка сервера: ${response.status}`);
            }

            const data = await response.json();

            // Повертаємо переклад або оригінальний текст, якщо переклад не знайдено
            return data.responseData?.translatedText ||
                data.matches?.[0]?.translation ||
                text;

        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Невідома помилка перекладу';
            setError(errorMessage);
            console.error("Помилка перекладу:", errorMessage);
            return text;
        } finally {
            setLoading(false);
        }
    }

    return { translateText, loading, error };
}