import React from "react";
import {Box, Divider, Flex, Image, Link, Text, useBreakpointValue} from "@chakra-ui/react";
import Carousel, {arrowsPlugin, slidesToShowPlugin} from "@brainhubeu/react-carousel";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {observer, useLocalObservable} from "mobx-react-lite";
import {useStore} from "@/store/index";
import VideoSection from "@/pages/CmcStarterPack/components/VideoSection";
import {helper} from "@/utils/helper";


const LearnPart = () => {
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
	const {lang} = useStore()
	return (
		<>
			<Box
				maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
				mx={'auto'}
				mt={{base:20,md:20,xl:40}}
			>
				<Text
					fontWeight={600}
					fontSize={{base:'1.15rem',xl: '1.8rem', '2xl': '3.5rem'}}
				>
					LEARN
				</Text>
				<Divider mt={3} mb={10}/>

			</Box>
			<VideoSection/>

			<Box
				maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
				mx={'auto'}
			>
				<Text
					fontSize={{xl: '1.2rem', '2xl': '3rem'}}
					fontWeight={600}
					mt={20}
				>
					READ ONBOARDING PACK
				</Text>
				<Flex
					bg={'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 133.06%);'}
					borderRadius={'20px'}
					px={{base:10,xl:20}}
					py={10}
					mt={8}
					justifyContent={'space-between'}
					flexDirection={{base:'column',md:'row'}}
					alignItems={'center'}
				>
					<Text whiteSpace={'pre-line'} fontSize={{base:'1.25rem',md:'1.3rem','xl': '2.25rem'}} fontWeight={600} textAlign={{base:'center',md:'unset'}}>
						{'Your One-stop Shop for \n Must-know Information \n' +
						'about IoTeX.'}
					</Text>
					<Link href={'https://onboard.iotex.io/'} isExternal _focus={{}} _hover={{}}>
						<Flex
							mr={5}
							flexDirection={'column'}
							alignItems={'center'}
						>
							<Image src={helper.cdn('images/starter-pack/Onboarding.png')} w={{base:'30%',md:'55%'}} mt={{base:5,md:0}}/>
							<Text fontWeight={600}>{lang.t('onboarding.Pack')}</Text>
							<Text whiteSpace={'pre-line'} textAlign={'center'} mt={2}
							      fontSize={'0.75rem'}>{'Explore the Multiple Facets \n of IoTeX'}</Text>
						</Flex>
					</Link>
				</Flex>
			</Box>
			<Box
				maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
				mx={'auto'}
			>
				<Text
					fontSize={{xl: '1.2rem', '2xl': '3rem'}}
					fontWeight={600}
					mt={20}
				>
					EXPLORE OUR CONTENT
				</Text>
			</Box>
			<Box px={{base:5,md:20}}>
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
	);
}
export default observer(LearnPart)
