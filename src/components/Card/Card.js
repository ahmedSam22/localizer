import {
  Avatar,
  Badge,
  Box,
  Divider,
  Skeleton,
  Stack,
  Text,
  Wrap,
  WrapItem,
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
          p={"5"}
        >
          <Box
            className="foravatar"
            m={"10"}
            borderRight={"1px solid gray"}
            w={"20%"}
          >
            <Wrap>
              <WrapItem>
                <Avatar
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                  size="xl"
                />
              </WrapItem>
            </Wrap>
            <Box
              d={"flex"}
              justifyContent={"space-between"}
              className="foricons"
              mt={"3"}
              w={"45%"}
            >
              <i class="fa-solid fa-pen icon" color="gray"></i>
              <i class="fa-solid fa-circle-pause icon"></i>
              <i class="fa-solid fa-trash-can icon"></i>
            </Box>
          </Box>

          <Box
            className="foravatar"
            my={"10"}
            align={"left"}
            color={"gray"}
            lineHeight={"2rem"}
          >
            <Text fontSize="2xl">{user.name}</Text>
            <Text fontSize="lg" fontWeight={"bold"}>
              {user.title}
            </Text>
            <Text fontSize="lg">{user.job}</Text>
            <Badge className={badgeColor(this)}>{user.present}</Badge>
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
