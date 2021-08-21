import React, { useState } from "react";
import { Box, Flex, Input, Image, Text } from "@chakra-ui/react";
import { useStore } from "@/store/index";
import { observer } from "mobx-react-lite";
import { Footer } from "@/components/Footer";
import { useMediaQuery } from "@chakra-ui/react";
import { useFormFields, useMailChimpForm } from "@/components/MailchimpForm";
import { publicConfig } from "../../../../config/public";
import {helper} from "@/utils/helper";

export const JoinRevolution = observer(() => {
  const { lang } = useStore();
  const ucamS = 'images/home/img_ucam_s.png';
  const ucamN = 'images/home/img_ucam_n.png';
  const pebbleS = 'images/home/img_pebble_s.png';
  const pebbleN = 'images/home/img_pebble_n.png';

  const [ucamSrc, setUcamSrc] = useState(ucamS);
  const [pebbleSrc, setPebbleSrc] = useState(pebbleS);
  const [isMaxThan768] = useMediaQuery("(min-width: 768px)");

  const { loading, error, success, message, handleSubmit } = useMailChimpForm(
    publicConfig.MAIL_CHIMP
  );
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
  });

  const infos = [
    {
      title: lang.t("telegram"),
      icon: "images/icon_telegram.png",
      desc: lang.t("telegram.desc"),
      href: "https://t.me/iotexchannel",
    },
    {
      title: lang.t("twitter"),
      icon: "images/icon_twitter.png",
      desc: lang.t("twitter.desc"),
      href: "https://twitter.com/iotex_io",
    },
    {
      title: lang.t("github"),
      icon: "images/icon_gitHub.png",
      desc: lang.t("github.desc"),
      href: "https://github.com/iotexproject",
    },
    {
      title: lang.t("youtube"),
      icon: "images/icon_youtube.png",
      desc: lang.t("youtube.desc"),
      href: "https://www.youtube.com/channel/UCdj3xY3LCktuamvuFusWOZw",
    },
  ];

  const roles = [
    {
      name: lang.t("investors"),
      btn: lang.t("explore"),
      icon: "images/get_start_card1.png",
      href: "/for-investors",
      lists: [
        lang.t("investors.tips1"),
        lang.t("investors.tips2"),
        lang.t("investors.tips3"),
      ],
    },
    {
      name: lang.t("developer"),
      btn: lang.t("build"),
      icon: "images/get_start_card2.png",
      href: "/developers",
      lists: [
        lang.t("developer.tips1"),
        lang.t("developer.tips2"),
        lang.t("developer.tips3"),
      ],
    },
    {
      name: lang.t("business"),
      btn: lang.t("connect"),
      icon: "images/get_start_card3.png",
      href: "/enterprise",
      lists: [
        lang.t("business.tip1"),
        lang.t("business.tip2"),
        lang.t("business.tip3"),
      ],
    },
  ];

  return (
    <Box
      mt={{ base: "10rem", lg: "15rem" }}
      css={{
        backgroundImage: `url(${helper.cdn('images/join_bg2.png')})`,
        backgroundSize: "60%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% 90%",
      }}
    >
      {/* IoTeX Blockchain Aleady Powers Real Device */}
      <Box
        maxWidth={{ base: "90%", md: "80%", "2xl": "1554px" }}
        mb={{ base: "4rem", lg: "6rem", "2xl": "6rem" }}
        mx="auto"
      >
        <Text
          fontSize={{ base: "2rem", sm: "1.875rem", lg: "2.5rem", xl: "4rem" }}
          fontWeight="semibold"
          mx="auto"
          textAlign="center"
          mb={{ base: "1rem", md: "1.75rem" }}
          whiteSpace={{ base: "inherit", md: "pre-line" }}
        >
          {lang.t("blockchain.title")}
        </Text>
        <Text
          fontSize={{
            base: "0.875rem",
            md: "1rem",
            lg: "1.25rem",
            xl: "1.5rem",
          }}
          opacity="0.8"
          fontWeight="medium"
          textAlign="center"
          whiteSpace={{ base: "inherit", md: "pre-line" }}
        >
          {lang.t("blockchain.tips")}
        </Text>
        <Box
          w={{ base: "100%", md: "90%" }}
          mx="auto"
          css={{
            background: `url(${helper.cdn('images/home/img_device.png')})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <Flex>
            <Box
              onMouseOver={() => setUcamSrc(ucamN)}
              onMouseOut={() => setUcamSrc(ucamS)}
              cursor="pointer"
            >
              <a href="/pebble" target="_blank">
                <img src={helper.cdn(pebbleSrc)} alt="" />
              </a>
            </Box>
            <Box
              onMouseOver={() => setPebbleSrc(pebbleN)}
              onMouseOut={() => setPebbleSrc(pebbleS)}
              cursor="pointer"
            >
              <a href="/ucam" target="_blank">
                <img src={helper.cdn(ucamSrc)} alt="" />
              </a>
            </Box>
          </Flex>
        </Box>
      </Box>
      {/* get started */}
      <Box
        maxWidth={{ base: "90%", md: "80%", "2xl": "1554px" }}
        mb={{ base: "10rem", lg: "15rem", "2xl": "15rem" }}
        mx="auto"
        id="getStarted"
      >
        <Text
          fontSize={{
            base: "1.8rem",
            sm: "1.875rem",
            lg: "2.5rem",
            xl: "4rem",
          }}
          fontWeight="semibold"
          mb={{ base: "3rem", lg: "5rem" }}
          whiteSpace="pre-line"
          textAlign="center"
        >
          {lang.t("get.started")}
        </Text>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="stretch"
        >
          {roles.map((item) => {
            return (
              <Flex
                key={item.name}
                flexDirection="column"
                w={{ base: "90%", sm: "50%", md: "30%", "2xl": "30%" }}
                mx="auto"
                py="3rem"
                mb={{ base: "4rem", lg: 0 }}
                css={{
                  backgroundImage: `url(${helper.cdn(item.icon)})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "100% 0%",
                  transition: "0.5s transform ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Text
                  fontSize={{ base: "1.25rem", lg: "1.5rem", "2xl": "2rem" }}
                  fontWeight="semibold"
                  mb="3rem"
                  whiteSpace="pre-line"
                  textAlign="center"
                >
                  {item.name}
                </Text>

                <Box
                  flex="1"
                  mx="auto"
                  w={{ base: "90%", md: "90%", xl: "75%", "2xl": "68%" }}
                  mb="2rem"
                >
                  {item.lists.map((option) => {
                    return (
                      <Flex alignItems="center" mb="1rem" key={option}>
                        <Image
                          boxSize="0.5rem"
                          src={helper.cdn('images/right-arrow.png')}
                          alt=""
                          mr="0.5rem"
                        />
                        <Text
                          fontSize={{
                            base: "1rem",
                            md: "0.75rem",
                            lg: "0.875rem",
                            xl: "1rem",
                            "2xl": "1.25rem",
                          }}
                          key={option}
                          fontWeight="semibold"
                        >
                          {option}
                        </Text>
                      </Flex>
                    );
                  })}
                </Box>

                <Box
                  className="commonBtnBox"
                  h={{ base: "3rem", md: "3rem" }}
                  w="68%"
                  mx="auto"
                >
                  <a href={item.href} style={{ width: "100%" }}>
                    <Flex
                      bg="btnBgColor"
                      className="commonBtn"
                      borderRadius="10px"
                      h="100%"
                      justifyContent="center"
                      alignItems="center"
                      cursor="pointer"
                    >
                      <Text
                        fontSize={{ base: "1.25rem", md: "1.25rem" }}
                        color="btnTextColor"
                        fontWeight="bold"
                        textAlign="center"
                      >
                        {item.btn}
                      </Text>
                    </Flex>
                  </a>
                </Box>
              </Flex>
            );
          })}
        </Flex>
      </Box>
      <Box
        maxWidth={{ base: "90%", md: "80%", "2xl": "1554px" }}
        mx="auto"
        borderRadius="1.125rem"
        css={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 133.06%)",
          boxShadow: "inset -1px -1px 0px rgba(172, 208, 254, 0.25)",
          backdropFilter: "blur(100px)",
        }}
      >
        <Flex
          direction="column"
          pt={{ base: "3rem", lg: "5rem" }}
          pb={{ base: "3rem", lg: "7.5rem" }}
          alignItems="center"
        >
          <Text
            fontSize={{
              base: "1.5rem",
              md: "1.875rem",
              lg: "2.5rem",
              xl: "3rem",
              "2xl": "4rem",
            }}
            fontWeight="semibold"
            maxWidth="100%"
            mb="1rem"
          >
            {lang.t("title6")}
          </Text>
          <Text
            fontSize={{ base: "0.75rem", md: "1rem", lg: "1.25rem" }}
            opacity="0.85"
            fontWeight="medium"
            mb="4.685rem"
            textAlign="center"
            maxWidth={{ base: "90%", lg: "70%" }}
          >
            {lang.t("subtitle6")}
          </Text>
          <Flex
            w={{ base: "95%", lg: "70%" }}
            mb={{ base: "4rem", lg: "8.56rem" }}
            justifyContent="space-between"
            flexWrap="wrap"
          >
            {infos.map((item) => {
              return (
                <Box
                  key={item.title}
                  textAlign="center"
                  maxWidth={{ base: "46%", sm: "24%" }}
                  width={{ base: "46%", xl: "auto" }}
                  cursor="pointer"
                  mb={{ base: "2rem", lg: 0 }}
                >
                  <a href={item.href} target="_blank">
                    <Flex
                      w={{ base: "1.5rem", lg: "7.5rem" }}
                      h={{ base: "1.5rem", lg: "7.5rem" }}
                      mx="auto"
                      justifyContent="center"
                      alignItems="center"
                      mb={{ base: "1rem", lg: "2rem" }}
                    >
                      <Image
                        w={{ base: "1.5rem", lg: "4.5rem" }}
                        src={helper.cdn(item.icon)}
                        alt={item.title}
                        css={{
                          filter:
                            "drop-shadow(0px 256px 200px rgba(0, 24, 0, 0.15)), drop-shadow(0px 110px 80px rgba(0, 1, 0, 0.07)), drop-shadow(0px 60px 55px rgba(0, 1, 0, 0.09)), drop-shadow(0px 35px 30px rgba(0, 21, 0, 0.0329042)), drop-shadow(0px 20px 16px rgba(0, 1, 0, 0.1))",
                        }}
                      />
                    </Flex>
                    <Text
                      fontSize={{ base: "1rem", lg: "1.125rem" }}
                      fontWeight="semibold"
                      mb="0.5rem"
                    >
                      {item.title}
                    </Text>
                    <Text
                      fontSize={{ base: "0.75rem", lg: "1rem" }}
                      color="grayColor2"
                      fontWeight="medium"
                      lineHeight="1.375rem"
                    >
                      {item.desc}
                    </Text>
                  </a>
                </Box>
              );
            })}
          </Flex>
          <Text
            fontSize={{ base: "1.5rem", lg: "2.25rem" }}
            fontWeight="semibold"
            lineHeight="2rem"
            mb="1rem"
          >
            {lang.t("stay.updated")}
          </Text>
          <Box w={{ base: "90%", md: "40vw" }}>
            <Text
              fontSize={{
                base: "0.75rem",
                sm: "1rem",
                lg: "1.25rem",
                "2xl": "1.25rem",
              }}
              fontWeight="normal"
              textAlign="center"
              mb="2.5rem"
              color="#fff"
            >
              {lang.t("stay.updated.desc")}
            </Text>
            <Box mb="0.5rem">
              <Text color="discord" fontSize="0.875rem" textAlign="center" mt={{ base: "2rem", lg: "3rem" }} mb="0.2rem">
                {loading && lang.t("loading")} {!loading && success && message}
                {!loading && error && lang.t("error.tips")}
              </Text>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit({...fields,'group[53458][1]':1}, null);
                }}
              >
                <Flex
                  mt="0.5rem"
                  h={{ base: "3rem", lg: "4.5rem" }}
                  css={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: 5,
                    "&:hover": {
                      borderColor: "#44FFB2",
                    },
                  }}
                >
                  <Box
                    flex="1"
                    fontSize="1.25rem"
                    css={{
                      borderRadius: "5px",
                      ".email": {
                        fontSize: "1.25rem !important",
                        width: "100%",
                      },
                    }}
                  >
                    <input
                      id="EMAIL"
                      type="email"
                      className="emailInput"
                      placeholder="Email"
                      value={fields.EMAIL}
                      onChange={handleFieldChange}
                    />
                  </Box>
                  <Flex
                    px="1rem"
                    borderRadius="5px"
                    fontFamily="Montserrat"
                    fontWeight="semibold"
                    color="bgColor"
                    fontSize="1.25rem"
                    h="100%"
                    bg="discord"
                    justifyContent="center"
                  >
                    <button className="emainBtn">{lang.t("submit")}</button>
                  </Flex>
                </Flex>
              </form>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mt={{ base: "4rem", md: 0 }} />
      <Box display={{ base: "none", md: "block" }}>
        <Footer />
      </Box>
    </Box>
  );
});
