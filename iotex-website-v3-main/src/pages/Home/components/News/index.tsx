import {Box, Flex, Image, Link, Text} from "@chakra-ui/react";
import React from "react";
import {useStore} from "@/store/index";

export const News = () => {
	const {lang} = useStore()
	const NEWS_CONTENTS = [
		{
			bg: 'images/home/news_bg1.png',
			desc: lang.t('home.news1'),
			link:"https://iotex.io/blog/coinbase-lists-iotx-blockchain/"
		},
		{
			bg: 'images/home/news_bg2.png',
			desc: lang.t('home.news2'),
			link:"https://iotex.io/blog/blockchain-future-smart-devices-iot/"
		},
		{
			bg: 'images/home/news_bg3.png',
			desc: lang.t('home.news3'),
			link:"https://iotex.io/blog/iotex-eating-iota-marketshare/"
		}
	]
	return (
		<Box
			maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}} mx="auto"
			pb={{base: "4rem", md: "10rem", lg: "15rem"}}
		>
			<Text
				textAlign={'center'}
				fontSize={{
					base: "1.8rem",
					sm: "1.875rem",
					lg: "2rem",
					xl: "3.5rem",
				}}
				fontWeight={700}
			>
				{lang.t('home.news.title')}
			</Text>
			<Flex
				mt={14}
				flexDirection={{base:'column',md:'row'}}
				justifyContent={'space-between'}
			>
				{
					NEWS_CONTENTS.map(content => (
						<Box width={{base:'100%',md:'30%'}} mt={{base:8}} key={content.link}>
							<Link href={content.link} isExternal _hover={{}} _focus={{}}>
								<Image src={content.bg}/>
								<Text
									fontSize={{
										base: "0.875rem",
										md: "1rem",
										lg: "1.125rem",
										xl: "1.25rem",
									}}
									mt={8}
									fontWeight={500}
								>
									{content.desc}
								</Text>
							</Link>
						</Box>
					))
				}
			</Flex>
		</Box>
	)
}
