import React,{useEffect,useState} from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom';
// import AddUser from './AddUser';
import Header from '../parts/Header';
import Footer from '../parts/Footer';
import Sitemap from '../parts/Sitemap';
import { FaBeer } from 'react-icons/fa';

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
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
        <a href='add'><FaBeer/></a>
           <tabel className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>no</th>
                    <th>name</th>
                    <th>email</th>
                    <th>gender</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>(
                    <tr key={user.id}>
                    <td>{index +1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>
{/* <Link to={`edit/${user.id}`}className='button is-small is-info'>edit</Link> */}
<a href={`edit/${user.id}`}>pp</a>
<button
                    onClick={() => deleteUser(user.id)}
                    className="button is-small is-danger"
                  >
                    sd
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