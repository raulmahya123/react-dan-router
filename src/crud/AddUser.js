import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Header from '../parts/Header';
import Footer from '../parts/Footer';
import Sitemap from '../parts/Sitemap';

const AddUser = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [gender,setGender] = useState("Male");
const navigate = useNavigate();

    const saveUser = async(e)=>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users',{
                name,
                email,
                gender
            });
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <>
    <Header/>
    <div className="column mt-5 is-center flex justify-center px-4 py-8 text-center">
        <div className="column is-half" >
            <form onSubmit={saveUser}>
                <div className="field">
                    <label className='label'>NAME</label>
                    <div className="control">
                        <input type="text" 
                        className='input' 
                        value={name}  
                        onChange={(e)=> setName(e.target.value)}
                        onplaceholder='Name'/>
                    </div>
                </div>
                <div className="field">
                    <label className='label'>EMAIL</label>
                    <div  className="control">
                        <input 
                        type="text" 
                        className='input'
                        value={email}  
                        onChange={(e)=> setEmail(e.target.value)}
                         placeholder='Email'/>
                    </div>
                </div>
                <div className="field">
                    <label className='label'>Gender</label>
                    <div className="control">
                        <div className="select is-fullwidth">
                            <select 
                             value={gender}  
                             onChange={(e)=> setGender(e.target.value)}
                            >
                                <option value="Male">Male</option>
                                <option className='pl-4bg-[#2952e3]  py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] space-x-4' value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <button type='submit' className='pl-4bg-[#2952e3]  py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] space-x-4'>
                        save
                    </button>
                </div>
            </form>
        </div>
    </div>
    <Sitemap/>
    <Footer/>
    </>
  )
}

export default AddUser