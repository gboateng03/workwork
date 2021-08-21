import {Flex, Image, Link} from "@chakra-ui/react";
import React from "react";
import {helper} from "@/utils/helper";

const LogoCard = ({img, width, url}) => {
	return (
		<Link href={url} isExternal
		      _focus={{}}
		>
			<Flex
				_focusVisible={{outline: 0}}
				justifyContent={'center'}
				alignItems={'center'}
				bg={' linear-gradient(147.16deg, rgba(255, 255, 255, 0.05) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
				borderRadius={'10px'}
				w={{base: '7rem', xl: "10rem"}}
				h={{base: '3rem', xl: '4rem'}}
			>
				<Image _focusVisible={{outline: 0}}
				       src={helper.cdn(img)} w={width}/>
			</Flex>
		</Link>
	)
}
export default LogoCard
