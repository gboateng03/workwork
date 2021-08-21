import React from "react"
import SocialCard from "@/pages/CmcStarterPack/components/SocialCard";
import {Box, SimpleGrid} from "@chakra-ui/react";
import HighLight from "@/components/HighLight";
import {useStore} from "@/store/index";
import { observer } from "mobx-react-lite";

const MediaChannel=()=>{
	const {lang} = useStore()
	const socials = [
		{
			text:"YouTube",
			desc:"See latest panels, conferences, and updates",
			link:"https://www.youtube.com/channel/UCdj3xY3LCktuamvuFusWOZw",
			image:"images/starter-pack/icon_youtube.png"
		},
		{
			text: "Reddit",
			image: "images/starter-pack/icon_Reddit.png",
			desc: 'Chat with communities',
			link: 'https://www.reddit.com/r/IoTeX/'
		},
		{
			text: "Twitter",
			image: "images/starter-pack/icon_twitter.png",
			desc: 'Follow the latest \n IoTeX news',
			link: 'https://twitter.com/iotex_io'
		},
		{
			text: "Telegram",
			image: "images/starter-pack/icon_telegram.png",
			desc: 'Chat and read our \n announcements',
			link: 'https://t.me/iotexchannel'
		},
		// {
		// 	text: "Discord",
		// 	image: "images/starter-pack/icon_Discord.png",
		// 	desc: 'Discuss with communities',
		// 	link: 'https://iotex.io/devdiscord'
		// },
	]

	return(
		<>
			<Box
				fontSize={{xl: '1.2rem', '2xl': '3rem'}}
				fontWeight={600}
				mt={20}
			>
				<HighLight

					sourceStr={lang.t("starter.pack.media.step1")}
					keyArr={[
						{
							word: 'STEP 1.',
							link: ""
						},
					]}
					markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
				/>
			</Box>
			<SimpleGrid columns={[2,4]} mt={10} spacing={5}>
				{
					socials.map((s, index) => {
						return (
							<SocialCard text={s.text} img={s.image} desc={s.desc} link={s.link} key={index}/>
						)
					})
				}
			</SimpleGrid>
		</>
	)
}

export default observer(MediaChannel)
