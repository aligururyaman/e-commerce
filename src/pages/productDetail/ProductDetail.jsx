import React from 'react'
import { useQuery } from 'react-query';
import { Box, Text, Button} from '@chakra-ui/react'
import { fetchProduct } from '../../api'
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import ImageGallery from "react-image-gallery";
import { useBasket } from '../../contexts/BasketContext';

function ProductDetail() {

    const { product_id } = useParams();
    const { addToBasket, items } = useBasket();

    const {isLoading, isError, data} = useQuery(['product', product_id], () => {
     return fetchProduct(product_id)
      
    })

    if (isLoading) {
      return <div> Ürün Bulunamadı... 
        <Link to="/">Ana Sayafaya Gitmek için TIKLA</Link>
      </div>
    }
    
    if (isError) {
      return <div> Ürün Bulunamadı... 
        <Link to="/">Ana Sayafaya Gitmek için TIKLA</Link>
      </div>
    }
    
    const findBasketItem = items.find((item) =>  item._id === product_id)
    const images = data.photos.map((url) => ({original: url}))

  return (
    <div>
      <Button colorScheme={findBasketItem ? 'green' : 'pink'} variant="solid" onClick={() => addToBasket(data, findBasketItem)}>
        {
          findBasketItem ? 'Sepetten Çıkar' : 'Sepete Ekle'
        }
        </Button>
      <Text as="h2" fontSize="2xl">{data.title}</Text>
      <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
      <p>{data.description}</p>
      <Box>
        <ImageGallery items={images} />
      </Box>
      
    </div>
  )
}

export default ProductDetail