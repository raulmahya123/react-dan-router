
import axios from 'axios';
import React, { useState , useEffect } from 'react';



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
  )
}

export default Batuan