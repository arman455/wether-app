
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        width: 300,
        backgroundColor: "#00000033",
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: "center",
        gap: 10,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 10,
        color: "white",
    },
    item: {
        width: 51,
        height: 88,
        alignItems: "center",
        justifyContent: "space-around",
        // backgroundColor: "#FFFFFF33",
        // borderWidth: 1,
        // borderColor: "#FFFFFF33",
        // borderRadius: 90,
    },
    time: {
        fontSize: 14,
        fontWeight: "500",
        color: "white",
        textAlign: "center"
    },

})