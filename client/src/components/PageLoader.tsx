import React, { useContext, useEffect, useMemo } from "react";
import styled, { keyframes } from "styled-components";

const PageLoader: React.FunctionComponent = () => {

    const Spinner = styled.svg`
        animation: rotate 2s linear infinite;
        margin: -25px 0 0 -25px;
        width: 50px;
        height: 50px;
        
        & .path {
        stroke: var(--navyBlue);
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
        }
        
        @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
        }
        @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
        }
    `;

    const PageLoaderInner = styled.div`
        display: flex;
        pointer-events: none;
        height: 100%;
        width: 100%;
        top: 0;
        position: fixed;
        z-index: 2;
        align-items: center;
        justify-content: center;
        transition: all 0.8s ease;
    `;

    return (
        <PageLoaderInner>
            <Spinner viewBox="0 0 50 50">
            <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="4"
            />
            </Spinner>
        </PageLoaderInner>
    );

};

export default PageLoader;
