import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert } from "@chakra-ui/react";
import { useFormik } from 'formik'
import validationSchema from './validations';
import { fetchLogin } from '../../../api';
import { useAuth } from '../../../contexts/AuthContext';



const Signin = ({ history }) => {

  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email:"",
      pass:""
    },
    validationSchema,
    
    onSubmit: async(values, bag) => {
      try {
        const loginResponse = await fetchLogin({ 
          email: values.email, 
          password: values.pass 
        });

        login(loginResponse)
        history.push('/profile')
        console.log(login)
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
            <Heading>Giriş Yap</Heading>
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
                isInvalid={formik.touched.pass && formik.errors.pass}
                />
              </FormControl>
             
              <Box textAlign="center">
                <Button mt={4} width="full" type='submit'>
                Giriş Yap
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Signin