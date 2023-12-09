import React from 'react'
import { fetchOrder } from '../../../api'
import { useQuery } from 'react-query'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
} from '@chakra-ui/react'

const Order = () => {

  const {isLoading, isError, data, error} = useQuery('admin:order', fetchOrder)

  if (isLoading ) {
    return <div>Bekleyiniz...</div>
  }
  if (isError) {
    return <div>Hata {error.message}</div>
  }
console.log(data);
  return (
    <div>
      <Text fontSize="2xl" p={5} align="center">Sipariş Listesi</Text>

      <Table variant='simple'>
        <TableCaption>Herhangi bir sorunda aligururyaman@gmail.com adresine mail atabilirsiniz</TableCaption>
        <Thead>
          <Tr>
            <Th>Kullanıcı</Th>
            <Th>Adress</Th>
            <Th>Ürün</Th>
          </Tr>
        </Thead>
          {
            data.map((item, key) => (
              <Tbody key={key}>
                <Tr>
                  <Td>{item.user.email}</Td>
                  <Td>{item.adress}</Td>
                  {/* <Td>Buraya tıklandığından kullanıcının hangi itemi satın aldığını gösteren bir chakra kullanılacak ve o açılan kutudaki bilgiler onaylarınısa kenarda bir şey onaylanacak daha sonra listeye bakıldığında orası görünecek modal eklenecek</Td> */}
                </Tr>
              </Tbody>
            ))
          }
      </Table>
    </div>


  )
}

export default Order