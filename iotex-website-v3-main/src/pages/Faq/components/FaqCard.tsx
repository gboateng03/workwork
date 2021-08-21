import React from "react";
import {Box, Heading, Text} from "@chakra-ui/react";
import {observer} from "mobx-react-lite";

export const FaqCard = observer(({children, id}: { children: React.ReactNode, id: string }) => {
	return (
		<Box
			className='block'
			id={id}
			maxWidth={{base: "100%", md: "100%", "2xl": "1554px"}}
			borderRadius="1.125rem"
			padding={{
				base: '20px',
				md: '40px'
			}}
			_first={{
				marginTop: {
					base: '20px',
					md: '0px'
				}
			}}
			css={{
				background: "linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)",
				boxShadow: "inset -1px -1px 0px rgba(172, 208, 254, 0.25)",
				backdropFilter: "blur(100px)",
				marginTop: '80px',
			}}
		>
			{children}
		</Box>
	)
})

export const FaqCardHeading = observer(({text}: { text: string }) => {
	return (
		<Heading as="h3" fontSize='1.625rem' paddingBottom='1rem'>{text}</Heading>
	)
})


type ARTICLE_TYPE = 'default' | 'subtitle'

interface FaqArticleProps {
	text: string | string[],
	type?: ARTICLE_TYPE
}

export const FaqArticle = observer(({text, type = 'default'}: FaqArticleProps) => {

	const articleStyle = {
		'default': {
			fontSize: "1rem",
			paddingBottom: "1rem",
			"&:last-child": {
				paddingBottom: 0
			},
			whiteSpace: 'pre-wrap'
		},
		'subtitle': {
			fontWeight: 'bold',
			paddingBottom: '1rem',
			fontSize: '1.25rem'
		}
	}

	let content = text;
	if (Array.isArray(text)) {
		content = text.join('\n')
	}

	return (
		// @ts-ignore
		<Text css={articleStyle[type]}>{content}</Text>
	)
})
