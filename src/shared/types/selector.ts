export interface DropdownItem {
    name: string;
    uk?: string;
    iso2?: string;
}

export interface DropdownRef {
    close: () => void;
}

export interface DropdownProps {
    data: DropdownItem[];
    placeholder: string;
    onSelect: (item: DropdownItem | null) => void;
    disabled?: boolean;
    maxHeight?: number;
    onFocus?: () => void; // Додаємо onFocus
}