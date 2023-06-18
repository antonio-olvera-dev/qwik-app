import {
  $,
  type QwikChangeEvent,
  component$,
  useContext,
} from "@builder.io/qwik";
import { ThemeContext, type ThemeContextI } from "~/contexts/ThemeContext";

export interface ChangeThemeProps {
  text?: string;
}

export const ChangeTheme = component$<ChangeThemeProps>(({ text }) => {
  const theme: ThemeContextI = useContext(ThemeContext);

  const changeTheme = $((ev: QwikChangeEvent<HTMLInputElement>) => {
    const color: string = ev.target.value;
    theme.color = color;
    document.documentElement.style.setProperty("--qwik-dark-background", color);
  });

  return (
    <div class="changeTheme">
      <div class="flex items-center">
        {text ? (
          <label for="colorPicker" class="mr-2">
            {text}
          </label>
        ) : (
          <></>
        )}
        <input
          value={theme.color}
          type="color"
          id="colorPicker"
          class="h-8 w-8"
          onChange$={changeTheme}
        />
      </div>
    </div>
  );
});
