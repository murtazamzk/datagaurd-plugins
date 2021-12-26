import React, { useContext, useEffect, useMemo } from "react";
import Routes from "./Routes";
import { GlobalStyles } from './styles/GlobalStyles';

const App: React.FunctionComponent = () => {
    return (
        <>
            <GlobalStyles />
            <Routes />
        </>
    );
}

export default App;