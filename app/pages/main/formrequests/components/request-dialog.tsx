import React from 'react'
import CWMSIButton from '~/components/commons/cwmsi-button'
import CWMSIDialog from '~/components/commons/cwmsi-dialog'

const RequestDialog = () => {
  return (
   <CWMSIDialog
   triggerButton={
      <CWMSIButton
      typeVariant="create"
      variantLabel="Request Form"
   ></CWMSIButton>
   }
>
   <div>
      Hello
   </div>
</CWMSIDialog>
  )
}

export default RequestDialog