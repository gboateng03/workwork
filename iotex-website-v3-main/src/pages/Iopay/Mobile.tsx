import {useStore} from "../../store"
import {Box, Text, Image, Flex, chakra} from "@chakra-ui/react"
import React from "react"
import {browser} from '../../lib/bowser'
import {publicConfig} from "../../config/public"
import {observer} from "mobx-react-lite"
import IopayHelmet from "@/pages/Iopay/IopayHelmet";

const IopayAndroid = () => {
	return (
		<>
			<Flex p="0 70px" direction="column" flex="auto"><Image marginTop="auto" src="/images/mobile_android.svg" alt=""/></Flex>
			<Flex justifyContent="center" align="center" background="url(/images/iopay_mobile_bottom.png)" position="absolute"
			      left={0} right={0} h="92px" bottom={0}>
				<chakra.a href={publicConfig.IOPAY_MIRROR_DOWNLOAD}><Image w="72px" h="36px" src="/images/mobile_mirror.svg"
				                                                           alt=""/></chakra.a>
				<chakra.a href={publicConfig.IOPAY_APK_DOWNLOAD}><Image w="116px" h="36px" ml="8px" src="/images/mobile_apk.png"
				                                                        alt=""/></chakra.a>
				<chakra.a href={publicConfig.IOPAY_GOOGLE_DOWNLOAD}><Image w="120px" h="36px" ml="8px"
				                                                           src="/images/mobile_google.svg" alt=""/></chakra.a>
			</Flex>
		</>
	)
}

const IopayIOS = () => {
	return (
		<>
			<Flex p="0 70px" direction="column" flex="auto"><Image marginTop="auto" src="/images/mobile_ios.svg"
			                                                       alt=""/></Flex>
			<Flex background="url(/images/iopay_mobile_bottom.png)" backgroundSize="100% 100%" position="absolute"
			      align="center" justifyContent="center" left={0} right={0} h="120px" bottom={0}>
				<chakra.a href={publicConfig.IOPAY_IOS_DOWNLOAD}><Image w="185px" h="60px" src="/images/iopay_appstore.svg"
				                                                        alt=""/></chakra.a>
			</Flex>
		</>
	)
}

const IopayMobile = observer(() => {
	const {lang} = useStore()
	const OSName = browser.getOSName()
	return (
		<Box background="url(/images/mobile_bg.png) no-repeat" h="100vh" backgroundSize="100% 100%">
			<IopayHelmet/>
			<Flex h="100%" position="relative" direction="column" overflow="hidden" backgroundSize="100% 100%"
			      background="url(images/mobile_bg2.png) no-repeat">
				<Flex alignItems="center" marginTop="14px">
					<Image ml="12px" w="31px" h="29px" src="/images/iopay_logo.svg" alt=""/>
					<Text ml="8px" fontWeight={500}
					      fontSize="16px"
					      lineHeight="11px" opacity={0.6}>ioPay</Text>
				</Flex>
				<Flex mt="21px" justifyContent="center"><Text maxW="80%" textAlign="center" fontWeight="bold"
				                                              fontSize="28px"
				                                              lineHeight="120%">{lang.t(`iopay.desc`)}</Text></Flex>
				{OSName === 'iOS' ? <IopayIOS/> : <IopayAndroid/>}
			</Flex>
		</Box>
	)
})

export default IopayMobile
