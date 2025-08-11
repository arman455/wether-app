import { Stack } from "expo-router";
import { View } from "react-native";

export default function WeatherLayout() {
    return (
        <View style={{ flex: 1 }}>
            {/* <LinearGradient
                colors={['#C0C0C0', '#FFD27F']}
                style={StyleSheet.absoluteFill}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            /> */}
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: 'transparent',
                    },
                }}
            />
        </View>
    );
}
