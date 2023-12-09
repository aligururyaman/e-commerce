import React, { useState } from 'react'
import { useBasket } from '../../contexts/BasketContext'
import { Alert, Box, Button, Image, Text, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Textarea, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { postOrder } from '../../api'

const Basket = ({ item }) => {
    const [address, setAdress] = useState();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const { items, removeFromBasket, emptyBasket  } = useBasket()
    const total = items.reduce((acc, obj) => acc + obj.price, 0)

    const handleSubmitForm = async () => {
        const itemIds = items.map((item) => item._id)

        const input = {
            address,
            items: JSON.stringify(itemIds),
        }
        await postOrder(input);
        emptyBasket();
        onClose();
        
    }
 
  return (
    <Box>
        {
            items.length < 1 && (
            <Alert status='warning'>
            Sepetinizde ürün Yok !    
            </Alert> )
        }
        {
            items.length > 0 && (
            <>
                <ul style={{listStyleType: "decimal", marginLeft: 20, marginTop: 10}}>
                    {
                        items.map((item) => (
                            <li key={item._id} style={{ marginBottom: 15 }}>
                                <Link to={`/product/${item._id}`}>
                                    <Text fontSize="20">
                                    {item.title} - {item.price} TL
                                    </Text>
                                    <Image htmlWidth={200} loading='lazy' src={item.photos[0]} alt='sepet ürünü' />
                                </Link>
                                <Button colorScheme="pink" variant="solid" mt="5" mb="7" onClick={() => {removeFromBasket(item._id)}}>
                                    Kaldır
                                </Button>
                            </li>
                        ))
                    }
                </ul>
                <Box mt="10" ml="5">
            <Text fontSize="22">
                Total : {total} TL
            </Text>
            <Button colorScheme='pink' onClick={onOpen}>Open Modal</Button>

                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Adres Bilgileri</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                        <FormLabel>Adres :</FormLabel>
                        <Textarea ref={initialRef} placeholder='Adres' value={address} onChange={(e) => setAdress(e.target.value)}/>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleSubmitForm}>
                        Kaydet
                        </Button>
                        <Button onClick={onClose}>Vazgeç</Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
        </Box>
            </>
            
        )}

    </Box>                
  )
}

export default Basket