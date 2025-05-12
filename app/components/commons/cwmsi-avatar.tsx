import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

const CWMSIAvatar = () => {
   return (
      <Avatar>
         <AvatarImage
           src="https://github.com/shadcn.png" 
            alt="cwmsi"
         />
         <AvatarFallback>UI</AvatarFallback>
      </Avatar>
   );
};

export default CWMSIAvatar;
