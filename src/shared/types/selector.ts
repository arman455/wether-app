
export interface DropdownProps {
    data: { name: string;[key: string]: any }[];
    placeholder: string;
    disabled: boolean;
    onSelect: (item: any) => void;
}

export interface DropdownItem {
    name: string;
    originalName?: string;
    [key: string]: any;
}

export type DropdownRef = {
    close: () => void;
};