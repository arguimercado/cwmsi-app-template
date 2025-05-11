import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {

	return (
		<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-login-background">
			<div className="w-full max-w-[480px]">
				<Outlet />
			</div>
		</div>
	)
}

export default AuthLayout   