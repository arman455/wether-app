
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
        marginBottom: 30,
    },
    content: {
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 10,
        color: "white",
    },
    separator: {
        borderTopWidth: 1,
        borderColor: "#FFFFFF33",
        marginBottom: 8,
    },
    item: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 17,
    },
    day: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 500,
    },
    iconWrapper: {
        width: 30,
        alignItems: "center",
    },
    temp: {
        color: "#fff",
        width: 30,
        textAlign: "center",
    },
    gradient: {
        maxWidth: 60,
        height: 10,
        borderRadius: 60,
        flex: 1,
    },

})