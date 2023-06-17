import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./user.css?inline";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  useStylesScoped$(styles);
  const location = useLocation();
  return (
    <>
      <h1>User {location.params.id}</h1>
      <br />
    </>
  );
});
