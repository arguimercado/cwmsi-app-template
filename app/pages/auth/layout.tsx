import React from 'react'
import { Outlet } from 'react-router'
import { Toaster } from '~/components/ui/sonner'


const AuthLayout = () => {

	return (
		<div className="flex min-h-svh items-center justify-center p-6 md:p-10 bg-login-background">
			<div className="w-[480px]">
				<Outlet />
				<Toaster />
			</div>
		</div>
	)
}

export default AuthLayout   