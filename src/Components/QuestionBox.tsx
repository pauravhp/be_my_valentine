import React, { useEffect, useState } from "react";
import useMightyMouse from "react-hook-mighty-mouse";
import TypeWriter from "react-typewriter";
import Typography from "@mui/material/Typography";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Box from "@mui/material/Box";
import PhrasesBox from "./PhrasesBox";
import TeleportNoBtn from "./TeleportNoBtn";
import { useTheme } from "@mui/material/styles";

const QuestionBox = () => {
	const theme = useTheme();
	const [buttonPosition, setButtonPosition] = useState({ x: 50, y: 50 });
	const [buttonVisible, setButtonVisible] = useState(false);
	const [isYesClicked, setIsYesClicked] = useState(false);
	const [numberOfHovers, setNumberofHovers] = useState(0);
	const {
		selectedElement: { boundingRect: phraseBoundingRect },
	} = useMightyMouse(true, "phrases-box");

	const {
		selectedElement: { boundingRect: titleBoundingRect },
	} = useMightyMouse(true, "title");

	const {
		selectedElement: { boundingRect: btnBoundingRect },
	} = useMightyMouse(true, "yesbtn");
	const yesBtnRect = {
		x1: btnBoundingRect.left ? btnBoundingRect.left : 0,
		x2:
			btnBoundingRect.left && btnBoundingRect.width
				? btnBoundingRect.left + btnBoundingRect.width
				: 0,
		y1: btnBoundingRect.top ? btnBoundingRect.top : 0,
		y2:
			btnBoundingRect.top && btnBoundingRect.height
				? btnBoundingRect.top + btnBoundingRect.height
				: 0,
	};
	const phraseRect = {
		x1: phraseBoundingRect.left ? phraseBoundingRect.left : 0,
		x2:
			phraseBoundingRect.left && phraseBoundingRect.width
				? phraseBoundingRect.left + phraseBoundingRect.width
				: 0,
		y1: phraseBoundingRect.top ? phraseBoundingRect.top : 0,
		y2:
			phraseBoundingRect.top && phraseBoundingRect.height
				? phraseBoundingRect.top + phraseBoundingRect.height
				: 0,
	};
	const titleRect = {
		x1: titleBoundingRect.left ? titleBoundingRect.left : 0,
		x2:
			titleBoundingRect.left && titleBoundingRect.width
				? titleBoundingRect.left + titleBoundingRect.width
				: 0,
		y1: titleBoundingRect.top ? titleBoundingRect.top : 0,
		y2:
			titleBoundingRect.top && titleBoundingRect.height
				? titleBoundingRect.top + titleBoundingRect.height
				: 0,
	};

	const isWithinTheRectangle = (
		rectangle: { x1: number; x2: number; y1: number; y2: number },
		newX: number,
		newY: number
	): boolean => {
		return (
			newX > rectangle.x1 - 50 &&
			newX < rectangle.x2 + 50 &&
			newY > rectangle.y1 - 50 &&
			newY < rectangle.y2 + 50
		);
	};

	const handleButtonClick = () => {
		// Generate random position for the button
		let newX = Math.random() * (document.documentElement.clientWidth - 100); // Subtract button width
		let newY = Math.random() * (document.documentElement.clientHeight - 100); // Subtract button height
		while (
			isWithinTheRectangle(phraseRect, newX, newY) ||
			isWithinTheRectangle(titleRect, newX, newY) ||
			isWithinTheRectangle(yesBtnRect, newX, newY)
		) {
			newX = Math.random() * (document.documentElement.clientWidth - 100); // Subtract button width
			newY = Math.random() * (document.documentElement.clientHeight - 100); // Subtract button height
		}
		// console.log("You clicked it!!");
		// Update button position
		setButtonPosition({ x: newX, y: newY });
		setNumberofHovers((num) => num + 1);
	};

	return (
		<Box
			id="question-box"
			sx={{
				maxWidth: "65vw", // Set maximum width as 65% of the viewport width
				margin: "0 auto", // Center horizontally
				padding: "75px 85px", // Add some padding
				textAlign: "center", // Center text
			}}
		>
			<TypeWriter typing={1} minDelay={500} fixed id="title">
				<Typography
					variant="h4"
					sx={{ color: theme.palette.primary.main, marginBottom: "10vh" }}
				>
					{/* Put your valentine-to-be's name here */}
					Will you be my Valentine?
				</Typography>
			</TypeWriter>
			<PhrasesBox numberOfHovers={numberOfHovers} yesClicked={isYesClicked} />
			<Box sx={{ display: "flex", justifyContent: "center", marginTop: "8vh" }}>
				<Box id="yesbtn" sx={{ marginRight: "5vw" }}>
					<AwesomeButton type="danger" onPress={() => setIsYesClicked(true)}>
						Yes
					</AwesomeButton>
				</Box>
				{!buttonVisible && (
					<Box id="stationary-no-btn" sx={{ marginLeft: "5vw" }}>
						<AwesomeButton
							type="danger"
							style={{
								textAlign: "center",
							}}
							onPress={() => {
								setButtonVisible(true);
								handleButtonClick();
							}}
						>
							No
						</AwesomeButton>
					</Box>
				)}
			</Box>

			<TeleportNoBtn
				onClick={handleButtonClick}
				buttonPosition={buttonPosition}
				buttonVisible={buttonVisible}
			/>
		</Box>
	);
};

export default QuestionBox;
