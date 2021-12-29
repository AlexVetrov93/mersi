export interface Choice {
    id?: number;
    customProperties?: Record<string, any>;
    disabled?: boolean;
    active?: boolean;
    elementId?: number;
    groupId?: number;
    keyCode?: number;
    label: string;
    placeholder?: boolean;
    selected?: boolean;
    value: string;
    score?: number;
    choices?: Choice[];
}
//# sourceMappingURL=choice.d.ts.map