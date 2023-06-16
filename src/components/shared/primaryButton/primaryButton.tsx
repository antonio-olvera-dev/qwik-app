import { type QRL, component$ } from "@builder.io/qwik";
import styles from "./primaryButton.module.css";
export interface PrimaryButtonProps {
  text: string;
  onClick: QRL<() => void>;
}

export const PrimaryButton = component$<PrimaryButtonProps>((props) => {
  return (
    <button class={styles.primaryButton} onClick$={() => props.onClick()}>
      {props.text}
    </button>
  );
});
