import React from 'react'
import { Button } from '../ui/button'

interface IButtonProps extends React.ComponentProps<"button"> {
	variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
	size?: "default" | "sm" | "lg" | "icon"
	asChild?: boolean
	isLoading?: boolean
}

const CWMSIButton = (props: IButtonProps) => {

	return (
		<Button {...props}>
			{props.isLoading ? () : ()
}
		</Button>
	)
}

export default CWMSIButton