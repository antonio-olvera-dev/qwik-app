import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./random_user.css?inline";
import { PrimaryButton } from "~/components/shared/primaryButton/primaryButton";
import { useChangeUserRandom } from "~/composables/useChangeUserRandom";
import { UserCard } from "~/components/shared/userCard/userCard";

export default component$(() => {
  useStylesScoped$(styles);
  const { user, changeUserRandom } = useChangeUserRandom();
  (async () => await changeUserRandom())();
  return (
    <div class="user_random">
      <PrimaryButton text="change user" onClick={changeUserRandom} />
      <UserCard user={user} />
    </div>
  );
});
