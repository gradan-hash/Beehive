import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import Navbar from '../components/navbar'
import './dashboard.css'
import Axios from 'axios'

function Dashboard(){


    const [image, setImage] = useState('')
    const [imageloadupload, setImageLoadUpload] = useState(false)
    const [loading, setLoading] = useState(false)
    const [hive, setHive] = useState({

        name:'',
        price:'' ,
        size:'',
        image:''
    })

    
        
        const uploadImage = async (e)=>{

        if(e.target.name === 'image'){

            setImage(e.target.files[0])
        

        try{
    
            setImageLoadUpload(true)
            const formData = new FormData()
            formData.append('file', image)
            formData.append('upload_preset', 'tm4havmt')


            // console.log(files[0])

            
            // Axios.post('https://api.cloudinary.com/v1_1/djgk2k4sw/image/upload', formData).then((response)=>{
                //     console.log(response)
            // })

            const response = await Axios.post('https://api.cloudinary.com/v1_1/djgk2k4sw/image/upload',formData )
            
            console.log(response)
            
            const dataurl = response.data.url
            
            console.log(dataurl)
            
            imageurls.push(dataurl)
            
            
        }  
        
        catch(error){
            
            console.log(error)
        }
        
            let imageurls = [...hive.image]
            setHive({ ...hive, image: imageurls})
            setImageLoadUpload(false)
        }


    }

    const handleSubmit = async(e)=>{

        e.preventDefault()

        if(hive.image || !hive.image){
            try{

                if(!hive.name || !hive.price || !hive.size){

                    alert('All fields are required mate!')
                }

                setLoading(true)

                const {data} = await Axios.post('http://localhost:3003/api/auth/hives', hive)

                console.log(data)

                setLoading(false)

                alert('Uploaded Successfully!')

                setHive({
                    name:" ",
                    price:" ",
                    size:" ",
                    image:" "
                })
            }


            catch(error){

                setLoading(false)

            }

        }
        else{
            alert('image is required.')
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
                            onChange={uploadImage }
                            />

                        </div>

                        <div className="form-footer">

                            <button type="submit" onClick={handleSubmit} disabled ={imageloadupload || loading} >{loading? 'Loading...':imageloadupload? 'uploading...': "send"}</button>
                     
                        </div>





                    {/* </form> */}

                </main>

             </section>






            


        
        
        </>
    )


}

export default Dashboard