import React from "react";
import {Box} from "@chakra-ui/react";

export const SectionContainer=({children,...props})=>{
	return(
		<Box
			{...props}
			maxWidth={{base: '90%', md: '80%', lg: '80%', '2xl': '1554px'}}
			mx={'auto'}
		>
			{children}
		</Box>
	)
}
