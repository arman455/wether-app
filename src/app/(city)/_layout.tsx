import { Stack } from "expo-router";
import { View } from "react-native";

export default function CityLayout() {
    return (
        <View style={{ flex: 1 }}>
            {/* <LinearGradient
                colors={['#FFFFFF', '#B0C4DE']}
                style={StyleSheet.absoluteFill}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
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
