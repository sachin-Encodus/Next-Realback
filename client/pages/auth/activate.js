import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';



const Activate = ({ match }) => {
  const router =  useRouter()
   
   const {query} =  useRouter()
   console.log("token",query.token);



  const [formData, setFormData] = useState({
    name: 'roger',
    token: '',
    show: true
  });

  useEffect(() => {
  
    let data = jwt.decode(query.token);
    console.log(data);
    if (query.token) {
      setFormData({ ...formData, name:data.name, token:query.token });
    }

    console.log(token, name);
  }, [query]);
  const { name, token, show } = formData;

  const handleSubmit = e => {
    e.preventDefault();

    axios.post("/api/activate-email", {token})
      .then(res => {
        setFormData({
          ...formData,
          show: false
        });

       router.replace("/auth/login")
      })
      .catch(err => {
        
        toast.error(err.response.data.errors);
      });
  };

  return (
   <>
   <br/><br/><br/><br/>
   <div className='container mt-4'>
      {/* {isAuth() ? <Redirect to='/' /> : null} */}
          <ToastContainer />
      <div className="row">
        <div className="col-md-12">
 <h1 className='text-center'>
                    Welcome : {name}
                </h1>


                <form  onSubmit={handleSubmit} className='form-me p-0 justify-content-center align-items-center d-flex ' >
                    <div className='mt-5 '>
                     
                        <button type='submit'
                            className=' btn  justify-contect-center align-items-center'>
                            <i className='fas fa-user-plus ' />
                            <span className='ml-3'>Activate Account</span>
                        </button>
                    
                  
                   
                       
                   </div>
                </form>
        </div>



        
      
       




      </div>
     </div>
   </>
  );
};

export default Activate;
