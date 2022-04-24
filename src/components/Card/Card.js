import { EmailIcon, HamburgerIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuList,
  Skeleton,
  Stack,
  Text,
  Tooltip,
  Button,
  Wrap,
  WrapItem,
  MenuButton,
} from "@chakra-ui/react";
import React from "react";
import "./Card.css";

const Card = ({ user }) => {
  const badgeColor = (e) => {
    // if(e.innerText.toLowerCase() === "present"){
    //     return "present"
    // }else if(e.innerText.toLowerCase() === "absent"){
    //    return "absent"
    // }else if(e.innerText.toLowerCase() === "on leave"){
    //     return "onleave"
    // }else if(e.innerText.toLowerCase() === "weekend"){
    //     return "weekend"
    // }else if(e.innerText.toLowerCase() === "holiday"){
    //     return "weekholidayend"
    // }
  };

  return (
    <>
      {user ? (
        <Box
          bg={"white"}
          border={"1px"}
          d={"flex"}
          position={"relative"}
          className="singleCard"
        >
          <Box
            className="foravatar"
            mx={"5"}
            my={"2"}
            borderRight={"1px solid gray"}
            alignSelf={"center"}
            w={"30%"}
          >
            <Wrap>
              <WrapItem>
                <Avatar
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                  size="md"
                />
              </WrapItem>
            </Wrap>
            <Box
              d={"flex"}
              justifyContent={"space-between"}
              className="foricons"
              mt={"3"}
              w={"85%"}
            >
              <i class="fa-solid fa-pen icon" fontSize={"12px"} color="gray"></i>
              <i class="fa-solid fa-circle-pause icon"></i>
              <i class="fa-solid fa-trash-can icon"></i>
            </Box>
          </Box>

          <Box
            className="foravatar"
            my={"3"}
            align={"left"}
            color={"gray"}
            w={"70%"}
          >
            <Text fontSize="18px">{user.name}</Text>
            <Text fontSize="16" fontWeight={"bold"}>
              {user.title}
            </Text>
            <Text fontSize="16">{user.job}</Text>
            <Box d={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>
    


              <h6><span class="badge bg-secondary">{user.present}</span></h6>
              <Stack spacing={"1"} className="foriconbuttons">
                <IconButton
                  colorScheme="gray"
                  aria-label="Call Segun"
                  fontSize={"12px"}

                  size="xs"
                  icon={<PhoneIcon />}
                />
                <IconButton
                  colorScheme="gray"
                  size="xs"
                  fontSize={"12px"}
                  w={"auto"}
                  aria-label="Send email"
                  icon={<EmailIcon />}
                />
                <Menu>
                  <MenuButton>
                    <IconButton
                      colorScheme="gray"
                      size="xs"
                      w={"auto"}
                      
                      aria-label="more"
                      icon={<HamburgerIcon />}
                      className="customicon"
                    />
                  </MenuButton>
                  <MenuList w={"100%"}>
                    <Box className="customtooltib">
                      <box>
                        <small fontSize={"14px"} >office</small>
                        <Text fontSize={"16px"} >Arab Localizer</Text>
                      </box>
                      <box>
                        <small fontSize={"14px"} >office</small>
                        <Text fontSize={"16px"} >Arab Localizer</Text>
                      </box>
                      <box>
                        <small fontSize={"14px"} >office</small>
                        <Text fontSize={"16px"} >Arab Localizer</Text>
                      </box>
                      <box>
                        <small fontSize={"14px"} >office</small>
                        <Text fontSize={"16px"} >Arab Localizer</Text>
                      </box>
                      <box>
                        <small fontSize={"14px"} >office</small>
                        <Text fontSize={"16px"} >Arab Localizer</Text>
                      </box>
                    </Box>
                  </MenuList>
                </Menu>
              </Stack>
            </Box>
          </Box>
        </Box>
      ) : (
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      )}
    </>
  );
};

export default Card;
