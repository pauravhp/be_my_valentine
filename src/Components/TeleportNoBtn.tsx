import React, { useEffect, useState } from "react";
import useMightyMouse from "react-hook-mighty-mouse";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Box } from "@mui/material";

interface Props {
	onClick: () => void;
	buttonPosition: { x: number; y: number };
	buttonVisible: boolean;
}
const TeleportNoBtn: React.FC<Props> = ({
	onClick,
	buttonPosition,
	buttonVisible,
}) => {
	const {
		selectedElement: { isHover },
	} = useMightyMouse(true, "nobtn");

	useEffect(() => {
		isHover && onClick();
	}, [isHover]);

	const buttonStyle: React.CSSProperties = {
		position: "absolute",
		top: buttonPosition.y + "px",
		left: buttonPosition.x + "px",
		zIndex: 2,
	};

	if (!buttonVisible) {
		buttonStyle.display = "none";
	}
	return (
		<Box id="nobtn">
			<AwesomeButton style={buttonStyle} type="danger">
				No
			</AwesomeButton>
		</Box>
	);
};

export default TeleportNoBtn;
