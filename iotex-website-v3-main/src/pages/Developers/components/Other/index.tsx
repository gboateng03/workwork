import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useStore } from "@/store/index";
import { observer } from "mobx-react-lite";
import { Button } from "@/components/Button";
import bulrBall from "@/assets/images/dev/bulr_ball.png";

// @ts-ignore
import superChargeBg from "@/assets/images/dev/supercharge_bg.png";
// @ts-ignore
import screenSixBanner from "@/assets/images/dev/screen6_banner.png";

export const BuildOnIotex = observer(() => {
  const { lang } = useStore();

  const products = [
    {
      title: lang.t("pebble.tracker"),
      icon: "/images/dev/icon_peeble_tracker.png",
      desc: lang.t("pebble.tracker.desc"),
    },
    {
      title: lang.t("arduino"),
      icon: "/images/dev/icon_Arduino.png",
      desc: lang.t("arduino.desc"),
    },
    {
      title: lang.t("raspberry.pi"),
      icon: "/images/dev/icon_Raspberry_pi.png",
      desc: lang.t("raspberry.desc"),
    },
  ];

  return (
    <Box>
      <Box
        pb={{ base: "", md: "10rem", lg: "16rem" }}
        css={{
          // backgroundImage: `url(${superChargeBg})`,
          backgroundSize: "60%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0 10%",
        }}
      >
        <Flex
          maxWidth={{ base: "90%", lg: "80%", "2xl": "1554px" }}
          mx="auto"
          justifyContent="space-between"
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
          <Box
            w={{ base: "100%", md: "40%", lg: "30%", "2xl": "20vw" }}
            pt="2rem"
          >
            {products.map((item) => {
              return (
                <Flex
                  key={item.title}
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  mb={{ base: "2rem", sm: "4rem" }}
                >
                  <Image
                    boxSize="4rem"
                    objectFit="cover"
                    src={item.icon}
                    alt={item.title}
                    mb={{ base: "1rem", sm: "2rem" }}
                  />
                  <Flex alignItems="center" mb={{ base: "1rem", sm: "2rem" }}>
                    <Text
                      fontSize={{
                        base: "1rem",
                        lg: "1.25rem",
                        "2xl": "1.75rem",
                      }}
                      mr="0.5rem"
                      fontWeight="semibold"
                    >
                      {item.title}
                    </Text>
                    <Image
                      boxSize="2rem"
                      objectFit="cover"
                      src="/images/dev/link2.svg"
                      alt="arrow"
                      cursor="pointer"
                    />
                  </Flex>
                  <Text
                    fontSize={{
                      base: "0.875rem",
                      lg: "0.875rem",
                      "2xl": "1.125rem",
                    }}
                    opacity="0.85"
                    fontWeight="medium"
                  >
                    {item.desc}
                  </Text>
                </Flex>
              );
            })}
          </Box>
          <Box
            w={{ base: "100%", md: "48%", lg: "55%", "2xl": "50%" }}
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
              w={{ base: "100%", md: "70%", lg: "max-content" }}
              textAlign={{ base: "center", sm: "left" }}
              whiteSpace={{ base: "inherit", lg: "pre-line" }}
              fontWeight="semibold"
              mb="1.8rem"
            >
              {lang.t("dev.title2")}
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
              mb={{ base: "2rem", lg: "4.25rem" }}
              fontWeight="medium"
              opacity="0.85"
            >
              {lang.t("dev.subtitle2")}
            </Text>
            <Button
              href="/"
              size={{ base: "100%", md: "16rem" }}
              name={lang.t("learn.more")}
            />
          </Box>
        </Flex>
      </Box>
      {/* <Text
            fontSize={{
              base: "1.8rem",
              sm: "1.875rem",
              lg: "2.5rem",
              xl: "3rem",
              "2xl": "4rem",
            }}
            fontWeight="semibold"
            color="white"
            textAlign="center"
            mb="1.75rem"
          >
            {lang.t("dev.title6")}
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
            mx="auto"
            mb={{ base: "3rem", lg: "7.5rem" }}
          >
            {lang.t("dev.subtitle6")}
          </Text>
          <Flex justifyContent="center">
            <Button
              href="/"
              size={{ base: "100%", md: "48%" }}
              name={lang.t("governance")}
            />
          </Flex>
          <Box
            w={{ base: "90%", sm: "80%", md: "65%" }}
            mx="auto"
            mt={{ base: "3rem", md: "7.5rem" }}
          >
            <Image src={screenSixBanner} alt="screen_6_banner" />
          </Box> */}
    </Box>
  );
});
