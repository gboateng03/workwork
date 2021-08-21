import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useStore } from '@/store/index';
import { observer } from 'mobx-react-lite';
import { Button } from "@/components/Button"
import { TypeCode } from '../TypeCode/index';
import {helper} from "@/utils/helper";


export const BuildOnIotex = observer(() => {
  const { lang } = useStore();

  const configs =   [
    {name: lang.t("advantage1"), desc: lang.t("build.item1.tips"), icon: 'images/build1.png', href: "https://docs.iotex.io/smart-contracts/introduction" },
    {name: lang.t("advantage2"), desc: lang.t("build.item2.tips"), icon: 'images/build2.png', href: "https://tube.iotex.io/" },
    {name: lang.t("build.item3"), desc: lang.t("build.item3.tips"), icon: 'images/build3.png', href: "https://community.iotex.io/t/official-iotex-delegates-thread/1263" },
    {name: lang.t("build.item4"), desc: lang.t("build.item4.tips"), icon: 'images/build4.png', href: "https://docs.iotex.io/more-resources/exchange-integration/general-guide" },
  ]
    return (
      <Box mt={{base: "0", md: "4rem", lg: "10rem"}} pb={{base: "5rem", lg: "6rem"}} css={{
        backgroundImage: `url(${helper.cdn('images/dev/bulr_ball.png')})`,
        backgroundSize: '70%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 0%'
      }}>
        <Flex justifyContent="space-between" maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}} mx="auto" direction={{base: "column-reverse", lg: "row"}}>
          <Box w={{base: "100%", lg: "40%", xl: "44%"}} mx={{base: "auto", lg: "initial"}}>
            <Box position="relative" pb="36%">
              <Box width={{base: "90%", lg: "100%"}} height={{base: "90%", lg: "100%"}}>
                <img src={helper.cdn('images/code.png')} alt="code" />
              </Box>
              <Box position="absolute" width={{base: "90%", lg: "100%"}} height={{base: "80%", md: "60%", lg: "80%",  xl: "70%", "2xl": "58%"}} top={{base: "14%", lg: "10%", xl: "14%"}} left={{base: "10%", lg: "8%", "2xl": "10%"}} p={{base: "0.1rem", sm: "1rem", md: "1.5rem",  lg: "0", xl: "5%", "2xl": "2rem"}} css={{
                background: 'linear-gradient(146.72deg, rgba(137, 137, 137, 0.1) 6.79%, rgba(255, 255, 255, 0) 107.21%)',
                boxShadow: 'inset -1px -1px 0px rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(50px)',
                borderRadius: '15px',
                backgroundColor: '#110F1C'
              }}>
                <TypeCode />
              </Box>
            </Box>
            <Flex flexWrap="wrap"  justifyContent="space-between">
              {
                configs.map((item, index) => {
                  return <Flex key={index} w={{base: "45%", md: "48%", lg: "100%", xl: "48%"}}  h="48%" maxHeight="170px" justifyContent="space-between" direction="column" mb={{base: "3rem", xl: "6.25rem"}}>
                    <Image
                      boxSize={{base: "3rem", lg: "2.5rem", "2xl": "3.875rem"}}
                      objectFit="cover"
                      src={helper.cdn(item.icon)}
                      alt={item.name}
                    />
                    <Text fontSize={{base: "1rem", lg: "1.25rem", "2xl": "2rem"}} fontWeight="semibold" lineHeight="3.25rem" mb="0.5rem" mt="1rem">{item.name}</Text>
                    <a href={item.href} target="_blank">
                      <Text fontSize={{base: "0.875rem", lg: "0.875rem", "2xl": "1.125rem"}} color="brandColor" lineHeight="1.275rem">{item.desc} &gt;&gt;</Text>
                    </a>
                  </Flex>
                })
              }
            </Flex>
          </Box>
          <Box  w={{base: "100%", lg: "45%",  "2xl": "35%"}} pt={{base: "2rem", lg: "5rem", xl: "9.125rem"}}>
            <Text fontSize={{base: "2rem", sm: "1.875rem", lg: "2.5rem", xl: "4rem"}}  fontWeight="semibold" maxWidth="100%" mb={{base: "1rem", md: "1.25rem"}}>
              {lang.t("title4")}
            </Text>
            <Text fontSize={{base: "0.875rem", md: "1rem", lg: "1.25rem", xl: "1.5rem"}} opacity="0.85" fontWeight="medium"  mb={{base: "2rem", xl: "4.25rem"}}  >
              {lang.t("subtitle4.tip1")}
            </Text>
            <Text fontSize={{base: "0.875rem", md: "1rem", lg: "1.25rem", xl: "1.5rem"}} opacity="0.85" fontWeight="medium"  mb={{base: "2rem", xl: "4.25rem"}}  >
              {lang.t("subtitle4.tip2")}
            </Text>
            <a href="https://github.com/iotexproject/halogrants">
              <Text fontSize={{base: "0.875rem", md: "1rem", lg: "1.25rem", xl: "1.5rem"}} opacity="0.85"  color="discord" fontWeight="medium"  mb={{base: "2rem", xl: "4.25rem"}}  >
                {lang.t("subtitle4.tip3")}
              </Text>
            </a>
            <Flex mt={{base: "5%", xl: "4.125rem"}}  w="100%" alignItems={{base: "flex-start", lg: "center"}} justifyContent="flex-start" direction={{base: "column", lg: "row"}}>
              {/*<a href="https://github.com/iotexproject" target="_blank" style={{flex: 'none'}}>*/}
              {/*  <Image*/}
              {/*    boxSize="3.75rem"*/}
              {/*    objectFit="fill"*/}
              {/*    src="images/github_empty.png"*/}
              {/*    alt=""*/}
              {/*    mb={{base: "3rem", lg: 0}}*/}
              {/*    mr="3rem"*/}
              {/*  />*/}
              {/*</a>*/}
              <Button href="https://iotex.io/halo" size={{base: "100%", md: "375px"}} name={lang.t("read.documents")} />
            </Flex>
            {/* <Box mt={{base: "2rem", md: "3rem", xl: "5rem"}} borderRadius="15px" py={{base: "0.8rem", lg: "1.2rem"}} px={{base: "1rem", lg: "2rem"}} bg="url('images/read_build_bg.png')" css={{
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat'
            }}>
              <Text fontSize={{base: "1rem", lg: "1.75rem"}} fontWeight="semibold" mb="0.875rem">{lang.t("ready.to.build")}</Text>
              <Text fontSize={{base: "1rem", lg: "1.25rem"}} mb="0.5rem">
                {lang.t("ready.to.build.desc")} <a style={{display: 'inline-block'}} href="https://iotex.io/halo" target="_blank">
                  <Text fontSize={{base: "1rem", lg: "1.25rem"}} color="brandColor" fontWeight="semibold" lineHeight="1.275rem">{lang.t("halo.href")}</Text>
                </a>
              </Text>
            </Box> */}
            <Image
              boxSize={{base: "8rem", lg: "14rem"}}
              objectFit="fill"
              src={helper.cdn('images/build_small_ball.png')}
              alt="build_small_ball"
              mt={{base: "4rem", lg: "6.25rem"}}
              ml={{base: "60%", lg: "13.75rem"}}
              mb={{base: "4rem", lg: "0"}}
            />
          </Box>
        </Flex>
      </Box>
    );
});
