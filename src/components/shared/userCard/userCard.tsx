import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { UserRandomI } from "~/composables/interfaces/UserRandomI";
import styles from "./userCard.css?inline";

export const UserCard = component$<{ user: { data: UserRandomI | undefined } }>(
  ({ user }) => {
    useStylesScoped$(styles);
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
