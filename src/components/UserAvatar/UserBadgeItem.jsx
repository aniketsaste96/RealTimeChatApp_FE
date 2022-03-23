import { Box } from "@chakra-ui/react";
import React from "react";

const UserBadgeItem = () => {
  return (
    <Box
      px={2}
      py={1}
      mb={2}
      m={2}
      borderRadius="lg"
      variant="solid"
      fontSize={12}
      colorScheme="purple"
      cursor="pointer"
      onClick={handleFunction}
    ></Box>
  );
};

export default UserBadgeItem;
