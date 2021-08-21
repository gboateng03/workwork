import {SimpleGrid, Text} from "@chakra-ui/react";
import LogoCard from "@/pages/CmcStarterPack/components/LogoCard";
import React from "react";

const ExchangeSection=()=>{
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
	return(
		<>
			<Text
				fontSize={{base:'0.9rem',xl: '1.2rem', '2xl': '3rem'}}
				fontWeight={600}
				mt={20}
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
		</>
	)
}

export default ExchangeSection
