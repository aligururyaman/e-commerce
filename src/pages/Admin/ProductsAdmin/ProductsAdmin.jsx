import { useMemo } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { deleteProduct, fetchProductList } from '../../../api'
import { Text } from '@chakra-ui/react'
import { Space, Table, Tag, Popconfirm, Button} from 'antd';
import { Link } from 'react-router-dom';

  const ProductsAdmin = () => {
    const queryClient = useQueryClient()
    const {isLoading, isError, data, error} = useQuery('admin:products', fetchProductList)
    const deleteMutation = useMutation(deleteProduct)

    const columns = useMemo(() => {
      return [
        {
          title: 'İsim',
          dataIndex: 'title',
          key: 'title'
        },
        {
          title: 'Fiyat',
          dataIndex: 'price',
          key: 'price'
        },
        {
          title: 'Oluşturma',
          dataIndex: 'createdAt',
          key: 'createdAt'
        },
        {
          title: 'İşlem',
          key: 'action',
          render: (text, record) => (
            <>
              <Button type='primary'>
                  <Link to={`/admin/products/${record._id}`}>Düzenle</Link>
              </Button>
            
    
              <Popconfirm 
                title="Emin misiniz ?"
                onConfirm={() =>{
                  deleteMutation.mutate(record._id, {
                    onSuccess: () => {
                      queryClient.invalidateQueries("admin:products")
                    }
                  })
                }}
                onCancel={() => {
                  console.log("iptal edildi")
                }}
                okText="Evet"
                cancelText="Hayır"
                placement='left'
              >
                  <Button danger style={{ marginLeft: 10 }}>Delete</Button>
              </Popconfirm>
            </>
          )
        }
      ]
    }, []);
    
    if (isLoading ) {
      return <div>Bekleyiniz...</div>
    }
    if (isError) {
      return <div>Hata {error.message}</div>
    }



  console.log(data);
    return (
      <div style={{margin : 50}}>
      <Text fontSize="2xl" p={5} align="center">Ürün Listesi</Text>

      <Table dataSource={data} columns={columns} rowKey="_id"></Table>
      </div>
  )
}

export default ProductsAdmin