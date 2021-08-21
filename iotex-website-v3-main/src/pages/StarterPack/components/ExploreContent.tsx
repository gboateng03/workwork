import {Box, Flex, Image, Link, Text, useBreakpointValue} from "@chakra-ui/react";
import Carousel, {arrowsPlugin, slidesToShowPlugin} from "@brainhubeu/react-carousel";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {helper} from "@/utils/helper";
import React from "react";
import {observer, useLocalObservable} from "mobx-react-lite";

const ExploreContent = () => {
	const store = useLocalObservable(() => ({
		sliderIndex: 0,
		setSliderIndex(value) {
			this.sliderIndex = value
		},

	}))
	const LAST_SLIDER_INDEX = 3
	const numberOfSlides = useBreakpointValue({base: 1, sm: 2, md: 3})
	const sliderOnClick = (value) => {
		if (value + numberOfSlides <= LAST_SLIDER_INDEX) {
			store.setSliderIndex(value)
		}
	}
	return (
		<>
			<Box px={{base: 5, md: 20}}>
				<Carousel value={store.sliderIndex}
				          onChange={(value) => sliderOnClick(value)}
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
				>
					<Link href={'https://medium.com/iotex/iotex-2021-the-year-ahead-acf743e2df03'} isExternal _hover={{}}>
						<Flex w={'90%'} flexDirection={'column'} h={'18rem'} mx={'auto'} justifyContent={{base:'center',md:'unset'}}>
							<Image src={helper.cdn('images/starter-pack/bg1.png')} mb={3} mt={8}/>
							<Text fontWeight={'semibold'}>IoTeX 2021: The Year Ahead</Text>
						</Flex>
					</Link>

					<Link href={'https://medium.com/iotex/mainnet-v1-2-activating-the-cambrian-explosion-on-iotex-704ab8a056e3'} isExternal _hover={{}}>
						<Flex w={'90%'} flexDirection={'column'} h={'18rem'} mx={'auto'} justifyContent={{base:'center',md:'unset'}}>
							<Image src={helper.cdn('images/starter-pack/bg2.png')} mb={3} mt={8}/>
							<Text fontWeight={'semibold'}>Mainnet v1.2 — Activating the Cambrian Explosion on IoTeX</Text>
						</Flex>
					</Link>
					<Link href={'https://iotex.io/blog/iotex-eating-iota-marketshare/'} isExternal _hover={{}}>
						<Flex w={'90%'} flexDirection={'column'} h={'18rem'} mx={'auto'} justifyContent={{base:'center',md:'unset'}}>
							<Image src={helper.cdn('images/starter-pack/bg3.png')} mb={3} mt={8}/>
							<Text fontWeight={'semibold'}> In the News: IoTeX is Eating IOTA Market Share With 1.3 Update. </Text>
						</Flex>
					</Link>
				</Carousel>
			</Box>
		</>
	)
}
export default observer(ExploreContent)
