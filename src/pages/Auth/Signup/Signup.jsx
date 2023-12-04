import React from 'react'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert } from "@chakra-ui/react";
import { useFormik } from 'formik'
import validationSchema from './validations';
import { fetchRegister } from '../../../api';
import { useAuth } from '../../../contexts/AuthContext';



const Signup = ({ history }) => {

  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email:"",
      password:"",
      passcon:""
    },
    validationSchema,
    
    onSubmit: async(values, bag) => {
      try {
        const registerResponse = await fetchRegister({ 
          email: values.email,
          userName: values.userName, 
          password: values.pass 
        });

        login(registerResponse)
        history.push('/profile')
      } catch (error) {
        bag.setErrors({ general: error.response.data.message})
      }
    }
    
  })
  
  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Kayıt Ol</Heading>
          </Box>
          <Box>
            {
              formik.errors.general && (
                <Alert status='error'>
                  {formik.errors.general}
                </Alert>
              )
            }
          </Box>
          <Box margin={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                name='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                isInvalid={formik.touched.email && formik.errors.email}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Şifre</FormLabel>
                <Input
                name='pass'
                type='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pass}
                isInvalid={formik.touched.password && formik.errors.password}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Şefre Tekrar</FormLabel>
                <Input
                name='passcon'
                type='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.passcon}
                isInvalid={formik.touched.passcon && formik.errors.passcon}
                />
              </FormControl>
              <Box textAlign="center">
                <Button mt={4} width="full" type='submit'>
                Kayıt Ol
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Signup