import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./user.css?inline";
import { routeLoader$ } from "@builder.io/qwik-city";

export const userId = routeLoader$<number>(({ params, redirect }) => {
  const id = Number(params.id);
  if (isNaN(id) || id < 0 || id > 4) {
    redirect(301, "/");
  }
  return id;
});

export default component$(() => {
  useStylesScoped$(styles);
  // const location = useLocation();
  return (
    <>
      <h1>User {userId()}</h1>
      <br />
    </>
  );
});
