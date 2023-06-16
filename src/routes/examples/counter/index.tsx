import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <div>Counter</div>
});

export const head: DocumentHead = {
  title: 'Counter',
  meta: [
    {
      name: 'description',
      content: 'counter description',
    },
  ],
};
