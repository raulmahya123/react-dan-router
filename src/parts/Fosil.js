
import axios from 'axios';
import React, { useState , useEffect } from 'react';
import Header from './Header';




function Fosil() {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    setisLoading(true);
    // URL Ganti dengan alamat github atau API kamu atau URL API MU
    // Method @{get, post, put, patch, delete}
    axios
      .get("https://sbc-sebatcabut.herokuapp.com/fosils")
      .then((response) => {
        setdata(response.data.data.data);
        console.log(response.data.data.data); // Menampilkan console log
        setisLoading(false);
      })
      .catch((err) => {
        // Jika Gagal
        console.log(err);
        setisError(true);
        setisLoading(false);
      });
  }, []);

  
  if (isLoading) return <h1>Loading data</h1>;
  else if (data && !isError)
  return (
    
    <div>
      <Header/>
      {data &&
      data.map((item) => (
        <div>
          <hr />
          <h1>{item.id.toUpperCase()}</h1>
          <i>{item.nama_koleksi}</i>
          <h2>{item.lokasi_temuan}</h2>
          <hr />
        </div>
             ))}</div>
  )
}

export default Fosil