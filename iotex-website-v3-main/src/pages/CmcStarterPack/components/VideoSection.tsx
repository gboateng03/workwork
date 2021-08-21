import {observer, useLocalObservable} from "mobx-react-lite";
import {
	Box,
	Flex,
	Image,
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
	Text,
	useBreakpointValue
} from "@chakra-ui/react";
import {useStore} from "@/store/index";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import React from "react";
import Carousel, {arrowsPlugin, slidesToShowPlugin} from "@brainhubeu/react-carousel";
import {helper} from "@/utils/helper";

const VideoItem = ({bgImg, onClickFunc, videoUrl}) => {
	return (
		<>
			<Flex
				onClick={() => onClickFunc(videoUrl)}
				w={{base:'100%',md:'90%'}}
				cursor={"pointer"}
				h={{base:'9.5rem',md:'5.5rem',lg:'8.5rem',xl:'11.5rem'}}
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
					borderRadius:"10px"
				}}
				_hover={{
					_after: {
						opacity: 1,
					}
				}}
				>
				<Image
					boxSize={{base: "40px",md:'50px' ,xl: "80px"}}
					objectFit="cover"
					src={helper.cdn('images/play-icon.png')}
					alt="img_circular3"
					mx="10%"
					cursor="pointer"
				/>
			</Flex>
		</>
	)
}

const VideoSection = () => {

	const VIDEOS = [
		{
			bgImg: 'images/starter-pack/video1_bg.png',
			videoUrl: 'https://www.youtube.com/embed/9l6i_mtYP0Q?autoplay=true'
		},
		{
			bgImg: 'images/starter-pack/video2_bg.png',
			videoUrl: 'https://www.youtube.com/embed/9Zdwo1RQfzM?autoplay=true'

		},
		{
			bgImg: 'images/starter-pack/video3_bg.png',
			videoUrl: 'https://www.youtube.com/embed/MyW4ofSH7G0?autoplay=true'
		},
		{
			bgImg: 'images/starter-pack/video4_bg.png',
			videoUrl: 'https://www.youtube.com/embed/PZh8Gojtv-A?autoplay=true'
		},
	]

	const store = useLocalObservable(() => ({
		sliderIndex: 0,
		setSliderIndex(value) {
			this.sliderIndex = value
		},
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
	const LAST_SLIDER_INDEX = VIDEOS.length
	const numberOfSlides = useBreakpointValue({base: 1, sm: 2, md: 3})
	const sliderOnClick = (value) => {
		if (value + numberOfSlides <= LAST_SLIDER_INDEX) {
			store.setSliderIndex(value)
		}
	}
	const {lang} = useStore()
	return (
		<>
			<Text
				fontSize={{xl: '1.2rem', '2xl': '3rem'}}
				fontWeight={600}
				mt={20}
				maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
				mx={'auto'}
			>
				WATCH INTRO VIDEOS
			</Text>
			<Box
				mt={10}
				px={{base: 5, md: 20}}
			>
				<Carousel
					plugins={[
						{
							resolve: slidesToShowPlugin,
							options: {
								numberOfSlides: numberOfSlides
							}
						},
						{
							resolve: arrowsPlugin,
							options: {
								arrowLeft: <ChevronLeftIcon _hover={{cursor: 'pointer'}} color={'rgba(68, 255, 178, 1)'} w={33}
								                            h={75}/>,
								arrowLeftDisabled: <ChevronLeftIcon _hover={{cursor: 'pointer'}} w={33} h={75}/>,
								arrowRight: <ChevronRightIcon _hover={{cursor: 'pointer'}}
								                              color={store.sliderIndex + Number(numberOfSlides) === LAST_SLIDER_INDEX ? '' : 'rgba(68, 255, 178, 1)'}
								                              w={33} h={75}/>,
								arrowRightDisabled: <ChevronRightIcon _hover={{cursor: 'pointer'}} w={33} h={75}/>,
								addArrowClickHandler: true,
							}
						},
					]}
					value={store.sliderIndex}
					onChange={(value) => sliderOnClick(value)}
				>
					{
						VIDEOS.map((video) => {
							return (
								<VideoItem bgImg={video.bgImg} onClickFunc={store.open} videoUrl={video.videoUrl}/>
							)
						})
					}
				</Carousel>
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

export default observer(VideoSection)
