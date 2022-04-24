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
import { AppState } from "../../context/context";
import AddNewModal from "../addnewModal/AddNewModal";
import Card from "../Card/Card";
import "./Body.css";

const Body = () => {

  const {
    img,
    name,
     date,
     phone,
     mail,
     office,
     depart,
     attend,
     role,
     position,
     manager,
     fromHome,users
  } = AppState();

  return (
    <Box className="content">
      <Box d={"flex"} justifyContent={"space-between"} mb={"2"}>
        <Stack spacing={4} w={"80%"}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="blue.300" />}
            />
            
            <Input type="tel" placeholder="Search" />
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
