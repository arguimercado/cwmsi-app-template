import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

interface IDialogProps extends React.ComponentProps<typeof Dialog> { 
   triggerButton?: React.ReactNode;
   contentClassName?: string;
   children?: React.ReactNode;
   dialogTitle?: string;
}


const CWMSIDialog = ({triggerButton,contentClassName,children,dialogTitle, ...props} : IDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogTrigger asChild>
        {triggerButton}
      </DialogTrigger>
      <DialogContent className={contentClassName}>
      <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
         {children}
      </DialogContent>
    </Dialog>
  )
}

export default CWMSIDialog