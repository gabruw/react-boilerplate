import { lazy, ReactElement } from "react";
import { Route } from "react-router-dom";

import { ErrorRoutePaths } from "@app/pages/error/routes/paths";

const NotFound = lazy(() =>
    import("@app/pages/error/not-found").then(({ NotFound }) => ({
        default: NotFound,
    }))
);

const errorRoutes: ReactElement = (
    <>
        <Route path={ErrorRoutePaths.NOT_FOUND} element={<NotFound />} />
    </>
);

export { errorRoutes };
