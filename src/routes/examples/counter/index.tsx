import { type Signal, component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PrimaryButton } from "~/components/shared/primaryButton/primaryButton";
import styles from "./counter.module.css";

export default component$(() => {
  const count: Signal<number> = useSignal(0);

  const decrease = $(() => {
    count.value--;
  });
  const increase = $(() => {
    count.value++;
  });

  return (
    <>
      <div class={styles.containerCount}>
        <div>Counter</div>
        <span>{count}</span>
        <div class={styles.containerButtons}>
          <PrimaryButton text="Decrease" onClick={decrease}></PrimaryButton>
          <PrimaryButton text="Increase" onClick={increase}></PrimaryButton>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Counter",
  meta: [
    {
      name: "description",
      content: "counter description",
    },
  ],
};
