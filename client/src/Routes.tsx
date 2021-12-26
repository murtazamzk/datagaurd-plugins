import React, { useContext, useEffect } from "react";
import { Route, Navigate, Routes as Switch, BrowserRouter } from "react-router-dom";

import { ROUTES } from "./constants";

import Layout from "./components/Layout";
import Plugins from "./components/Plugins";

const Routes: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route key={ROUTES.MARKETING} path={ROUTES.MARKETING} element={<Layout children={<Plugins />}/>} />
                <Route key={ROUTES.FINANCE} path={ROUTES.FINANCE} element={<Layout children={<Plugins />}/>} />
                <Route key={ROUTES.PERSONAL} path={ROUTES.PERSONAL} element={<Layout children={<Plugins />}/>} />
                <Route path="*" element={<Navigate to={ROUTES.MARKETING} />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;