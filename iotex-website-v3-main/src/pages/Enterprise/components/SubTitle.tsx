import {Text} from "@chakra-ui/react";
import React from "react";
import {CaptionProps} from "./Caption";

const SubTitle = ({text, ...props}: CaptionProps) => {
	return (
		<Text
			{...props}
      fontWeight="semibold"
			fontSize={{base: '1rem', md: '1.75rem'}}
      mb="1rem"
      mt="1rem"
		>
			{text}
		</Text>
	)
}

export default SubTitle
