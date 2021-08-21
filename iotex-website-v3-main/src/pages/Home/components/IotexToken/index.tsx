import React from 'react';
import { Box, Flex,  Text } from '@chakra-ui/react';
import { useStore } from '@/store/index';
import { Button } from "@/components/Button"
import { observer } from 'mobx-react-lite';
import {DropLinkItem} from '@/components/DropLinkItem'




export const IotexToken = observer(() => {
  const { lang } = useStore();

  const advantages = [
    {title: lang.t("stake.earn"), icon: "/images/stake.png", desc: lang.t("stake.earn.desc")},
    {title: lang.t("Interact with Dapps"), icon: "/images/interact_with_dapps.svg", desc: lang.t("Interact with Dapps.desc")},
    {title: lang.t("decentralized.exchange"), icon: "/images/decentralized.png", desc: lang.t("decentralized.exchange.desc")},
    {title: lang.t('burn.drop.tokenomics'), icon: "/images/burn.png", desc: lang.t("burn.drop.tokenomics.desc")},
  ]

    return (
      <Box  maxWidth={{base: "90%", md: '80%', "2xl": "1554px"}} mx="auto">
          <Text fontSize={{base: "2rem", sm: "1.875rem", lg: "2.5rem", xl: "4rem"}}   fontWeight="semibold" maxWidth="100%" mb={{base: "1rem", lg: "1.25rem"}}>
            {lang.t("title5")}
          </Text>
          <Text fontSize={{base: "1rem", sm: "1rem", lg: "1.25rem", xl: "1.5rem"}}  opacity="0.85" fontWeight="medium"   mb={{base: "2rem", lg: "4.25rem"}} maxWidth={{base: "90%", xl: "55%"}} >
            {lang.t("subtitle5")}
          </Text>
          <Button href="https://docs.iotex.io/" size={{base: "100%", lg: "16rem"}} name={lang.t("learn.more")} />
          <Box mt={{base: "4rem", lg: "7.25rem"}}>
            <Flex h={{base: "480px", lg: "360px"}} mb="8.56rem" justifyContent="space-between" flexWrap="wrap">
              {
                advantages.map(item => {
                  return <Box  key={item.title} h={{base: "240px", lg: "360px"}} w={{base: "48%", lg: "25%"}}  px="1rem">
                    <DropLinkItem title={item.title} icon={item.icon} desc={item.desc}  />
                  </Box>
                })
              }
            </Flex>
          </Box>
      </Box>
    );
});
