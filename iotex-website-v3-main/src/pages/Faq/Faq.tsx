import React, {useEffect} from 'react'
import {observer} from "mobx-react-lite";
import BasicLayout from "../../Layouts/BasicLayout";
import {useStore} from "@/store/index";
import {
	Box,
	Container,
	Heading, Flex, Image,
} from "@chakra-ui/react";
import HighLight from "@/components/HighLight";
import {Footer} from "@/components/Footer";
import {FaqArticle, FaqCard, FaqCardHeading} from "./components/FaqCard";
import SideBar from "./components/SideBar";
import Sticky from 'react-sticky-el';
import {useMediaQuery} from "@chakra-ui/react";
import {Title} from "../Pebble/Title";

import {helper} from "@/utils/helper";
const Faq = () => {
	const {lang} = useStore()
	const [isMaxThan468] = useMediaQuery("(min-width: 468px)");

	return (
		<BasicLayout name="faq">
			<Container
				backgroundSize={{
					base: '385px 550px',
					md: '700px 1000px'
				}}
				css={{
					maxWidth: '100%',
					marginTop: '2rem',
					backgroundImage: `url(${helper.cdn('images/faq/faq-bg.png')})`,
					zIndex:-1,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'top center',
					position: 'fixed',
					height: '1000px',
				}}>
			</Container>
			<Container marginTop={{base: '5rem', md: '15rem'}} maxWidth={{base: '100%', md: '80%'}}>
				<Box top='0'>
					<Title text={lang.t("faq.banner.title")} textAlign={'center'}/>
				</Box>
				<Flex
					flexDirection={{base: "column", md: "row"}}
					padding={{base: '0', md: '1.875rem 0 3.75rem'}}
					justifyContent={'space-between'}
					css={{
						width: '100%',
						flexBetweenTop: "row",
						marginTop: '5rem',
					}}
				>
					<Box
						w={{
							base: '100%',
							sm: '25%'
						}}
						css={{
							fontSize: "1rem",
							fontWeight: 500,
							a: {
								display: "block",
								color: "$gray400",
								paddingBottom: "0.875rem",
								cursor: "pointer",
								"&:last-child": {
									padding: 0
								}
							},
							'.active': {
								color: 'rgba(68, 255, 178, 1)'
							}
						}}
					>
						<Box>
							<Sticky
								stickyStyle={{
								marginTop: '2rem',
								position: isMaxThan468 ? 'fixed' : 'relactive'
							}}>
								<SideBar/>
							</Sticky>
						</Box>
					</Box>
					<Box
						w={{base: '100%', md: '65%'}}
						css={{
							mdMax: {
								width: "100%",
							}
						}}
					>
						{/*block 1*/}
						<FaqCard id='block1'>
							<FaqCardHeading text={lang.t("faq.block1.title")}/>
							<FaqArticle text={lang.t("faq.block1.caption1")}/>
							<HighLight
								sourceStr={lang.t("faq.block1.caption2")}
								keyArr={[
									{
										word: lang.t("faq.block1.keyword1"),
										link: "/team"
									},
									{
										word: lang.t("faq.block1.keyword2"),
										link: "https://member.iotex.io/"
									},
								]}
								markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
							/>
						</FaqCard>

						{/*	block2*/}
						<FaqCard id='block2'>
							<FaqCardHeading text={lang.t("faq.block2.title")}/>
							<FaqArticle text={lang.t('faq.block2.caption1')}/>
							<HighLight

								sourceStr={lang.t("faq.block2.caption2")}
								keyArr={[
									{
										word: lang.t("faq.block2.keyword1"),
										link: "http://ucam.iotex.io/"
									}
								]}
								markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
							/>
							<Box marginTop='1rem'>
								<Image src={helper.cdn('images/faq/faq_platform.png')} alt="faq_platform"/>
							</Box>
						</FaqCard>

						{/*	block3*/}
						<FaqCard id='block3'>
							<FaqCardHeading text={lang.t("faq.block3.title")}/>
							<FaqArticle text={lang.t('faq.block3.caption1')}/>
							<FaqArticle text={lang.t('faq.block3.caption2')}/>
							<FaqArticle text={lang.t('faq.block3.caption3')}/>
						</FaqCard>

						{/*	block4*/}
						<FaqCard id='block4'>
							<FaqCardHeading text={lang.t("faq.block4.title")}/>
							<HighLight
								sourceStr={lang.t("faq.block4.caption1")}
								keyArr={[
									{
										word: lang.t("faq.block4.keyword1"),
										link: "https://medium.com/@iotex/iotex-tokenomics-burn-drop-to-bootstrap-1-million-iotex-devices-66a43a1a68d7"
									}
								]}
								markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
							/>
							<FaqArticle
								text={[lang.t('faq.block4.caption2'), lang.t('faq.block4.caption3'), lang.t('faq.block4.caption4')]}/>
							<FaqArticle text={lang.t('faq.block4.caption5')}/>
							<Box paddingBottom='1rem'>
								<img src={helper.cdn('images/faq-token.png')} alt="faq-token"/>
							</Box>
							<FaqArticle text={lang.t('faq.block4.caption6')}/>
							<FaqArticle text={lang.t('faq.block4.caption7')} type='subtitle'/>
							<FaqArticle text={lang.t('faq.block4.caption8')}/>

							<FaqArticle
								text={lang.t('faq.block4.caption9') + '\n' + lang.t('faq.block4.caption10') + '\n' + lang.t('faq.block4.caption11') + '\n' + lang.t('faq.block4.caption12')}
							/>

							<FaqArticle text={lang.t('faq.block4.caption13')} type='subtitle'/>
							<FaqArticle text={lang.t('faq.block4.caption14')}/>

							<FaqArticle
								text={lang.t('faq.block4.caption15') + '\n' + lang.t("faq.block4.caption16")}
							/>

							<FaqArticle type='subtitle' text={lang.t("faq.block4.caption17")}/>
							<FaqArticle text={lang.t("faq.block4.caption18")}/>
							<FaqArticle
								text={lang.t('faq.block4.caption19') + '\n' + lang.t("faq.block4.caption20")}
							/>
							<FaqArticle type="subtitle" text={lang.t("faq.block4.caption21")}/>
							<FaqArticle text={lang.t("faq.block4.caption22")}/>
							<FaqArticle
								text={lang.t('faq.block4.caption23') + '\n' + lang.t("faq.block4.caption24") + lang.t("faq.block4.caption25")}
							/>
							<FaqArticle text={lang.t("faq.block4.caption26")}/>
							<FaqArticle type="subtitle" text={lang.t("faq.block4.caption27")}/>
							<FaqArticle text={lang.t("faq.block4.caption28")}/>
							<FaqArticle
								text={[lang.t("faq.block4.caption29"), lang.t("faq.block4.caption30"), lang.t("faq.block4.caption31")]}/>

						</FaqCard>

						{/*	block5*/}
						<FaqCard id='block5'>
							<FaqCardHeading text={lang.t("faq.block5.title")}/>
							<HighLight
								sourceStr={lang.t("faq.block5.caption1")}
								keyArr={[
									{
										word: lang.t("faq.block5.keyword1")
									}
								]}
								markActiveStyle={{fontWeight: 500}}
							/>
							<HighLight
								sourceStr={lang.t("faq.block5.caption2")}
								keyArr={[
									{
										word: lang.t("faq.block5.keyword2"),
										link: "https://medium.com/@iotex/iotex-tokenomics-burn-drop-to-bootstrap-1-million-iotex-devices-66a43a1a68d7"
									}
								]}
								markBoxStyle={{marginTop: '1rem'}}
								markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
							/>
							<Box marginTop='1rem'>
								<Image src={helper.cdn('images/faq/faq-burn-drop.png')} alt="faq_burn_drop"/>
							</Box>
						</FaqCard>

						{/*	block 6*/}
						<FaqCard id='block6'>
							<FaqCardHeading text={lang.t("faq.block6.title")}/>
							<HighLight

								sourceStr={lang.t("faq.block6.caption1")}
								keyArr={[
									{
										word: lang.t("faq.block6.keyword1"),
										link: "https://medium.com/@iotex/iotex-tokenomics-part-1-utility-of-the-iotx-token-781ff9c866e3"
									}
								]}
								markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
							/>
							<HighLight
								markBoxStyle={{marginTop: '1rem'}}
								sourceStr={lang.t("faq.block6.caption2")}
								keyArr={[
									{
										word: lang.t("faq.block6.keyword2")
									}
								]}
								markActiveStyle={{fontWeight: 500}}
							/>

							<HighLight
								sourceStr={lang.t("faq.block6.caption3")}
								keyArr={[
									{
										word: lang.t("faq.block6.keyword3")
									}
								]}
								markActiveStyle={{fontWeight: 500}}
							/>
							<HighLight

								sourceStr={lang.t("faq.block6.caption4")}
								keyArr={[
									{
										word: lang.t("faq.block6.keyword4")
									}
								]}
								markActiveStyle={{fontWeight: 500}}
							/>
							<HighLight

								sourceStr={lang.t("faq.block6.caption5")}
								keyArr={[
									{
										word: lang.t("faq.block6.keyword5")
									}
								]}
								markActiveStyle={{fontWeight: 500}}
							/>
						</FaqCard>

						{/*	block7*/}
						<FaqCard id='block7'>
							<FaqCardHeading text={lang.t("faq.block7.title")}/>
							<HighLight

								sourceStr={lang.t("faq.block7.caption1")}
								keyArr={[
									{
										word: lang.t("faq.block7.keyword1"),
										link: "https://medium.com/iotex/iotex-delegates-program-application-voting-and-rewards-5cab7e87bd20"
									},
									{
										word: lang.t("faq.block7.keyword2"),
										link: "https://medium.com/iotex/iotex-announces-block-producer-requirements-b975655cba51"
									},
									{
										word: lang.t("faq.block7.keyword2"),
										link: "https://medium.com/@iotex/voting-for-iotex-delegates-official-kickoff-a98aadd42df2"
									}
								]}
								markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
							/>
						</FaqCard>

						{/*	block8*/}
						<FaqCard id='block8'>
							<FaqCardHeading text={lang.t("faq.block8.title")}/>
							<Box paddingBottom='1rem'>
								<Image src={helper.cdn('images/faq/faq-journey.png')} alt="faq_journey"/>
							</Box>
							<FaqArticle text={lang.t("faq.block8.caption1")}/>
							<FaqArticle text={lang.t("faq.block8.caption2")}/>
							<HighLight

								sourceStr={lang.t("faq.block8.caption3")}
								keyArr={[
									{
										word: lang.t("faq.block8.keyword1"),
										link: "/halo"
									}
								]}
								markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
							/>
						</FaqCard>

						{/*	block9*/}
						<FaqCard id='block9'>
							<FaqCardHeading text={lang.t("faq.block9.title")}/>
							<FaqArticle text={lang.t("faq.block9.caption1")}/>
							<HighLight
								sourceStr={lang.t("faq.block9.caption2")}
								keyArr={[
									{
										word: lang.t("faq.block9.keyword1"),
										link: "https://ucam.iotex.io/"
									},
									{
										word: lang.t("faq.block9.keyword2"),
										link: "https://www.tenvis.com/"
									},
									{
										word: lang.t("faq.block9.keyword3"),
										link: "https://www.amazon.com/TENVIS-Wireless-Surveillance-Security-Auto-Cruise/dp/B071DDBT7M"
									},
								]}
								markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
							/>
							<HighLight
								markBoxStyle={{marginTop: '1rem'}}
								sourceStr={lang.t("faq.block9.caption3")}
								keyArr={[
									{
										word: lang.t("faq.block9.keyword4"),
										link: "https://www.nordicsemi.com/News/2020/02/IoTeXs-Cellular-IoT-based-tracker-delivers-environmental-and-condition-data-for-assets-in-transit"
									},
									{
										word: lang.t("faq.block9.keyword5"),
										link: "https://www.nordicsemi.com/"
									}
								]}
								markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
							/>
						</FaqCard>

						{/*block 10*/}
						<FaqCard id='block10'>
							<FaqCardHeading text={lang.t("faq.block10.title")}/>
							<FaqArticle text={lang.t("faq.block10.caption1")}/>
							<HighLight
								sourceStr={lang.t("faq.block10.caption2")}
								keyArr={[
									{
										word: lang.t("faq.block10.keyword1"),
										link: "https://medium.com/iotex/iotex-amazon-and-huawei-selected-as-co-chairs-of-the-iic-blockchain-task-group-9032b7b7443f"
									}
								]}
								markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
							/>
							<HighLight
								markBoxStyle={{marginTop: '1rem'}}
								sourceStr={lang.t("faq.block10.caption3")}
								keyArr={[
									{
										word: lang.t("faq.block10.keyword2"),
										link: "https://medium.com/@iotex/iotex-partners-with-hardware-giant-tenvis-for-fully-private-ip-cameras-9dbfbd923128"
									},
									{
										word: lang.t("faq.block10.keyword3"),
										link: "https://www.amazon.com/TENVIS-Wireless-Surveillance-Security-Auto-Cruise/dp/B071DDBT7M"
									},
									{
										word: lang.t("faq.block10.keyword4"),
										link: "http://ucam.iotex.io/"
									}
								]}
								markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
							/>
							<HighLight
								markBoxStyle={{marginTop: '1rem'}}
								sourceStr={lang.t("faq.block10.caption4")}
								keyArr={[
									{
										word: lang.t("faq.block10.keyword5"),
										link: "https://www.nordicsemi.com/News/2020/02/IoTeXs-Cellular-IoT-based-tracker-delivers-environmental-and-condition-data-for-assets-in-transit"
									}
								]}
								markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
							/>
							<HighLight
								markBoxStyle={{marginTop: '1rem'}}
								sourceStr={lang.t("faq.block10.caption5")}
								keyArr={[
									{
										word: lang.t("faq.block10.keyword6"),
										link: "https://youtu.be/_ia0mgG08k8"
									}
								]}
								markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
							/>
							<HighLight
								markBoxStyle={{marginTop: '1rem'}}
								sourceStr={lang.t("faq.block10.caption6")}
								keyArr={[
									{
										word: lang.t("faq.block10.keyword7"),
										link: "https://medium.com/@iotex/iotex-publishes-ieee-reports-on-blockchain-iot-c6650c26f443"
									}
								]}
								markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
							/>
							<HighLight
								markBoxStyle={{marginTop: '1rem'}}
								sourceStr={lang.t("faq.block10.caption7")}
								keyArr={[
									{
										word: lang.t("faq.block10.keyword8"),
										link: "https://thingsboard.io/"
									}
								]}
								markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
							/>
						</FaqCard>


						{/*block11*/}
						<FaqCard id='block11'>
							<FaqCardHeading text={lang.t("faq.block11.title")}/>
							<FaqArticle text={lang.t("faq.block11.caption1")}/>
							<FaqArticle text={lang.t("faq.block11.caption2")}/>
							<HighLight
								sourceStr={lang.t("faq.block11.caption3")}
								keyArr={[
									{
										word: lang.t("faq.block11.keyword1"),
										link: "https://www.youtube.com/watch?v=6aLjQVt4yTo"
									}
								]}
								markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
							/>
							<HighLight
								sourceStr={lang.t("faq.block11.caption4")}
								keyArr={[
									{
										word: lang.t("faq.block11.keyword1"),
										link: "https://github.com/iotexproject/iotex-did"
									}
								]}
								markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
							/>
						</FaqCard>

						{/*block12*/}
						<FaqCard id='block12'>
							<FaqCardHeading text={lang.t("faq.block12.title")}/>
							<FaqArticle text={lang.t("faq.block12.caption1")}/>
							<FaqArticle text={lang.t("faq.block12.caption2")}/>
							<HighLight
								sourceStr={lang.t("faq.block12.caption3")}
								keyArr={[
									{
										word: lang.t("faq.block12.keyword1")
									}
								]}
								markActiveStyle={{fontWeight: 500}}
							/>
							<HighLight
								markBoxStyle={{marginTop: '1rem'}}
								sourceStr={lang.t("faq.block12.caption4")}
								keyArr={[
									{
										word: lang.t("faq.block12.keyword2")
									}
								]}
								markActiveStyle={{fontWeight: 500}}
							/>
							<HighLight
								markBoxStyle={{marginTop: '1rem'}}
								sourceStr={lang.t("faq.block12.caption5")}
								keyArr={[
									{
										word: lang.t("faq.block12.keyword3")
									}
								]}
								markActiveStyle={{fontWeight: 500}}
							/>
							<HighLight

								sourceStr={lang.t("faq.block12.caption6")}
								keyArr={[
									{
										word: lang.t("faq.block12.keyword4"),
										link: "https://iotex.io/reference-architecture"
									}
								]}
								markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
							/>
						</FaqCard>

						{/*block13*/}
						<Box marginTop={'80px'} id='block13' className='contentBlock'>
							<FaqCard id='block13'>
								<FaqCardHeading text={lang.t("faq.block13.title")}/>
								<HighLight

									sourceStr={lang.t("faq.block13.caption1")}
									keyArr={[
										{
											word: lang.t("faq.block13.keyword1"),
											link: "http://files.iotex.io/publications/Academic_Paper_Yellow_Paper.pdf"
										}
									]}
									markActiveStyle={{color: "rgba(68, 255, 178, 1)"}}
								/>
							</FaqCard>
						</Box>

						{/*	block14*/}
						<FaqCard id='block14'>
							<FaqCardHeading text={lang.t("faq.block14.title")}/>
							<FaqArticle text={lang.t("faq.block14.caption1")}/>
							<FaqArticle text={lang.t("faq.block14.caption2")}/>
						</FaqCard>
					</Box>

				</Flex>
				{/*<Footer/>*/}
			</Container>
		</BasicLayout>
	)
}

export default observer(Faq)
