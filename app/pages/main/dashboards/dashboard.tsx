import { Button } from "~/components/ui/button";
import SignatureCanvas from "react-signature-canvas";
import React from "react";
import FlexLayout from "~/components/commons/containers/FlexLayout";
import DarkCard, { DarkContent } from "~/components/commons/containers/DarkCard";

export default function Page() {


   const signatureRef = React.useRef<SignatureCanvas>(null);

   const handleClear = () => {
      if (signatureRef.current) {
         signatureRef.current.clear();
      }
   }

   const handleSaveSignature = () => {
      if (signatureRef.current) {
         const dataUrl = signatureRef.current.getCanvas().toDataURL();
         console.log(dataUrl);
         // You can now send this dataUrl to your server or use it as needed
      }
   }

   return (


      <>
         <FlexLayout 
            orientation="horizontal" 
            className="w-full" 
            align="center" >
            
            <FlexLayout orientation="vertical" className="w-full" align="center" gap="gap-4">
               <div className="min-w-96 mx-auto h-50 border border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                  <SignatureCanvas
                     ref={signatureRef}
                     penColor="black" 
                     backgroundColor="white"
                     dotSize={0.5}
                     canvasProps={{className: 'sigCanvas', width: 500, height: 200}}
                     />
               </div>
               <FlexLayout 
                  direction="center" 
                  orientation="horizontal" 
                  className="w-full mt-4" align="center" gap="gap-4">
                  <Button
                     onClick={handleClear}
                     variant="outline"
                  >
                     Clear
                  </Button>
                  <Button onClick={handleSaveSignature} variant="outline">
                     Save
                  </Button>
               </FlexLayout>
            </FlexLayout>
            <FlexLayout orientation="vertical" className="w-full" align="center" gap="gap-4">
               <DarkCard className="w-full" variant="success">
                  <DarkContent>
                     <h1>Hello</h1>
                  </DarkContent>
               </DarkCard>
            </FlexLayout>
         </FlexLayout>
      </>
   );
}
