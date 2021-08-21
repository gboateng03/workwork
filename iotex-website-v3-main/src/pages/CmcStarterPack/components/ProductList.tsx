import React from "react";
import {Flex, Image, Link, Text} from "@chakra-ui/react";
import {useStore} from "@/store/index";
import {helper} from "@/utils/helper";

export const ProductBox = ({bgImg, contentImg, text,url,...props}) => {
	return (
		<Link href={url} isExternal
		      _hover={{}}
		      _focus={{}}
		>
			<Flex
				justifyContent={'space-around'}
				alignItems={'center'}
				flexDirection={'column'}
				py={5}
				bgRepeat={'no-repeat'}
				bgSize={'100% 100%'}
				w={{base:'10rem',md:'13rem',xl: '15rem'}}
				h={{base:'10rem',md:'13rem',xl: '15rem'}}
				position={'relative'}
				backgroundImage={bgImg ? `url(${helper.cdn(`images/starter-pack/${bgImg}`)})` : null}
				{...props}
			>
				<Image src={contentImg ? helper.cdn(`images/starter-pack/${contentImg}`) : null} h={{base:'5rem',md:'8rem'}}/>
				<Text fontWeight={600} fontSize={'1.25rem'} whiteSpace={{base:'pre-line',md:'unset'}} textAlign={'center'}>{text}</Text>
			</Flex>
		</Link>
	)
}

const ProductList = () => {

	const products = [
		{bgImg: 'card2.png', contentImg: 'camera.png', text: 'Ucam',url:'/ucam'},
		{bgImg: 'card1.png', contentImg: 'pebble.png', text: 'Pebble Tracker',url:'/pebble'},
		{bgImg: 'card3.png', contentImg: 'Union.png', text: 'Explore \n Ecosystem',url:'https://ecosystem.iotex.io/projects',mt:{base:8,md:8,lg:0,xl:0}},
		{bgImg: 'card4.png', contentImg: 'icon_get iotx.png', text: 'Build on IoTeX',url:'/developers',mt:{base:8,md:8,lg:8,xl:0}},
	]
	const {lang} = useStore()
	return (
		<>
			<Text
				fontSize={{base:'0.9rem',xl: '1.2rem', '2xl': '3rem'}}
				fontWeight={600}
				mt={{base:20,md:20,xl:40}}
			>
				{lang.t("starter.pack.product")}
			</Text>
			<Flex justifyContent={'space-between'} mt={5} flexWrap={"wrap"}>
				{
					products.map((product, index) => (
						<ProductBox mt={product.mt} text={product.text} bgImg={product.bgImg} contentImg={product.contentImg} url={product.url} key={index}/>
					))
				}
			</Flex>
		</>
	)
}
export default ProductList
