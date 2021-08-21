import React from "react"
import {Box, Flex, SimpleGrid, Text, useBreakpointValue} from "@chakra-ui/react";
import Card from "./Card";
import {ARTICLES, NEWS} from "../constants";
import {observer, useLocalObservable} from "mobx-react-lite";
import {SectionContainer} from "../../Pebble/SectionContainer";
import Carousel, {arrowsPlugin, slidesToShowPlugin} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {useStore} from "@/store/index";

const NewsTab = () => {
	const PAGE_SIZE =12
	const {lang} = useStore()
	const store = useLocalObservable(() => ({
		sliderIndex: 0,
		setSliderIndex(value) {
			this.sliderIndex = value
		},
		newsList: NEWS.slice(0,PAGE_SIZE),
		page: 1,
		get showMore(){
			return NEWS.length>this.newsList.length
		},
		loadMore() {
			this.page +=1
			this.newsList = NEWS.slice(0,PAGE_SIZE*this.page)
		}
	}))
	const LAST_SLIDER_INDEX = ARTICLES.length
	const numberOfSlides = useBreakpointValue({base:1,sm:2,md:3})
	const sliderOnClick = (value) => {
		if (value+numberOfSlides <= LAST_SLIDER_INDEX) {
			store.setSliderIndex(value)
		}
	}


	return (
		<>
			{/*Feature Article*/}
			<SectionContainer marginTop={'2rem'}>
				<Text fontSize={{base:'1.25rem',md:'2rem'}} paddingLeft={{base:'0',md:'50px',lg:'60px',sm:'50px'}} fontWeight={'600'}>Featured Articles</Text>
				<Box marginTop={'40px'}>
					<Carousel
						value={store.sliderIndex}
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
									                              color={store.sliderIndex+Number(numberOfSlides) === LAST_SLIDER_INDEX ? '' : 'rgba(68, 255, 178, 1)'}
									                              w={33} h={75}/>,
									arrowRightDisabled: <ChevronRightIcon _hover={{cursor: 'pointer'}} w={33} h={75}/>,
									addArrowClickHandler: true,
								}
							},
						]}
					>
						{
							ARTICLES.map((article, index) => {
								return (
									<Card
										width={{base:'90%',md:'90%',sm:'90%'}}
										link={article.link}
										icon={article.icon}
										iconActive={article.iconActive}
										text={article.content}
										date={article.date}
										key={index}
										bgColorActive={article.bgColorActive}
									/>
								)
							})
						}
					</Carousel>
				</Box>
			</SectionContainer>

			{/*	news list*/}
			<SectionContainer marginTop={'12rem'}>
				<Text fontSize={{base:'1.25rem',md:'2rem'}} fontWeight={'semibold'} paddingLeft={{base:'0px',sm:'3.125rem',md:'3.125rem',lg:'3.75rem'}}>In the News</Text>
				<SimpleGrid columns={[1, 2, 2]} spacing={{md: '28px', lg: '58px'}} marginTop={'40px'} paddingLeft={{base:'0',md:'3.125rem',lg:'3.75rem'}} spacingY={{base:'2rem'}}>
					{
						store.newsList.map((news, index) => {
							return (
								<Card
									width={{base:'100%',md:'90%',sm:'90%'}}
									icon={news.icon}
									link={news.link}
									maxWidth={'750px'}
									iconActive={news.iconActive}
									bgColorActive={news.bgColorActive}
									text={news.content}
									date={news.date}
									key={index}/>
							)
						})
					}
				</SimpleGrid>
				{
					store.showMore ? (
						<Flex alignItems={'center'} flexDirection={'column'} marginTop={'12rem'} cursor={'pointer'} onClick={()=>store.loadMore()}>
							<Text color={'#44FFB2'} fontSize={{base:'1.25rem',md:'1.75rem'}}>{lang.t('media.read.more')}</Text>
							<ChevronDownIcon color={'#44FFB2'} w={32} h={55}/>
						</Flex>
					) : null
				}
			</SectionContainer>
		</>
	)
}

export default observer(NewsTab)
