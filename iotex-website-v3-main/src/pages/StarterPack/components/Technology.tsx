import React from "react";
import {observer, useLocalObservable} from "mobx-react-lite";
import {
	Box,
	Flex,
	Image,
	ListItem,
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
	Text,
	UnorderedList
} from "@chakra-ui/react";
import HighLight from "@/components/HighLight";
import {useStore} from "@/store/index";
import {helper} from "@/utils/helper";

const Container = ({children}) => {
	return (
		<>
			<Box
				mt={20}
				bg={'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
				boxShadow={'inset -1px -1px 0px rgba(255, 255, 255, 0.25)'}
				css={{
					backdropFilter: 'blur(100px)'
				}}
				borderRadius={'20px'}
				px={{base: 5, md: 14}}
				py={{base: 10, md: 20}}
			>
				{children}
			</Box>
		</>
	)
}

const Technology = () => {
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
	return (
		<>
			<Container>
				<Flex justifyContent={'space-between'} flexDirection={{base: 'column', xl: 'row'}} alignItems={'center'}>
					<Image src={'images/ucam/img_ucam1.png'} w={'30%'} p={{base: 0, xl: 10}}/>
					<Box
						w={{base: '100%', xl: '60%'}}
						mt={{base: 5, xl: 0}}
					>
						<Box
							fontWeight={700}
							fontSize={{base: '1.15rem', xl: '1.8rem', '2xl': '3.5rem'}}
						>
							<HighLight sourceStr={lang.t('starter.pack.tech.title1')} keyArr={[{word: 'Ucam', link: ''}]}
							           markActiveStyle={{color: "#44FFB2"}}/>
						</Box>
						<Box mt={5}>
							<HighLight sourceStr={lang.t('starter.pack.tech.caption1')}
							           keyArr={[{
								           word: 'award winning camera',
								           link: 'https://www.ces.tech/Innovation-Awards/Honorees/2020/Honorees/U/Ucam-by-IoTeX-Fully-Private-Home-IP-Camera.aspx'
							           }]}
							           markActiveStyle={{color: "#44FFB2"}}/>
						</Box>
						<Box mt={5}>
							<HighLight sourceStr={lang.t('starter.pack.tech.caption2')}
							           keyArr={[{word: 'Ucam', link: 'http://iotex.io/ucam'}]}
							           markActiveStyle={{color: "#44FFB2"}}/>
						</Box>
					</Box>
				</Flex>
				<Flex mt={20} justifyContent={'space-between'} flexDirection={{base: 'column', xl: 'row'}}>
					<Flex
						bgImg={'url(images/starter-pack/tech_bg.png)'}
						w={{base: '100%', xl: '45%'}}
						h={{base: '12rem', md: '18rem', xl: '18rem'}}
						bgSize={{base: 'contain', md: 'cover'}}
						bgRepeat={'no-repeat'}
						justifyContent={'center'}
						alignItems={'center'}
						borderRadius={'20px'}
						bgPos={'center'}
						onClick={() => store.open('https://www.youtube.com/embed/tm_eTTly2io?autoplay=true')}
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
					<Flex w={{base: '100%', xl: '50%'}}
					      bg={' linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
					      boxShadow={'inset -1px -1px 0px rgba(255, 255, 255, 0.25)'}
					      css={{
						      backdropFilter: 'blur(100px)'
					      }}
					      borderRadius={'20px'}
					      px={{base: 5, md: 10}}
					      py={{base: 10, md: 10}}
					      flexDirection={'column'}
					      mt={{base: 10, xl: 0}}
					>
						<Text fontStyle={'italic'}
						>{lang.t('starter.pack.tech.caption3')}</Text>
						<Text textAlign={'right'} mt={10} fontWeight={'500'}>{lang.t('starter.pack.tech.caption4')}</Text>
					</Flex>
				</Flex>
			</Container>

			<Container>
				<Flex justifyContent={'space-between'} flexDirection={{base: 'column', xl: "row"}}>
					<Box w={{base: '100%', xl: '65%'}}>
						<Box
							fontWeight={700}
							fontSize={{base: '1.15rem', xl: '1.8rem', '2xl': '3.5rem'}}
						>
							<HighLight sourceStr={lang.t('starter.pack.tech.title2')} keyArr={[{word: "Pebble"}]}
							           markActiveStyle={{color: "#44FFB2"}}/>

						</Box>
						<Text mt={5}>{lang.t('starter.pack.tech.caption5')}</Text>
						<Text mt={5} color={'#44FFB2'}>{'You can track...'}</Text>
						<UnorderedList ml={10}>
							<ListItem>Motion - Precise motion tracking and traceability.</ListItem>
							<ListItem>Location and Speed - Exact location and the speed of movement for immutable truth.
							</ListItem>
							<ListItem>Climate - Temperature, humidity, air pressure, air quality. It can track and record it all.
							</ListItem>
							<ListItem>Light - Sophisticated state of the art sensors and detection capabilities.</ListItem>
						</UnorderedList>
						<Text>And much more!</Text>
						<Text>This revolutionary technology is shipping this September</Text>
						<Text mt={5}>What can Pebble be used for? Broadly speaking, Pebble is an ideal solution for the ever-growing
							yet rigid areas of supply chain, NFTs based on real-world objects, contract settlement, remote monitoring,
							mobile asset tracking, and process automation. Anything that uses data and has a future, Pebble is primed
							to disrupt.</Text>
					</Box>
					<Flex
						bgImg={'url(images/starter-pack/pebble_bg.png)'}
						bgSize={'cover'}
						bgPos={'center'}
						w={{base: '100%', xl: '40%'}}
						mr={{md: -14}}
						justifyContent={'center'}
						bgRepeat={'no-repeat'}
						px={10}
					>
						<Image src={helper.cdn('images/pebble/pebble_1.png')} w={{base: '40%', xl: '70%'}} h={{base:'30%',md:'40%',lg:'80%',xl:'fit-content'}}/>
					</Flex>
				</Flex>

				<Flex mt={10} justifyContent={'space-between'} flexDirection={{base:'column',xl:'row'}}>
					<Flex
						bgImg={'url(images/starter-pack/tech_bg2.png)'}
						w={{base: '100%', xl: '45%'}}
						h={{base: '12rem', md: '18rem', xl: '18rem'}}
						bgSize={{base: 'contain', md: 'cover'}}
						bgRepeat={'no-repeat'}
						justifyContent={'center'}
						alignItems={'center'}
						borderRadius={'20px'}
						bgPos={'center'}
						onClick={()=>store.open('https://player.vimeo.com/video/507687778?h=b9c579271a&autoplay=1')}
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
					<Flex w={{base: '100%', xl: '50%'}}
					      bg={' linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
					      boxShadow={'inset -1px -1px 0px rgba(255, 255, 255, 0.25)'}
					      css={{
						      backdropFilter: 'blur(100px)'
					      }}
					      borderRadius={'20px'}
					      px={{base: 5, md: 10}}
					      py={{base: 10, md: 10}}
					      flexDirection={'column'}
					      mt={{base: 10, xl: 0}}
					>
						<Text fontStyle={'italic'}>{lang.t('starter.pack.tech.caption6')}</Text>
						<Text textAlign={'right'} mt={10} whiteSpace={'pre-line'}
						      fontWeight={'500'}>{lang.t('starter.pack.tech.caption7')}</Text>
					</Flex>
				</Flex>
			</Container>
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

export default observer(Technology)
