import {useState, useEffect} from 'react'
import {Table} from 'antd'

const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Text',
      dataIndex: 'text',
      key: 'text',
    },
    {
      title: 'Author',
      dataIndex: 'user',
      key: 'user',
    },
    {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
      }
  ];

function ShowPosts() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedPosts, setLoadedPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:8081/api/post').then(res => {
            return res.json();
        }).then(data => {
            setIsLoading(false);
            setLoadedPosts(data);
            console.log(loadedPosts);
        });
    }, [])

    if (isLoading) {
        return (
            <div>Posts are loading..</div>
        )
    }


    return (
        <div className="container">
            <Table dataSource={loadedPosts} columns={columns} rowKey="_id" />
        </div>
    )
}

export default ShowPosts
