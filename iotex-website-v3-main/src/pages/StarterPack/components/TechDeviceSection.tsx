import {observer} from "mobx-react-lite";
import React from "react";
import {Box, Flex, Image, SimpleGrid, Text} from "@chakra-ui/react";
import {useStore} from "@/store/index";
import HighLight from "@/components/HighLight";
import {Card} from "@/pages/Pebble/Card";

const TechDeviceSection = () => {
	const {lang} = useStore()
	return (
		<>
			<Text
				fontSize={{xl: '1.2rem', '2xl': '3rem'}}
				fontWeight={600}
				mt={20}
			>
				{lang.t('starter.pack.tech.device.title')}
			</Text>
			<Box
				bg={'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
				boxShadow={'inset -1px -1px 0px rgba(255, 255, 255, 0.25)'}
				css={{
					backdropFilter: 'blur(100px)'
				}}
				borderRadius={'20px'}
				mt={10}
				px={{base: 5, md: 10}}
				py={{base: 5, md: 10}}
				lineHeight={'1.8rem'}
				whiteSpace={'pre-line'}
			>
				<SimpleGrid columns={[1, 1, 1, 2]} spacingX={28} spacingY={5}>
					{/*group1*/}
					<Box>
						<HighLight sourceStr={lang.t('starter.pack.tech.device.caption1')}
						           keyArr={[{word: 'Ucam', link: ''}, {word: 'Read More >>', link: ''}]}
						           markActiveStyle={{color: '#44FFB2'}}/>
					</Box>
					<Box>
						<Image src={'images/starter-pack/tech_device_bg1.png'} w={'95%'}/>
					</Box>
					{/*group2*/}
					<Box>
						<Image src={'images/starter-pack/tech_device_bg2.png'} w={'95%'}/>
					</Box>
					<Box>
						<Text>{lang.t('starter.pack.tech.device.caption2')}</Text>
					</Box>
					{/*	group3*/}
					<Box>
						<HighLight sourceStr={lang.t('starter.pack.tech.device.caption3')}
						           keyArr={[{word: 'Read More >>', link: ''}]} markActiveStyle={{color: '#44FFB2'}}/>
					</Box>
					<Flex flexDirection={'column'}>
						<Flex flexDirection={{base:'column',md:'row'}}>
							<Card url='images/pebble/icon_location.png' text='LOCATION'  />
							<Card url='images/pebble/icon_vibration.png' text='MOTION'  marginLeft={{base:0,md:5}}/>
						</Flex>
						<Flex mt={5} flexDirection={{base:'column',md:'row'}}>
							<Card url='images/pebble/icon_temperature.png' text='CLIMATE' />
							<Card url='images/pebble/icon_sunlight.png' text='LIGHT' marginLeft={{base:0,md:5}}/>
						</Flex>
					</Flex>
				</SimpleGrid>
			</Box>
		</>
	)
}

export default observer(TechDeviceSection)
