import React, { useEffect, useState } from "react";
import useMightyMouse from "react-hook-mighty-mouse";
import TypeWriter from "react-typewriter";
import Typography from "@mui/material/Typography";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

interface Props {
	numberOfHovers: number;
	yesClicked: boolean;
}

const PhrasesBox: React.FC<Props> = ({ numberOfHovers, yesClicked }) => {
	const theme = useTheme();
	// Add your personal inside jokes and phrases here
	const phrasesToDisplay = [
		"No way you actually meant that, its alright, you get another chance",
		"Really?????",
		"Ok ok fr stop now",
		"Click the yes already 😒",
		"At this point, I challenge you to actually CLICK that NO",
		"This is killing me",
		"I actually feel sick to my core",
		"💔💔💔💔💔💔💔💔",
		"An iced cap would have melted with all this chasing",
		"Watch my next dream be some sick version of you chasing me with that forsaken No button",
		"Ok you're clearly bored if you're chasing that button for this long, maybe you should just chase- I mean message me instead",
	];
	return (
		<Box
			sx={{
				border: `1px ${theme.palette.secondary.main}`, // Border color and width
				backgroundColor: theme.palette.secondary.main,
				padding: "20px",
				borderRadius: "8px",
				textAlign: "center",
			}}
			id="phrases-box"
		>
			<Typography
				variant="caption"
				sx={{
					color: theme.palette.text.primary,
					fontFamily: "Montserrat",
				}}
				gutterBottom
			>
				{yesClicked
					? "🥰🥰🥰🥰🥰🥰🥰🥰"
					: numberOfHovers
					? phrasesToDisplay[(numberOfHovers - 1) % phrasesToDisplay.length]
					: ""}
			</Typography>
		</Box>
	);
};

export default PhrasesBox;
