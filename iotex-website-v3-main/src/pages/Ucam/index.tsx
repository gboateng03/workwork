import {observer} from "mobx-react-lite";
import {useStore} from "@/store/index";
import BasicLayout from "../../Layouts/BasicLayout";
import {Box, Flex, Image, Text} from "@chakra-ui/react";
import {SectionContainer} from "@/pages/Pebble/SectionContainer";
import React from "react";
import {Footer} from "@/components/Footer";
import {Button} from "@/components/Button";
import {LogoCardItem} from "@/components/LogoCardItem";
import HighLight from "@/components/HighLight";
import {helper} from "@/utils/helper";

export const Ucam = observer(() => {
	const {lang} = useStore()
	const logos = [
		{
			icon: "images/media-center/newsweek.png",
			iocn_active: "images/media-center/newsweek_active.png",
			href: "https://www.newsweek.com/new-iotex-ucam-looks-provide-unrivaled-privacy-security-1517040"
		},
		{
			icon: "images/ucam/logo_zdnet.png",
			iocn_active: "images/ucam/logo_zdnet_active.png",
			href: "https://www.zdnet.com/article/new-ucam-security-camera-is-powered-by-the-blockchain/",
			imgWidth:'35%'
		},
		{
			icon: "images/media-center/logo_CoinDesk.png",
			iocn_active: "images/media-center/logo_CoinDesk_active.png",
			href: "https://www.coindesk.com/hardware-is-hard-two-blockchain-devices-win-plaudits-at-ces-2020",

		},
		{
			icon: "images/media-center/logo_cointelegraph.png",
			iocn_active: "images/media-center/logo_cointelegraph_active.png",
			href: "https://cointelegraph.com/news/blockchain-technology-now-powers-a-privacy-focused-security-camera"
		},
		{
			icon: "images/media-center/logo_decrypt.png",
			iocn_active: "images/media-center/logo_decrypt_active.png",
			href: "https://decrypt.co/15991/forget-amazon-ring-how-blockchain-could-secure-your-home"
		},
		{
			icon: "images/ucam/logo_nerd_techy.png",
			iocn_active: "images/ucam/logo_nerd_techy.png",
			href: "https://nerdtechy.com/tenvis-ucam-review"
		},
		{
			icon: "images/ucam/911.png",
			iocn_active: "images/ucam/911.png",
			href: "https://www.youtube.com/watch?v=tRYcuzOZP5M",
			imgWidth:'20%',
		},
		{
			icon: "images/ucam/logo_thenetgu.png",
			iocn_active: "images/ucam/logo_thenetgu_active.png",
			href: "https://www.youtube.com/watch?v=_BJ3cA2WcDI&t=44s",
			imgWidth:'30%',
		},
		{
			icon: "images/ucam/logo_sarah.png",
			iocn_active: "images/ucam/logo_sarah_active.png",
			href: "https://sarahscoop.com/ucam-security-camera-product-review/"
		},
	];

	return (
		<BasicLayout name={'ucam'}>
			<SectionContainer mt={40}>
				<Flex justifyContent={"space-between"} flexDirection={{base: 'column-reverse', md: 'column-reverse', xl: 'row'}}>
					<Box w={{lg: '100%', xl: '70%'}} mt={{base:10,md:0}}>
						<Text
							fontWeight={'600'}
							fontSize={{base: '1rem', sm: '1rem', lg: '1.25rem', xl: '3.55rem', '2xl': '4.75rem'}}
						>Ucam -</Text>
						<Text
							mt={5}
							lineHeight={{xl:'5.5rem','2xl':'7.5rem'}}
							fontSize={{base: "2.25rem", sm: "3rem", lg: "3.5rem", xl: "4.5rem", "2xl": "7rem"}}
							fontWeight="semibold" color="white" textAlign="left" whiteSpace={{base: "inherit", md: "pre-line"}}>
							{lang.t("ucam.title")}
						</Text>
						<Text
							mt={10}
							fontSize={{base: '1rem', sm: '1rem', lg: '1.55rem', xl: '1.25rem', '2xl': '1.75rem'}}
							fontWeight={'500'}
							lineHeight={'2.5rem'}
							whiteSpace={{base: 'unset', md: 'unset',lg:'pre-line'}}
						>
							{lang.t('ucam.caption')}
						</Text>
					</Box>
					<Box  width={{base:'60%',lg:'40%'}} mx={'auto'}>
						<Image src={helper.cdn('images/ucam/img_ucam1.png')}/>
					</Box>
				</Flex>
			</SectionContainer>
			<SectionContainer mt={{base:20,md:20,lg:40}}>
				<Flex justifyContent={'space-between'} flexDirection={{base:'column',lg: 'column', xl: 'row'}}>
					<Box w={{base:'80%',md:'80%',lg:'40%'}} mx={{base:'auto',xl:'unset'}}>
						<Image src={helper.cdn('images/ucam/img_ucam2.png')} mt={20}/>
					</Box>
					<Box w={{lg: '100%', xl: '56%'}} mt={{base:10}}>
						<Text
							fontWeight="semibold"
							fontSize={{base: "2.25rem", sm: "3rem", lg: "3.5rem", xl: "3.2rem", "2xl": "4.5rem"}}
							lineHeight={{xl:'4rem','2xl':'6rem'}}
							whiteSpace={{base: "inherit", md: "pre-line"}}
						>{lang.t('ucam.title2')}</Text>
						<Text
							mt={10}
							maxWidth={{xl: '47rem'}}
							fontSize={{base: '1rem', sm: '1rem', lg: '1.25rem', xl: '1.25rem', '2xl': '1.75rem'}}
							fontWeight={'500'}
							opacity={'0.85'}
							lineHeight={'2.5rem'}
						>
							{lang.t('ucam.caption2')}
						</Text>
					</Box>
				</Flex>
			</SectionContainer>
			<SectionContainer mt={{base:20,lg:40}}>
				<Box
					mx={'auto'}
					px={{base:10,lg:20}}
					py={{base:10,lg:20}}
					display={'flex'}
					flexDirection={'column'}
					alignItems={'center'}
					position={'relative'}
					_after={{
						position: 'absolute',
						top: '0',
						width: '100%',
						height: '100%',
						content: `""`,
						bg: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 133.06%)',
						opacity: '0.1',
						borderRadius: '20px',
						zIndex: -1
					}}
				>
					<Text
						fontWeight={'600'}
						textAlign={'center'}
						fontSize={{base:'1.25rem',md:'2rem '}}
						pb={20}
						whiteSpace={{base: "inherit", md: 'inherit', lg: 'inherit', xl: "inherit", '2xl': 'pre-line'}}
					>{lang.t('ucam.title3')}</Text>
					<Button
						name={'Connect with the IoTeX team'} href={'/enterprise'}
						size={{base: "100%", md: "50%", lg: "60%", xl: '50%', "2xl": "50%"}}/>
				</Box>
			</SectionContainer>
			<SectionContainer mt={{base:10,lg:40}}>
				<Flex flexDirection={{base:'column-reverse',lg:'row'}}>
					<Box width={{base:'100%',lg:'65%'}} mt={{base:10,lg:0}}>
						<Text
							fontWeight="semibold"
							fontSize={{base: "2.25rem", sm: "3rem", lg: "3.5rem", xl: "3.2rem", "2xl": "4.5rem"}}
							lineHeight={{xl:'4rem','2xl':'6rem'}}

						>
							{lang.t('ucam.title4')}
						</Text>
						<Box fontSize={'1.25rem'} mt={5} lineHeight={'2.5rem'}>
							<Text>
								{lang.t('ucam.caption4')}
								<span style={{color: '#44FFB2FF'}}>{lang.t("ucam.caption4.keyword")}</span>
							</Text>
							<Text mt={10}>{lang.t("ucam.caption42")}</Text>
						</Box>
					</Box>
					<Box w={{base:'90%',lg:'52%'}} mt={20} mx={'auto'}>
						<Image src={helper.cdn('images/ucam/img_ucam3.png')}/>
					</Box>
				</Flex>
			</SectionContainer>
			<SectionContainer mt={{base:20,lg:40}}>
				<Flex
					bgImg={{base:'unset',lg:`url(${helper.cdn('images/ucam/img_ucam4.png')})`}}
					bgSize={'60%'}
					bgRepeat={'no-repeat'}
					bgPosition={'bottom right'}
					justifyContent={'space-between'}
					flexDirection={{base:'column-reverse',lg:'row',xl:'row'}}
				>
					<Flex flexDirection={'column'} width={{base:'100%',lg:'32%'}} mt={{base:10,lg:0}}>
						<Box>
							<Image src={helper.cdn('images/ucam/icon_based_login.png')} w={'10%'}/>
							<Text mt={5}
							      fontSize={{base: '1.75rem', md: '2rem',xl:'1.75rem'}} fontWeight="semibold"
							>
								{lang.t('ucam.sub.title1')}
							</Text>
							<Text mt={5}
							      fontWeight={'500'}
							      fontSize={'1rem'}
							      opacity={'0.85'}
							>
								{lang.t('ucam.sub.desc1')}
							</Text>
						</Box>
						<Box mt={16}>
							<Image src={helper.cdn('images/ucam/icon_End-to-End.png')} w={'10%'}/>
							<Text
								mt={5}
								fontSize={{base: '1.75rem', md: '2rem',xl:'1.75rem'}} fontWeight="semibold"
							>
								{lang.t('ucam.sub.title2')}
							</Text>
							<Text
								mt={5}
								fontWeight={'500'}
								fontSize={'1rem'}
								opacity={'0.85'}

							>
								{lang.t('ucam.sub.desc2')}
							</Text>
						</Box>
						<Box mt={16}>
							<Image src={helper.cdn('images/ucam/icon_Edge.png')} w={'10%'}/>
							<Text
								mt={5}
								fontSize={{base: '1.75rem', md: '1.75rem',xl:'1.75rem'}} fontWeight="semibold"
							>{lang.t('ucam.sub.title3')}</Text>
							<Text
								mt={5}
								fontWeight={'500'}
								fontSize={'1rem'}
								opacity={'0.85'}
							>{lang.t('ucam.sub.desc3')}</Text>
						</Box>
					</Flex>
					<Box w={{base:'100%',lg:'60%'}}>
						<Image src={helper.cdn('images/ucam/img_ucam4.png')} display={{base:'block',lg:'none'}}/>
						<Text
							mt={{base:10,lg:0}}
							fontWeight="semibold"
							fontSize={{base: "2.25rem", sm: "3rem", lg: "3.5rem", xl: "3.2rem", "2xl": "4.5rem"}}
							lineHeight={{xl:'4rem','2xl':'6rem'}}
							whiteSpace={{ base: "inherit", md: "pre-line" }}
						>{lang.t('ucam.title5')}
						</Text>
						<Text
							mt={20}
							color={'#FFFFFF'}
							fontWeight={'500'}
							lineHeight={'2.5rem'}
							fontSize={{base:'1.25rem',xl:'1.25rem'}}
							opacity={'0.85'}
						>{lang.t("ucam.caption5")}</Text>
					</Box>
				</Flex>
			</SectionContainer>

			<SectionContainer mt={40}>
				<Box>
					<Text
						fontSize={{base: "2rem", sm: "1.875rem", lg: "2.5rem", xl: "4rem"}}
						whiteSpace="pre-line"
						fontWeight="semibold"
						textAlign="center"
						mb="1.75rem"
					>
						{lang.t("ucam.title6")}
					</Text>
					<Box
						fontSize={{
							base: "0.875rem",
							md: "1rem",
							lg: "1.25rem",
							xl: "1.25rem",
							"2xl": "1.75rem",
						}}
						mb={{base: "4rem"}}
						opacity="0.85"
						fontWeight="medium"
						textAlign="center"
						mx="auto"
						whiteSpace={{base: "inherit", md: "pre-line"}}
					>
						<HighLight
							sourceStr={lang.t("ucam.caption61")}
							keyArr={[
								{
									word: lang.t("ucam.caption61.keyword")
								}
							]}
							markActiveStyle={{color: '#44FFB2FF'}}
						/>
					</Box>
					<Flex
						flexWrap="wrap"
						justifyContent="space-between"
						alignContent="space-between"
					>
						{logos.map((item, index) => {
							return (
								<Box
									key={index}
									mb="3rem"
									width={{base: "46%", lg: "30%"}}
									height={{
										base: "6rem",
										sm: "8rem",
										md: "9rem",
										"2xl": "11.625rem",
									}}
								>
									<a href={item.href} target="_blank">
										<LogoCardItem item={item} width="100%" height="100%" imgWidth={item?.imgWidth} isAnimation={false}/>
									</a>
								</Box>
							);
						})}
					</Flex>
					<Text
						fontSize={{
							base: "0.875rem",
							md: "1rem",
							lg: "1.25rem",
							xl: "1.25rem",
							"2xl": "1.75rem",
						}}
						mt={5}
						opacity="0.85"
						fontWeight="medium"
						textAlign="center"
						mx="auto"
						whiteSpace={{base: "inherit", md: "pre-line"}}
					>
						{lang.t("ucam.caption62")}
					</Text>
					<Text
						fontSize={{
							base: "0.875rem",
							md: "1rem",
							lg: "1.25rem",
							xl: "1.25rem",
							"2xl": "1.75rem",
						}}
						mt={10}
						opacity="0.85"
						fontWeight="medium"
						textAlign="center"
						mx="auto"
						whiteSpace={{base: "inherit", md: "pre-line"}}
					>
						{lang.t("ucam.caption63")}
					</Text>
				</Box>
				<Flex justifyContent={{base:'',md:'center',xl:'center'}} mt={28} flexDirection={{base:'column',md:'row'}}>
					<Button name={'Buy it here'} href={'https://ucam.iotex.io/'} size={{base: "100%", md: "40%",xl:'30%'}}/>
					<Box w={'5%'} mt={10}/>
					<Button name={'Build on IoTeX'} href={'/enterprise'} size={{base: "100%", md: "40%",xl:'30%'}}/>
				</Flex>
			</SectionContainer>
			<Footer/>
		</BasicLayout>
	)
})
