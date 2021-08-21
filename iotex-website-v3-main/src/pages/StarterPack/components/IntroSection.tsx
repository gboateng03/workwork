import React from "react";
import {observer, useLocalObservable} from "mobx-react-lite";
import {Box, Divider, Flex, Image, Modal, ModalBody, ModalContent, ModalOverlay, Text} from "@chakra-ui/react";
import {useStore} from "@/store/index";
import {helper} from "@/utils/helper";

interface ContentItemProps {
	title: string,
	desc: string,
	bgImg: string,
	videoUrl: string,
	onClickFunc: Function
}


const ContentItem = ({title, desc, bgImg, videoUrl, onClickFunc}: ContentItemProps) => {
	return (
		<Flex
			mt={10}
			_first={{mt:0}}
			justifyContent={'space-between'}
			alignItems={'center'}
			flexDirection={{base:'column',lg:'row'}}
			bg={'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
			boxShadow={'inset -1px -1px 0px rgba(255, 255, 255, 0.25)'}
			css={{
				backdropFilter: 'blur(100px)'
			}}
			borderRadius={'20px'}
			px={{base: 5, md: 14}}
			py={{base: 10, md: 14}}
		>
			<Box
				width={'100%'}
				pr={{base:'0',md:14}}
			>
				<Text
					fontWeight={'semibold'}
					fontSize={{base: '1.35rem', xl: '2rem', '2xl': '3.5rem'}}
					whiteSpace={{base:'unset',md:'pre-line'}}
				>{title}</Text>
				<Text mt={3} fontSize={{base:'1rem',lg:'0.75rem',xl:'0.9rem','2xl':"1.25rem"}}>{desc}</Text>
			</Box>
			<Flex
				mt={{base:5,lg:0}}
				onClick={() => onClickFunc(videoUrl)}
				w={{base: '100%', lg: '80%',xl:'80%'}}
				cursor={"pointer"}
				h={{base: '11rem',md:'16rem' ,lg: '10.5rem', xl: '14.5rem','2xl':"20rem"}}
				justifyContent={'center'}
				alignItems={'center'}
				backgroundSize={'100%'}
				bgRepeat={'no-repeat'}
				position={'relative'}
				_after={{
					top: '0',
					left: 0,
					right: 0,
					bottom: 0,
					position: "absolute",
					content: `""`,
					backgroundImage: `url('${bgImg}')`,
					opacity: '0.6',
					backgroundSize: '100% 100%',
					transition: 'opacity .3s',
					backdropFilter: 'blur(100px)',
					zIndex: -1,
					borderRadius: "10px"
				}}
				_hover={{
					_after: {
						opacity: 1,
					}
				}}
			>
				<Image
					boxSize={{base: "40px", md: '50px', xl: "80px"}}
					objectFit="cover"
					src={helper.cdn('images/play-icon.png')}
					alt="img_circular3"
					mx="10%"
					cursor="pointer"
				/>
			</Flex>
		</Flex>
	)
}

const IntroSection = () => {
	const {lang} = useStore()
	const store = useLocalObservable(() => ({
		isOpen: false,
		videoUrl: '',
		open(videoUrl) {
			store.videoUrl = videoUrl
			store.isOpen = true;
		},
		onClose() {
			store.isOpen = false;
		},
	}))
	const contents = [
		{
			title: lang.t('starter.pack.intro.article1.title'),
			desc: lang.t('starter.pack.intro.article1.desc'),
			bgImg: 'images/starter-pack/video1_bg.png',
			videoUrl: 'https://www.youtube.com/embed/9l6i_mtYP0Q?autoplay=true'
		},
		{
			title: lang.t('starter.pack.intro.article2.title'),
			desc: lang.t('starter.pack.intro.article2.desc'),
			bgImg: 'images/starter-pack/video2_bg.png',
			videoUrl: 'https://www.youtube.com/embed/9Zdwo1RQfzM?autoplay=true'
		},
		{
			title: lang.t('starter.pack.intro.article3.title'),
			desc: lang.t('starter.pack.intro.article3.desc'),
			bgImg: 'images/starter-pack/video3_bg.png',
			videoUrl: 'https://www.youtube.com/embed/MyW4ofSH7G0?autoplay=true'
		},
		{
			title: lang.t('starter.pack.intro.article4.title'),
			desc: lang.t('starter.pack.intro.article4.desc'),
			bgImg: 'images/starter-pack/video4_bg.png',
			videoUrl: 'https://www.youtube.com/embed/PZh8Gojtv-A?autoplay=true'
		},
	]
	return (
		<>
			<Text
				fontSize={{base: '1.15rem', xl: '2rem', '2xl': '3.5rem'}}
				fontWeight={600}
				mt={20}
			>
				{lang.t('starter.pack.intro.title')}
			</Text>
			<Divider mt={3} mb={10}/>
			<Box

				mt={10}

			>
				{
					contents.map((content,index) => <ContentItem title={content.title} desc={content.desc} bgImg={content.bgImg} key={index}
					                                     videoUrl={content.videoUrl} onClickFunc={store.open}/>)
				}
			</Box>
			<Modal isOpen={store.isOpen} onClose={store.onClose} size="6xl">
				<ModalOverlay/>
				<ModalContent w="80%" h={{base: "50vh", md: "70vh"}}>
					<ModalBody
						bg="bgColor"
						border="1px"
						borderColor="borderColor"
						padding={0}
					>
						<iframe src={store.videoUrl}
						        loading="lazy"
						        width="100%"
						        height="100%"
						        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
						        allowFullScreen={true}/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default observer(IntroSection)
