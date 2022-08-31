import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../Redux/action";

export const Cart = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const CartData = useSelector((state) => state.Cart);
  // console.log(CartData);

  const HandleRemoveToCart = (obj) => {
    axios
      .delete(`http://localhost:8080/cart/${obj.id}`)
      .then((res) => {
        dispatch(getCartData());
        return toast({
          title: "Remove From Cart",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    dispatch(getCartData());
  }, []);

  return (
    <SimpleGrid columns={[1, 2, 3, 4]} p={5} spacing={10}>
      {CartData?.map((item, index) => (
        <Box
          border={"1px solid black"}
          p={3}
          spacing={3}
          textAlign="center"
          key={index}
        >
          <Image src={item.src} alt="Dan Abramov" h="200px" mb={1} />
          <Text noOfLines={2} mb={1}>
            {item.title}
          </Text>
          <Button
            w="90%"
            mb={1}
            colorScheme={"red"}
            onClick={() => HandleRemoveToCart(item)}
          >
            Remove From Cart
          </Button>
        </Box>
      ))}
    </SimpleGrid>
  );
};
