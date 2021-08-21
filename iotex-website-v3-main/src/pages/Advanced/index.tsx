import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store/index";
import { Flex, Box, Text, Image, SimpleGrid, Img, Center } from "@chakra-ui/react";
import BasicLayout from "../../Layouts/BasicLayout";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { useMediaQuery } from "@chakra-ui/react";
import CountTo from "react-count-to";
import {helper} from "@/utils/helper";

export const Advanced = observer(() => {
  const { lang } = useStore();
  const [isMaxThan468] = useMediaQuery("(min-width: 468px)");
  const [isMaxThan768] = useMediaQuery("(min-width: 768px)");
  const Banner = 'images/token/banner.png'
  const burnDrop = 'images/token/burn_drop.png'
  const burnToCertify = 'images/token/burn_to_certify.png'
  const delegate = 'images/token/delegate.png'
  const staking = 'images/token/staking.png'
  const iotexOverview = [
    {
      name: lang.t("overview1"),
      amount: 252359332,
      unit: "$",
      isAnimate: false,
      total: "252,359,332",
    },
    {
      name: lang.t("overview2"),
      amount: 10000000000,
      unit: "",
      isAnimate: false,
      total: "10,000,000,000",
    },
    {
      name: lang.t("overview3"),
      amount: 9626124332,
      unit: "",
      isAnimate: false,
      total: "9,626,124,332",
    },
    {
      name: lang.t("overview4"),
      amount: 9543921645,
      unit: "",
      isAnimate: false,
      total: "9,543,921,645",
    },
  ];
  const [overviews, setOverviews] = useState(iotexOverview);

  const changeAnimateStatus = (index) => {
    const old = [...overviews];
    old[index].isAnimate = true;
    setOverviews(old);
  };

  const getIotxs = [
    {
      name: lang.t("exchanges"),
      list: [
        {icon: "images/token/exchange/logo_binance_n.png", href: "https://www.binance.com/it/trade/IOTX_BTC?type=spot"},
        {icon: "images/token/exchange/logo_huobi_n.png", href: "https://www.huobi.com/en-us/exchange/iotx_usdt"},
        {icon: "images/token/exchange/logo_coinbase_n.png", href: "https://pro.coinbase.com/trade/IOTX-USD"},
        {icon: "images/token/exchange/logo_bittrex_n.png", href: "https://global.bittrex.com/Market/Index?MarketName=BTC-IOTX"},
        {icon: "images/token/exchange/logo_gate_n.png", href: "https://www.gate.io/trade/IOTX_ETH"},
        {icon: "images/token/exchange/logo_hotbit_n.png", href: "https://www.hotbit.io/exchange?symbol=IOTX_USDT"},
        {icon: "images/token/exchange/logo_mxc_n.png", href: "https://www.mexc.com/exchange/IOTX_USDT"},
        {icon: "images/token/exchange/logo_upbit_n.png", href: "https://upbit.com/exchange?code=CRIX.UPBIT.BTC-IOTX"},
        // {icon: "images/token/exchange/logo_Kucoin_n.png", href: "https://trade.kucoin.com/IOTX-BTC"},
      ],
    },
    {
      name: lang.t("wallet"),
      list: [
        {icon: "images/token/wallet/logo_iopay_n.png", href: "/iopay/"},
        {icon: "images/token/wallet/logo_huobi_wallet_n.png", href: "https://www.huobiwallet.com/en/"},
        {icon: "images/token/wallet/logo_cobo_wallet_n.png", href: "https://cobo.com/"},
        {icon: "images/token/wallet/logo_trust_wallet_n.png", href: "https://trustwallet.com/"},
      ],
    },
    {
      name: lang.t("dex"),
      list: [
       {icon: "images/token/dex/logo_mimo_n.png", href: "https://mimo.finance/"},
       {icon: "images/token/dex/logo_sifchain_n.png", href: "https://sifchain.finance/"},
       {icon: "images/token/dex/logo_pancake_swap_n.png", href: "https://pancakeswap.finance/"},
       {icon: "images/token/dex/logo_polygon_n.png", href: "https://polygon.technology/"},
       {icon: "images/token/dex/logo_uniswap_n.png", href: "https://uniswap.org/"},
       {icon: "images/token/dex/logo_unifi_n.png", href: "https://unifiprotocol.com/"},
      ],
    },
  ];

  const utility = [
    {
      title: lang.t("iotx.utility.card1"),
      bg: "images/card1.png",
      desc: lang.t("iotx.utility.card1.desc"),
    },
    {
      title: lang.t("iotx.utility.card2"),
      bg: "images/card3.png",
      desc: lang.t("iotx.utility.card2.desc"),
    },
    {
      title: lang.t("iotx.utility.card3"),
      bg: "images/card2.png",
      desc: lang.t("iotx.utility.card3.desc"),
    },
    {
      title: lang.t("iotx.utility.card4"),
      bg: "images/card4.png",
      desc: lang.t("iotx.utility.card4.desc"),
    },
  ];

  const burndrops = [
    {
      name: lang.t("burn"),
      icon: "images/token/icon_burnt.png",
      amount: 50,
      desc: lang.t("burn.tip"),
    },
    {
      name: lang.t("drop"),
      icon: "images/token/icon_dropped.png",
      amount: 25,
      desc: lang.t("drop.tip"),
    },
    {
      name: lang.t("drip"),
      icon: "images/token/icon_airdrip.png",
      amount: 25,
      desc: lang.t("drip.tip"),
    },
  ];

  return (
    <BasicLayout name="advanced">
      <Box
        css={{
          backgroundImage: `url(${
            isMaxThan468
              ? helper.cdn(Banner)
              : helper.cdn(Banner)
          })`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* banner */}
        <Flex
          alignItems="center"
          direction="column"
          pt={{
            base: "4rem",
            sm: "8rem",
            md: "8rem",
            lg: "10rem",
            xl: "12rem",
            "2xl": "18rem",
          }}
          pb={{
            base: "4rem",
            sm: "8rem",
            md: "8rem",
            lg: "14rem",
            xl: "16rem",
            "2xl": "19rem",
          }}
        >
          <Text
           fontSize={{
            base: "2.25rem",
            sm: "3rem",
            lg: "3.5rem",
            xl: "5.5rem",
            "2xl": "7.5rem",
          }}
            mb={{
              base: "1rem",
              md: "2rem",
              lg: "2.5rem",
              xl: "3.5rem",
              "2xl": "3.125rem",
            }}
            fontWeight="semibold"
            color="white"
            w="90%"
            textAlign="center"
            whiteSpace={{ base: "inherit", md: "pre-line" }}
          >
            {lang.t("advanced.title")}
          </Text>
          <Text
            fontSize={{
              base: "0.875rem",
              sm: "1rem",
              lg: "1.25rem",
              xl: "1.5rem",
              "2xl": "1.8rem",
            }}
            mb={{
              base: "2rem",
              md: "2rem",
              lg: "1.8rem",
              xl: "2rem",
              "2xl": "3rem",
            }}
            opacity="0.85"
            fontWeight="medium"
            color="white"
            w="80%"
            textAlign="center"
            whiteSpace={{ base: "inherit", md: "pre-line" }}
          >
            {lang.t("advanced.subtitle")}
          </Text>
        </Flex>

        {/* Get Iotx */}
        <Box
          pb={{ base: "5rem", lg: "12rem", "2xl": "15rem" }}
          css={{
            backgroundImage: `url(${helper.cdn('images/token/get.iotx_bg.png')})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 30%",
          }}
        >
          <Box maxWidth={{ base: "90%", lg: "85%", "2xl": "1554px" }} mx="auto">
            <Text
              fontSize={{
                base: "1.8rem",
                sm: "1.875rem",
                lg: "2.5rem",
                xl: "3rem",
                "2xl": "4rem",
              }}
              w={{ base: "100%", md: "70%", lg: "max-content" }}
              textAlign={{ base: "center", sm: "left" }}
              whiteSpace={{ base: "inherit", lg: "pre-line" }}
              fontWeight="semibold"
              mb="1.8rem"
              letterSpacing="4px"
            >
              {lang.t("intro.title3")}
            </Text>
            <Text
              fontSize={{
                base: "0.875rem",
                md: "1rem",
                lg: "1.25rem",
                xl: "1.5rem",
              }}
              textAlign={{ base: "center", sm: "left" }}
              whiteSpace={{ base: "pre-line", lg: "inherit" }}
              mb={{ base: "6rem", lg: "8.75rem" }}
              fontWeight="medium"
              opacity="0.85"
              w={{ base: "100%", md: "50%" }}
            >
              {lang.t("intro.subtitle3")}
            </Text>
            <Flex justifyContent={{ base: "", md: "space-between" }} flexDirection={{base: "column", md: 'row'}}>
              {getIotxs.map((item, index) => {
                return (
                  <Box key={item.name} w={{base: "100%", md: "28%"}} mb={{base: "6rem", md: 0}}>
                    <Text
                      fontSize={{ base: "1.75rem", xl: "2rem" }}
                      fontWeight="semibold"
                      textAlign="center"
                      mb={{ base: "3rem", xl: "5rem" }}
                    >
                      {item.name}
                    </Text>
                    <SimpleGrid columns={2} spacing={5}>
                      {item.list.map((child) => {
                        return (
                          <Box key={child.icon}>
                           <a href={child.href} target="_blank">
                            <img src={helper.cdn(child.icon)} alt="" />
                           </a>
                          </Box>
                        );
                      })}
                    </SimpleGrid>
                    {index === 0 && (
                      <a href="https://ecosystem.iotex.io/exchanges-wallets" target="_blank">
                        <Text
                          fontWeight="medium"
                          fontSize={{ base: "", xl: "1.125rem" }}
                          cursor="pointer"
                          color="discord"
                          textAlign="center"
                          mt={{ base: "4rem", xl: "6rem" }}
                        >
                          {lang.t("view.more.exchanges")}
                        </Text>
                      </a>
                    )}
                  </Box>
                );
              })}
            </Flex>
          </Box>
        </Box>

        {/* iotx utility */}
        <Box maxWidth={{ base: "90%", lg: "85%", "2xl": "1554px" }} mx="auto">
          <Flex
            justifyContent="space-between"
            mb={{base: "10rem", md: "15rem"}}
            flexDirection={{ base: "column-reverse", md: "row" }}
          >
            <Box w={{ base: "100%", md: "48%", "2xl": "48%" }} h="100%">
              <SimpleGrid columns={{base: 1, md: 2}} spacing={10}>
                {utility.map((item) => {
                  return (
                    <Flex
                      flexDirection="column"
                      alignItems="flex-start"
                      px={{base: "2rem", lg: "1.2rem", "2xl": "2rem"}}
                      py={{base: "2rem", xl: "3rem", "2xl": "4rem"}}
                      key={item.title}
                      css={{
                        backgroundImage: `url(${helper.cdn(item.bg)})`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "20px",
                      }}
                    >
                      <Text
                        fontSize={{ base: "1.5rem", lg: "1.25rem",  xl: "1.5rem", "2xl": "2rem" }}
                        fontWeight="semibold"
                        mb={{base: "1rem", sm: "1rem", md: "0.5rem"}}
                      >
                        {item.title}
                      </Text>
                      <Text fontSize={{ base: "1.125rem", "2xl": "1.125rem" }}>
                        {item.desc}
                      </Text>
                    </Flex>
                  );
                })}
              </SimpleGrid>
            </Box>
            <Box
              w={{ base: "100%", md: "45%", xl: "41%" }}
              mb={{ base: "4rem", md: 0 }}
            >
              <Text
                fontSize={{
                  base: "1.8rem",
                  sm: "1.875rem",
                  lg: "2.5rem",
                  xl: "3rem",
                  "2xl": "4rem",
                }}
                fontWeight="semibold"
                mb="1.8rem"
                whiteSpace="pre-line"
              >
                {lang.t("intro.title4")}
              </Text>
              <Text
                fontSize={{
                  base: "0.875rem",
                  md: "1rem",
                  lg: "1.25rem",
                  xl: "1.5rem",
                }}
                mb="4rem"
                wordBreak="break-word"
                fontWeight="medium"
                opacity="0.85"
              >
                {lang.t("intro.subtitle4")}
              </Text>
              <Button
                href="https://onboard.iotex.io/tokenomics/iotx-utility"
                size={{ base: "100%", md: "80%" }}
                name={lang.t("utility.details")}
              />
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box display={{base: "block", md: "none"}}>
        <img src={helper.cdn(delegate)} alt="delegate" />
      </Box>

      <Box
        css={{
          backgroundImage: isMaxThan768 ?
            `url(${helper.cdn(delegate)}), url(${helper.cdn(staking)})` : `url(${helper.cdn(staking)})`,
          backgroundSize: isMaxThan768 ? "55%, 80%" : "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: isMaxThan768 ? "100% 0, 100% 30%" : "100% 30%",
        }}
      >
        {/* staking portal */}
        <Flex
          maxWidth={{ base: "90%", lg: "85%", "2xl": "1554px" }}
          mx="auto"
          justifyContent="space-between"
          alignItems="flex-end"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            w={{ base: "100%", md: "50%", lg: "55%" }}
            mb={{ base: "4rem", md: 0 }}
          >
            <Text
              fontSize={{
                base: "1rem",
                sm: "1.125rem",
                md: "1.25rem",
                xl: "2rem",
                "2xl": "2.5rem",
              }}
              fontWeight="semibold"
              mb="0.5rem"
              whiteSpace="pre-line"
            >
              {lang.t("intro.mini5")}
            </Text>
            <Text
              fontSize={{
                base: "1.8rem",
                sm: "1.875rem",
                lg: "2.5rem",
                xl: "3rem",
                "2xl": "4rem",
              }}
              fontWeight="bold"
              mb="0.8rem"
              whiteSpace="pre-line"
              letterSpacing="4px"
            >
              {lang.t("intro.title5")}
            </Text>
            <Text
              fontSize={{
                base: "0.875rem",
                md: "1rem",
                lg: "1.25rem",
                xl: "1.25rem",
              }}
              mb="4rem"
              w={{ base: "100%", lg: "80%" }}
              fontWeight="medium"
              opacity="0.85"
            >
              {lang.t("intro.subtitle5")}
            </Text>
            <Button
              href="https://member.iotex.io/"
              size={{ base: "100%", md: "400px" }}
              name={lang.t("stake.earn.iotx")}
            />
            <Flex flexDirection={{ base: "column", md: "row" }} mt={{base: "4rem", md: "8.9rem"}}>
              <Flex w={{base: "100%", lg: "40%", "2xl": "40%"}} mr="5rem" flexDirection="column" mb={{base: "5rem", md: 0}}>
                <Image
                  src={helper.cdn('images/token/icon_voter.png')}
                  alt=""
                  htmlWidth="62px"
                  htmlHeight="38px"
                  mb="2rem"
                />
                <Text
                  fontSize={{ base: "1.25rem", sm: "1.5rem", md: "1.75rem" }}
                  fontWeight="semibold"
                  mb="1rem"
                >
                  {lang.t("voters")}
                </Text>
                <Text
                  fontSize={{ base: "1rem", sm: "1.125rem", md: "1.125rem" }}
                  mb="3rem"
                  flex="1"
                >
                  {lang.t("voters.desc")}
                </Text>
                <a href="https://community.iotex.io/t/maximizing-returns-on-your-iotx/1634" target="_blank">
                  <Text color="discord" fontSize={{ base: "1rem", sm: "1.125rem", md: "1.125rem" }}>
                    {lang.t("voters.link.tip")}
                  </Text>
                </a>
              </Flex>
              <Flex w={{base: "100%", lg: "45%", "2xl": "40%"}} flexDirection="column">
                <Image
                  src={helper.cdn('images/token/icon_delegate_red.png')}
                  alt=""
                  htmlWidth="62px"
                  htmlHeight="38px"
                  mb="2rem"
                />
                <Text
                  fontSize={{ base: "1.25rem", sm: "1.5rem", md: "1.75rem" }}
                  fontWeight="semibold"
                  mb="1rem"
                >
                  {lang.t("delegates")}
                </Text>
                <Text fontSize={{ base: "1rem", sm: "1.125rem" }} mb="3rem">
                  {lang.t("delegates.desc")}
                </Text>
                <a href="https://onboard.iotex.io/hardware/delegates" target="_blank">
                  <Text color="discord" fontSize={{ base: "1rem", sm: "1.125rem" }}>
                    {lang.t("delegates.link.tip")}
                  </Text>
                </a>
              </Flex>
            </Flex>
          </Box>
          <Box
            mt={{ base: "2rem", md: "3rem", xl: "5rem" }}
            w={{base: "100%", lg: "35%", "2xl": "28%"}}
            borderRadius="15px"
            py={{ base: "1.2rem", sm: "1.5rem", lg: "1.2rem" }}
            px={{ base: "1.5rem", sm: "2.5rem", lg: "2rem" }}
            bg={`url(${helper.cdn('images/read_build_bg.png')})`}
            css={{
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Text
              fontSize={{ base: "1.25rem", sm: "1.5rem", lg: "1.75rem" }}
              fontWeight="semibold"
              mb="0.875rem"
            >
              {lang.t("network.status")}
            </Text>
            <Text fontSize={{ base: "1rem", sm: "1.25rem" }} mb="0.5rem">
              {lang.t("network.status.tip")}{" "}
              <a
                style={{ display: "inline-block" }}
                href="https://iotexscan.io"
                target="_blank"
              >
                <Text
                  fontSize={{ base: "1rem", sm: "1.25rem" }}
                  color="brandColor"
                  fontWeight="semibold"
                  lineHeight="1.275rem"
                >
                  iotexscan.io
                </Text>
              </a>
            </Text>
          </Box>
        </Flex>

        {/* burn drop tokenomics */}
        <Box maxWidth={{ base: "90%", lg: "85%", "2xl": "1554px" }} mx="auto" mt={{base: '10rem', md: "15rem"}}>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ base: "column-reverse", md: "row" }}
          >
            <Box w={{ base: "100%", md: "50%" }}>
              <Image src={helper.cdn(burnDrop)} />
            </Box>
            <Box
              w={{ base: "100%", md: "46%", "2xl": "40%" }}
              mb={{ base: "4rem", md: 0 }}
            >
              <Text
                fontSize={{
                  base: "1rem",
                  sm: "1.125rem",
                  md: "1.25rem",
                  xl: "2rem",
                  "2xl": "2.5rem",
                }}
                fontWeight="semibold"
                mb="0.5rem"
                whiteSpace="pre-line"
              >
                {lang.t("intro.mini6")}
              </Text>
              <Text
                fontSize={{
                  base: "1.8rem",
                  sm: "1.875rem",
                  lg: "2.5rem",
                  xl: "3rem",
                  "2xl": "4rem",
                }}
                whiteSpace={{ base: "inherit", md: "pre-line" }}
                mb="1rem"
                wordBreak="break-word"
                fontWeight="semibold"
                letterSpacing="4px"
              >
                {lang.t("intro.title6")}
              </Text>
              <Text
                fontSize={{
                  base: "0.875rem",
                  md: "1rem",
                  lg: "1.125rem",
                  xl: "1.25rem",
                }}
                opacity="0.85"
                fontWeight="medium"
                mb="2.5rem"
              >
                {lang.t("intro.subtitle6")}
              </Text>
              <Button
                href="https://burndrop.iotex.io/"
                size={{ base: "100%", md: "375px" }}
                name={lang.t("join.burn.drop")}
              />
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* new device */}
      <Box
        maxWidth={{ base: "90%", lg: "85%", "2xl": "1554px" }}
        mx="auto"
        borderRadius="1.125rem"
        px={{sm: "1rem", md: "4rem"}}
        py={{base:  "2rem", md: "3rem"}}
        mt={{base: "4rem", md: "7rem"}}
        css={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 133.06%)",
          boxShadow: "inset -1px -1px 0px rgba(172, 208, 254, 0.25)",
          backdropFilter: "blur(100px)",
        }}
      >
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex w={{base: "90%", md: "40%"}} flexDirection="column">
            <Image
              src={helper.cdn('images/token/icon_device.png')}
              alt=""
              htmlWidth="64px"
              htmlHeight="64px"
              mb="2rem"
            />
            <Text
              fontSize={{base: "1.125rem", sm: "1.5rem", md: "1.75rem" }}
              fontWeight="semibold"
              mb="1rem"
            >
              {lang.t("burn.drop.new1")}
            </Text>
            <Text fontSize={{ base: "0.875rem", sm: "1.125rem" }} mb="3rem" flex="1">
              {lang.t("burn.drop.new1.tips")}
            </Text>
            <a href="https://iott.network/" target="_blank">
              <Text color="discord" fontSize={{ base: "0.875rem", sm: "1.125rem" }}>
                {lang.t("burn.drop.new1.links")}
              </Text>
            </a>
          </Flex>
          <Image boxSize="8rem" src={helper.cdn('images/token/icon_right.png')} alt="" />
          <Flex w={{base: "90%", md: "40%"}} flexDirection="column">
            <Image
              src={helper.cdn('images/token/icon_$iotx.png')}
              alt=""
              boxSize="4rem"
              mb="2rem"
            />
            <Text
              fontSize={{base: "1.125rem", sm: "1.5rem", md: "1.75rem" }}
              fontWeight="semibold"
              mb="1rem"
            >
              {lang.t("burn.drop.new2")}
            </Text>
            <Text fontSize={{ base: "0.875rem", sm: "1.125rem" }} mb="3rem">
              {lang.t("burn.drop.new2.tips")}
            </Text>
            <a href="https://onboard.iotex.io/tokenomics/burn-drop" target="_blank">
              <Text color="discord" fontSize={{ base: "0.875rem", sm: "1.125rem" }}>
                {lang.t("burn.drop.new2.link")}
              </Text>
            </a>
          </Flex>
        </Flex>
      </Box>

      {/* burn drop drip */}
      <Flex
        maxWidth={{ base: "90%",  lg: "85%",  "2xl": "1554px" }}
        mx="auto"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        mt={{base: "4rem", md: "7rem"}}
      >
        {burndrops.map((item) => {
          return (
            <Box w={{base: "90%", md: "28%"}} key={item.name} mt={{base: "4rem", md: 0}}>
              <Flex alignItems="flex-end" justifyContent="space-between" pr="1rem" mb="0.5rem">
                <Box textAlign="center" >
                  <Image boxSize={{base: "6rem",sm: "12rem", md: "8rem"}} src={helper.cdn(item.icon)} />
                  <Text fontSize={{ base: "1.25rem", sm: "2.5rem", md: "1.25rem", xl: "2.5rem" }} fontWeight="bold">{item.name}</Text>
                </Box>
                <Text fontSize={{ base: "2rem", sm: "3rem", md: "2rem", xl: "5rem" }} fontWeight="medium" lineHeight="initial">
                  <CountTo from={0} to={item.amount} speed={4000} />%
                </Text>
              </Flex>
              <Text fontSize={{ base: "1rem", sm: "1.5rem", md: "1rem", xl: "1.125rem" }} flex="1" mt={{base: '1rem', md: 0}}>
                {item.desc}
              </Text>
            </Box>
          );
        })}
      </Flex>

      <Box
        maxWidth={{ base: "90%", lg: "85%",   "2xl": "1554px" }}
        mx="auto"
        borderRadius="1.125rem"
        px={{base: "1rem", sm: "2rem", lg: "4rem"}}
        py={{base: "2rem", lg: "3rem"}}
        mt={{base: "10rem", md: "15rem"}}
        css={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 133.06%)",
          boxShadow: "inset -1px -1px 0px rgba(172, 208, 254, 0.25)",
          backdropFilter: "blur(100px)",
        }}
      >
        <Flex alignItems='flex-start' flexDirection={{base: "column", md: "row"}}>
          <Image boxSize={{base: "60%", sm: "100%", md: "16rem"}} src={helper.cdn('images/token/icon_Burn-to-Certify.png')} mr={{base: 0, md: "2rem"}} mb={{base: "2rem", md: 0}}/>
          <Box>
            <Text fontSize={{ base: "1rem", sm: "1.6rem", md: "2rem", xl: "3rem" }} fontWeight="bold" letterSpacing="2px" mb={{base: "1rem", md: "0.5rem"}}>{lang.t("burn.to.certify")}</Text>
            <Text fontSize={{base: "0.75rem", sm: "1.25rem", lg: "1rem", xl: "1.25rem"}} flex="1">
              {lang.t("burn.to.certify.desc1")}
            </Text>
            <Text fontSize={{base: "0.75rem", sm: "1.25rem",  lg: "1rem", xl: "1.25rem"}} flex="1" mt="1.8rem">
              {lang.t("burn.to.certify.desc2")}
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box w={{base: "100%", md: "78%"}} mx="auto" mt="5rem" mb="6.5rem">
        <Img src={burnToCertify} w="100%" alt={'burn_to_certify'}/>
      </Box>

      <Center>
        <Button
          href="https://iott.network/"
          size={{ base: "80%", md: "40%", lg: "30%", "2xl": "30%" }}
          name={lang.t("explore.ioTT.network")}
        />
      </Center>

      <Footer />
    </BasicLayout>
  );
});
