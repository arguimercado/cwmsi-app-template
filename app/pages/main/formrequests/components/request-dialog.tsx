import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CWMSIButton from "~/components/commons/cwmsi-button";
import CWMSIDialog from "~/components/commons/cwmsi-dialog";
import CWMSInputField from "~/components/commons/inputs/cwms-input-field";
import CWMSSelectField from "~/components/commons/inputs/cwmsi-select";
import CWMSTextAreaField from "~/components/commons/inputs/cwmsi-textarea-field";
import { Form } from "~/components/ui/form";
import type { SelectOption } from "~/lib/types/data-control";

const requestShchema = z.object({
   title: z.string().min(1, { message: "Title is required" }),
   type: z.string().min(1, { message: "Type is required" }),
   description: z.string().min(1, { message: "Description is required" }),
});

type RequestSchema = z.infer<typeof requestShchema>;


const RequestDialog = () => {

   const form = useForm<RequestSchema>({
      resolver: zodResolver(requestShchema),
      defaultValues: {
         title: "",
         type: "",
         description: "",
      },
   });

   const typeData : SelectOption[] = [
      {
         label: "Payment Request",
         value: "paymentRequest",
      },
      {
         label: "Reimbursement Request",
         value: "reimbursmentRequest",
      },
   ]
   

   const handleSubmit = async (data: RequestSchema) => {
      console.log(data);
   }

   return (
      <CWMSIDialog
         triggerButton={
            <CWMSIButton
               typeVariant="create"
               variantLabel="Request Form"
            ></CWMSIButton>
         }
      >
         <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 flex-col flex">
            <CWMSSelectField 
                     control={form.control}
                     name="type"
                     label="Type"
                     options={typeData}
                     className="w-full"
                     placeholder="Enter the type of the request"
                  />
                  <CWMSInputField
                     control={form.control}
                     name="title"
                     label="Title"
                     className="w-full"
                     placeholder="Enter the title of the request"
                  />
                  <CWMSTextAreaField
                     control={form.control}
                     name="description"
                     label="Description"
                     className="w-full"
                     
                  />
            </form>
         </Form>
      </CWMSIDialog>
   );
};

export default RequestDialog;
