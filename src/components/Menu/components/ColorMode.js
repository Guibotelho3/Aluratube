import React from "react";


export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => { alert()}
});

export default function ColorModeProvider(propriedades){
    const [mode, setMode] = React.useState(propriedades.initialMode)
    return (
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode }}>
            {propriedades.children}
        </ColorModeContext.Provider>
    );
}