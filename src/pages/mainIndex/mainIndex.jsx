// Anasayfa.jsx

import React from 'react';
import { Box, Heading, Text, Image, Link } from '@chakra-ui/react';

const mainIndex = () => {
  return (
    <Box p={4}>
      <Box position="relative" mb={4}>
        <Image
          src="https://bhi.nku.edu.tr/basinyonetim/server/php/files/128/12898/tn_banner2.jpg"
          alt="Yakar Deri"
          maxH="300px"
          mx="auto"
          rounded="md"
        />
        <Heading
          as="h1"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="white"
          zIndex="1"
        >
          Yakar Deri
        </Heading>
      </Box>
      <Text mb={4}>
        Dericilik, insanlık tarihinde uzun bir geçmişe sahiptir. İnsanlar, yüzyıllardır deriyi giyim, koruma ve
        sanat eserleri yapmak için kullanmışlardır. Bu gelenek, Yakar Deri ile modern tasarımlarla birleşiyor.
      </Text>
      <Box mb={4}>
        <Heading as="h2" fontSize="xl" mb={2}>
          Dericiliğin Tarihi
        </Heading>
        <Text>
          Dericilik, tarih boyunca birçok medeniyetin yaşam tarzını ve kültürünü etkilemiştir. Antik
          Mısır'dan Orta Çağ'a, deri ürünleri yaşamımızın önemli bir parçası olmuştur.
        </Text>
      </Box>
      <Box mb={4}>
        <Heading as="h2" fontSize="xl" mb={2}>
          Deri ile Çanta Yapımı - YouTube Video
        </Heading>
        <Box>
          {/* YouTube video embed kodunu buraya ekleyin */}
          <Text>
            Deri ile çanta yapımı hakkında detaylı bir rehber için aşağıdaki videoyu izleyebilirsiniz.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default mainIndex;
