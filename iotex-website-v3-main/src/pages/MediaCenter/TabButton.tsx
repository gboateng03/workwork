import {observer} from "mobx-react-lite";
import { Flex, Text} from "@chakra-ui/react";
import React, {MouseEventHandler} from "react";

interface TabButtonProps{
	text:string
	onClick?:MouseEventHandler
	isActive:boolean
}

const TabButton = ({text,isActive ,onClick}:TabButtonProps) => {
	return (
		<Flex
			color={isActive ? '#44FFB2' : 'rgba(255, 255, 255, 1)'}
			h={{base: "4rem", md: "5.5rem"}}
			w={{base: '15rem', md: '21.25rem',lg:'25.5rem'}}
			onClick={onClick}
			background={isActive ? 'linear-gradient(90deg, rgba(68, 255, 178, 0.2) -5.15%, rgba(255, 255, 255, 0) 94.71%);' : 'linear-gradient(90.02deg, rgba(255, 255, 255, 0.1) -14.64%, rgba(255, 255, 255, 0) 99.98%);'}
			borderRadius={'10px'}
			cursor={'pointer'}
			justifyContent={'center'}
			alignItems={'center'}
		>
			<Text fontSize={{base:'1rem',md:'1.75rem'}}>{text}</Text>
		</Flex>
	)
}

export default observer(TabButton)
