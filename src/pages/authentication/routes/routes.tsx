import { ReactElement } from "react";
import { Route } from "react-router-dom";

import { AuthenticationRoutePaths } from "@app/pages/authentication/routes/paths";
import { SignIn } from "@app/pages/authentication/sign-in";
import { SignUp } from "@app/pages/authentication/sign-up";

const authenticationRoutes: ReactElement = (
    <>
        <Route path={AuthenticationRoutePaths.LOGIN} element={<SignIn />} />
        <Route path={AuthenticationRoutePaths.SIGN_IN} element={<SignIn />} />

        <Route path={AuthenticationRoutePaths.SIGN_UP} element={<SignUp />} />
        <Route path={AuthenticationRoutePaths.REGISTER} element={<SignUp />} />
    </>
);

export { authenticationRoutes };
