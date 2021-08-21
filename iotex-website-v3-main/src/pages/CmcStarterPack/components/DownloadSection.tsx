import {Box, Flex, Image, Link, Text, useBreakpointValue} from "@chakra-ui/react";
import HighLight from "@/components/HighLight";
import React from "react";
import {useStore} from "@/store/index";
import {observer, useLocalObservable} from "mobx-react-lite";
import Completed from "@/pages/CmcStarterPack/components/Completed";
import {helper} from "@/utils/helper";

export const DownloadSection = observer(() => {
	const {lang} = useStore()
	const store = useLocalObservable(() => ({
		isClick: false,
		setClick(val) {
			this.isClick = val
		}
	}));

	const MOBILE_LINK = [
		{
			img: 'images/starter-pack/playstore.png',
			url: "https://play.google.com/store/apps/details?id=io.iotex.iopay.gp",
			ml: {base: 8, md: 6, xl: 14},
		},
		{
			img: 'images/starter-pack/ios-download.png',
			url: "itms-apps://itunes.apple.com/app/id1478086371",
			ml: {base: 8, md: 5},
			mt:{base: 3, md: 3,lg:0, xl: 0}
		},
		{
			img: 'images/starter-pack/apk.png',
			url: "https://iopay-app.s3.amazonaws.com/iopay-release.apk",
			ml: {base: 8, md: 6, xl: 5},
			mt:{base: 3, md: 3,lg:3, xl: 0}

		},
		{
			img: 'images/starter-pack/btn_mirror.png',
			url: "https://iopay-app-cn.s3.cn-northwest-1.amazonaws.com.cn/iopay-v1.2.14.apk",
			ml: {base: 8, md: 5},
			display: {base: 'none', md: 'block'},
			mt:{base: 3, md: 3,lg:3, xl: 0}
		},
	]

	const DESKTOP_LINK = [
		{
			img: 'images/starter-pack/desktop.png',
			url: "https://github.com/iotexproject/iotex-explorer/releases/download/v1.0.15/ioPay-1.0.15.dmg",
			ml: {base: 5, md: 5, xl: 14}
		},
		{
			img: 'images/starter-pack/btn_mirror.png',
			url: "https://iopay-app-cn.s3.cn-northwest-1.amazonaws.com.cn/ioPay-1.0.15.dmg",
			ml: 5,
			display: {base: 'none', md: 'block'}

		}
	]

	const keyWordFontSize = useBreakpointValue({base: '1.25rem', md: '2rem'})

	return (
		<>
			<Box
				fontWeight={600}
				fontSize={{base: '0.9rem', xl: '1.2rem', '2xl': '3rem'}}
				mt={14}
			>
				<HighLight

					sourceStr={lang.t("cmc.starter.pack.section1.subtitle3")}
					keyArr={[
						{
							word: 'REQUIREMENT 3.',
							link: ""
						},
						{
							word: 'CMC REWARDS',
							link: ""
						},
					]}
					markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
				/>
			</Box>
			<Flex
				flexDirection={{base: 'column', md: 'row'}}
				mt={8}
				py={{base: 5, md: 0}}
				position={'relative'}
				justifyContent={{base: 'center', md: 'unset'}}
				borderRadius={{base: '15px', md: '20px'}}
				bg={' linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 133.06%)'}>
				<Image src={helper.cdn('images/starter-pack/download.png')} w={{base: '50%', md: '35%', xl: '30%'}}
				       px={{base: 0, md: 10, xl: 20}}
				       py={{base: 5, md: 10, xl: 20}} mx={{base: 'auto', md: 'unset'}}/>
				<Flex flexDirection={'column'} justifyContent={'space-around'} mt={{base: 10, md: 0}} px={{base: 2, md: 0}}
				      py={{lg: 10, xl: 12}}
				      pb={{base: 5, md: 0}}>
					<Flex flexDirection={'row'} alignItems={{base: 'flex-start', xl: 'center'}}>
						<Text w={{base: '5rem', md: '5rem'}} fontSize={{base: '0.9rem', md: '1rem'}}>MOBILE</Text>
						<Flex flexWrap={"wrap"} >
							{
								MOBILE_LINK.map((link, index) => (
									<Box
										display={link.display}
										cursor={"pointer"}
										key={index} onClick={() => {
										store.setClick(true)
										window.open(link.url)
									}}>
										<Image src={helper.cdn(link.img)} h={{base: '3rem', md: '2.2rem', xl: '3rem', lg: '3rem', '2xl': '3rem'}}
										       ml={link.ml}
										       mt={link.mt}/>
									</Box>
								))
							}
						</Flex>
					</Flex>
					<Flex flexDirection={'row'} alignItems={{base: 'flex-start', xl: 'center'}} mt={{base: 10, md: 0}}>
						<Text w={{base: '4.5rem', md: '5rem'}} fontSize={{base: '0.9rem', md: '1rem'}}>DESKTOP</Text>
						{
							DESKTOP_LINK.map((link, index) => (
								<Box
									display={link.display}
									cursor={"pointer"}
									key={index} onClick={() => {
									store.setClick(true)
									window.open(link.url)
								}}>
									<Image src={helper.cdn(link.img)} h={{base: '2.2rem', md: '2.2rem',lg:'3rem' ,xl: '3rem', '2xl': '3rem'}} ml={link.ml}/>
								</Box>
							))
						}
					</Flex>
					<Flex flexDirection={'row'} alignItems={{base: 'flex-start', xl: 'center'}} mt={{base: 10, md: 0}}>
						<Text w={{base: '4.5rem', md: '5rem'}} fontSize={{base: '0.9rem', md: '1rem'}}>LEDGER</Text>
						<Box

							cursor={"pointer"}
							onClick={() => {
								store.setClick(true)
								window.open('https://community.iotex.io/t/official-ledger-hw-wallet-thread/1132')
							}}>
							<Image src={helper.cdn('images/starter-pack/ledger.png')}
							       h={{base: '2.2rem', md: '2.2rem', lg: '3rem', '2xl': '3rem'}} ml={{base: 5, md: 5, xl: 14}}/>
						</Box>
					</Flex>
				</Flex>

				{
					store.isClick ? (<Completed width={'10%'}/>) : null
				}
			</Flex>

			<Box textAlign={'center'} mt={{base: 20}} whiteSpace={{base: 'pre-line'}} fontWeight={600}
			     fontSize={{base: '1rem', md: '1.5rem'}}>
				<HighLight sourceStr={'CMC Earn Code \n Join-IoTeX-100'} keyArr={[{word: 'Join-IoTeX-100', link: ''}]}
				           markActiveStyle={{color: "rgba(68, 255, 178, 1)", fontSize: keyWordFontSize}}
				/>
			</Box>

		</>
	)
})
