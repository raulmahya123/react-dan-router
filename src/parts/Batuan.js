
import axios from 'axios';
import React, { useState , useEffect } from 'react';
import Header from './Header';
import Sitemap from './Sitemap';
import Footer from './Footer';


function Batuan() {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    setisLoading(true);
    // URL Ganti dengan alamat github atau API kamu atau URL API MU
    // Method @{get, post, put, patch, delete}
    axios
      .get("https://sbc-sebatcabut.herokuapp.com/batuans")
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
    <Header/>
    <section className="bg-gray-100 px-4 py-4">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            SELAMAT DATANG <br className="" />
           DIGUDANG ARTEFAK
          </h3>
        </div>
      </div>
    </section>
    <div>
      {data &&
      data.map((item) => (
        <div>
          <hr />
          <h1>{item.id.toUpperCase()}</h1>
          <i>{item.no_register}</i>
          <h2>{item.no_inventaris}</h2>
          <h2>{item.kode_bmn}</h2>
          <h2>{item.nup_bmn}</h2>
          <h2>{item.merk_bmn}</h2>
          <h2>{item.satuan}</h2>
          <h2>{item.kelompok_koleksi}</h2>
          <h2>{item.jenis_koleksi}</h2>
          <h2>{item.sub_jenis_koleksi}</h2>
          <h2>{item.ruang_simpan}</h2>
          <h2>{item.lokasi_simpan}</h2>
          <h2>{item.kondisi}</h2>
          <h2>{item.nama_koleksi}</h2>
          <h2>{item.keterangan}</h2>
          <h2>{item.nama_formasi}</h2>
          <h2>{item.lokasi_temuan}</h2>
          <h2>{item.koordinat}</h2>
          <h2>{item.pulau}</h2>
          <h2>{item.peta}</h2>
          <h2>{item.lembar_peta}</h2>
          <h2>{item.skala}</h2>
          <h2>{item.cara_perolehan}</h2>
          <h2>{item.tahun_perolehan}</h2>


          <hr />
        </div>
             ))}</div>
<Sitemap/>
<Footer/>
</>
  )
}

export default Batuan