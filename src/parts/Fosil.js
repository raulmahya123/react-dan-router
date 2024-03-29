
import axios from 'axios';
import React, { useState , useEffect } from 'react';
import Header from './Header';
import Sitemap from './Sitemap';
import Footer from './Footer';



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
    <>
    <div>
      <Header/>
      <section className="bg-gray-100 px-4 py-4">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            SELAMAT DATANG <br className="" />
           DIGUDANG FOSIL
          </h3>
        </div>
      </div>
    </section>
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
<Sitemap/>
<Footer/>
</>
  )
}

export default Fosil