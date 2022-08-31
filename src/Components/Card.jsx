import React, { useState } from 'react'
import { Box, Button, Image, Input, Stack, Text, useToast } from "@chakra-ui/react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getData } from '../Redux/action';

export const Card = ({item, HandleAddToCart, page, text}) => {
  const [reviwe, setreviwe] = useState(item?.reviwe || "")
  const dispatch = useDispatch();
  const toast = useToast()
  const [Loading, setLoading] = useState(false)




  const HandleAddReview =() => {
    setLoading(true)
axios.patch(`http://localhost:8080/products/${item.id}`,{
    ...item,
    reviwe
}).then((res)=>{
  setLoading(false)
    dispatch(getData(page));
    return toast({
        title: 'Review Added',
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
}).catch((err)=>{
    console.log(err.message);
})
  }
  return (
      <Box border={"1px solid black"} p={3} spacing={3} textAlign="center">
          <Image src={item.src} alt="Dan Abramov" h="200px" mb={1}/>
          <Text noOfLines={2} mb={1}>{item.title}</Text>
          <Input w="90%" mb={1} variant='filled' placeholder='Add Reviwe' type="text" name="reviwe" value={reviwe} onChange={(e)=>{setreviwe(e.target.value)}}/>
          <Button w="90%" mb={1} colorScheme={"green"} onClick={HandleAddReview}>Add Reviwe</Button>
          <Button w="90%" mb={1} colorScheme={"red"} isLoading={Loading} onClick={() => HandleAddToCart(item)}>
            Add To Cart
          </Button>
        </Box>
   
  )
}
