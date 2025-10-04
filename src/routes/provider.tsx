import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; // <-- note: react-router-dom, not react-router
import { lazy } from "react";
import { LayoutContainer } from "../shared/layout/layout-container";
import { authRoutes } from "../features/auth/routes";
import { aboutRoutes } from "../features/about/routes";
import Contact from "../features/contact/pages";
import { contactRoutes } from "../features/contact/routes";
import { homeRoutes } from "../features/home/routes";

const NotFoundPage = lazy(() => import("../shared/pages/not-found-page"));

const routes = [
  {
    path: "/",
    element: (
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    ),

    children: [
      ...authRoutes,
      ...aboutRoutes,
      ...contactRoutes,
      ...homeRoutes,

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
