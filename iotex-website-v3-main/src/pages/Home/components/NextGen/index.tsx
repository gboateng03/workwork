import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useStore } from "@/store/index";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Button } from "@/components/Button";
import { useMediaQuery } from "@chakra-ui/react";
import {helper} from "@/utils/helper";

export const NextGen = observer(() => {
  const { lang } = useStore();
  const [isMaxThan468] = useMediaQuery("(min-width: 468px)");

  const store = useLocalObservable(() => ({
    configs: [
      {
        name: lang.t("decentralized"),
        desc: lang.t("advantage1.tips"),
        icon: "images/user.png",
        selectedIcon: "images/card1.png",
        show: false,
      },
      {
        name: lang.t("mega.scalable"),
        desc: lang.t("advantage2.tips"),
        icon: "images/mining.png",
        selectedIcon: "images/card2.png",
        show: false,
      },
      {
        name: lang.t("ultra.fast"),
        desc: lang.t("advantage3.tips"),
        icon: "images/real.png",
        selectedIcon: "images/card3.png",
        show: false,
      },
      {
        name: lang.t("secure.cryptographic"),
        desc: lang.t("advantage4.tips"),
        icon: "images/deflot.png",
        selectedIcon: "images/card4.png",
        show: false,
      },
    ],
    dapps1: [
      {
        name: lang.t("ucam"),
        desc: lang.t("ucam.desc"),
        icon: "images/ucam.png",
        href: "https://ucam.iotex.io/",
      },
      {
        name: lang.t("pebble"),
        desc: lang.t("pebble.desc"),
        icon: "images/pebble.png",
        href: "/pebble",
      },
      {
        name: lang.t("smart.lock"),
        desc: lang.t("smart.lock.desc"),
        icon: "images/logo_samrtlock.png",
        href: "https://iotexlab.io/delegates",
      },
    ],
    dapps2: [
      {
        name: lang.t("ioTube"),
        desc: lang.t("ioTube.desc"),
        icon: "images/logo_iotube.png",
        href: "https://ecosystem.iotex.io/post/240",
      },
      {
        name: lang.t("mimo"),
        desc: lang.t("mimo.desc"),
        icon: "images/mimo.png",
        href: "https://ecosystem.iotex.io/post/232",
      },
      {
        name: lang.t("cyclone"),
        desc: lang.t("cyclone.desc"),
        icon: "images/cyc.png",
        href: "https://ecosystem.iotex.io/post/953",
      },
    ],
    dapps3: [
      {
        name: lang.t("IoTT.portal"),
        desc: lang.t("IoTT.portal.desc"),
        icon: "images/logo_iott.png",
        href: "https://ecosystem.iotex.io/post/1009",
      },
      {
        name: lang.t("hermes"),
        desc: lang.t("hermes.desc"),
        icon: "images/logo_hermes.png",
        href: "https://ecosystem.iotex.io/post/200",
      },
      {
        name: lang.t("minttoken"),
        desc: lang.t("minttoken.desc"),
        icon: "images/logo_minttoken.png",
        href: "https://ecosystem.iotex.io/post/959",
      },
    ],
    changeCard(item, index) {
      const arr = [...store.configs];
      arr[index].show = true;
      store.configs = arr;
    },
    resetCard(item, index) {
      const arr = [...store.configs];
      arr[index].show = false;
      store.configs = arr;
    },
  }));

  return (
    <Box
      css={{
        backgroundImage: `url(${helper.cdn('images/home/next_gen_bg2.png')}), url(${helper.cdn('images/home/next_gen_bg.png')})`,
        backgroundSize: "60%, 30%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0% 0% ,0% 80%",
      }}
    >
      <Box maxWidth={{ base: "90%", md: "80%", "2xl": "1554px" }} mx="auto">
        <Text
          fontSize={{
            base: "1.8rem",
            sm: "1.875rem",
            lg: "2.5rem",
            xl: "4rem",
          }}
          fontWeight="semibold"
          mb="1.25rem"
          whiteSpace="pre-line"
        >
          {lang.t("title3")}
        </Text>
        <Text
          fontSize={{
            base: "0.875rem",
            md: "1rem",
            lg: "1.25rem",
            xl: "1.5rem",
          }}
          opacity="0.85"
          fontWeight="medium"
          mb={{ base: "2rem", lg: "4.25rem" }}
          maxWidth={{ base: "100%", lg: "42%" }}
        >
          {lang.t("subtitle3")}
        </Text>
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", xl: "row" }}
        >
          <Button
            href="https://ecosystem.iotex.io/projects"
            size={{ base: "100%", md: "375px" }}
            name={lang.t("explore.ecosystem")}
          />
          <Flex
            flexWrap="wrap"
            maxWidth={{ base: "100%", xl: "60%" }}
            justifyContent="space-between"
            alignContent="space-between"
            mt={{ base: "3rem", xl: 0 }}
          >
            {store.configs.map((item, index) => {
              return (
                <Flex
                  key={item.name}
                  w={{ base: "100%", sm: "48%" }}
                  maxW="28.125rem"
                  maxH="15.75rem"
                  h={{
                    base: "10rem",
                    sm: "10rem",
                    lg: "12rem",
                    "2xl": "15.75rem",
                  }}
                  mb={{ base: "2rem", xl: "2rem" }}
                  px={{ base: "1.25rem", md: "1.8rem", "2xl": "2.5rem" }}
                  justifyContent="space-between"
                  alignItems="center"
                  css={{
                    background: isMaxThan468
                      ? `url(${helper.cdn('images/next_card.png')})`
                      : `url(${helper.cdn(item.selectedIcon)})`,
                    mixBlendMode: "normal",
                    borderRadius: "0.625rem",
                    backgroundSize: "100% 100%",
                    transition: "background 0.6s",
                    "&:hover": {
                      background: `url(${helper.cdn(item.selectedIcon)})`,
                      backgroundSize: "100% 100%",
                    },
                  }}
                  cursor="pointer"
                  onMouseOver={() =>
                    isMaxThan468 ? store.changeCard(item, index) : ""
                  }
                  onMouseOut={() =>
                    isMaxThan468 ? store.resetCard(item, index) : ""
                  }
                >
                  {item.show ? (
                    <>
                      <Text
                        fontSize={{
                          base: "1rem",
                          lg: "1.2rem",
                          "2xl": "1.5rem",
                        }}
                        fontWeight="semibold"
                        pointerEvents="none"
                      >
                        {item.desc}
                      </Text>
                    </>
                  ) : (
                    <>
                      <Box w={{ base: "100%", sm: "60%", xl: "max-content" }} pointerEvents="none">
                        <Text
                          fontSize={{
                            base: "1rem",
                            lg: "1.25rem",
                            "2xl": "2rem",
                          }}
                          fontWeight="semibold"
                          mb={{ base: "1rem", sm: "3rem" }}
                        >
                          {item.name}
                        </Text>
                        <Text
                          display={{ base: "block", sm: "none" }}
                          opacity="0.85"
                          fontSize="0.75rem"
                          fontWeight="semibold"
                        >
                          {item.desc}
                        </Text>
                      </Box>
                      <Image
                        boxSize={{ base: "5rem", md: "6rem", "2xl": "8rem" }}
                        objectFit="cover"
                        src={helper.cdn(item.icon)}
                        alt={item.name}
                        css={{
                          filter:
                            "drop-shadow(0px 256px 200px rgba(0, 24, 0, 0.15)), drop-shadow(0px 110px 80px rgba(0, 1, 0, 0.07)), drop-shadow(0px 60px 55px rgba(0, 1, 0, 0.09)), drop-shadow(0px 35px 30px rgba(0, 21, 0, 0.0329042)), drop-shadow(0px 20px 16px rgba(0, 1, 0, 0.1))",
                        }}
                      />
                    </>
                  )}
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Box>
      <Box
        mt="12.75rem"
        textAlign="right"
        position="relative"
        height="28.25rem"
        display={{ base: "none", xl: "block" }}
      >
        <Box
          position="absolute"
          height="7.5rem"
          mb="2.875rem"
          maxWidth={{ base: "80%", "2xl": "1446px" }}
          top="0"
          right="-15%"
        >
          <Flex justifyContent="space-between">
            {store.dapps1.map((item, index) => {
              return (
                <Flex
                  key={index}
                  px="1.25rem"
                  py="1rem"
                  cursor="pointer"
                  w="30%"
                  maxWidth="450px"
                  css={{
                    background:
                      "linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)",
                    mixBlendMode: "normal",
                    borderRadius: "1.25rem",
                    boxShadow: "inset -1px -1px 0px rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(100px)",
                    transition: "all 0.5s",
                    marginTop: 0,
                    opacity: 0.8,
                    "&:hover": {
                      marginTop: "-10px",
                      opacity: 1,
                    },
                  }}
                >
                  <a
                    href={item.href}
                    style={{ display: "flex" }}
                    target="_blank"
                  >
                    <Image
                      boxSize="3rem"
                      objectFit="cover"
                      src={helper.cdn(item.icon)}
                      alt={item.name}
                      mr="1rem"
                    />
                    <Box textAlign="left">
                      <Text
                        fontSize="1.125rem"
                        lineHeight="1.25rem"
                        fontWeight="semibold"
                        mb="0.5rem"
                      >
                        {item.name}
                      </Text>
                      <Text
                        fontSize="1rem"
                        wordBreak="break-word"
                        lineHeight="1.25rem"
                        className="showTwoLine"
                      >
                        {item.desc}
                      </Text>
                    </Box>
                  </a>
                </Flex>
              );
            })}
          </Flex>
        </Box>
        <Box
          height="7.5rem"
          mb="2.875rem"
          position="absolute"
          maxWidth={{ base: "80%", "2xl": "1446px" }}
          top="10.375rem"
          right="-5%"
        >
          <Flex justifyContent="space-between" mb="2.875rem">
            {store.dapps2.map((item, index) => {
              return (
                <Flex
                  px="1.25rem"
                  py="1rem"
                  w="30%"
                  key={index}
                  cursor="pointer"
                  maxWidth="450px"
                  css={{
                    background:
                      "linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)",
                    mixBlendMode: "normal",
                    borderRadius: "1.25rem",
                    boxShadow: "inset -1px -1px 0px rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(100px)",
                    transition: "all 0.5s",
                    marginTop: 0,
                    "&:hover": {
                      marginTop: "-10px",
                    },
                  }}
                >
                  <a
                    href={item.href}
                    style={{ display: "flex" }}
                    target="_blank"
                  >
                    <Image
                      boxSize="3rem"
                      objectFit="cover"
                      src={helper.cdn(item.icon)}
                      alt={item.name}
                      mr="1.25rem"
                    />
                    <Box textAlign="left">
                      <Text
                        fontSize="1.125rem"
                        lineHeight="1.25rem"
                        fontWeight="semibold"
                        mb="0.5rem"
                      >
                        {item.name}
                      </Text>
                      <Text
                        fontSize="1rem"
                        wordBreak="break-word"
                        lineHeight="1.25rem"
                        className="showTwoLine"
                      >
                        {item.desc}
                      </Text>
                    </Box>
                  </a>
                </Flex>
              );
            })}
          </Flex>
        </Box>
        <Box
          height="7.5rem"
          mb="2.875rem"
          position="absolute"
          maxWidth={{ base: "80%", "2xl": "1446px" }}
          top="20.75rem"
          right="1.6875rem"
        >
          <Flex justifyContent="space-between" w="100%">
            {store.dapps3.map((item, index) => {
              return (
                <Flex
                  px="1.25rem"
                  py="1rem"
                  w="30%"
                  key={index}
                  cursor="pointer"
                  maxWidth="450px"
                  css={{
                    background:
                      "linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)",
                    mixBlendMode: "normal",
                    borderRadius: "20px",
                    boxShadow: "inset -1px -1px 0px rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(100px)",
                    transition: "all 0.5s",
                    marginTop: 0,
                    opacity: 0.8,
                    "&:hover": {
                      marginTop: "-10px",
                      opacity: 1,
                    },
                  }}
                >
                  <a
                    href={item.href}
                    style={{ display: "flex" }}
                    target="_blank"
                  >
                    <Image
                      boxSize="3rem"
                      objectFit="cover"
                      src={helper.cdn(item.icon)}
                      alt={item.name}
                      mr="1.25rem"
                    />
                    <Box textAlign="left">
                      <Text
                        fontSize="1.125rem"
                        lineHeight="1.25rem"
                        fontWeight="semibold"
                        mb="0.5rem"
                      >
                        {item.name}
                      </Text>
                      <Text
                        fontSize="1rem"
                        wordBreak="break-word"
                        lineHeight="1.25rem"
                        className="showTwoLine"
                      >
                        {item.desc}
                      </Text>
                    </Box>
                  </a>
                </Flex>
              );
            })}
          </Flex>
        </Box>
      </Box>
      <Box
        display={{ base: "none", sm: "block", xl: "none" }}
        w={{ base: "90%", md: "80%" }}
        mx="auto"
      >
        {[store.dapps1, store.dapps2, store.dapps3].map((item, index) => {
          return (
            <Flex
              key={`dapps${index}`}
              justifyContent="space-between"
              mb="2rem"
            >
              {item.map((option) => {
                return (
                  <a
                    href={option.href}
                    key={option.name}
                    style={{
                      width: "31%",
                      padding: "1rem 0.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)",
                      mixBlendMode: "normal",
                      borderRadius: "10px",
                      boxShadow:
                        "inset -1px -1px 0px rgba(255, 255, 255, 0.25)",
                      backdropFilter: "blur(100px)",
                    }}
                    target="_blank"
                  >
                    <Image
                      boxSize="1.5rem"
                      objectFit="cover"
                      src={helper.cdn(option.icon)}
                      alt={option.name}
                      mr="0.5rem"
                    />
                    <Text
                      fontSize={{ base: "0.75rem", md: "1.2rem" }}
                      fontWeight="semibold"
                    >
                      {option.name}
                    </Text>
                  </a>
                );
              })}
            </Flex>
          );
        })}
      </Box>
      <Box
        w={{ base: "50%", sm: "10rem", xl: "14rem", "2xl": "20rem" }}
        height={{ "2xl": "6rem" }}
        position="relative"
        cursor="pointer"
        mx="auto"
        mt={{base: "0", md: "3rem"}}
      >
        <Box
          w="100%"
          position="absolute"
          top="0"
          css={{
            transition: "all 0.6s",
            marginTop: 0,
            opacity: 0.8,
            "&:hover": {
              marginTop: "-10px",
              opacity: 1,
            },
          }}
        >
          <a href="/developers">
            <img src={helper.cdn('images/home/buildIotx.png')} alt="" />
          </a>
        </Box>
      </Box>
    </Box>
  );
});
