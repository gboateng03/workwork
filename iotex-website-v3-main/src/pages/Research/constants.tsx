import {Flex, Text} from "@chakra-ui/react";
import React from "react";

const Content = ({title, subtitle})=>{
	return(
		<Flex flexDirection={'column'} mt={2}>
			<Text fontWeight={"semibold"} fontSize={{base:'1.25rem',xl:'1.75rem'}} textAlign={'center'}>{title}</Text>
			<Text textAlign={'center'} fontSize={{base:'1rem',xl:'1.75rem'}}>{subtitle}</Text>
		</Flex>
	)
}

export const AWARDS = [
	{
		icon: 'images/research/logo_iic.png',
		iconActive: 'images/media-center/logo_iic_active.png',
		bgColorActive: '#EA332A',
		imgWidth:'40%',
		content:(<Content title={'Co-chair'} subtitle={'IIC Blockchain Working Group'}/>),
		link: 'https://medium.com/iotex/iotex-amazon-and-huawei-selected-as-co-chairs-of-the-iic-blockchain-task-group-9032b7b7443f'
	},
	{
		icon: 'images/research/ieee_icon.png',
		iconActive: 'images/research/ieee_icon_active.png',
		bgColorActive: '#366DB4',
		imgWidth:'40%',
		content:(<Content title={'Vice Chair'} subtitle={'IEEE P2418.1 Standard'}/>),
		link: 'https://medium.com/iotex/iotex-elected-vice-chair-of-ieee-blockchain-iot-standard-working-group-p2418-1-73e98099f7ed'
	},
	{
		icon: 'images/research/ccc_icon.png',
		iconActive: 'images/research/ccc_icon_active.png',
		bgColorActive: '#ED1846',
		imgWidth:'40%',
		content:(<Content title={'Member'} subtitle={'Confidential Computing Consortium'}/>),
		link: 'https://medium.com/iotex/iotex-joins-executive-committee-of-china-mobile-iot-alliance-unveils-new-enterprise-iot-solutions-b6a8b6183afd'
	},
	// {
	// 	icon: 'images/research/logo_cmia.png',
	// 	iconActive: 'images/research/logo_cmia_active.png',
	// 	bgColorActive: '#009DF2',
	// 	imgWidth:'40%',
	// 	content:(<Content title={'Executive Committee'} subtitle={'China Mobile IoT Alliance'}/>),
	// 	link: 'https://www.coindesk.com/facebook-iotex-and-r3-among-new-members-of-confidential-computing-consortium'
	// },
	{
		icon: 'images/research/ces_icon.png',
		iconActive: 'images/research/ces_icon_active.png',
		bgColorActive: '#5BC4F1',
		imgWidth:'40%',
		content:(<Content title={'CES Innovation Award'} subtitle={'for Ucam'}/>),
		link: 'https://www.ces.tech/Innovation-Awards/Honorees/2020/Honorees/U/Ucam-by-IoTeX-Fully-Private-Home-IP-Camera.aspx'
	},
]
