import React, { useEffect,useState } from 'react'
import axios from 'axios'
const Prop = () => {
    const [input, setData] = useState('');
    useEffect(() => {
    axios.post('http://localhost:8000/users/',{
        id: 1,
        name: 'Joo',
        email: 'dwid@gmail.com'
    }).then((res) => { 
        setData(res.data);
    })
    }, [])
  return (
    <div>
      <h2>{input.id}</h2>
      <h2>{input.name}</h2>
      <h2>{input.email}</h2>
    </div>
  )
}

export default Prop
