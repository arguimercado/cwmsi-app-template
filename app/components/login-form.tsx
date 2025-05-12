import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import CWMSIButton from "./commons/cwmsi-button";
import { useForm } from "react-hook-form";
import { authSchema, type AuthSchema } from "~/lib/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import CWMSInputField from "./commons/inputs/cwms-input-field";
import { KeyIcon, User2Icon } from "lucide-react";

interface ILoginFormProps {
   className?: string;
	defaultValues?: AuthSchema;
	cardTitle: React.ReactNode;
	cardDescription?: React.ReactNode;
	onSubmit: (data: AuthSchema) => void;
}

const LoginForm = ({ 
	className,
	defaultValues,
	cardTitle,
	cardDescription, 
	onSubmit,
	}: ILoginFormProps) => {

	const form = useForm<AuthSchema>({
		resolver: zodResolver(authSchema),
		defaultValues: defaultValues
	});


   return (
      <div className={cn("flex flex-col gap-6 w-full", className)}>
         <Card variant="lime-green">
            <CardHeader>
               <CardTitle className="text-center">
                  {cardTitle}
               </CardTitle>
               <CardDescription>
                  {cardDescription}
               </CardDescription>
            </CardHeader>
            <CardContent>
					<Form {...form}>
						<form 
							onSubmit={form.handleSubmit(onSubmit)} 
							className="grid gap-4">
							<div className="flex flex-col gap-6">
								<div className="grid gap-3">
									<CWMSInputField 
										variant="default"
										control={form.control}
										name="username"
										label="User Name"
										placeholder="Enter Portal Username"
										icon={<User2Icon className="text-neutral-600 size-5" />}
									/>
									
								</div>
								<div className="grid gap-3">
								<CWMSInputField 
										variant="default"
										control={form.control}
										name="password"
										type="password"
										label="User Name"
										placeholder="Enter Portal Password"
										icon={<KeyIcon className="text-neutral-600 size-5" />}
									/>
								</div>
								<div className="flex flex-col gap-3">
									<CWMSIButton
										variant="outline"
										isLoading={false}
										loadingText="Loading..."
										className="w-full"
									>
										<span>Login</span>
									</CWMSIButton>
								</div>
							</div>
						</form>
					</Form>
            </CardContent>
         </Card>
      </div>
   );
};

export default LoginForm;
