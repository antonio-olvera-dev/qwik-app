import { component$, useStore } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.module.css";
import { NavBar } from "../navBar/navBar";

export default component$(() => {
  const routes = useStore([
    {
      title: "home",
      link: "/",
    },
    {
      title: "counter",
      link: "/examples/counter",
    },
  ]);
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </a>
        </div>
        <NavBar routes={routes}></NavBar>
      </div>
    </header>
  );
});
