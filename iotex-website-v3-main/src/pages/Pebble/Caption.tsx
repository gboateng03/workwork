import React from "react";
import {Text} from "@chakra-ui/react";
import {TextProps} from "@chakra-ui/layout/dist/types/text";

interface CaptionProps extends TextProps{
	text:string
}

export const Caption = ({text,...props}: CaptionProps) => {
	return (
		<Text
			fontSize={{base: '1rem', sm: '1rem', lg: '1.55rem', xl: '1.35rem', '2xl': '1.75rem'}}
			fontWeight={'500'}
			whiteSpace={{base:'unset',md:'pre-line'}}
			{...props}
		>
			{text}
		</Text>
	)
}
