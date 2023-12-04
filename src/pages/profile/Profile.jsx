import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"
import { Card, CardBody, CardHeader, Text, Heading, CardFooter, Button } from "@chakra-ui/react";


const Profile = () => {
    const { user, logout} = useAuth();
    const history = useHistory();

    const handleLogout = async () => {
        await logout(() => {
            history.push("/");
        });
    };

  return (
    <div>
        <Card align='center'>
            <CardHeader>
                <Heading size='md'>{user.email}</Heading>
            </CardHeader>
            <CardBody>
                <Text>Hoşgeldiniz..</Text>
            </CardBody>
            <CardFooter>
                <Button colorScheme='blue' onClick={handleLogout}>Çıkış Yap</Button>
            </CardFooter>
        </Card>  
    </div>
  )
}

export default Profile