import { $, type QwikChangeEvent, component$ } from "@builder.io/qwik";

export interface ChangeThemeProps {
  text?: string;
}

export const ChangeTheme = component$<ChangeThemeProps>(({ text }) => {
  const changeTheme = $((ev: QwikChangeEvent<HTMLInputElement>) => {
    const color: string = ev.target.value;
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
          type="color"
          id="colorPicker"
          class="h-8 w-8"
          onChange$={changeTheme}
        />
      </div>
    </div>
  );
});
