import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import "./NavBar.css";

const NavBar = () => {
  const [width, setWidth] = useState(window.screen.width);
  let current = new Date();

  useEffect(() => {
    setWidth(window.screen.width);
  }, [width]);

  return (
    <div>
      <Box d={"flex"} justifyContent={"end"} h={"65px"} alignItems={"center"}>
        <Text
          align={"center"}
          fontSize="16px"
          fontWeight={"400px"}
          py={"5"}
          mr={"8"}
          className="date"
        >
          {current.toDateString() + " " + current.toLocaleTimeString()}
        </Text>
        <Button colorScheme="green" size="md" mr={"8"} className="signin">
          Sign In
        </Button>

        <Box
          d={"block"}
          position={"relative"}
          mr={"8"}
          px={"3"}
          borderRight={"1px solid gray"}
          borderLeft={"1px solid gray"}
          className="icon"
        >
          <BellIcon boxSize={6} color="gray.500" />
          <Box
            position={"absolute"}
            top={"0px"}
            right={"15px"}
            h={"9px"}
            w={"9px"}
            bg={"green"}
            borderRadius={"lg"}
          ></Box>
        </Box>

        <Menu>
          <MenuButton
            as={Button}
            variant={"ghost"}
            rightIcon={<ChevronDownIcon />}
            alignItems={"center"}
            boxShadow={"none"}
            className="userButton"
          >
            <Avatar
              size="sm"
              cursor="pointer"
              src={"../../assets/profile.png"}
            />
            {width > 700 ? (
              <Text d={"inline"} fontSize={"sm"} color="gray.500">
                {" "}
                Ahmed khaled
              </Text>
            ) : (
              ""
            )}
          </MenuButton>
          <MenuList>
            <MenuItem color={"red"}>log out !</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </div>
  );
};

export default NavBar;
