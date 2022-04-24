import { Box, Skeleton, Stack } from "@chakra-ui/react";
import React from "react";
import Card from "../Card/Card";


const Body = () => {
  const users = [
    {
      src: "https://bit.ly/dan-abramov",
      name: "Sarah",
      title: "frontaya",
      job: "frontaya bardo",
      present: "present",
    },
    {
      src: "https://bit.ly/dan-abramov",
      name: "aaa",
      title: "fronsdtaya",
      job: "frontaydsa bardo",
      present: "present",
    },
  ];
  return (
    <div>
      {users ? (
        <Box>
          {users.map((user) => (
            <Card user={user}></Card>
          ))}
        </Box>
      ) : <Stack>
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
    </Stack>}
    </div>
  );
};

export default Body;
