import { toast } from "sonner"
import LoginForm  from "~/components/login-form"
import type { AuthSchema } from "~/lib/types/schema"

export default function LoginPage() {

  const handleSubmit = (data: AuthSchema) => {
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
    console.log("Login data", data)
  }
  return (
      <LoginForm 
        cardTitle={
          <h1 className="text-2xl font-bold text-center">Crossworld Marine Service</h1>
        }
        cardDescription={
          <p className="text-center">Electronic Form</p>
        }
        defaultValues={{

          username: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      />
  )
}
