import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import AddNewModal from "../addnewModal/AddNewModal";
import Card from "../Card/Card";
import "./Body.css";

const Body = () => {
  const users = [
    {
      src: "https://bit.ly/dan-abramov",
      name: "test1",
      title: "test title 1",
      job: "job 1",
      present: "present",
    },
    {
      src: "https://bit.ly/dan-abramov",
      name: "test 2",
      title: "test title 2",
      job: "job 2",
      present: "absent",
    },
    {
      src: "https://bit.ly/dan-abramov",
      name: "test 2",
      title: "test title 2",
      job: "job 2",
      present: "absent",
    },
    {
      src: "https://bit.ly/dan-abramov",
      name: "test 2",
      title: "test title 2",
      job: "job 2",
      present: "absent",
    },
    {
      src: "https://bit.ly/dan-abramov",
      name: "test 2",
      title: "test title 2",
      job: "job 2",
      present: "absent",
    },
    {
      src: "https://bit.ly/dan-abramov",
      name: "test 2",
      title: "test title 2",
      job: "job 2",
      present: "absent",
    },
    {
      src: "https://bit.ly/dan-abramov",
      name: "test 2",
      title: "test title 2",
      job: "job 2",
      present: "absent",
    },
    {
      src: "https://bit.ly/dan-abramov",
      name: "test 2",
      title: "test title 2",
      job: "job 2",
      present: "absent",
    },
    {
      src: "https://bit.ly/dan-abramov",
      name: "test 2",
      title: "test title 2",
      job: "job 2",
      present: "absent",
    },
    {
      src: "https://bit.ly/dan-abramov",
      name: "test 2",
      title: "test title 2",
      job: "job 2",
      present: "absent",
    },
    {
      src: "https://bit.ly/dan-abramov",
      name: "test 2",
      title: "test title 2",
      job: "job 2",
      present: "absent",
    },
    {
      src: "https://bit.ly/dan-abramov",
      name: "test 2",
      title: "test title 2",
      job: "job 2",
      present: "absent",
    },
  ];
  return (
    <Box className="content">
      <Box d={"flex"} justifyContent={"space-between"} mb={"2"}>
        <Stack spacing={4} w={"80%"}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="blue.300" />}
            />
            <Input type="tel" placeholder="Phone number" />
          </InputGroup>
        </Stack>
        <AddNewModal>
          <Button colorScheme="blue" size="md" w={"100%"}>
            + Add new
          </Button>
        </AddNewModal>
      </Box>
      {users ? (
        <Box className="cardContent">
          {users.map((user) => (
            <Box className="singlecard">
              <Card user={user}></Card>
            </Box>
          ))}
        </Box>
      ) : (
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      )}
    </Box>
  );
};

export default Body;
