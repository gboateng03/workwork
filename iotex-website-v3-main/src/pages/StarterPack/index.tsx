import React from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "@/store/index";
import BasicLayout from "../../Layouts/BasicLayout";
import {Banner} from "@/pages/StarterPack/components/Banner";
import {Box, Divider, Flex, Image, Link, Text} from "@chakra-ui/react";
import IntroSection from "@/pages/StarterPack/components/IntroSection";
import {Footer} from "@/components/Footer";
import {Subscribe} from "@/pages/CmcStarterPack/components/Subscribe";
import {DownloadSection} from "@/pages/StarterPack/components/DownloadSection";
import ExchangeSection from "@/pages/StarterPack/components/ExchangeSection";
import {helper} from "@/utils/helper";
import HighLight from "@/components/HighLight";
import MediaChannel from "@/pages/StarterPack/components/MediaChannel";
import ExploreContent from "@/pages/StarterPack/components/ExploreContent";
import Technology from "@/pages/StarterPack/components/Technology";
import LiveProject from "@/pages/StarterPack/components/LiveProject";

const StarterPack = () => {
	const {lang} = useStore()

	return (
		<BasicLayout name={'starter-pack'}>
			<Banner/>

			<Box
				maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
				mx={'auto'}
				mt={{base: 20, md: 20, xl: 40}}
			>
				{/*5min intro*/}
				<IntroSection/>
				{/*<TechDeviceSection/>*/}

				{/*HOW TO GET YOUR FIRST NFT WITH IOTEX?*/}
				<Text
					id='how-to-get-your-first-nft-with-iotex'
					fontSize={{base: '1.15rem', xl: '2rem', '2xl': '3.5rem'}}
					fontWeight={600}
					mt={40}
				>
					{lang.t('starter.pack.title2')}
				</Text>

				<Divider mt={3} mb={10}/>
				<Text
					mt={10}
					fontSize={{'2xl': '1.25rem'}}
				>
					{lang.t('starter.pack.caption2')}
				</Text>
				<MediaChannel/>
				<Subscribe/>
				<DownloadSection/>

				<Text
					mt={40}
					fontWeight={600}
					fontSize={{base: '1.15rem', xl: '1.8rem', '2xl': '3.5rem'}}
				>
					{lang.t('starter.pack.title3')}
				</Text>
				<Divider mt={3} mb={10}/>
				<Text
					fontSize={{'2xl': '1.25rem'}}

				>
					{lang.t('starter.pack.caption3')}
				</Text>
				<Technology/>

				{/*IOTEX LIVE PROJECTS*/}
				<Text
					mt={40}
					fontWeight={600}
					fontSize={{base: '1.15rem', xl: '1.8rem', '2xl': '3.5rem'}}
				>
					{lang.t('starter.pack.title4')}
				</Text>
				<Divider mt={3} mb={10}/>
				<Text mt={10} fontSize={{'2xl': '1.25rem'}}>{lang.t('starter.pack.caption4')}</Text>
				<LiveProject/>

				{/*ENGAGE WITH IOTEX*/}
				<Text
					mt={40}
					fontWeight={600}
					fontSize={{base: '1.15rem', xl: '1.8rem', '2xl': '3.5rem'}}
				>
					{lang.t('starter.pack.title5')}
				</Text>
				<Divider mt={3} mb={10}/>
				<Link _hover={{}} href='#how-to-get-your-first-nft-with-iotex'>
					<Text mt={10} color={'#44FFB2'} fontSize={{'2xl': '1.25rem'}}
					>{lang.t('starter.pack.caption5')}</Text>
				</Link>
				<ExchangeSection/>
				<Flex
					bg={'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 133.06%);'}
					borderRadius={'20px'}
					px={{base: 10, xl: 20}}
					py={10}
					mt={10}
					justifyContent={'space-between'}
					flexDirection={{base: 'column', md: 'row'}}
					alignItems={'center'}
				>
					<Text whiteSpace={'pre-line'} fontSize={{base: '1.25rem', md: '1.3rem', 'xl': '2.25rem'}} fontWeight={600}
					      textAlign={{base: 'center', md: 'unset'}}>
						{'Your One-stop Shop for \n Must-know Information \n' +
						'about IoTeX.'}
					</Text>
					<Link href={'https://onboard.iotex.io/'} isExternal _focus={{}} _hover={{}}>
						<Flex
							mr={5}
							flexDirection={'column'}
							alignItems={'center'}
						>
							<Image src={helper.cdn('images/starter-pack/Onboarding.png')} w={{base: '30%', md: '55%'}}
							       mt={{base: 5, md: 0}}/>
							<Text fontWeight={600}>{lang.t('onboarding.Pack')}</Text>
							<Text whiteSpace={'pre-line'} textAlign={'center'} mt={2}
							      fontSize={'0.75rem'}>{'Explore the Multiple Facets \n of IoTeX'}</Text>
						</Flex>
					</Link>
				</Flex>

				<Text
					fontSize={{xl: '1.2rem', '2xl': '3rem'}}
					fontWeight={600}
					mt={20}
				>
					EXPLORE OUR CONTENT
				</Text>
			</Box>
			<ExploreContent/>

			<Footer/>
		</BasicLayout>
	)
}
export default observer(StarterPack)
