import { ReactNode, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const cartData = useSelector((state) => state.Cart);
  // console.log(cartData.length);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box fontSize="20px" fontWeight={"500"}>Logo</Box>

          <Flex>
            <Stack direction={"row"} fontSize="20px" fontWeight={"500"} spacing={7} alignItems="center">
              <Link to="/" >Products</Link>
              <Link to="/cart" >Cart</Link>
              <Text border={"1px solid black"} px={"8px"}>{cartData.length}</Text>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
