import React from "react";
import {observer} from "mobx-react-lite";
import BasicLayout from "../../Layouts/BasicLayout";
import {Box, Flex, Image, keyframes, Link, SimpleGrid, Text} from "@chakra-ui/react";
import {useStore} from "@/store/index";
import {Button} from "@/components/Button";
import {Card} from "./Card";
import {Footer} from "@/components/Footer";
import Form from "./Form";
import {Title} from "./Title";
import {SectionContainer} from "./SectionContainer";
import {Caption} from "./Caption";
import {helper} from "@/utils/helper";

const Pebble = () => {
	const {lang} = useStore()
	const PART_4_ICON_TEXT = [
		{icon: 'Assistive_Technologies.png', text: lang.t('supply_chain')},
		{icon: 'COMMERCIA.png', text: lang.t('contract_settlement')},
		{icon: 'Mobile_Asset_Tracking.png', text: lang.t('remote_monitoring')},
		{icon: 'TRANSPORTATION.png', text: lang.t('transportation_logistics')},
		{icon: 'Fixed_Assets.png', text: lang.t('mobile_asset_tracking')},
		{icon: 'INDUSTRIAL_PROCESSES.png', text: lang.t('process_automation')},
	]

	return (
		<BasicLayout name="pebble">
			{/*part 1*/}
			<Flex
				backgroundImage={`url(${helper.cdn('images/pebble/img_pebble.png')})`}
				marginTop='6rem'
				justifyContent='center'
				backgroundRepeat='no-repeat'
				backgroundPosition={{
					base:'right top 20rem',
					md:'right top 35rem',
					lg:'right top 15rem'
				}}
				backgroundSize={{base:'100%',md:'100%',lg:'85%'}}
			>
				<SectionContainer>
					<Flex flexDirection={{base: 'column',md:'column' ,lg: 'row'}} justifyContent={"space-between"}>
						<Box paddingTop={{base: '0', md: '4rem'}} >
							<Title
								text={lang.t('pebble.title')}
								fontWeight={'600'}
								textAlign={'left'} mt={5} fontSize={{base:'2rem',md:'3rem',lg:'3.5rem',xl:'4.5rem'}}
								lineHeight={{xl:'5rem','2xl':'7.5rem'}}/>
							<Caption w={{base:'auto',lg:'33rem',xl:'43rem'}} text={lang.t('pebble.caption')} mt={6} fontSize={{xl:'1.35rem'}}/>
						</Box>
						<Flex justifyContent={'flex-end'}>
							<Image src={helper.cdn('images/pebble/pebble_1.png')} width={{base:'30%',md:'40%',lg:'80%',xl:'80%'}} h={{base:'30%',md:'40%',lg:'80%',xl:'auto'}}/>
						</Flex>
					</Flex>
					<Flex mx={"auto"} mt={36}>
						<Flex direction={{base: 'column-reverse',md:'column-reverse' ,lg: 'row'}}
						      justifyContent={'space-between'}
						      width={'100%'}>
							<SimpleGrid columns={[1, 1, 2, 2]} width={{base:'100%',md:'100%',lg:'36%',xl:'40%'}} mt={{md:10}}>
								<Flex flexDirection={'column'} justifyContent={'center'} mx={'auto'} width={'100%'}>
									<Card url='images/pebble/icon_location.png' text='LOCATION'/>
									<Card url='images/pebble/icon_temperature.png' text='CLIMATE' marginTop={'1.5rem'}/>
								</Flex>
								<Flex flexDirection={'column'} justifyContent={'space-around'} mx={'auto'} width={'100%'}>
									<Card url='images/pebble/icon_vibration.png' text='MOTION'/>
									<Card url='images/pebble/icon_sunlight.png' text='LIGHT' marginTop={'1.5rem'}/>
									<Card url='images/pebble/icon_connectivity.png' text='CELLULAR-IOT' marginTop={'1.5rem'}/>
								</Flex>
							</SimpleGrid>
							<Flex width={{base:'100%',md:'100%',lg:'50%'}} flexDirection={'column'} justifyContent={'center'}>
								<Title text={lang.t('pebble.section1.title')} textAlign={'left'}
								       lineHeight={{xl:'5rem','2xl':'7.5rem'}}
								/>
								<Caption text={lang.t('pebble.section1.caption')} mt={5} fontSize={{xl:'1.35rem'}}/>
							</Flex>
						</Flex>
					</Flex>
				</SectionContainer>
			</Flex>


			{/*part 3*/}

			{/*<SectionContainer marginTop={'15rem'} position={'relative'}>*/}
			{/*	<Image src={helper.cdn('images/pebble/apertureBlue.png')} position={'absolute'} top={'-50px'} width={'80%'} height={'80%'}/>*/}
			{/*	<Flex justifyContent={'center'}*/}
			{/*	      flexDirection={'column'}>*/}
			{/*		<Title text={lang.t("pebble.section2.title")}/>*/}
			{/*		<Flex justifyContent={'center'} alignItems={'flex-start'}>*/}
			{/*			<video*/}
			{/*				style={{*/}
			{/*					width: "75%",*/}
			{/*					objectFit: "cover",*/}
			{/*					marginTop: '80px'*/}
			{/*				}}*/}
			{/*				src="/video/pebble_ani.mp4"*/}
			{/*				loop={true}*/}
			{/*				autoPlay={true}*/}
			{/*				muted*/}
			{/*			/>*/}
			{/*		</Flex>*/}
			{/*	</Flex>*/}
			{/*</SectionContainer>*/}

			{/*	part 4*/}
			<Box
				mt={{base:10,md:10,lg:0}}
				display={{base:'block',md:'block',lg:'none'}}
			>
				<video
					src="/video/pebble_iot.mp4"
					loop={true}
					autoPlay={true}
					muted
					style={{
						width: "100%",
					}}
				/>
			</Box>
			<Box
				overflow={'hidden'}
				py={{base:5,md:5,lg:28}}
				marginTop={{base: '5rem', md: '5rem',lg:'15rem'}}
				position={'relative'}
			>
				<Box
					display={{base:'none',md:'none',lg:'block'}}
				>
					<video
						style={{
							position: "absolute",
							top: 0,
							right: 0,
							left: 0,
							bottom: 0,
							width: "100%",
							objectFit: "cover",
						}}
						src="/video/pebble_iot.mp4"
						loop={true}
						autoPlay={true}
						muted
					/>
				</Box>
				<SectionContainer position={'relative'}>
					<Flex
						direction={{base: 'column',md:'column', lg: 'row'}}
						justifyContent={'space-between'}
					>
						<Box  width={{base:'100%',md:'100%',lg:'55%'}}>
							<Title text={lang.t('title')} fontWeight={'600'} textAlign={'left'}/>
							<Caption text={lang.t("dev.subtitle4")} mt={10} lineHeight={'3rem'}/>
						</Box>
						<SimpleGrid columns={[1, 2]} spacingX={'1.25rem'} spacingY={'2.5rem'} mt={{base:10}}>
							{
								PART_4_ICON_TEXT.map((item) => {
									return (
										<Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} key={item.icon}>
											<Image src={helper.cdn(`images/pebble/${item.icon}`)} alt={item.text} width={'3rem'}
											     height={'3rem'}/>
											<Text fontSize={{xl:'0.9rem','2xl':'1.25rem'}} marginTop={'1rem'} fontWeight={"semibold"}>{item.text}</Text>
										</Flex>
									)
								})
							}
						</SimpleGrid>
					</Flex>
				</SectionContainer>
			</Box>

			{/*part5*/}
			<Box
				marginTop={'11.25rem'}
				pb={{base:'15rem',lg:'22rem'}}
				backgroundImage={`url(${helper.cdn('images/pebble/img_pebble_right.png')})`}
				backgroundRepeat={'no-repeat'}
				backgroundSize={'80%'}
				backgroundPosition={'bottom 0 left 0px'}
			>
				<SectionContainer>
					<SimpleGrid columns={[1,1,1,2]}>
						<Box mx={{md:"auto",xl:'unset'}}>
							<Flex
								background={'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
								boxShadow={'inset -1px -1px 0px rgba(255, 255, 255, 0.25)'}
								width={{base: '100%',md:'30rem' ,lg: '23rem', xl: '28rem'}}
								height={{base:'20rem',md:'20rem',lg: '20rem', xl: '24.3rem'}}
								flexDirection={'column'}
								justifyContent={'space-around'}
								alignItems={'center'}
								borderRadius={'1.25rem'}
							>
								<Image src={helper.cdn("images/pebble/Nordic_Semiconductor.png")} alt="Nordic_Semiconductor" w={'55%'}/>
								<Image src={helper.cdn("images/pebble/IoTeX_logo.png")} alt="IoTeX_logo" w={'55%'} />
							</Flex>
						</Box>
						<Box marginTop={{base: '5rem', md: '5rem',lg:'0'}}>
							<Title text={lang.t('pebble.section3.title')} textAlign={'left'} lineHeight={{lg:'4rem',xl:'5rem'}}/>
							<Caption text={lang.t('pebble.section3.caption')} mt={10} fontSize={'1.25rem'}/>
							<Box mt={20}>
								<Button name={lang.t('buy_on_crowdsupply')} href={'https://www.crowdsupply.com/iotex/pebble-tracker'}
								        size={{base: "100%", xl: "60%", "2xl": "60%"}}/>
							</Box>
						</Box>
					</SimpleGrid>
				</SectionContainer>
			</Box>

			{/*part6*/}

			<SectionContainer position={'relative'}>
				<Image display={{base:'none',lg:'block'}} src={helper.cdn('images/pebble/aperture.png')} position={'absolute'} bottom={'-15rem'} right={'0'} width={'90%'} height={'60%'}/>
				<Flex flexDirection={'column'} alignItems={'center'}>
					<Title text={lang.t('pebble.section4.title')}  textAlign={'center'}/>
					<Caption text={lang.t('pebble.section4.caption')}  textAlign={'center'}
					         mt={5}/>
					<Image src={helper.cdn('images/pebble/pebble_section4_bg.png')} alt="pebble_section4_bg" mt={12}/>
					<SimpleGrid
						columns={[1, 2, 2, 4]}
						spacing={16}
						mt={24}
						padding={'0 5rem'}
					>
						<Box>
							<img src={helper.cdn("images/pebble/PMT_logo.png")} alt="PMT_logo"/>
						</Box>
						<Box>
							<img src={helper.cdn('images/pebble/TDK-Logo.png')} alt="TDK-Logo"/>
						</Box>
						<Box>
							<img src={helper.cdn("images/pebble/Bosch_logo.png")} alt="Bosch_logo"/>
						</Box>
						<Box>
							<img src={helper.cdn("images/pebble/nordic_logo.png")} alt="nordic_logo"/>
						</Box>
					</SimpleGrid>
				</Flex>

			</SectionContainer>

			{/*part7*/}
			<SectionContainer marginTop={'15rem'}>
				<SimpleGrid columns={[1, 2]} spacing={{sm: '3rem', md: '3rem', lg: '4rem',xl:'4rem'}}>
					<Flex
						bgImg={`url(${helper.cdn('images/pebble/powered_by_IoTeX_bg.png')})`}
						justifyContent={'center'}
						alignItems={'center'}
					>
						<img src={helper.cdn('images/pebble/pebble_section5_bg.png')} alt="pebble_section5_bg"
						/>
						{/*<Image*/}
						{/*	animation='btnHover infinite 1s linear'*/}
						{/*	src='images/pebble/powered_by_IoTeX_icon_center.png' width={'12rem'}*/}
						{/*/>*/}
					</Flex>
					<Flex  flexDirection={'column'} justifyContent={"center"}>
						<Title text={lang.t('pebble.section5.title')} textAlign={'left'} fontSize={{base:'2rem',xl:'3.3rem'}}/>
						<Text mt={10} fontSize={'1.25rem'}>{lang.t('pebble.section5.caption1')}</Text>
						<Text mt={10} fontSize={'1.25rem'}>{lang.t('pebble.section5.caption2')}</Text>
						<Box mt={20}>
							<Button name={lang.t("get_started_with_iotex")}
							        href={'https://docs.iotex.io/get-started/iotex-dapp-starter'}
							        size={{base: "100%", xl: "60%", "2xl": "60%"}}
							/>
						</Box>
						<Link
							isExternal
							href={'https://www.crowdsupply.com/iotex/pebble-tracker'}
							cursor={"pointer"}
							_hover={{}}
							fontSize={{
								base: "0.875rem",
								md: "1rem",
								lg: "1.25rem",
								xl: "1.25rem",
								"2xl": "1.75rem",
							}}
							fontWeight="medium"
							mt={10}
							textAlign="left"
							color="brandColor"
							lineHeight="1.275rem"
						>
							{lang.t('pebble.get.pebble')} {'>>'}
						</Link>
					</Flex>
				</SimpleGrid>
			</SectionContainer>

			{/*part 8*/}
			{/*<Flex*/}
			{/*	backgroundImage={`url(${helper.cdn('images/pebble/pebble_section_6_bg.png')})`}*/}
			{/*	minHeight={'34.125rem'}*/}
			{/*	mx={"auto"}*/}
			{/*	justifyContent={'center'}*/}
			{/*	flexDirection={'column'}*/}
			{/*	mt={40}*/}
			{/*	position={'relative'}*/}
			{/*	overflow={"hidden"}*/}
			{/*>*/}
			{/*	<video*/}
			{/*		style={{*/}
			{/*			position: "absolute",*/}
			{/*			top: 0,*/}
			{/*			right: 0,*/}
			{/*			left: 0,*/}
			{/*			bottom: 0,*/}
			{/*			width: "100%",*/}
			{/*			objectFit: "cover",*/}
			{/*		}}*/}
			{/*		src="/video/thingsboard.mp4"*/}
			{/*		loop={true}*/}
			{/*		autoPlay={true}*/}
			{/*		muted*/}
			{/*	/>*/}
			{/*	<SectionContainer position={'relative'}>*/}
			{/*		<Title text={lang.t('pebble.section6.title')}/>*/}
			{/*		<Text*/}
			{/*			mt={10}*/}
			{/*			textAlign={'center'}*/}
			{/*			fontSize={{base: '0.75rem', sm: '1rem', lg: '1.25rem', xl: '1.5rem', '2xl': '1.75rem'}}*/}
			{/*		>*/}
			{/*			{lang.t('pebble.section6.caption')}*/}
			{/*		</Text>*/}
			{/*	</SectionContainer>*/}
			{/*</Flex>*/}
			<Form/>
			<Footer/>
		</BasicLayout>
	)
}

export default observer(Pebble)
