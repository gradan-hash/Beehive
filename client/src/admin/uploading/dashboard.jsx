import React from 'react'
import {Link} from 'react-router-dom';
import Navbar from '../components/navbar'
import './dashboard.css'

function Dashboard(){


    return(


        <>
            <section>

                <Navbar/>


                <main className="main" id = 'details-upload'>

                    <p className='title'>Upload BeeHive Details</p>

                    <form>

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

                            />

                        </div>

                        <div className="form-footer">

                            <button type="submit">Upload</button>
                     
                        </div>





                    </form>








                </main>








             </section>






            


        
        
        </>
    )


}

export default Dashboard