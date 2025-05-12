import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

interface IDialogProps extends React.ComponentProps<typeof Dialog> { 
   triggerButton?: React.ReactNode;
   contentClassName?: string;
   children?: React.ReactNode;
}


const CWMSIDialog = ({triggerButton,contentClassName,children, ...props} : IDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogTrigger asChild>
        {triggerButton}
      </DialogTrigger>
      <DialogContent className={contentClassName}>
      <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
         {children}
      </DialogContent>
    </Dialog>
  )
}

export default CWMSIDialog