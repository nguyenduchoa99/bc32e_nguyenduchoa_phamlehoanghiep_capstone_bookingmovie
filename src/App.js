import { Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";
import MainLayout from "components/MainLayout";
import AuthLayout from "components/AuthLayout";
import ScrollToTop from "components/Scroll/ScrollToTop";
import { Spin } from "antd";
import AdminLayout from "components/AdminLayout/AdminLayout";

import AddMovie from "modules/Admin/pages/AdminMovie/AddMovie";
import MovieList from "modules/Admin/pages/AdminMovie/MovieList";
import EditMovie from "modules/Admin/pages/AdminMovie/EditMovie";
import AddShowTimes from "modules/Admin/pages/AdminMovie/AddShowTimes";
import UserList from "modules/Admin/pages/AdminUser/UserList";
import AddUser from "modules/Admin/pages/AdminUser/AddUser";
import EditUser from "modules/Admin/pages/AdminUser/EditUser";

const Login = lazy(() => import("modules/Authentication/pages/Login"));
const Register = lazy(() => import("modules/Authentication/pages/Register"));
const User = lazy(() => import("modules/User/page/User"));
const ErrorPage = lazy(() => import("modules/Error/page/ErrorPage"));

function App() {
	return (
		<Suspense
			fallback={
				<div
					style={{
						width: "100%",
						height: "100vh",
						background: "#000",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Spin size="large" />
				</div>
			}
		>
			<ScrollToTop>
				<Routes>
					<Route path="/admin" element={<AdminLayout />}>
						<Route path="/admin/movieList" element={<MovieList />} />
						<Route path="/admin/addMovie" element={<AddMovie />} />
						<Route path="/admin/editMovie/:movieId" element={<EditMovie />} />

						<Route
							path="/admin/showtimes/:movieId"
							element={<AddShowTimes />}
						/>

						<Route path="/admin/userList" element={<UserList />} />
						<Route path="/admin/addUser" element={<AddUser />} />
						<Route path="/admin/editUser/:userId" element={<EditUser />} />
					</Route>

					<Route path="/" element={<MainLayout />}>
						<Route path="/user" element={<User />} />
					</Route>

					<Route path="/" element={<AuthLayout />}>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Route>

					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</ScrollToTop>
		</Suspense>
	);
}

export default App;
