import React from "react";
import BasicLayout from "../../Layouts/BasicLayout";
import {Box, Divider, Flex, SimpleGrid, Text, Image} from "@chakra-ui/react";
import {useStore} from "@/store/index";
import {Footer} from "@/components/Footer";
import SocialCard from "@/pages/CmcStarterPack/components/SocialCard";

import LogoCard from "@/pages/CmcStarterPack/components/LogoCard";
import ProductList from "@/pages/CmcStarterPack/components/ProductList";
import LearnPart from "@/pages/CmcStarterPack/components/LearnPart";
import HighLight from "@/components/HighLight";
import {DownloadSection} from "@/pages/CmcStarterPack/components/DownloadSection";
import {Community} from "@/pages/CmcStarterPack/components/Community";
import {Banner} from "@/pages/CmcStarterPack/components/Banner";
import {Subscribe} from "@/pages/CmcStarterPack/components/Subscribe";

const CmcStarterPack = () => {
	const {lang} = useStore()

	const socials = [
		{
			text:"YouTube",
			desc:"See latest panels, conferences, and updates",
			link:"https://www.youtube.com/channel/UCdj3xY3LCktuamvuFusWOZw",
			image:"images/starter-pack/icon_youtube.png"
		},
		{
			text: "Reddit",
			image: "images/starter-pack/icon_Reddit.png",
			desc: 'Chat with communities',
			link: 'https://www.reddit.com/r/IoTeX/'
		},
		{
			text: "Twitter",
			image: "images/starter-pack/icon_twitter.png",
			desc: 'Follow the latest \n IoTeX news',
			link: 'https://twitter.com/iotex_io'
		},
		{
			text: "Telegram",
			image: "images/starter-pack/icon_telegram.png",
			desc: 'Chat and read our \n announcements',
			link: 'https://t.me/iotexchannel'
		},
		// {
		// 	text: "Discord",
		// 	image: "images/starter-pack/icon_Discord.png",
		// 	desc: 'Discuss with communities',
		// 	link: 'https://iotex.io/devdiscord'
		// },
	]


	const lineOneLogos = [
		{img: 'images/starter-pack/Binance_logo.png', width: '60%',url:'https://www.binance.com/en/trade/IOTX_USDT?theme=dark&type=spot'},
		{img: 'images/starter-pack/logo_heco.png', width: {base:'60%',xl:'auto'},url:'https://www.huobi.com/en-us/exchange/iotx_usdt'},
		{img: 'images/starter-pack/gateio_h_en.png', width: '60%',url:'https://www.gate.io/trade/iotx_usdt'},
		{img: 'images/starter-pack/logo_kucoin.png', width: {base:'60%',xl:'auto'},url:'https://trade.kucoin.com/IOTX-BTC'},
		{img: 'images/starter-pack/bittrex-global-vector-logo.png', width: '60%',url:'https://bittrex.com/Market/Index?MarketName=BTC-IOTX'},
		{img: 'images/starter-pack/logo_wazirx.png', width: {base:'60%',xl:'auto'},url:'https://wazirx.com/exchange/IOTX-USDT'},
	]
	const lineTwoLogos = [
		{img: 'images/starter-pack/logo_upbit.png', width: '60%',url:'https://upbit.com/exchange?code=CRIX.UPBIT.BTC-IOTX'},
		{img: 'images/starter-pack/logo_coinex.png', width: '60%',url:'https://www.coinex.com/exchange?currency=usdt&dest=iotx&tab=limit'},
		{img: 'images/starter-pack/logo_coindcx.png', width: '60%',url:'https://coindcx.com/trade/IOTXBTC'},
		{img: 'images/starter-pack/logo_pionex.png', width: '60%',url:'https://www.pionex.com/en-US/trade/IOTX_USDT/pionex.v2'},
		{img: 'images/starter-pack/logo_mexc.png', width: '60%',url:'https://www.mexc.com/exchange/IOTX_USDT'},
		{img: 'images/starter-pack/logo_hotbit.png', width: '60%',url:'https://www.hotbit.io/exchange?symbol=IOTX_USDT'},
	]
	const lineThreeLogos = [
		{img: 'images/starter-pack/logo_bilaxy.png', width: '60%',url:'https://bilaxy.com/trade/IOTX_ETH'},
		{img: 'images/starter-pack/logo_coinone.png', width: {base:'60%',xl:'auto'},url:'https://coinone.co.kr/exchange/trade/iotx/'},
		{img: 'images/starter-pack/logo_bitmart.png', width: '60%',url:'https://www.bitmart.com/trade/en?symbol=IOTX_USDT&layout=basic'},
		{img: 'images/starter-pack/logo_hitbtc.png', width: '60%',url:'https://hitbtc.com/iotx-to-btc'},
		{img: 'images/starter-pack/logo_bhex.png', width: '60%',url:'https://www.bhex.com/en-us/exchange/IOTX/USDT'},

	]
	return (
		<BasicLayout name={'cmc-starter-pack'}>

			<Banner/>
			<Box
				maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
				mx={'auto'}

			>
				<Box
					fontWeight={600}
					fontSize={{base:'1.15rem',xl: '1.8rem', '2xl': '3.5rem'}}
				>
					<HighLight

						sourceStr={lang.t("cmc.starter.pack.section1.title")}
						keyArr={[
							{
								word: 'CMC REWARDS',
								link: ""
							},
						]}
						markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
					/>
				</Box>
				<Divider mt={3} mb={10}/>

				<Box
					fontWeight={600}
					fontSize={{base:'0.9rem',xl: '1.2rem', '2xl': '3rem'}}
				>
					<HighLight

						sourceStr={lang.t("cmc.starter.pack.section1.subtitle1")}
						keyArr={[
							{
								word: 'REQUIREMENT 1.',
								link: ""
							},
						]}
						markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
					/>
				</Box>
				<SimpleGrid columns={[2,4]} mt={10} spacing={5}>
					{
						socials.map((s, index) => {
							return (
								<SocialCard text={s.text} img={s.image} desc={s.desc} link={s.link} key={index}/>
							)
						})
					}
				</SimpleGrid>


				<Box
					fontWeight={600}
					fontSize={{base:'0.9rem',xl: '1.2rem', '2xl': '3rem'}}
					mt={14}
				>
					<HighLight

						sourceStr={lang.t("cmc.starter.pack.section1.subtitle2")}
						keyArr={[
							{
								word: 'REQUIREMENT 2.',
								link: ""
							},
						]}
						markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
					/>
				</Box>
				<Subscribe/>
				<DownloadSection/>
			</Box>

			<Box
				maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
				mx={'auto'}
				mt={40}
			>
				<Text
					fontWeight={600}
					fontSize={{base:'1.15rem',xl: '1.8rem', '2xl': '3.5rem'}}
				>
					ENGAGE
				</Text>
				<Divider mt={3} mb={10}/>
				<Text
					fontSize={{base:'0.9rem',xl: '1.2rem', '2xl': '3rem'}}
					fontWeight={600}
				>
					PURCHASE IOTX IN EXCHANGES
				</Text>
				<SimpleGrid columns={[3,4,4,6]} mt={10} spacing={5}>
					{
						lineOneLogos.map((logo, index) => {
							return (
								<LogoCard img={logo.img} width={logo.width} key={index} url={logo.url}/>
							)
						})
					}
					{
						lineTwoLogos.map((logo, index) => {
							return (
								<LogoCard img={logo.img} width={logo.width} key={index} url={logo.url}/>
							)
						})
					}
					{
						lineThreeLogos.map((logo, index) => {
							return (
								<LogoCard img={logo.img} width={logo.width} key={index} url={logo.url}/>
							)
						})
					}
				</SimpleGrid>

				<ProductList/>

				<Community/>
			</Box>
			<LearnPart/>
			<Footer/>
		</BasicLayout>
	)
}

export default CmcStarterPack
