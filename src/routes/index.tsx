import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
    <h1>Hi, developer</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to qwik-app',
  meta: [
    {
      name: 'description',
      content: 'qwik-app site description',
    },
  ],
};
