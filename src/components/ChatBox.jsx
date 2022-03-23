import React from "react";
import { Box, Button, Stack, useToast, Text } from "@chakra-ui/react";

import { ChatState } from "./context/ChatProvider";
const ChatBox = () => {
  const { selectedChat } = ChatState();
  return <Box d={{ base: selectedChat ? "flex" : "none", md: "flex" }}></Box>;
};

export default ChatBox;
