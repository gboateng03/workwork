import React from 'react';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../store';
import {Box, Text, Link, useBreakpointValue} from '@chakra-ui/react';
import {helper} from "@/utils/helper";
export const Card = observer(
	({
		 title,
		 desc,
		 readMoreHref,
		 cardIndex = 0,
		 langArr = [],
		 showOneDescOnSmallScrren = false,
		 h = 'auto'
	 }: {
		title: string;
		desc: string[];
		readMoreHref: string;
		cardIndex?: number;
		langArr?: Array<{ name: string; href: string }>;
		showOneDescOnSmallScrren?: boolean;
		h?: string | Record<string, string>;
	}) => {
		const {lang} = useStore();
		const isSmallScreen = useBreakpointValue({base: true, lg: false});

		const getBg = () => {
			const cards = ['images/research/card1.png', 'images/research/card2.png', 'images/research/card3.png'];
			return cards[cardIndex];
		};
		return (
			<Box position="relative"
			     _after={{
				     top: '0',
				     left: 0,
				     right: 0,
				     bottom: 0,
				     position: "absolute",
				     content: `""`,
				     backgroundImage: `url(${helper.cdn(getBg())})`,
				     opacity: '0.05',
				     backgroundSize: '100% 100%',
				     transition: 'opacity .3s',
				     backdropFilter: 'blur(100px)',
				     borderRadius: '20px',
				     zIndex: -1,
			     }}
			     _hover={{
				     _after: {
					     top: '0',
					     left: 0,
					     right: 0,
					     bottom: 0,
					     position: "absolute",
					     content: `""`,
					     backgroundImage: `url(${helper.cdn(getBg())})`,
					     opacity: '0.1',
					     backgroundSize: '100% 100%',
					     transition: 'opacity .3s',
					     backdropFilter: 'blur(100px)',
					     borderRadius: '20px',
					     zIndex: -1,
				     }
			     }}
			>
				<Box h={h} p={{base: '1rem', lg: '1.8rem'}} borderRadius="20px">
					<Text
						fontSize={{base: '22px', lg: '30px'}}
						lineHeight={{base: '26px', lg: '37px'}}
						fontWeight="600"
					>
						{title}
					</Text>
					{(showOneDescOnSmallScrren && isSmallScreen ? desc.slice(0, 1) : desc).map(
						(item, index) => (
							<Text
								key={index}
								fontSize={{base: '14px', lg: '18px'}}
								lineHeight={{base: '20px', lg: '23px'}}
								fontWeight="500"
								color="#ccc"
								pt="4"
							>
								{item}
							</Text>
						)
					)}
					<Text color="#44FFB2" pt="4">
						<Link
							isExternal
							fontSize={{base: '14px', lg: '16px'}}
							href={readMoreHref}
							pr={{base: 4, lg: 16}}
							cursor={"pointer"}
							_hover={{}}
						>
							{lang.t('research.readmore')}
						</Link>
						{langArr.map((lang, index) => {
							return (
								<Link
									fontSize={{base: '14px', lg: '16px'}}
									key={index}
									href={lang.href}
									isExternal
									pl={{base: 2, lg: 4}}
								>
									{lang.name}
								</Link>
							);
						})}
					</Text>
				</Box>
			</Box>
		);
	}
);
