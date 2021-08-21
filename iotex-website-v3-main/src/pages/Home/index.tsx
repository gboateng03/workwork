import React, { useEffect } from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useStore } from "@/store/index";
import {
  Flex,
  Box,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useMediaQuery,
} from "@chakra-ui/react";
import BasicLayout from "../../Layouts/BasicLayout";
import { Banner } from "@/components/Banner";
import { AwardWinning } from "./components/AwardWinning/index";
import { NextGen } from "./components/NextGen/index";
import { JoinRevolution } from "./components/JoinRevolution/index";
import CountTo from "react-count-to";
import { subgraphAPI } from "@/lib/iotexGraphApi";
import { numberWithCommas } from "@/utils/index";
import {helper} from "@/utils/helper";
import {News} from "@/pages/Home/components/News";

export const Home = observer(() => {
  const { lang } = useStore();
  const [isMaxThan768] = useMediaQuery("(min-width: 768px)");
  // const analysis = [
  // 	{name: lang.t("devices"), amount: 6280, coin: "", result: '6,208'},
  // 	{name: lang.t("transactions"), amount: 16, coin: "M+", result: 16},
  // 	{name: lang.t("community"), amount: 200, coin: "K+", result: 200},
  // 	{name: lang.t("stakers"), amount: 8, coin: "", result: '8K+'},
  // ];

  const store = useLocalObservable(() => ({
    isOpen: false,
    hoverIndex: 0,
    status: false,
    deviceCount: 0,
    transactions: 0,
    stakers: 0,
    commiunity: 0,
    analysis: [],
    open() {
      store.isOpen = true;
    },
    onClose() {
      store.isOpen = false;
    },
    getAnalysisData: async () => {
      const response = await subgraphAPI.query({
        KV: [
          {
            where: {
              key: {
                _in: ["deviceCount", "transactions", "commiunity", "stakers"],
              },
            },
          },
          {
            key: true,
            value: true,
          },
        ],
      });
      response.data.KV.forEach((item) => {
        store[`${item.key}`] = Number(item.value);
      });
    },
  }));

  useEffect(() => {
    store.getAnalysisData();
  }, []);

  return (
    <BasicLayout name="home">
      <Box
        css={{
          backgroundImage:
            `url(${helper.cdn('images/banner_left_bg.png')}),url(${helper.cdn('images/banner_r_bg.png')})`,
          backgroundSize: "100%, 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0 0, 100% 0",
        }}
      >
        <Banner />

        {/*  Devices */}
        <Flex
          color="white"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          w={{ base: "80%", md: "80%", "2xl": "1554px" }}
          mx="auto"
          mt={{ base: "5rem", md: "2rem" }}
        >
          <Box
            textAlign="center"
            w={{ base: "45%", md: "25%" }}
            mb={{ base: "3rem", md: "0" }}
          >
            <Text
              fontWeight="medium"
              fontSize={{
                base: "1.5rem",
                md: "1.5rem",
                lg: "2rem",
                xl: "3rem",
                "2xl": "4rem",
              }}
              mb={{ base: "0.5rem", md: "1rem" }}
            >
              {store.status ? (
                numberWithCommas(store.deviceCount)
              ) : (
                <CountTo
                  from={0}
                  to={store.deviceCount}
                  speed={1000}
                  onComplete={() => (store.status = true)}
                />
              )}
            </Text>
            <Text
              fontSize={{
                base: "1rem",
                lg: "0.875rem",
                xl: "1rem",
                "2xl": "1.25rem",
              }}
              color="#CCCCCC"
              fontWeight="bold"
            >
              {lang.t("devices")}
            </Text>
          </Box>
          <Box
            textAlign="center"
            w={{ base: "45%", md: "25%" }}
            mb={{ base: "3rem", md: "0" }}
          >
            <Text
              fontWeight="medium"
              fontSize={{
                base: "1.5rem",
                md: "1.5rem",
                lg: "2rem",
                xl: "3rem",
                "2xl": "4rem",
              }}
              mb={{ base: "0.5rem", md: "1rem" }}
            >
              {store.status ? (
                numberWithCommas(store.transactions)
              ) : (
                <CountTo
                  from={0}
                  to={store.transactions}
                  speed={1000}
                  onComplete={() => (store.status = true)}
                />
              )}
            </Text>
            <Text
              fontSize={{
                base: "1rem",
                lg: "0.875rem",
                xl: "1rem",
                "2xl": "1.25rem",
              }}
              color="#CCCCCC"
              fontWeight="bold"
            >
              {lang.t("transactions")}
            </Text>
          </Box>
          <Box
            textAlign="center"
            w={{ base: "45%", md: "25%" }}
            mb={{ base: "3rem", md: "0" }}
          >
            <Text
              fontWeight="medium"
              fontSize={{
                base: "1.5rem",
                md: "1.5rem",
                lg: "2rem",
                xl: "3rem",
                "2xl": "4rem",
              }}
              mb={{ base: "0.5rem", md: "1rem" }}
            >
              <CountTo
                from={0}
                to={store.commiunity}
                speed={1000}
                onComplete={() => (store.status = true)}
              />
              K+
            </Text>
            <Text
              fontSize={{
                base: "1rem",
                lg: "0.875rem",
                xl: "1rem",
                "2xl": "1.25rem",
              }}
              color="#CCCCCC"
              fontWeight="bold"
            >
              {lang.t("community")}
            </Text>
          </Box>
          <Box
            textAlign="center"
            w={{ base: "45%", md: "25%" }}
            mb={{ base: "3rem", md: "0" }}
          >
            <Text
              fontWeight="medium"
              fontSize={{
                base: "1.5rem",
                md: "1.5rem",
                lg: "2rem",
                xl: "3rem",
                "2xl": "4rem",
              }}
              mb={{ base: "0.5rem", md: "1rem" }}
            >
              {store.status ? (
                numberWithCommas(store.stakers)
              ) : (
                <CountTo
                  from={0}
                  to={store.stakers}
                  speed={1000}
                  onComplete={() => (store.status = true)}
                />
              )}
            </Text>
            <Text
              fontSize={{
                base: "1rem",
                lg: "0.875rem",
                xl: "1rem",
                "2xl": "1.25rem",
              }}
              color="#CCCCCC"
              fontWeight="bold"
            >
              {lang.t("stakers")}
            </Text>
          </Box>
        </Flex>
        <Box
          mt={{ base: "1rem", md: "2rem", lg: "2.5rem", xl: "4rem" }}
          maxWidth={{ base: "90%", md: "80%", "2xl": "1554px" }}
          mx="auto"
          position="relative"
        >
          <Image
            boxSize={{ base: "2rem", md: "4rem", xl: "5.25rem" }}
            objectFit="cover"
            src={helper.cdn('images/img_circular3.png')}
            alt="img_circular3"
            mx={{ base: "5%", md: "5%", lg: "8%", xl: "10%" }}
          />
        </Box>

        {/* Speed, Security, Scalability */}
        <Box
          mt={{ base: "1rem", md: "2rem", lg: "2.5rem", xl: "3.3rem" }}
          mx="auto"
          maxWidth={{ base: "90%", md: "80%", "2xl": "1554px" }}
        >
          <Text
            fontSize={{
              base: "2rem",
              sm: "1.875rem",
              lg: "2.5rem",
              xl: "4rem",
            }}
            fontWeight="bold"
            width={{ base: "90%", sm: "90%" }}
            mx="auto"
            textAlign="center"
            mb={{ base: "1rem", md: "1.75rem" }}
          >
            {lang.t("title2")}
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
            textAlign="center"
            mb={{ base: "1rem", md: "4.1875rem" }}
            whiteSpace="pre-line"
          >
            {lang.t("subtitle2")}
          </Text>
        </Box>
        <Box
          pb="4.5rem"
          maxWidth={{ base: "90%", md: "80%", "2xl": "1554px" }}
          mx="auto"
        >
          <Box mx="auto" position="relative">
            <Box onClick={store.open}>
              <img src={helper.cdn('images/video.png')} alt="" />
              <Flex
                w="100%"
                h="100%"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                top="0"
                left="0"
              >
                <Image
                  boxSize={{ base: "40px", md: "80px" }}
                  objectFit="cover"
                  src={helper.cdn('images/play-icon.png')}
                  alt="img_circular3"
                  mx="10%"
                  cursor="pointer"
                />
              </Flex>
            </Box>
            <Modal isOpen={store.isOpen} onClose={store.onClose} size="6xl">
              <ModalOverlay />
              <ModalContent w="80%" h={{ base: "50vh", md: "70vh" }}>
                <ModalBody
                  p="0.5rem"
                  bg="bgColor"
                  border="1px"
                  borderColor="borderColor"
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/videoseries?list=PLOD_OdAxOoc1W985OaY6IbWIl31SU-_Jt&autoplay=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
          {/* <Flex h={{base: "280px", md: "399px", xl: "337px"}} mb={{base: "2rem", xl: "8.56rem"}}>
            {
              advantages.map((item, index) => {
                return <Box key={item.title}>
                  <DropCard
                    hoverIndex={store.hoverIndex}
                    index={index} title={item.title}
                    icon={item.icon} desc={item.desc}
                    changeHoverIndex={() => store.hoverIndex = -1}
                  />
                </Box>
              })
            }
          </Flex> */}
        </Box>
      </Box>

      {/* award-winning */}
      <Box
        backgroundPosition={{ base: "30% 12%", xl: "25% 0%" }}
        pt={{ base: "0", md: "7.5rem" }}
        pb={{ base: "4rem", md: "10rem", lg: "10rem" }}
        css={{
          backgroundImage: `url(${helper.cdn('images/award_wing_bg.png')})`,
          backgroundSize: "56%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          maxWidth={{ base: "90%", md: "80%", "2xl": "1554px" }}
          mx="auto"
          mb={{ base: "4rem", md: "10rem", xl: "12rem" }}
        >
          <AwardWinning />
        </Box>
        <Box w="100%" position="relative">
          <Box height={{ base: "10rem", md: "max-content" }}>
            <img src={helper.cdn('images/mask_group.png')} style={{ opacity: 0 }} alt="" />
          </Box>
          <Flex
            flexDirection="column"
            w="100%"
            height="100%"
            position="absolute"
            zIndex="2"
            top="0"
          >
            <Box
              mb="5%"
              css={{
                height: "45%",
                background: `url(${helper.cdn('images/awind_line_1.png')}) center 0px repeat-x`,
                backgroundSize: isMaxThan768 ? "250% 100%" : "650% 100%",
                backgroundPositionX: isMaxThan768 ? "250%" : "650%",
                animation: "awardLine1 90s infinite linear",
              }}
            />
            <Box
              css={{
                height: "45%",
                background: `url(${helper.cdn('images/awind_line_2.png')}) center 0px repeat-x`,
                backgroundSize: isMaxThan768 ? "240% 100%" : "640% 100%",
                backgroundPositionX: isMaxThan768 ? "240%" : "640%",
                animation: "awardLine2 90s infinite linear",
              }}
            />
          </Flex>
          <Box
            css={{
              position: "absolute",
              top: "-1px",
              left: "-1px",
              right: "-1px",
              bottom: "-1px",
              zIndex: 2,
              background: `url(${helper.cdn('images/mask.png')}) center center no-repeat`,
              backgroundSize: isMaxThan768 ? "contain" : "100% 100%",
            }}
          />
        </Box>

      </Box>

      <News/>
      {/* A Launchpad for Blockchain  Ideas and Projects */}
      <NextGen />
      <JoinRevolution />
    </BasicLayout>
  );
});
