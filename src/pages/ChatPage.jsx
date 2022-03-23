import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../components/context/ChatProvider";
import {
  Box,
  Container,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
const ChatPage = () => {
  //take userState from context
  const { user } = ChatState();
  return (
    <>
      <div style={{ width: "100%" }}>
        {/* //if fuser is existed then only render side drawer */}
        {user && <SideDrawer />}

        <Box
          d="flex"
          justifyContent="space-between"
          w="100%"
          h="91.5vh"
          p="10px"
        >
          {user && <MyChats />}
          {user && <ChatBox />}
        </Box>
      </div>
    </>
  );
};

export default ChatPage;
