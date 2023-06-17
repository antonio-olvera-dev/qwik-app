import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./random_user.css?inline";
import { PrimaryButton } from "~/components/shared/primaryButton/primaryButton";
import { useChangeUserRandom } from "~/composables/useChangeUserRandom";
import { type UserRandomI } from "~/composables/interfaces/UserRandomI";

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

const UserCard = component$<{ user: { data: UserRandomI | undefined } }>(
  ({ user }) => {
    return (
      <div class="userCard">
        <img
          src={user.data?.results[0].picture.medium}
          alt="image"
          width={100}
          height={100}
        />
        {user.data?.results[0].name.first}
        UserCard
      </div>
    );
  }
);
