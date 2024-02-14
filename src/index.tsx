import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import QuestionBox from "./Components/QuestionBox";
import { createTheme, Theme, ThemeProvider } from "@mui/material";
const theme: Theme = createTheme({
	typography: {
		fontFamily: "Kalam",
	},
	palette: {
		primary: {
			main: "#FF7B7B", // Title color
		},
		secondary: {
			main: "#F4978E", // Text box background color
		},
		text: {
			primary: "#ffffff", // Text inside the text box color
		},
	},
});

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<QuestionBox />
		</ThemeProvider>
	</React.StrictMode>
);
