import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./random_user.css?inline";
import { PrimaryButton } from "~/components/shared/primaryButton/primaryButton";
import { useChangeUserRandom } from "~/composables/useChangeUserRandom";

export default component$(() => {
  useStylesScoped$(styles);
  const { user, changeUserRandom } = useChangeUserRandom();
  return (
    <div class="user_random">
      <PrimaryButton text="change user" onClick={changeUserRandom} />
      Name: {user.data?.results[0].name.first}
    </div>
  );
});
