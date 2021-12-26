import React from "react";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import Content from "./Content";

const LayoutWrapper = styled.div`
  display: flex;
`;

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <Content children={children} />
    </LayoutWrapper>
  );
};

export default Layout;
