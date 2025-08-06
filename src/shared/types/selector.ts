
export interface DropdownProps {
    data: string[];
    placeholder?: string;
    onSelect: (item: string) => void;
}