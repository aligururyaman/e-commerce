import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react'
import React from 'react'

const Error = () => {
  return (
    <Alert
  status='error'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    İstediğiniz Sayafaya Ulaşılamadı
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Böyle bir sayfa yok veya bu sayfa şu an yapım aşamasında olabilir.
  </AlertDescription>
</Alert>
  )
}

export default Error