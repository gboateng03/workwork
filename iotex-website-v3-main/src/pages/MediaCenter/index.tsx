import React from "react";
import BasicLayout from "../../Layouts/BasicLayout";
import {observer} from "mobx-react-lite";
import {Title} from "../Pebble/Title";
import {Footer} from "@/components/Footer";
import {SectionContainer} from "../Pebble/SectionContainer";
import {Box, Flex} from "@chakra-ui/react";
import NewsTab from "./News";
import {helper} from "@/utils/helper";
enum Tab {
	NEWS = 'NEWS',
	CONTENT = 'CONTENT'
}

const MediaCenter = () => {

	// const store = useLocalStore(() => ({
	// 	tabIndex: Tab.NEWS
	// }))
	return (
		<BasicLayout name="media-center">
			<Box
				bgImg={`url(${helper.cdn('images/media-center/bg_1.png')})`}
				bgPosition={'top'}
				bgSize={'100%'}
				bgRepeat={'no-repeat'}
				pt={3}
			>
				<SectionContainer marginTop={{base:'10rem',md:'11rem',lg:'13rem'}}>
					<Title text={'IoTeX In The Media'} textAlign={'center'}/>
					<Flex marginTop={{base: '3rem', md: '4.8rem'}} justifyContent={'space-evenly'}>
						{/*<TabButton text={'IoTeX In the News'} isActive={true}*/}
						{/*           onClick={() => {}}/>*/}
						{/*<TabButton text={'IoTeX Content'} isActive={Tab.CONTENT === store.tabIndex}*/}
						{/*           onClick={() => store.tabIndex = Tab.CONTENT}/>*/}
					</Flex>
				</SectionContainer>
				<NewsTab/>

			</Box>

			{/*{*/}
			{/*	store.tabIndex === Tab.NEWS ? <NewsTab/> : <ContentTab/>*/}
			{/*}*/}
			<Footer/>
		</BasicLayout>
	)
}

export default observer(MediaCenter)
