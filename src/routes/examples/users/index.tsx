import { $, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./users.css?inline";
import { PrimaryButton } from "~/components/shared/primaryButton/primaryButton";
import { type DocumentHead, useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  useStylesScoped$(styles);
  const nav = useNavigate();
  return (
    <div class="users">
      <h1>Users</h1>
      <br />
      <div class="containerButtons">
        {[1, 2, 3, 4].map((it) => {
          const navigateTo = $(async () => {
            await nav(`/examples/users/${it}`);
          });
          return (
            <>
              <PrimaryButton text={`user ${it}`} onClick={navigateTo} />
            </>
          );
        })}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "User",
  meta: [
    {
      name: "description",
      content: "User description",
    },
  ],
};
