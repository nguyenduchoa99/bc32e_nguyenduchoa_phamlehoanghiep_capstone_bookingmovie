import React from "react";
import { Outlet } from "react-router-dom";

import "./authLayout.scss";

const AuthLayout = () => {
	return (
		<div className="auth">
			<div className="auth-overlay"></div>
			<div className="auth-form">
				<div className="auth-form-user">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default AuthLayout;
