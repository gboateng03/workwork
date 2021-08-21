import React from 'react';
import { Box, Flex, Text  } from '@chakra-ui/react';
import { useStore } from '@/store/index';
import { LogoCardItem } from "@/components/LogoCardItem"
import { Button } from "@/components/Button"
import { observer } from 'mobx-react-lite';

export const AwardWinning = observer(() => {
  const { lang } = useStore();

  const logos = [
    {icon: 'images/icon-logo1.png', iocn_active: 'images/icon-logo1_s.png', href: "https://medium.com/iotex/iotex-amazon-and-huawei-selected-as-co-chairs-of-the-iic-blockchain-task-group-9032b7b7443f"},
    {icon: 'images/icon-logo2.png', iocn_active: 'images/icon-logo2_s.png', href: "https://www.prweb.com/releases/ieee_blockchain_iot_standards_working_group_appoints_iotex_head_of_cryptography_as_vice_chair/prweb17921245.htm"},
    {icon: 'images/icon-logo3.png', iocn_active: 'images/icon-logo3_s.png', href: "https://www.coindesk.com/facebook-iotex-and-r3-among-new-members-of-confidential-computing-consortium"},
    {icon: 'images/research/ces_icon.png', iocn_active: 'images/research/ces_icon_active.png', href: "https://www.ces.tech/Innovation-Awards/Honorees/2020/Honorees/U/Ucam-by-IoTeX-Fully-Private-Home-IP-Camera.aspx"},
  ]

    return (
      <Box mx="auto">
        <Flex justifyContent="space-between" flexDirection={{base: "column", lg: "row"}}>
            <Flex flexWrap="wrap" maxWidth={{base: "100%", lg: "50%"}} justifyContent="space-between">
              {
                logos.map((item) => {
                  return <Box key={item.icon} width={{base: "48%", md: "47%"}} mb={{base: "1rem", md: "2rem", lg: "2rem", "2xl": "3rem"}} h={{base: "5rem", lg: "48%", xl: "10rem","2xl": "45%"}}>
                    <a href={item.href} target="blank">
                      <LogoCardItem item={item} width="100%" height="100%" />
                    </a>
                  </Box>
                })
              }
            </Flex>
            <Box maxWidth={{base: '100%', lg: "42%"}} mt={{base: '2rem', lg: 0}}>
              <Text fontSize={{base: "0.75rem", md: "1.25rem"}} mb={{base: "0.5rem", md: "0", "2xl": "0.4rem"}}>{lang.t("backed.by")}</Text>
              <Text fontSize={{base: "1.25rem", md: "1.875rem", lg: "2rem", xl: "3rem", "2xl": "3rem"}} mb={{base: "0.5rem", xl: "0.5rem"}} fontWeight="semibold">{lang.t("award.winning")}</Text>
              <Text fontSize={{base: "0.875rem", md: "1.25rem"}} fontWeight="medium" opacity="0.85" mb={{base: "2rem", xl: "2.875rem"}}>{lang.t("award.winning.content")}</Text>
              <Button
                href="/research"
                name={lang.t("award.winning.btn")}
                size={{base: "100%", xl: "80%", "2xl": "70%"}}
              />
            </Box>
        </Flex>
      </Box>
    );
});
