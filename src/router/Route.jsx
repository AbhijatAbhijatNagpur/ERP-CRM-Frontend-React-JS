// src/AppRouter.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import company-specific route configurations
import unisolRoutes from "../router/unisolRoutes";
import surgisolRoutes from "../router/surgisolRoutes";
import igniteSphereRoutes from "../router/igniteSphereRoutes";
import NotFoundPage from "../components/NotFoundPage";
import enviroSolutionsRoutes from "./EnviroSolutionsRoutes";

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Default Route - Unisol Dashboard */}
        <Route path="/" element={unisolRoutes[0].element}>
          {unisolRoutes[0].children &&
            unisolRoutes[0].children.map((child, idx) => (
              <Route
                key={idx}
                path={child.path}
                element={child.element}
                index={child.index}
              />
            ))}
        </Route>

        {/* Unisol Routes */}
        {unisolRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((child, idx) => (
                <Route
                  key={idx}
                  path={child.path}
                  element={child.element}
                  index={child.index}
                />
              ))}
          </Route>
        ))}

        {/* Surgisol Routes */}
        {surgisolRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((child, idx) => (
                <Route
                  key={idx}
                  path={child.path}
                  element={child.element}
                  index={child.index}
                />
              ))}
          </Route>
        ))}

        {/* Enviro Solutions Routes */}
        {enviroSolutionsRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((child, idx) => (
                <Route
                  key={idx}
                  path={child.path}
                  element={child.element}
                  index={child.index}
                />
              ))}
          </Route>
        ))}

        {/* Ignite Sphere Routes */}
        {igniteSphereRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((child, idx) => (
                <Route
                  key={idx}
                  path={child.path}
                  element={child.element}
                  index={child.index}
                />
              ))}
          </Route>
        ))}

        {/* Fallback Route for 404 Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
