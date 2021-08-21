import {Flex, Image, Text} from "@chakra-ui/react";
import React from "react";
import {useStore} from "@/store/index";
import {helper} from "@/utils/helper";

const Completed=({width})=>{
	const {lang} = useStore()
	return (
		<Flex position={'absolute'} bg={'rgba(17,15,28,0.8)'}  w={'100%'} h={'100%'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
			<Image src={helper.cdn('images/starter-pack/complete.png')} w={width}/>
			<Text mt={5} fontWeight={'semibold'}>{lang.t("complete")}</Text>
		</Flex>
	)
}
export default Completed
