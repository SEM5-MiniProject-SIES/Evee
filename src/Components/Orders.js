import React,{useState, useEffect} from 'react'

export default function Orders(props) {

  const [data, setdata] = useState([])

  const fetchData = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({  }),
    };
    fetch('http://localhost:5000/getorders',requestOptions)
          .then((response) => response.json())
          .then((data) => setdata(data));
  }

  useEffect(() => {
    fetchData();
  },[])
  return (
    <div>
      {
      props.userid != ""? 
        (data.length ===0? 
          <div className='container'>You havent ordered anything</div>:
          <div>HII</div>):
        <div className='container'>Please sign in to continue</div>}
    </div>
  )
}
