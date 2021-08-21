import {useStore} from '../../store';
import {Flex, Box, Image, Text, chakra} from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import axios from "axios"
import {publicConfig} from "../../config/public";
import {observer} from 'mobx-react-lite';
import IopayHelmet from "@/pages/Iopay/IopayHelmet";

const getIopayDownloadUrl = async () => {
	const axiosInstance = axios.create({timeout: 5000})
	const resp = await axiosInstance.get(publicConfig.IOPAY_GITHUB_API_URL)
	if (resp.status !== 200) {
		return
	}
	if (!resp.data.assets || !resp.data.assets.length) {
		return
	}
	const packages = {mac: "", linux: "", window: ""}
	resp.data.assets.forEach((item) => {
		if (/.dmg$/.test(item.name)) {
			packages.mac = item.browser_download_url
		}
		if (/.snap$/.test(item.name)) {
			packages.linux = item.browser_download_url
		}
		if (/.exe$/.test(item.name)) {
			packages.window = item.browser_download_url
		}
	})
	return packages
}

const IopayBg = (props) => {
	return (
		<Box {...props}>
			<Image src="/images/iopay_group.png" alt="iopay pc bg"/>
		</Box>
	)
}


const DesktopItem = ({href, ...restProps}) => <chakra.a href={href} display="flex" alignItems="center"
                                                        justifyContent="center" cursor="pointer"
                                                        background="rgba(255, 255, 255, 0.05)"
                                                        border="1px solid rgba(255, 255, 255, 0.1)"
                                                        boxSizing="border-box"
                                                        w="232px"
                                                        lineHeight="60px"
                                                        textAlign="center"
                                                        fontFamily="Roboto"
                                                        font-weight="bold"
                                                        fontSize="20px"
                                                        borderRadius="4px" {...restProps} />

const MobileItem = props => <Image cursor="pointer" alt="" {...props} />

const IopayDownload = (props) => {
	const {lang} = useStore()
	const [packages, setPackages] = useState<{ mac: string; linux: string; window: string; }>()
	useEffect(() => {
		getIopayDownloadUrl().then((res) => {
			setPackages(res)
		})

	}, [])
	return (
		<Box {...props}>
			<Text fontSize="80px" line-height="100%" color="#00B4A0">ioPay</Text>
			<Text mt="24px" fontSize="54px" lineHeight="100%">{lang.t(`iopay.desc`)}</Text>
			<Box mt="55px">
				<Text fontSize="28px" opacity={0.6}>{lang.t(`iopay.mobile`)}</Text>
				<Flex mt="16px">
					<chakra.a href={publicConfig.IOPAY_IOS_DOWNLOAD}><MobileItem w="179px" h="60px"
					                                                             src="/images/iopay_appstore.svg"/></chakra.a>
					<chakra.a href={publicConfig.IOPAY_GOOGLE_DOWNLOAD}><MobileItem ml="16px" w="201px" h="60px"
					                                                                src="/images/iopay_googleplay.svg"/>
					</chakra.a>
					<chakra.a href={publicConfig.IOPAY_APK_DOWNLOAD}><MobileItem ml="16px" w="200px" h="60px"
					                                                             src="/images/iopay_apk.svg"/></chakra.a>
					<chakra.a href={publicConfig.IOPAY_MIRROR_DOWNLOAD}><MobileItem ml="16px" w="60px" h="60px"
					                                                                src="/images/iopay_mirrorcn.svg"/></chakra.a>
				</Flex>
			</Box>
			<Box mt="53px">
				<Text fontSize="28px" opacity={0.6}>{lang.t(`iopay.desktop`)}</Text>
				<Flex mt="16px">
					<DesktopItem href={packages?.mac}>
						<Image w="32px" h="32px" mr="8px" src="/images/iopay_mac.svg" alt=""/>MacOS
					</DesktopItem>
					<DesktopItem ml="16px" href={packages?.window}>
						<Image w="32px" h="32px" mr="8px" src="/images/iopay_windows.svg" alt=""/>Windows
					</DesktopItem>
					<DesktopItem ml="16px" href={packages?.linux}>
						<Image w="32px" h="32px" mr="8px" src="/images/iopay_linux.svg" alt=""/>Linux
					</DesktopItem>
				</Flex>
			</Box>
			<Text>
				<Text></Text>
				<Text></Text>
			</Text>
		</Box>
	)
}

const DescItem = ({title, content, imgUrl}: { title: string, content: string, imgUrl: string }) => {
	return (
		<Flex alignItems="center" wrap="nowrap" w="33.33%" justifyContent="center" flex="auto">
			<Image width="60px" height="60px" src={imgUrl} alt=""/>
			<Box ml="24px">
				<Text fontSize="24px"
				      lineHeight="31px">{title}</Text>
				<Text mt="8px" opacity={0.6} fontSize="16px"
				      lineHeight="120%">{content} </Text>
			</Box>
		</Flex>
	)
}

const IopayPc = observer(() => {
	const {lang} = useStore();
	return (
		<Flex minH="100vh" direction="column">
			<IopayHelmet/>
			<Box pb="70px" background="#2F343B" flex="auto">
				<Flex pl="64px" alignItems="center" pt="48px">
					<Image ml="12px" w="31px" h="29px" src="/images/iopay_logo.svg" alt=""/>
					<Text ml="8px" fontWeight={500}
					      fontSize="24px"
					      lineHeight="16px" opacity={0.6}>ioPay</Text>
				</Flex>
				<Flex pt="95px" wrap="wrap" justifyContent="center">
					<IopayBg w="900px" h="560px"/>
					<IopayDownload ml="75px"/>
				</Flex>
			</Box>
			<Flex wrap="wrap" align="center" h="276px" background={`#2F343B url(/images/iopay_bottom_bg.png) no-repeat`}>
				<DescItem title={lang.t(`iopay.experience.title`)} content={lang.t(`iopay.experience.content`)}
				          imgUrl="/images/iopay_icon_experience.svg"/>
				<DescItem title={lang.t(`iopay.safe.title`)} content={lang.t(`iopay.safe.content`)}
				          imgUrl="/images/iopay_icon_safe.svg"/>
				<DescItem title={lang.t(`iopay.integrated.title`)} content={lang.t(`iopay.integrated.content`)}
				          imgUrl="/images/iopay_icon_integrated.svg"/>
			</Flex>
		</Flex>
	)
})

export default IopayPc
