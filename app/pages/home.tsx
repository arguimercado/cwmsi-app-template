import { LoginForm } from "~/components/login-form";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Themes" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
  <>
    <div className="flex flex-row items-center justify-center h-screen w-full">
      <LoginForm />
    </div>
  </>
  );
}
