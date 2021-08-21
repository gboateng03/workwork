import React from "react";
import { Flex, Image, Text} from "@chakra-ui/react";
import {observer, useLocalObservable} from "mobx-react-lite";
import Completed from "@/pages/CmcStarterPack/components/Completed";
import {helper} from "@/utils/helper";

const SocialCard = ({img, text, desc, link}) => {
	const store = useLocalObservable(() => ({
		isClick: false,
		setClick(val) {
			this.isClick = val
		}
	}));
	return (
		<Flex
			bg={'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
			flexDirection={'column'}
			justifyContent={'center'}
			alignItems={'center'}
			borderRadius={'20px'}
			boxShadow={'inset -1px -1px 0px rgba(255, 255, 255, 0.25);'}
			css={{
				backdropFilter: 'blur(100px)'
			}}
			w={{base:'10.5rem',md:'9rem',xl: '15rem'}}
			h={{base:'10.5rem',md:'9rem',xl: '15rem'}}
			cursor={'pointer'}
			onClick={() => {
				store.setClick(true)
				window.open(link)
			}}
			px={{base:1}}
			position={'relative'}
		>
			{
				store.isClick ? (<Completed width={{base:'15%',xl:'30%'}}/>):<></>

			}
			<Image src={helper.cdn(img)} w={{base:'30%'}}/>
			<Text fontSize={{base:'1.25rem',md:"1rem",xl:'1.25rem'}} fontWeight={'semibold'}>{text}</Text>
			<Text fontSize={'0.75rem'} color={'rgba(153, 153, 153, 1)'} mt={1} whiteSpace={{base:'pre-line', md:'unset'}}
			      textAlign={'center'}>{desc}</Text>
		</Flex>
	)
}
export default observer(SocialCard);
