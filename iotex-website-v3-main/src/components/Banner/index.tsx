import React from 'react';
import {Box, Flex, Image, Text} from '@chakra-ui/react';
import {useStore} from '../../store';
import {observer} from 'mobx-react-lite';

import {helper} from "@/utils/helper";

export const Banner = observer(() => {
	const {lang} = useStore();
    return (
        <Box position="relative" pt={{base: "6rem", md: "4rem", lg: "5rem", xl: "6rem", "2xl": "5rem"}} minHeight={{base: "max-content", lg: "610px", xl: "800px", "2xl": "1004px"}}>
            <img src={`${helper.cdn('images/animation.svg')}`} alt="" />
            <Box position="absolute" zIndex="2" w="100%" h="100%" top="0" left="0">
                <Box w={{base: "25vw", md: "25vw", lg: "28vw"}} position="absolute" top="20%" left="10%" css={{animation: 'bigBall 1.8s linear infinite alternate running'}}>
                  <img src={helper.cdn('images/banner/bigball.png')} alt="" />
                </Box>
                <Box w={{base: "8vw", md: "8vw", lg: "12vw"}}  position="absolute" left="75%" top="50%">
                  <img src={`${helper.cdn('images/smallball.png')}`} alt="" />
                </Box>
            </Box>
            <Flex position="absolute" zIndex="3" w="100%" h="100%" top="0"
              left="0" alignItems="center"  direction="column"
              pt={{base: "4rem", sm: "8rem", md: "8rem", lg: "12rem", xl: "14rem", "2xl": "14rem"}}>
              <Text
                  fontSize={{base: "2.25rem", sm: "3rem", lg: "3.5rem", xl: "5.5rem", "2xl": "7.5rem"}}
                  mb={{base: "1rem", md: "2rem", lg: "2.5rem", xl: "3.5rem", "2xl": "3.125rem"}}
                  fontWeight="semibold" color="white" w="90%"
                  textAlign="center" whiteSpace={{base: "inherit", md: "pre-line"}}
                >
                  {lang.t("title")}
                </Text>
                <Text fontSize={{base: "0.875rem", sm: "1rem", lg: "1.25rem", xl: "1.5rem", "2xl": "1.8rem"}}
                  mb={{base: "0.75rem", md: "2rem", lg: "1.8rem", xl: "2rem", "2xl": "3rem"}} opacity="0.85"
                  fontWeight="medium" color="white" w="70%" textAlign="center" whiteSpace={{base: "inherit", md: "pre-line"}}>
                  {lang.t("subtitle")}
                </Text>
                <Box w={{base: "8rem", sm: "10rem", xl: "14rem",  "2xl": "20rem"}} height={{"2xl": "6rem"}}  position="relative" cursor="pointer" >
                  <Box w="100%" position="absolute" top="0" css={{
                    transition: 'all 0.6s',
                    marginTop: 0,
                    opacity: 0.8,
                    '&:hover': {
                      marginTop: '-10px',
                      opacity: 1
                    },
                  }}>
                    <a href="#getStarted">
                      <img src={`${helper.cdn('images/getStarted.png')}`} alt="" />
                    </a>
                  </Box>
                </Box>
            </Flex>
        </Box>
    );
});
