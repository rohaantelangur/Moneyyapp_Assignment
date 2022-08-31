import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Image,
  Img,
  SimpleGrid,
  Skeleton,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartData, getData } from "../Redux/action";
import { Card } from "./Card";

export const Product = () => {
  const [page, setpage] = useState(1);
  const toast = useToast();
  const dispatch = useDispatch();
  const ProductData = useSelector((state) => state.ProductData);
  const isLoading = useSelector((state) => state.isLoading);
  const isError = useSelector((state) => state.isError);
  const CartData = useSelector((state) => state.Cart);

  const HandleAddToCart = (obj) => {
    let data = [];
    data = CartData.filter((item) => item.id === obj.id);
    if (data.length === 0) {
      dispatch(addToCart(obj));
      return toast({
        title: "Added To Cart",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } else {
      return toast({
        title: "Already Added",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (ProductData) dispatch(getData(page));
  }, [page]);

  useEffect(() => {
    dispatch(getCartData());
  }, []);

  if (isLoading) {
    return (
      <SimpleGrid columns={[1, 2, 3, 4]} p={5} spacing={10}>
        <Box><Skeleton h="450px" w="100%" /></Box>
        <Box><Skeleton h="450px" w="100%" /></Box>
        <Box><Skeleton h="450px" w="100%" /></Box>
        <Box><Skeleton h="450px" w="100%" /></Box>
        <Box><Skeleton h="450px" w="100%" /></Box>
        <Box><Skeleton h="450px" w="100%" /></Box>
        <Box><Skeleton h="450px" w="100%" /></Box>
        <Box><Skeleton h="450px" w="100%" /></Box>
        <Box><Skeleton h="450px" w="100%" /></Box>
        <Box><Skeleton h="450px" w="100%" /></Box>
        <Box><Skeleton h="450px" w="100%" /></Box>
        <Box><Skeleton h="450px" w="100%" /></Box>
      </SimpleGrid>
    );
  }

  if (isError) {
    return (
      <Image src="004.jpg" alt="Page Not Found" h="100vh"/>
    )
  }
  return (
    <>
      <SimpleGrid columns={[1, 2, 3, 4]} p={5} spacing={10}>
        {ProductData?.map((item1, index) => (
          <Card
            key={index}
            item={item1}
            HandleAddToCart={HandleAddToCart}
            page={page}
          />
        ))}
      </SimpleGrid>
      <Center my={5}>
        <ButtonGroup isAttached variant="outline">
          <Button onClick={() => setpage(page - 1)}>Prev</Button>
          <Text mx="10px" fontSize={"25px"}>
            {page}
          </Text>
          <Button onClick={() => setpage(page + 1)}>Next</Button>
        </ButtonGroup>
      </Center>
    </>
  );
};
