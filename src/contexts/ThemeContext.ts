import { createContextId, } from '@builder.io/qwik';

export interface ThemeContextI {
    color: string;
}
export const ThemeContext = createContextId<ThemeContextI>(
    'ThemeContext'
);

