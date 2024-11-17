import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./NotFound.jsx";
import RootLayout from "./layouts/root.layout.jsx";
import MainLayout from "./layouts/main.layout.jsx";
import HomePage from "./pages/home.page.jsx";
import TeacherLayout from "./layouts/teaher.layout.jsx";
import EnrollCourse from "./components/course/EnrollCourse.jsx";
import CreateCourse from "./components/course/CreateCourse.jsx";
import EditCourse from "./components/course/EditCourse.jsx";
import UserRegister from "./components/auth/UserRegister.jsx";
import UserLogin from "./components/auth/UserLogin.jsx";
import ViewCourseList from "./components/course/ViewCourseList.jsx";
import StudentLayout from "./layouts/student.layout.jsx";
import ViewCourse from "./components/course/ViewCourse.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/api/v1/courses",
            element: <ViewCourseList />,
          },
          {
            path: "/api/v1/courses/:courseId",
            element: <ViewCourse />,
          },
          { path: "courses/:courseId/enroll", element: <EnrollCourse /> },
        ],
      },
      {
        path: "/api/v1/user/teacher",
        element: <TeacherLayout />,
        children: [
          { path: "courses", element: <ViewCourseList /> },
          { path: "courses/create", element: <CreateCourse /> },
          { path: "courses/:courseId/edit", element: <EditCourse /> },
        ],
      },
      {
        path: "/api/v1/user/student",
        element: <StudentLayout />,
        children: [{ path: "courses", element: <ViewCourseList /> }],
      },
      { path: "/api/v1/register", element: <UserRegister /> },
      { path: "/api/v1/login", element: <UserLogin /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
