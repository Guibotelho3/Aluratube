import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, { ColorModeContext } from "../src/components/Menu/components/ColorMode";
import RegisterVideo from "../src/components/Menu/components/RegisterVideo/Index";

const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    }
};

function ProviderWrapper(propriedades) {
    return (
        <ColorModeProvider initialMode={"light"}>
            {propriedades.children}
        </ColorModeProvider>
    )
}

function Root({ Component, pagePropriedades }) {
    const contexto = React.useContext(ColorModeContext);
    console.log(contexto.mode);
    return (
            <ThemeProvider theme={theme[contexto.mode]}>
                <CSSReset />
                <Component {...pagePropriedades} />
                <RegisterVideo/>
            </ThemeProvider>
    )
}

export default function _App(propriedades) {
    return (
        <ProviderWrapper>
            <Root {...propriedades} />
        </ProviderWrapper>
    )
};