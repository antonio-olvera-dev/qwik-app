import { type Signal, component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PrimaryButton } from "~/components/shared/primaryButton/primaryButton";

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
      <div>Counter</div>
      <span>{count}</span>
      <PrimaryButton text="Decrease" onClick={decrease}></PrimaryButton>
      <PrimaryButton text="Increase" onClick={increase}></PrimaryButton>
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
