import React from "react";
import {observer, useLocalObservable} from "mobx-react-lite";
import {Box, Text, Flex, SimpleGrid, Image, ModalOverlay, ModalContent, ModalBody, Modal, Link} from "@chakra-ui/react";
import {useStore} from "@/store/index";
import {helper} from "@/utils/helper";

const LiveProject = () => {
	const {lang} = useStore()
	const projects = [
		{name: 'mimo DEX', img: 'mimo.png',url:'https://ecosystem.iotex.io/post/232'},
		{name: 'Cyclone', img: 'cyclone.png',url:'https://ecosystem.iotex.io/post/953'},
		{name: 'Healthnet', img: 'Healthnet.png',url:'https://ecosystem.iotex.io/post/944'},
		{name: 'Linkstar', img: 'linkstar.png',url:'https://cat.gamefantasy.club/linkstar'},
		{name: 'Burn-Drop', img: 'dapp_burndrop.png',url:'https://burndrop.iotex.io/\n'},
		{name: 'Stake', img: 'stake.png',url:'https://onboard.iotex.io/hardware/staking-voting\n'},
	]
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
			<Box
				bg={'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
				boxShadow={'inset -1px -1px 0px rgba(255, 255, 255, 0.25)'}
				css={{
					backdropFilter: 'blur(100px)'
				}}
				borderRadius={'20px'}
				px={{base: 5, md: 14}}
				py={{base: 10, md: 20}}
				mt={10}
			>
				<Flex
					justifyContent={'space-between'}
					flexDirection={{base:'column',xl:'row'}}
				>
					<Text
						fontSize={{xl: '1.5rem', '2xl': '3rem'}}
						fontWeight={600}
						whiteSpace={'pre-line'}
					>{lang.t('starter.pack.project.title1')}</Text>
					<Box w={{base:'100%',xl:'70%'}}
					>
						<Text fontSize={'0.9rem'} dangerouslySetInnerHTML={{__html: lang.t('starter.pack.project.caption1')}}/>
					</Box>
				</Flex>
				<Flex mt={10} justifyContent={'space-between'} flexDirection={{base:'column',lg:'row'}}>
					<Flex
						bgImg={'url(images/starter-pack/tech_video_bg.png)'}
						w={{base: '100%', xl: '45%'}}
						h={{base: '12rem', md: '18rem', xl: '18rem'}}
						bgSize={{base: 'contain', md: 'cover'}}
						bgRepeat={'no-repeat'}
						justifyContent={'center'}
						alignItems={'center'}
						borderRadius={'20px'}
						bgPos={'center'}
						onClick={()=>store.open('https://player.vimeo.com/video/588983687?h=1f3585dab8&autoplay=1')}
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
					      py={{base: 10, md: 4}}
					      flexDirection={'column'}
					      mt={{base: 10, xl: 0}}
					>
						<Text fontStyle={'italic'}>{lang.t('starter.pack.project.caption7')}</Text>
						<Text textAlign={'right'} mt={10} whiteSpace={'pre-line'}
						      fontWeight={'500'}>{lang.t('starter.pack.project.caption8')}</Text>
					</Flex>
				</Flex>

			</Box>

			<Flex
				mt={10}
				bg={'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
				boxShadow={'inset -1px -1px 0px rgba(255, 255, 255, 0.25)'}
				css={{
					backdropFilter: 'blur(100px)'
				}}
				borderRadius={'20px'}
				px={{base: 5, md: 14}}
				py={{base: 10, md: 20}}
				justifyContent={'space-between'}
				flexDirection={{base:'column',lg:'row'}}
			>
				<Box>
					<Text
						fontSize={{xl: '1.5rem', '2xl': '3rem'}}
						fontWeight={600}
						whiteSpace={{base:'normal',lg:'pre-line'}}
					>{lang.t('starter.pack.project.title2')}</Text>
					<Text
						mt={5}
						fontSize={{xl: '1.5rem', '2xl': '3rem'}}
						fontWeight={600}
						whiteSpace={{base:'normal',lg:'pre-line'}}
					>{lang.t('starter.pack.project.title2-1')}</Text>
				</Box>

				<Box w={{base:'100%',lg:'70%'}}
				>
					<Text mt={{base:5,lg:0}} whiteSpace={'pre-line'} fontSize={'0.9rem'}>{lang.t('starter.pack.project.caption4')}</Text>

					<Box
						bg={' linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
						boxShadow={'inset -1px -1px 0px rgba(255, 255, 255, 0.25)'}
						css={{
							backdropFilter: 'blur(100px)'
						}}
						borderRadius={'20px'}
						px={{base: 5, md: 10}}
						py={{base: 10, md: 4}}
						mt={10}
					>
						<Text whiteSpace={'pre-line'} mt={5} fontStyle={'italic'}>{lang.t('starter.pack.project.caption5')}</Text>
						<Text whiteSpace={'pre-line'} mt={5} textAlign={'right'}>{lang.t('starter.pack.project.caption6')}</Text>
					</Box>
				</Box>
			</Flex>

			<Text
				fontSize={{xl: '1.2rem', '2xl': '3rem'}}
				fontWeight={'600'}
				mt={10}>{lang.t('starter.pack.project.title3')}</Text>
			<SimpleGrid columns={[2,,2,3,6]} mt={10} spacingX={5} spacingY={5}>
				{
					projects.map((project, index) => (
						<Link href={project.url} isExternal _hover={{}} _focus={{}}>
							<Flex
								key={index}
								bg={'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
								flexDirection={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								p={5}
								borderRadius={'10'}
							>
								<Image src={`images/starter-pack/${project.img}`}/>
								<Text>{project.name}</Text>
							</Flex>
						</Link>
					))
				}
			</SimpleGrid>
			<Text textAlign={'center'} mt={10} color={'#44FFB2'}>{lang.t('view.more')+'>>'}</Text>

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

export default observer(LiveProject)
