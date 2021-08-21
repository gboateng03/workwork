import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useStore } from "@/store/index";
import { observer, useLocalStore } from "mobx-react-lite";
import { useFormFields, useMailChimpForm } from "@/components/MailchimpForm";
import { publicConfig } from "../../config/public";
import {helper} from "@/utils/helper";

export const EmailPopup = observer(({}) => {
  const { lang } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  const { loading, error, success, message, handleSubmit } = useMailChimpForm(
    publicConfig.MAIL_CHIMP
  );
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
  });

  const onClose = () => {
    setIsOpen(false);
    window.localStorage.setItem("isShowEmail", "show");
  };

  useEffect(() => {
    console.log('uuid', window.localStorage.getItem("isShowEmail"), window.localStorage.getItem('uuid'), window.localStorage.getItem("isShowEmail") === null && window.localStorage.getItem('uuid') !== null)
    // && window.localStorage.getItem('uuid') !== null
    if (window.localStorage.getItem("isShowEmail") === null) {
      setTimeout(() => {
        setIsOpen(true);
      }, 3000);
    }
  }, []);

  return (
    <>
      {isOpen && (
        <Box overflow="hidden" position="fixed"
            top="50%"
            left="50%"
            zIndex="999999"
            w={{ base: "90%", md: "70%", "2xl": "50%" }}
            transform="translateX(-50%) translateY(-50%)"
            outline="none" borderRadius="20px" >
          <Box
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            flexDirection={{ base: "column", lg: "row" }}
            bg={{base: `url(${helper.cdn('images/email_popup.svg')})`, md: "linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)"}}
            boxShadow={{base: "none", md: "inset -1px -1px 0px rgba(255, 255, 255, 0.25)"}}
            css={{
              backdropFilter: "blur(100px)",
              borderRadius: "20px",
            }}
          >
            <Box
              w={{ base: "50%", lg: "50%" }}
              px={{ base: "0", lg: "10%" }}
              mt={{ base: "3rem", lg: 0 }}
            >
              <img src={helper.cdn('images/email_banner.png')} alt="" />
            </Box>
            <Box
              w={{ base: "100%", lg: "50%" }}
              py="1.5rem"
              px={{ base: "1rem", lg: "2rem" }}
            >
              <Image
                boxSize="1.25rem"
                src={helper.cdn('images/explore/close.png')}
                position="absolute"
                right="1.5rem"
                top="1.5rem"
                opacity="0.8"
                cursor="pointer"
                zIndex="11111"
                onClick={onClose}
              />
              <Text
                fontSize={{
                  base: "1.5rem",
                  lg: "2rem",
                  xl: "2.5rem",
                  "2xl": "3rem",
                }}
                fontWeight="semibold"
                lineHeight="2rem"
                mt="1.25rem"
                mb={{ base: "1.5rem", lg: "2.5rem" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                {lang.t("stay.updated")}
              </Text>
              <Text
                fontSize={{
                  base: "1rem",
                  sm: "1rem",
                  lg: "1.25rem",
                  "2xl": "1.25rem",
                }}
                fontWeight="medium"
              >
                {lang.t("email")}
              </Text>
              <Box mt={{ base: "0.5rem", lg: "1.25rem" }}>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit(fields, onClose);
                  }}
                >
                  <Box
                    flex="1"
                    fontSize="1.25rem"
                    h={{ base: "3rem", lg: "4rem" }}
                    css={{
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "10px",
                      "&:hover": {
                        borderColor: "#44FFB2",
                      },
                      ".email": {
                        fontSize: "1.25rem !important",
                        width: "100%",
                      },
                    }}
                  >
                    <input
                      id="EMAIL"
                      autoFocus
                      type="email"
                      className="emailInput"
                      value={fields.EMAIL}
                      onChange={handleFieldChange}
                    />
                  </Box>
                  <Text color="discord" fontSize="0.875rem" textAlign="center" mt={{ base: "2rem", lg: "3rem" }} mb="0.2rem">
                    {loading && lang.t("loading")} {!loading && success && message}
                    {!loading && error && lang.t("error.tips")}
                  </Text>
                  <Flex
                    p="10px 15px"
                    borderRadius="10px"
                    fontFamily="Montserrat"
                    fontWeight="semibold"
                    color="bgColor"
                    fontSize="1.375rem"
                    h="100%"
                    bg="linear-gradient(92.18deg, #44FFB2 19.21%, #00D3DC 105.06%)"
                    mb="1.5rem"
                    justifyContent="center"
                  >
                    <button className="emainBtn">
                      {lang.t("join.mailing.list")}
                    </button>
                  </Flex>
                </form>
              </Box>
              <Text
                fontSize={{ base: "1rem", md: "1.125rem", xl: "1.25rem" }}
                fontWeight="medium"
                opacity="0.85"
                mb="1.25rem"
                lineHeight="1.8"
                textAlign={{ base: "center", lg: "left" }}
              >
                {lang.t("emailpopup.tips")}
              </Text>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
});
