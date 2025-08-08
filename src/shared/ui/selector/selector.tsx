import React, { forwardRef, useImperativeHandle, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    TextInput,
    Keyboard
} from 'react-native';
import { DropdownItem, DropdownProps, DropdownRef } from '../../types/selector';
import SearchIcon from '../icons/search';
import ClearIcon from '../icons/clear';
import { LinearGradient } from 'expo-linear-gradient';

export const CustomDropdown = forwardRef<DropdownRef, DropdownProps>((props, ref) => {
    const { data, placeholder, onSelect, disabled, maxHeight, onFocus } = props;
    const [searchQuery, setSearchQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    // Додаємо метод close для зовнішнього управління
    useImperativeHandle(ref, () => ({
        close: () => {
            setIsOpen(false);
            setSearchQuery('');
        }
    }));

    const filteredData = data.filter((item: DropdownItem) => {
        if (!item) {
            console.warn("Invalid data:", item);
            return false;
        }
        const displayName = item.uk || item.name;
        const searchLower = searchQuery.toLowerCase();
        return displayName.toLowerCase().includes(searchLower);
    });

    function handleSelect(item: DropdownItem) {
        const displayName = item.uk || item.name;
        setSearchQuery(displayName);
        onSelect(item);
        setIsOpen(false);
        Keyboard.dismiss();
    }

    function handleFocus() {
        if (!disabled) {
            setIsOpen(true);
            onFocus?.(); // Викликаємо onFocus, якщо він переданий
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={handleFocus}
                disabled={disabled}
            >
                <View style={[styles.searchContainer, disabled && { opacity: 0.5 }]}>
                    <SearchIcon width={18} height={18} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder={placeholder}
                        placeholderTextColor="#FFFFFFCC"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        onFocus={handleFocus}
                        editable={!disabled}
                        pointerEvents={disabled ? 'none' : 'auto'}
                    />
                    {searchQuery.length > 0 && !disabled && (
                        <TouchableOpacity onPress={() => {
                            setSearchQuery('');
                            onSelect(null);
                        }}>
                            <ClearIcon width={18} height={18} />
                        </TouchableOpacity>
                    )}
                </View>
            </TouchableOpacity>

            {isOpen && !disabled && (
                <LinearGradient
                    colors={['#00000033', '#00000033']}
                    style={[styles.dropdown, { maxHeight: maxHeight }]}
                >
                    {filteredData.length > 0 ? (
                        <>
                            <Text style={styles.searchResultText}>Результати пошуку</Text>
                            <FlatList
                                data={filteredData}
                                keyExtractor={(item, index) => item.name + index}
                                keyboardShouldPersistTaps="handled"
                                renderItem={({ item }) => {
                                    const displayName = item.uk || item.name;
                                    return (
                                        <TouchableOpacity
                                            style={styles.item}
                                            onPress={() => handleSelect(item)}
                                        >
                                            <Text style={styles.text}>{displayName}</Text>
                                        </TouchableOpacity>
                                    );
                                }}
                            />
                        </>
                    ) : (
                        <Text style={styles.noResultsText}>Нічого не знайдено</Text>
                    )}
                </LinearGradient>
            )}
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'relative',
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
        position: 'absolute',
        top: 48,
        left: 0,
        right: 0,
        backgroundColor: '#00000033',
        borderRadius: 8,
        shadowColor: '#00000033',
        shadowRadius: 4,
        maxHeight: 175,
        padding: 8,
        zIndex: 1000,
    },
    searchResultText: {
        color: 'white',
        fontSize: 14,
        marginBottom: 8,
    },
    noResultsText: {
        color: 'white',
        fontSize: 14,
        padding: 8,
        textAlign: 'center',
    },
    item: {
        paddingVertical: 8,
    },
    text: {
        color: "white"
    }
});