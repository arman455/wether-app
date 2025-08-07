
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "flex-start"
    },
    mainDiv: {
        width: 335,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 44,
    },
    header: {
        color: "#0D133F",
        fontSize: 24,
        fontFamily: "GTWalsheimPro-Bold"
    },
    text: {
        width: "100%",
        color: "#0D133F99",
        textAlign: "center",
        letterSpacing: 1.5
    },
    searchContainer: {
        width: 336,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#00000033',
        borderRadius: 8,
        gap: 5,
        paddingHorizontal: 10
    },
    searchInput: {
        flex: 1,
        color: 'white',
        fontSize: 17,
    },
    contentWrapper: {
        gap: 24,
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
    },
    dropdownsContainer: {
        gap: 16,
        width: '100%',
    },
    cityDropdownWrapper: {
        minHeight: 60, // Щоб не "стрибав" layout при завантаженні
    },
    disabledDropdown: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#00000033',
        borderRadius: 8,
        opacity: 0.5,
    },
    disabledText: {
        color: '#FFFFFFCC',
        fontSize: 17,
    },
})