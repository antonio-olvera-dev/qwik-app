import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

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
            <Link href={route.link}>{route.title}</Link>
          </li>
        );
      })}
    </ul>
  );
});
