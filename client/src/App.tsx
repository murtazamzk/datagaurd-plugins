import React, { useContext, useEffect } from "react";
import PageLoader from "./components/PageLoader";
import { NavApiData, PluginApiData } from './types';
import Routes from "./Routes";
import useAPI from "./hooks/useApi";
import { ENDPOINTS, ActionTypes } from "./constants";
import { AppContext } from "./store";
import { GlobalStyles } from "./styles/GlobalStyles";

const App: React.FunctionComponent = () => {
  const { state, dispatch } = useContext(AppContext);
  const { get, loading, response, success, error } = useAPI();

  const getData = async () => {
    await get(ENDPOINTS.GET_DATA);
  };

  useEffect(() => {
    if (response) {
      if (success) {
        const navDataRaw = response?.data?.tabdata;
        const pluginDataRaw = response?.data?.plugins;
        let navData = [];
        let pluginData = [];
        if(navDataRaw) {
            Object.values(navDataRaw).forEach((data:NavApiData) => {
                navData.push({
                    title: data.title,
                    route: '/'+data.title.toLowerCase(),
                    activePlugins: data.active,
                    inActivePlugins: data.inactive,
                    disabledPlugins: data.disabled,
                });
            });
            dispatch({
                type: ActionTypes.SET_NAV_DATA,
                data: navData,
            });
        }
        if(pluginDataRaw) {
            Object.keys(pluginDataRaw).forEach((key) => {
                const data = pluginDataRaw[key];
                pluginData.push({
                    id: key,
                    title: data.title,
                    description: data.description
                });
            });
            dispatch({
                type: ActionTypes.SET_PLUGINS_DATA,
                data: pluginData,
            });
        }
      } else {
        console.log(error);
      }
    }
  }, [response]);

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <>
        <GlobalStyles />
        <PageLoader />
      </>
    );
  }

  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
};

export default App;
