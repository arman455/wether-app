import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextInput, Keyboard } from 'react-native';
import { DropdownProps } from '../../types/selector';
import SearchIcon from '../icons/search';
import ClearIcon from '../icons/clear';
import { LinearGradient } from 'expo-linear-gradient';

export function CustomDropdown(props: DropdownProps) {
    const { data, placeholder, onSelect } = props;
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const filteredData = data.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    function handleSelect(item: string) {
        setSelectedItem(item);
        setSearchQuery(item);
        onSelect(item);
        Keyboard.dismiss();
        setIsFocused(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <SearchIcon width={18} height={18} />
                <TextInput
                    style={styles.searchInput}
                    placeholder={placeholder}
                    placeholderTextColor="#FFFFFFCC"
                    value={searchQuery}
                    onChangeText={(text) => {
                        setSearchQuery(text);
                        setIsFocused(true);
                    }}
                    onFocus={() => setIsFocused(true)}
                />
                {searchQuery.length > 0 && (
                    <TouchableOpacity onPress={() => {
                        setSearchQuery('');
                        setIsFocused(true);
                    }}>
                        <ClearIcon width={18} height={18} />
                    </TouchableOpacity>
                )}
            </View>

            {isFocused && filteredData.length > 0 && (
                <LinearGradient
                    colors={['#00000033', '#c0bebe88']}
                    style={styles.dropdown}
                >
                    <Text style={styles.searchResultText}>Результати пошуку</Text>
                    <FlatList
                        data={filteredData}
                        keyExtractor={(item) => item}
                        keyboardShouldPersistTaps="handled"
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
                                <Text style={styles.text}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </LinearGradient>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
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
    dropdown: {
        marginTop: 8,
        backgroundColor: '#00000033',
        borderRadius: 8,
        shadowColor: '#00000033',
        shadowRadius: 4,
        maxHeight: 232,
        padding: 8
    },
    searchResultText: {
        color: 'white',
        fontSize: 14,
        marginBottom: 8,
    },
    item: {
        paddingVertical: 8,
    },
    text: {
        color: "white"
    }
});
