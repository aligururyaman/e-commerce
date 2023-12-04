import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useHistory
} from "react-router-dom";
import { Button, Stack } from '@chakra-ui/react'
import styles from './styles.module.css'
import { useAuth } from "../contexts/AuthContext";
import { useBasket } from "../contexts/BasketContext";


const Navbar = () => {
  const { loggedIn, logout, user } = useAuth();
  const { items } = useBasket();

  
    const history = useHistory();

    const handleLogout = async () => {
        await logout(() => {
            history.push("/");
        });
    };

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
          <div className={styles.logo}>
              <Link to="/">AnaSayfa</Link>    
          </div>
          <ul className={styles.menu}>
            <li>
                 <Link to="/product">Ürünler</Link>
            </li>
          </ul>
      </div>
      <div className="right">
      {
        !loggedIn && (
          <>
            <Stack direction='row' spacing={1} align='center'>
              <Link to="/signin">
                <Button colorScheme='pink' variant='solid'>
                  Giriş Yap
                </Button>
              </Link>
              <Link to="signup">
                <Button colorScheme='pink' variant='solid'>
                  Kayıt Ol
                </Button>
              </Link>    
            </Stack>
          </>
        )}
        {
          loggedIn && (
            <>
            <Stack direction='row' spacing={1} align='center'>
              {
                items.length > 0 && (
                  <Link to="/sepet">
                    <Button colorScheme="pink" variant="outline">
                     Sepet ({items.length})
                    </Button>
                  </Link>
                )
              }
              <Link to="/profile">
                <Button variant='solid'>
                  Profil
                </Button>
              </Link>
              <Link to="/" >
                <Button variant='solid' onClick={handleLogout}>
                  Çıkış Yap
                </Button>
              </Link>  
              </Stack>
            </>
          )
          
        }
    </div>
  </nav>
  )
}

export default Navbar