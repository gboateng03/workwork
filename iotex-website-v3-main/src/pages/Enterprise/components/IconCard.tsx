import React from "react";
import {Box, Text} from "@chakra-ui/react";
import Caption from "./Caption";
import {helper} from "@/utils/helper";

const IconCard = ({item}) => {
	return (
		<>
			<Box
				width={'15rem'}
				maxWidth={{base:'100%',lg:'90%'}}
				marginTop={{
					base:'3rem',
					md:'9rem',
				}}
				marginBottom='3.75rem'
				_first={{
					marginTop: '0'
				}}
			>
				<img src={helper.cdn(item.icon)} alt={item.title} />
			</Box>
			<Text fontSize={{base:'1rem',md:'2rem'}} fontWeight="semibold">{item.title}</Text>
			<Caption text={item.desc} marginTop="1rem" fontWeight={'600'}/>
			<a href={item.link} style={{color:'rgba(68, 255, 178, 1)', marginTop:'1rem', fontSize:'1.125rem'}} target={'_blank'}>{item.linkText}</a>
		</>
	)
}
export default IconCard
