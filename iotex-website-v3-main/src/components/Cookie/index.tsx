import React, { useEffect } from "react";
import { Cookies } from "react-cookie-consent";
import * as ReactGA from "react-ga";
import { hotjar } from "react-hotjar";
import { Box, Button, CloseButton, Flex, Text } from "@chakra-ui/react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useStore } from "@/store/index";

const Cookie = () => {
  const { lang } = useStore();
  const getCookieConsentValue = () => {
    return Cookies.get("CookieConsent");
  };

  const store = useLocalObservable(() => ({
    isShowCookie: false,
    setShowCookie(value: boolean) {
      this.isShowCookie = value;
    },
  }));

  const handleDeclineCookie = () => {
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
    Cookies.remove("_hjid");
    store.setShowCookie(false);
  };
  const handleAcceptCookie = () => {
    ReactGA.initialize("UA-111756489-1");
    hotjar.initialize(2494554, 6);
    Cookies.set("CookieConsent", true);
    store.setShowCookie(false);
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      store.setShowCookie(false);
      handleAcceptCookie();
    } else {
      store.setShowCookie(true);
    }
  }, []);
  return (
    <Box
      position="fixed"
      bottom="0"
      zIndex="10002"
      w="calc(100% - 40px)"
      m="20px"
      p="2rem"
      animation="cookieTipFadein .8s"
      bg="linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)"
      boxShadow="0 0 2rem 0 rgb(0 0 0 / 10%)"
      borderRadius="5"
      css={{
        backdropFilter: "blur(100px)",
      }}
      display={store.isShowCookie ? "block" : "none"}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Text
          fontSize="0.75rem"
          lineHeight="2"
          whiteSpace={{ base: "inherit", md: "pre-line" }}
          fontWeight="medium"
        >
          {lang.t("cookie.tips1")}{" "}
          <a
            href="/policy"
            style={{ textDecoration: "underline", color: "#44FFB2" }}
          >
            {lang.t("privacy.policy")}
          </a>{" "}
          {lang.t("cookie.tips3")}
        </Text>
        <Button
          _hover={{}}
          color="bgColor"
          onClick={handleAcceptCookie}
          bg={"linear-gradient(92.18deg, #44FFB2 19.21%, #00D3DC 105.06%)"}
        >
          {lang.t("accept.cookies")}
        </Button>
      </Flex>
    </Box>
  );
};

export default observer(Cookie);
