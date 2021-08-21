import {observer} from "mobx-react-lite";
import React from "react";
import {SectionContainer} from "../../Pebble/SectionContainer";
import {Box, Flex, Image, SimpleGrid, Text} from "@chakra-ui/react";
import {Title} from "../../Pebble/Title";
import {Button} from "@/components/Button";
import {useStore} from "@/store/index";
import {Caption} from "../../Pebble/Caption";
import {helper} from "@/utils/helper";

const ContentTab = () => {
	const {lang} = useStore()
	const data = [
		{
			image: 'images/media-center/data_img_1.png',
			text: 'IoTeX’s Ucam is a blockchain-based, encrypted private home...'
		},
		{
			image: 'images/media-center/data_img_2.png',
			text: 'IoTeX’s Ucam is a blockchain-based, encrypted private home...'
		},
		{image: 'images/media-center/data_img_3.png', text: 'IoTeX’s Ucam is a blockchain-based, encrypted private home...'}
	]

	const Card = ({image, text}) => {
		return (
			<Flex
				flexDirection={'column'}
			>
				<Image src={helper.cdn(image)}/>
				<Caption text={text} marginTop={'35px'}/>
			</Flex>
		)
	}

	return (
		<>
			<SectionContainer marginTop={'6rem'}>
				<Flex>
					<Box>
						<Title text={'When Privacy Hits Home'}/>
						<Button name={lang.t('learn.more')} href={'/'} size={{base: "100%", md: "20rem"}}/>
					</Box>
					<Box>
						<Image borderRadius={'20px'} src={helper.cdn('images/media-center/img_When_Privacy_Hits_Home.png')}/>
					</Box>
				</Flex>
			</SectionContainer>
			<SectionContainer marginTop={'8rem'}>
				<Text fontSize={'2rem'} fontWeight={'600'}>Keynotes & Workshops</Text>
				<SimpleGrid columns={3} spacing={{md:'2.5rem'}} marginTop={'40px'}>
					{
						data.map((item)=>{
							return(
								<Card image={item.image} text={item.text}/>
							)
						})
					}
				</SimpleGrid>
			</SectionContainer>
			<SectionContainer marginTop={'8rem'}>
				<Text fontSize={'2rem'} fontWeight={'600'}>Podcasts & Interviews</Text>
				<SimpleGrid columns={3} spacing={{md:'2.5rem'}} marginTop={'40px'}>
					{
						data.map((item)=>{
							return(
								<Card image={item.image} text={item.text}/>
							)
						})
					}
				</SimpleGrid>
			</SectionContainer>
		</>
	)
}
export default observer(ContentTab)
