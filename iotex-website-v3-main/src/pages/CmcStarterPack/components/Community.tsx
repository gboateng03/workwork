import {Flex, Text} from "@chakra-ui/react";
import React from "react";
import {ProductBox} from "@/pages/CmcStarterPack/components/ProductList";

export const Community = () => {
	const COMMUNITIES = [
		{
			bgImg: 'card4.png',
			contentImg: 'icon_stake.png',
			text: 'Staking Portal',
			url: 'https://community.iotex.io/t/maximizing-returns-on-your-iotx/1634',
			display:'flex'
		},
		{bgImg: 'card3.png', contentImg: 'icon_forum.png', text: 'Forum', url: 'https://community.iotex.io/',display:'flex'},
		{display: {base: 'none', 'md': 'flex'}},
		{display: {base: 'none', 'md': 'flex'}},
	]

	return (
		<>
			<Text
				fontSize={{xl: '1.2rem', '2xl': '3rem'}}
				fontWeight={600}
				mt={20}
			>
				JOIN THE GOVERNANCE AND MEET THE COMMUNITY
			</Text>
			<Flex justifyContent={'space-between'} mt={5} flexWrap={"wrap"}>
				{
					COMMUNITIES.map((c, index) => <ProductBox display={c.display} bgImg={c.bgImg} text={c.text} contentImg={c.contentImg} key={index}
					                                          url={c.url}/>)
				}
			</Flex>
		</>
	)
}
