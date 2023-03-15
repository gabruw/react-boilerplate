import { ReactElement } from "react";
import { Route } from "react-router-dom";

import { NotFound } from "@app/pages/error/not-found";
import { ErrorRoutePaths } from "@app/pages/error/routes/paths";

const errorRoutes: ReactElement = (
    <>
        <Route path={ErrorRoutePaths.NOT_FOUND} element={<NotFound />} />
    </>
);

export { errorRoutes };
