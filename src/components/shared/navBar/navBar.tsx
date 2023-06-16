import { component$ } from "@builder.io/qwik";

export interface NavBarProps {
  routes: {
    title: string;
    link: string;
  }[];
}

export const NavBar = component$<NavBarProps>((props) => {
  return (
    <ul>
      {props.routes.map((route) => {
        return (
          <li key={route.link}>
            <a href={route.link}>{route.title}</a>
          </li>
        );
      })}
    </ul>
  );
});
