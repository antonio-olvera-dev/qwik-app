import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./user.css?inline";
import { type DocumentHead, Link, routeLoader$ } from "@builder.io/qwik-city";

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
    <div class="user">
      <span class="ml-6">User {userId()}</span>
      <br />
      <Link
        class="ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        href="/examples/users/"
      >
        Return
      </Link>
    </div>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const id = resolveValue(userId);
  return {
    title: `User ${id}`,
    meta: [
      {
        name: "description",
        content: "User description",
      },
    ],
  };
};
