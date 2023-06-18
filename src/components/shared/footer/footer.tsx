import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";
import { ChangeTheme } from "../ChangeTheme/changeTheme";

export default component$(() => {
  return (
    <footer>
      <div class={['container', styles.df]}>
        <span class={styles.span}>Made by Antonio Olvera</span>
        <ChangeTheme text="Change background"/>
      </div>
    </footer>
  );
});
