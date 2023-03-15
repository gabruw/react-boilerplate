import { ReactElement } from "react";
import { Route } from "react-router-dom";

import { Home } from "@app/pages/home";
import { HomeRoutePaths } from "@app/pages/home/routes/paths";

const homeRoutes: ReactElement = (
    <>
        <Route path={HomeRoutePaths.HOME} element={<Home />} />
        <Route path={HomeRoutePaths.DEFAULT} element={<Home />} />
    </>
);

export { homeRoutes };
