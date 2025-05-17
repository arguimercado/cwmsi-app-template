import { toast } from "sonner";
import CWMSICollectionPanel, {
   CWMSIContent,
   CWMSIHeader,
} from "~/components/commons/containers/cwmsi-collection-panel";
import { Card } from "~/components/ui/card";
import RequestDialog from "./components/request-dialog";


const FormRequestPage = () => {

   const handleCreateRequest = () => {
      toast("Request created successfully!", {
         description: "Your request has been submitted and is being processed.",
      });
   }

   return (
      <CWMSICollectionPanel>
         <CWMSIHeader>
           <RequestDialog  />
         </CWMSIHeader>
         <CWMSIContent>
            <Card className="min-h-[480px]"></Card>
         </CWMSIContent>
      </CWMSICollectionPanel>
   );
};

export default FormRequestPage;
