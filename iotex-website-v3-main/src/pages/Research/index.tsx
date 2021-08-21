import React from 'react';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../store';
import BasicLayout from '../../Layouts/BasicLayout';
import {Footer} from '@/components/Footer';
import {Flex, Box, Text, Grid, GridItem, SimpleGrid} from '@chakra-ui/react';
import AwardCard from '@/pages/MediaCenter/News/Card';
import {Card} from './Card';
import {AWARDS} from "./constants";
import {helper} from "@/utils/helper";

export const Research = observer(() => {
	const {lang} = useStore();

	return (
		<BasicLayout name="research">

			<Box
				css={{
					backgroundSize: '100%,100%',
					backgroundRepeat: 'no-repeat'
				}}
				bgImg={`url(${helper.cdn('images/research/ing_research_top.png')}),url(${helper.cdn('images/research/bg.png')})`}
				bgPosition={'top,bottom right'}
			>
				<Box
					pt={{base: '8rem', md: '10rem', lg: '12rem', xl: '13rem', '2xl': '22.875rem'}}
					pb={{base: '5rem', md: '5rem', lg: '6rem', xl: '8rem', '2xl': '13rem'}}
				>
					<Flex
						alignItems="center"
						justifyContent="flex-end"
						direction="column"
						w="100%"
						h="100%"
						maxWidth={{base: '90%', lg: '80%', '2xl': '1554px'}}
						mx="auto"
					>
						<Text
							fontSize={{base: "2.25rem", sm: "3rem", lg: "3.5rem", xl: "5.5rem", "2xl": "7.5rem"}}
							mb={{base: '1rem', md: '1.875rem', '2xl': '2.875rem'}}
							textAlign={{base: 'center', sm: 'left'}}
							fontWeight="semibold"
							whiteSpace={{base: 'inherit', md: 'pre-line'}}
						>
							{lang.t('research.title')}
						</Text>
						<Text
							fontSize={{
								base: '0.75rem',
								sm: '1rem',
								lg: '1.25rem',
								xl: '1.5rem',
								'2xl': '1.75rem'
							}}
							opacity="0.85"
							width={{base: '95%', lg: '80%', xl: '81%', '2xl': '70%'}}
							fontWeight="medium"
							textAlign="center"
							color="#ccc"
						>
							{lang.t('research.subtitle')}
						</Text>
					</Flex>
				</Box>
				<Box
					maxWidth={{base: '98%', lg: '90%', '2xl': '1554px'}}
					mx="auto"
					p={{base: '1rem', lg: '2rem'}}
					mb={20}
				>
					<Text fontSize={{md: '2rem'}} fontWeight={'600'}>Industry Awards</Text>
					<SimpleGrid columns={[1, 2, 2]} spacing={{base:'2rem',md: '1.75rem', lg: '4rem'}} mt={10}>
						{
							AWARDS.map((award, index) => {
								return (
									<AwardCard
				            width={{base:'100%',md:'100%',xl:'100%'}}
				            link={award.link}
				            icon={award.icon}
				            iconActive={award.iconActive}
				            text={award.content}
				            key={index}
				            bgColorActive={award.bgColorActive}
				            maxWidth={'unset'}
										imgWidth={award.imgWidth}
									/>
								)
							})
						}
					</SimpleGrid>
				</Box>
				<Box
					bgImg={`url(${helper.cdn('images/research/ing_research_1.png')}),url(${helper.cdn('images/research/ing_research_2.png')})`}
					bgPosition={{xl:'left top 20rem,right  bottom 20rem','2xl':'left top 10rem,right  bottom 15rem'}}
					bgRepeat={'no-repeat'}
					bgSize={'80%,50%'}
				>
					<Box
						maxWidth={{base: '98%', lg: '90%', '2xl': '1554px'}}
						mx="auto"
						mt={10}
						mb={{lg:'2rem',xl:'35rem'}}
						p={{base: '1rem', lg: '2rem'}}
					>
						<Text fontSize={{md: '2rem'}} fontWeight={'600'}>Research Paper</Text>

						<Grid
							mt={10}
							height={{base: 4300, xl: 2400}}
							templateRows={{base: 'repeat(8, 1fr)', xl: 'repeat(5, 1fr)'}}
							templateColumns="repeat(10, 1fr)"
							rowGap={20}
							columnGap={8}
						>
							<GridItem rowSpan={1} colSpan={{base: 10, xl: 6}}>
								<Card
									readMoreHref="https://iotex.io/white-paper"
									h="436"
									title={lang.t('research.white.pager.title')}
									desc={[lang.t('research.white.pager.desc'), lang.t('research.white.pager.desc2')]}
									langArr={[
										{
											name: 'RU',
											href: 'https://files.iotex.io/publications/IoTeX_Whitepaper_1.5_RU.pdf'
										},
										{
											name: 'ZH',
											href: 'https://files.iotex.io/publications/IoTeX_Whitepaper_1.4_ZH_CN.pdf'
										},
										{
											name: 'KO',
											href: 'https://files.iotex.io/publications/IoTeX_Whitepaper_1.5_KO.pdf'
										},
										{
											name: 'IT',
											href: 'https://files.iotex.io/publications/IoTeX_Whitepaper_1.5_IT.pdf'
										},
										{
											name: 'PT',
											href: 'https://files.iotex.io/publications/IoTeX_Whitepaper_1.5_PT-BR.pdf'
										}
									]}
								/>
							</GridItem>
							<GridItem rowSpan={1} colSpan={{base: 10, xl: 4}}>
								<Card
									cardIndex={2}
									readMoreHref="https://files.iotex.io/publications/Academic_Paper_Yellow_Paper.pdf"
									h="436"
									title={lang.t('research.yellow.pager.title')}
									desc={[lang.t('research.yellow.pager.desc'), lang.t('research.yellow.pager.desc2')]}
								/>
							</GridItem>

							<GridItem display={{base: 'none', xl: 'block'}} h="410" rowSpan={1} colSpan={{base: 10, xl: 4}}></GridItem>
							<GridItem rowSpan={1} colSpan={{base: 10, xl: 6}}>
								<Card
									readMoreHref="https://ieeexplore.ieee.org/document/8977444"
									h="410"
									title={lang.t('research.framework.title')}
									desc={[lang.t('research.framework.desc'), lang.t('research.framework.desc2')]}
								/>
							</GridItem>

							<GridItem rowSpan={1} colSpan={{base: 10, xl: 4}}>
								<Card
									cardIndex={1}
									readMoreHref="https://files.iotex.io/publications/IoTeX_DKSAP_IOT_EN.pdf"
									h="500"
									title={lang.t('research.iot.title')}
									desc={[lang.t('research.iot.desc'), lang.t('research.iot.desc2')]}
								/>
							</GridItem>
							<GridItem rowSpan={1} colSpan={{base: 10, xl: 6}}>
								<Card
									cardIndex={1}
									readMoreHref="https://files.iotex.io/publications/PBFT.pdf"
									h="500"
									title={lang.t('research.signature.title')}
									desc={[lang.t('research.signature.desc'), lang.t('research.signature.desc2')]}
								/>
							</GridItem>

							<GridItem rowSpan={1} colSpan={{base: 10, xl: 6}}>
								<Card
									cardIndex={1}
									showOneDescOnSmallScrren={true}
									readMoreHref="https://ieeexplore.ieee.org/document/8977822"
									h="470"
									title={lang.t('research.support.title')}
									desc={[lang.t('research.support.desc'), lang.t('research.support.desc2')]}
								/>
							</GridItem>
							<GridItem display={{base: 'none', xl: 'block'}} h="470" rowSpan={1} colSpan={{base: 10, xl: 4}}></GridItem>

							<GridItem rowSpan={1} colSpan={{base: 10, xl: 4}}>
								<Card
									readMoreHref="https://files.iotex.io/publications/ucam-whitepaper.pdf"
									h={{lg:'25rem',xl:'40rem','2xl':'35rem'}}
									title={lang.t('research.ucam.title')}
									desc={[lang.t('research.ucam.desc'), lang.t('research.ucam.desc2')]}
								/>
							</GridItem>
							<GridItem rowSpan={1} colSpan={{base: 10, xl: 6}}>
								<Card
									cardIndex={2}
									readMoreHref="https://ieeexplore.ieee.org/document/9221130"
									h={{lg:'30rem',xl:'40rem','2xl':'35rem'}}
									title={lang.t('research.auth.title')}
									desc={[
										lang.t('research.auth.desc'),
										lang.t('research.auth.desc2'),
										lang.t('research.auth.desc3')
									]}
								/>
							</GridItem>
						</Grid>
					</Box>
				</Box>

				<Footer/>
			</Box>
		</BasicLayout>
	);
});
