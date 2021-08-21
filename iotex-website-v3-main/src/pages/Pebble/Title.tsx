import React from "react";
import {Text} from "@chakra-ui/react";
import * as CSS from "csstype";
import {TextProps} from "@chakra-ui/layout/dist/types/text";


interface TitlePropsInterface extends TextProps {
	text: string
	textAlign?: CSS.Property.TextAlign
}

export const Title = ({text, textAlign = 'center', ...props}: TitlePropsInterface) => {
	return (
		<Text
			textAlign={textAlign}
			fontSize={{base: "2.25rem", sm: "2.5rem", lg: "2.5rem", xl: "4rem"}}
			fontWeight={'semibold'}
			whiteSpace="pre-line"
			{...props}
		>
			{text}
		</Text>
	)
}
