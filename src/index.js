import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import APP from "./components/App";

const theme = createTheme({});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <APP />
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById("root")
);