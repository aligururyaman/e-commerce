import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import Order from './Order/Order'
import Home from './Home/Home'
import ProductsAdmin from './ProductsAdmin/ProductsAdmin'
import { Button, Card } from 'antd';


const Admin = () => {
    const {path, url} = useRouteMatch();

    const gridStyle= {
       
        textAlign: 'center',
      };
  return (
    <div>
        <Card title="Yönetim Paneli" style={{textAlign:'center'}}>
            <Card>
                <Card.Grid style={gridStyle}>
                    <Button to={url}>Yönetim</Button>
                </Card.Grid>
                <Card.Grid style={gridStyle}> 
                    <Link to={`${url}/urunler`}>Ürünler</Link>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Link to={`${url}/siparisler`}>Siparişler</Link>
                </Card.Grid>
            </Card>
        </Card>

        <Box mt="10">
            <Switch>
                <Route exact path={path} component={Home} />
                <Route path={`${path}/urunler`} component={ProductsAdmin} />
                <Route path={`${path}/siparisler`} component={Order} />
            </Switch>
        </Box>
    </div>
  )
}

export default Admin