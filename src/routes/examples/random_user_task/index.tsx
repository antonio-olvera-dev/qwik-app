import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./random_user.css?inline";
import { PrimaryButton } from "~/components/shared/primaryButton/primaryButton";
import { useTaskChangeUserRandom } from "~/composables/useChangeUserRandom";
import { UserCard } from "~/components/shared/userCard/userCard";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  useStylesScoped$(styles);
  const { user, changeUserRandom } = useTaskChangeUserRandom();
  return (
    <div class="user_random">
      <PrimaryButton text="change user" onClick={changeUserRandom} />
      <UserCard user={user} />
    </div>
  );
});

export const head: DocumentHead = {
  title: "User random task",
  meta: [
    {
      name: "description",
      content: "User random task description",
    },
  ],
};