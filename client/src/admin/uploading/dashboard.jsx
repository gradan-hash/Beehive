import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import Navbar from '../components/navbar'
import './dashboard.css'
import Axios from 'axios'

function Dashboard(){


    const [image, setImage] = useState('')

    
        
        const uploadImage =()=>{

        try{
    
            const formData = new FormData()
            formData.append('file', image)
            formData.append('upload_preset', 'tm4havmt')

            // console.log(files[0])
    
            Axios.post('https://api.cloudinary.com/v1_1/djgk2k4sw/image/upload', formData).then((response)=>{
                console.log(response)
            })
        
    

        }  

        
    
    

    catch(error){

        console.log(error)
    }

}





    return(


        <>
            <section>

                <Navbar/>


                <main className="main" id = 'details-upload'>

                    <p className='title'>Upload BeeHive Details</p>

                    {/* <form> */}

                        <div className="upload">

                            <label htmlFor='name'>Name:</label>
                            <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Name"
                            
                            />

                        </div>
                        

                        <div className="upload">

                            <label htmlFor='price'>Price:</label>
                            <input
                            type="text"
                            name="price"
                            id="price"
                            placeholder="Enter Price"

                            />

                        </div>


                        <div className="upload">

                            <label htmlFor='size'>Size:</label>
                            <input
                            type="text"
                            name="size"
                            id="size"
                            placeholder="Enter Size of the Hive"

                            />

                        </div>


                        <div className="upload">

                            <label htmlFor='image'>Upload Image:</label>
                            <input
                            type="file"
                            name="image"
                            id="image"
                            placeholder="Upload the image of the Hive"
                            onChange={(e)=>{
                                setImage(e.target.files[0])
                            }}
                            />

                        </div>

                        <div className="form-footer">

                            <button type="submit" onClick={uploadImage}>Upload</button>
                     
                        </div>





                    {/* </form> */}

                </main>

             </section>






            


        
        
        </>
    )


}

export default Dashboard