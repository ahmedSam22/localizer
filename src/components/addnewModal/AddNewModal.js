import {
  Box,
  Button,
  Checkbox,
  Input,
  Menu,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AppState } from "../../context/context";
import "./AddNewModal.css";

const AddNewModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    setImg,
    img,
    setName,
    name,
    setDate,
    date,
    setPhone,
    phone,
    setMail,
    mail,
    setOffice,
    office,
    setDepart,
    depart,
    setAttend,
    attend,
    setRole,
    role,
    setPosition,
    position,
    setManager,
    manager,
    setFromHome,
    fromHome,
    users,
    setUsers,
  } = AppState();

  const addCard = () => {
    let newCard = new Object();
    newCard.name = name;
    newCard.position = position;
    newCard.attend = "Present";
    newCard.office = office;
    newCard.manager = manager;
    newCard.date = date;
    newCard.role = role;
    newCard.fromhome = fromHome;

    setUsers([...users, newCard]);
    console.log("done");
  };
  return (
    <>
      <span onClick={onOpen}>{children}</span>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        size={"4xl"}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>NEW EMPLOYEE</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text className="headers">Personal info</Text>

            <Box className="modalcontainer">
              <Box d={"flex"} gap={"5"}>
                <Box className={"filecontainer"}>
                  <div className="parent">
                    <span>DRAG IMAGE HERE</span>
                    <input
                      type="file"
                      className="child"
                      onChange={(e) => setImg(e.target.value)}
                    />
                  </div>
                </Box>

                <Box className="upperinputs">
                  <Box
                    width={"48%"}
                    sx={{
                      width: "100%",
                    }}
                  >
                    <Text mb="5px">Name</Text>
                    <Input
                      placeholder=""
                      size="sm"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Box>
                  <Box
                    width={"48%"}
                    sx={{
                      width: "100%",
                    }}
                  >
                    <Text mb="5px">Start Date</Text>
                    <Input
                      placeholder=""
                      type="date"
                      size="sm"
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </Box>
                  <Box
                    width={"48%"}
                    sx={{
                      width: "100%",
                    }}
                  >
                    <Text mb="5px">Phone</Text>
                    <Input
                      placeholder=""
                      size="sm"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Box>
                  <Box
                    width={"48%"}
                    sx={{
                      width: "100%",
                    }}
                  >
                    <Text mb="5px">Email</Text>
                    <Input
                      placeholder="Email"
                      size="sm"
                      onChange={(e) => setMail(e.target.value)}
                    />
                  </Box>
                </Box>
              </Box>

              <Box w={"100%"}>
                <Text className="headers">Office Info</Text>
                <Box className="lowerinputs">
                  <Box w={"100%"}>
                    <small>office</small>
                    <Menu w={"100%"} textAlign={"left"}>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        onChange={(e) => setOffice(e.target.value)}
                      >
                        <option>ArabLocalizer</option>
                        <option>other One</option>
                      </select>
                    </Menu>
                  </Box>

                  <Box w={"48%"}>
                    <small>Department</small>
                    <Menu w={"100%"} textAlign={"left"}>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        onChange={(e) => setDepart(e.target.value)}
                      >
                        <option>dummy option </option>
                        <option>other One</option>
                      </select>
                    </Menu>
                  </Box>

                  <Box w={"48%"}>
                    <small>Attendance Profile</small>
                    <Menu w={"100%"} textAlign={"left"}>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        onChange={(e) => setAttend(e.target.value)}
                      >
                        <option>dummy option </option>
                        <option>other One</option>
                      </select>
                    </Menu>
                  </Box>

                  <Box w={"48%"}>
                    <small>Role</small>
                    <Menu w={"100%"} textAlign={"left"}>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option>dummy option </option>
                        <option>other One</option>
                      </select>
                    </Menu>
                  </Box>

                  <Box w={"48%"}>
                    <small>Position</small>
                    <Menu w={"100%"} textAlign={"left"}>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        onChange={(e) => setPosition(e.target.value)}
                      >
                        <option>dummy option </option>
                        <option>other One</option>
                      </select>
                    </Menu>
                  </Box>

                  <Box w={"48%"}>
                    <small>Direct Manager</small>
                    <Menu w={"100%"} textAlign={"left"}>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        onChange={(e) => setManager(e.target.value)}
                      >
                        <option>dummy option </option>
                        <option>other One</option>
                      </select>
                    </Menu>
                  </Box>
                </Box>
              </Box>
              <Box w={"100%"}>
                <Text className="headers">Office Info</Text>
                <Box className="lowerinputs">
                  <Box w={"100%"}>
                    <small>office Info</small>
                    <Checkbox
                      defaultChecked
                      onChange={(e) => setFromHome(e.target.value)}
                      w={"100%"}
                    >
                      Allow Employee To Work From Home
                    </Checkbox>
                  </Box>
                </Box>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" mr={3} onClick={addCard}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddNewModal;
