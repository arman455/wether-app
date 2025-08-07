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
    const { data, placeholder, onSelect, disabled } = props;
    const [searchQuery, setSearchQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const filteredData = data.filter((item: DropdownItem) => {
        if (!item) {
            console.warn("Invalid item in dropdown data:", item);
            return false;
        }
        const searchLower = searchQuery.toLowerCase();
        return (
            item.name.toLowerCase().includes(searchLower) ||
            (item.originalName && item.originalName.toLowerCase().includes(searchLower))
        );
    });

    useImperativeHandle(ref, () => ({
        close: () => {
            setIsOpen(false);
            Keyboard.dismiss();
        }
    }));

    const handleSelect = (item: DropdownItem) => {
        setSearchQuery(item.name);
        onSelect(item);
        setIsOpen(false);
        Keyboard.dismiss();
    };

    const handleFocus = () => {
        if (!disabled) {
            setIsOpen(true);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                activeOpacity={1}
                onPress={handleFocus}
                disabled={disabled}
            >
                <View style={[styles.searchContainer, disabled && styles.disabled]}>
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
                        <TouchableOpacity onPress={() => setSearchQuery('')}>
                            <ClearIcon width={18} height={18} />
                        </TouchableOpacity>
                    )}
                </View>
            </TouchableOpacity>

            {isOpen && (
                <LinearGradient
                    colors={['#00000033', '#00000033']}
                    style={styles.dropdown}
                >
                    {filteredData.length > 0 ? (
                        <>
                            <Text style={styles.searchResultText}>Результати пошуку</Text>
                            <FlatList
                                data={filteredData}
                                keyExtractor={(item, index) => item.name + index}
                                keyboardShouldPersistTaps="handled"
                                renderItem={({ item }) => (
                                    <TouchableOpacity 
                                        style={styles.item} 
                                        onPress={() => handleSelect(item)}
                                    >
                                        <Text style={styles.text}>{item.name}</Text>
                                    </TouchableOpacity>
                                )}
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
    disabled: {
        opacity: 0.5,
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
        maxHeight: 232,
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