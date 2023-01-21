import React,{useEffect,useState} from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom';
// import AddUser from './AddUser';
import Header from '../parts/Header';
import Footer from '../parts/Footer';
import Sitemap from '../parts/Sitemap';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const UserList = () => {
const [users,setUser]= useState([]);

useEffect(()=>{
    getUsers();
},[]);
const getUsers = async()=>{
    const response = await axios.get('http://localhost:5000/users');
    setUser(response.data);
}
const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Header/>
    <section className="bg-gray-100 px-4 py-4">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            SELAMAT DATANG <br className="" />
           TABEL PEMINJAMAN
          </h3>
        </div>
      </div>
    </section>
    <div className="columns is-centered mt-12 mb-8 flex flex-col gap-12   justify-center px-4 py-8 text-center">
        <div className="column is-half ">
        <a className='flex justify-center px-4 py-8 text-center' href='add'><AiOutlinePlusCircle size={80}/> TAMBAH KEHADIRAN</a>
        <center/>
     
           <tabel className="is-striped is-fullwidth  table-fixed ">
            <thead className='overflow-x-scroll px-0 pt-0 pb-2'>
                <tr className='box-content h-32 w-32 p-4 border-4 space-x-4 border-b border-blue-gray-50 py-3 px-5 text-left' >
                <th scope="col"  color="blue" class="text-sm font-medium text-gray-900 px-6 py-4 text-[11px] uppercase text-blue-gray-400  table-auto">
                NO
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-b border-blue-gray-50 text-left">
              NAME
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-b border-blue-gray-50 text-left">
              EMAIL
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-b border-blue-gray-50 text-left">
              GENDER
              </th>
                    <th></th>  
                    <th scope="col" className='mr-10 text-sm font-medium text-gray-900 px-6 py-4 border-b border-blue-gray-50 text-left'>
              ACTION
              </th>
                  
                </tr>
                
            </thead>
            <tbody className='border-b' >
                {users.map((user,index)=>(
                    <tr key={user.id}>
                    <td className='text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-b border-blue-gray-800 text-left'>{index +1}</td>
                    <td className='text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-b border-blue-gray-800 text-left'>{user.name}</td>
                    <td className='text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-b border-blue-gray-800 text-left'>{user.email}</td>
                    <td className='text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-b border-blue-gray-800 text-left'>{user.gender}</td>
                    <td>
{/* <Link to={`edit/${user.id}`}className='button is-small is-info'>edit</Link> */}
<a className='pl-4bg-[#2952e3] mx-10 py-2 px-7  rounded-full cursor-pointer hover:bg-[#2546bd] space-x-4 ' href={`edit/${user.id}`}>EDIT</a>
<button 
                    onClick={() => deleteUser(user.id)}
                    className="pl-4bg-[#2952e3]  py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] space-x-4"
                  >
                    DELETE
                  </button>

{/* <Link onClick={()=> deleteUser(user.id)} className='button is-small is-danger'>delete</Link> */}

                    </td>
                </tr>
                ))}
                
            </tbody>
           </tabel>
        </div>
    </div>
   
    <Sitemap/>
    <Footer/>
    </>
  )
}

export default UserList