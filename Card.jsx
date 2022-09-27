import React  from 'react'
import { useState } from 'react';
import {HiOutlineShoppingCart} from 'react-icons/hi'
import Carousel from "react-multi-carousel";

import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineClose } from 'react-icons/ai'
import {BiFilterAlt} from 'react-icons/bi'
import img1 from './images/black.jpg'
import img2 from './images/black.jpg'
import img3 from './images/black.jpg'
import img4 from './images/blue.png'
import img5 from './images/yellow.jpg'
import { Link } from 'react-router-dom'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  laptop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1
  },
  tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1
    },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const product = [
{
product_name:"Zivame Bunny Rolls Knit Cotton Pyjama",
image:"https://sslimages.shoppersstop.com/sys-master/images/h69/h22/16505733316638/200319685_BLACK_alt1.jpg_2000Wx3000H",
price:"$599",
old_price:"₹499",
},
{
  product_name:"Zivame Bunny Rolls Knit Cotton Pyjama",
  image:"https://sslimages.shoppersstop.com/sys-master/images/h69/h22/16505733316638/200319685_BLACK_alt1.jpg_2000Wx3000H",
  price:"$599",
  old_price:"₹499",
  },
{
  product_name:"Zivame Bunny Rolls Knit Cotton Pyjama",
  image:"https://cdn.zivame.com/ik-seo/media/zcmsimages/configimages/ZI60UL-Grey/1_medium/zivame-sleep-assorted-round-neck-long-sleeve-top-grey.jpg?t=1606491138",
  price:"$599",
  old_price:"₹499",
  },
  {
    product_name:"Zivame Bunny Rolls Knit Cotton Pyjama",
    image:"https://cdn.zivame.com/ik-seo/media/zcmsimages/configimages/ZI60UL-Grey/1_medium/zivame-sleep-assorted-round-neck-long-sleeve-top-grey.jpg?t=1606491138",
    price:"$599",
    old_price:"₹499",
    },
    {
      product_name:"Zivame Bunny Rolls Knit Cotton Pyjama",
      image:"https://cdn.zivame.com/ik-seo/media/zcmsimages/configimages/ZI60UL-Grey/1_medium/zivame-sleep-assorted-round-neck-long-sleeve-top-grey.jpg?t=1606491138",
      price:"$599",
      old_price:"₹499",
      },
      {
        product_name:"Zivame Bunny Rolls Knit Cotton Pyjama",
        image:"https://cdn.zivame.com/ik-seo/media/zcmsimages/configimages/ZI60UL-Grey/1_medium/zivame-sleep-assorted-round-neck-long-sleeve-top-grey.jpg?t=1606491138",
        price:"$599",
        old_price:"₹499",
        },  
        {
          product_name:"Zivame Bunny Rolls Knit Cotton Pyjama",
          image:"https://cdn.zivame.com/ik-seo/media/zcmsimages/configimages/ZI60UL-Grey/1_medium/zivame-sleep-assorted-round-neck-long-sleeve-top-grey.jpg?t=1606491138",
          price:"$599",
          old_price:"₹499",
          },  
          {
            product_name:"Zivame Bunny Rolls Knit Cotton Pyjama",
            image:"https://cdn.zivame.com/ik-seo/media/zcmsimages/configimages/ZI60UL-Grey/1_medium/zivame-sleep-assorted-round-neck-long-sleeve-top-grey.jpg?t=1606491138",
            price:"$599",
            old_price:"₹499",
            },  
            {
              product_name:"Zivame Bunny Rolls Knit Cotton Pyjama",
              image:"https://cdn.zivame.com/ik-seo/media/zcmsimages/configimages/ZI60UL-Grey/1_medium/zivame-sleep-assorted-round-neck-long-sleeve-top-grey.jpg?t=1606491138",
              price:"$599",
              old_price:"₹499",
              },  
             
]



function Card() {

  const [open, setOpen] = useState(false)
    const [isActive, setIsActive] = useState({set0:true, set1:true, set2:true, set3:true, set4:true, set5:true ,set10:true});
  return (
    <div className=' flex' >

    



    <div className='z-0 ' >
   

   <button onClick={()=> setOpen(!open)} className="float-left sm:ml-12 flex  ml-5 lg:hidden ">
   <BiFilterAlt className='mt-1 mr-1 '/> FILTER BY 
   </button>


   
   <div className=''   > 


  {(<div as="div" className={ open ? "relative z-0    " : "absolute  hidden lg:block  bg-transparent" } >
                              

       <div className=" inset-0 gow ">
       <div className=" inset-0 overflow-hidden">
           <div className="pointer-events-none inset-y-0 left-0 flex  ">
                          
          
               <div className="pointer-events-auto w-screen sm:w-[18rem]  shadow-black lg:mt-24  lg:ml-8 ">
               <div className="flex h-screen flex-col ">
                   
               <div className="flex  xl:bg-transparent  justify-between p-4  border-b-2 shadow-lg lg:shadow-none shadow-gray-300   lg:bg-white w-full sm:w-[18rem] z-10 rounded-b-xl">
                       <div className="flex text-lg font-medium lg:text-white text-white drop-shadow-lg shadow-black ml-3"><BiFilterAlt className=' mr-1 mt-1'/> FILTER BY </div>
                      
                      
                       <div className="ml-3 flex h-7 items-center">
                       <button   type="button"   className="-m-2 p-2 text-gray-300 bg-black " >
                       <AiOutlineClose className="h-6 w-6 hover:scale-150 mr-2 lg:hidden" aria-hidden="true" onClick={() => setOpen(!open)}  />
                       </button> 
                       </div>   
                 
                   </div>
                           
                      
                      
                   <div className="flex-1 gow  xl:bg-transparent  px-2 text-white">

                  

                   <div className="relative group w-full mt-20 black ">
                   <button className="flex w-full justify-between  " onClick={()=>setIsActive({...isActive, set3:!isActive.set3})}>
                     <p className=" text-white drop-shadow-lg  ml-3 font-medium flex " > <h3>SIZE</h3></p>
                     <svg className="fill-current h-9 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                       <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                     </svg></button>
                   <div  className=" group-focus:block  ">
                    
                        {isActive.set3 && (
                   
                   
                           <div className='ml-5 mb-5  justify-center items-center h-36 overflow-auto no-scrollbar'>
                           <div className='form-check form-check-inline'>
                           
                          
                           <input type="checkbox"  id="T-shirt1" className="bg-smokewhite hover:bg-gray-200  rounded-md text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                           <label for="T-shirt1" className='text-lg font-semibold pl-3 text-white drop-shadow-lg'> s</label><br/>
                           <input type="checkbox"  id="T-shirt1" className="bg-smokewhite hover:bg-gray-200  rounded-md text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                           <label for="T-shirt1" className='text-lg font-semibold pl-3 text-white drop-shadow-lg'> M</label><br/>
                           <input type="checkbox"  id="T-shirt2" className="bg-smokewhite hover:bg-gray-200  rounded-md text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                           <label for="T-shirt2" className='text-lg font-semibold pl-3 text-white drop-shadow-lg'> L</label><br/>
                           <input type="checkbox"  id="T-shirt2" className="bg-smokewhite hover:bg-gray-200  rounded-md text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                           <label for="T-shirt2" className='text-lg font-semibold pl-3 text-white drop-shadow-lg'> XL</label><br/>
                           
                           <input type="checkbox"  id="T-shirt4" className="bg-smokewhite hover:bg-gray-200  rounded-md text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                           <label for="T-shirt4" className='text-lg font-semibold pl-3 text-white drop-shadow-lg'> XXL</label><br/>
                            </div> 
                            </div>
                   
                   
                   
                   
                         
                   
                        
                   )}
                   </div>
                   </div>

                   
                   




                   <div className="relative group w-full mt-3 py-2">
                   <button className="flex w-full justify-between " onClick={()=>setIsActive({...isActive, set4:!isActive.set4})}>
                     <p className=" text-white drop-shadow-lg  ml-3 font-medium flex " >  <h3>COLOR</h3></p>
                     <svg className="fill-current h-9 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                       <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                     </svg></button>
                   <div  className=" group-focus:block ">
                   
                        {isActive.set4 && (
                          <div>
                   
                          
                   
                          <div className=' flex justify-evenly mb-5 '> 
                          <div className='w-10 h-10 rounded-full border-2 hover:shadow-lg  hover:shadow-black   opacity-80 hover:opacity-100 drop-shadow-lg' >
                          <Link to={""} className="cursor-pointer" > <img src={img1} className=" object-cover relative rounded-full border border-gray-100 h-full w-full " /></Link> 
                            </div>
                            <div className='w-10 h-10 rounded-full border-2 hover:shadow-lg  hover:shadow-black border-white opacity-80 hover:opacity-100 drop-shadow-lg' >
                            <Link to={""} className="cursor-pointer" ><img src={img2} className=" object-cover relative rounded-full border border-gray-100 h-full w-full " /></Link>
                            </div>
                            <div className='w-10 h-10 rounded-full border-2  hover:shadow-lg  hover:shadow-black border-white  opacity-80 hover:opacity-100 drop-shadow-lg' >
                            <Link to={""} className="cursor-pointer" ><img src={img3} className=" object-cover relative rounded-full border border-gray-100 h-full w-full " /></Link>
                            </div>
                            <div className='w-10 h-10 rounded-full border-2  hover:shadow-lg  hover:shadow-black border-white  opacity-80 hover:opacity-100 drop-shadow-lg' >
                            <Link to={""} className="cursor-pointer" ><img src={img4} className=" object-cover relative rounded-full border border-gray-100 h-full w-full " /></Link>
                            </div>
                            <div className='w-10 h-10 rounded-full border-2  hover:shadow-lg  hover:shadow-black border-white  opacity-80 hover:opacity-100 drop-shadow-lg' >
                            <Link to={""} className="cursor-pointer" ><img src={img5} className=" object-cover relative rounded-full border border-gray-100 h-full w-full " /></Link>
                            </div>
                            </div> 
                   
                   
                   
                   
                        </div>
                        
                   )}
                   </div>
                   </div>

                   
                   
                   


                   <div className="relative group w-full mt-3 py-2">
                   <button className="flex w-full justify-between " onClick={()=>setIsActive({...isActive, set5:!isActive.set5})}>
                     <p className=" text-white drop-shadow-lg  ml-3 font-medium flex " >  <h3>FABRIC</h3></p>
                     <svg className="fill-current h-9 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                       <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                     </svg></button>
                   <div  className=" group-focus:block ">
                    
                   {isActive.set5 && (


                           <div className='ml-5 mb-3 h-28 overflow-auto no-scrollbar'>
                           <input type="checkbox" id="fabric" className="bg-smokewhite rounded-md hover:bg-gray-200  text-black focus:ring-white  shadow-sm shadow-black hover:border-black h-5 w-5 "/>
                           <label for="fabric" className='text-lg  font-semibold pl-3 text-white drop-shadow-lg'> Cotton</label><br/>
                           <input type="checkbox" id="fabric1" className="bg-smokewhite rounded-md hover:bg-gray-200   text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                           <label for="fabric1" className='text-lg font-semibold pl-3 text-white drop-shadow-lg'> Cotton&Polyester</label><br/>
                           <input type="checkbox" id="fabric2" className="bg-smokewhite rounded-md hover:bg-gray-200   text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                           <label for="fabric2" className='text-lg font-semibold pl-3 text-white drop-shadow-lg'> Modal Elastane</label><br/>
                           <input type="checkbox" id="fabric2" className="bg-smokewhite rounded-md hover:bg-gray-200   text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                           <label for="fabric2" className='text-lg font-semibold pl-3 text-white drop-shadow-lg'> Polyester</label><br/>
                          
                           </div> 
                          
                       )}
                       </div>
                       </div>


                       



                       <div className="relative group w-full mt-3 py-2 ">
                       <button className="flex w-full justify-between " onClick={()=>setIsActive({...isActive, set2:!isActive.set2})}>
                         <p className=" text-white drop-shadow-lg  ml-3 font-medium flex " >  <h3> PACK / MULTIPACK</h3></p>
                         <svg className="fill-current h-9 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                           <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                         </svg></button>
                       <div  className=" group-focus:block ">
                        
                       {isActive.set2 && (
                           <div className='ml-5 mb-3 h-28 overflow-auto no-scrollbar'>
                           
                           <input type="checkbox" id="pack" className="bg-smokewhite hover:bg-gray-200 rounded-lg text-black focus:ring-white  shadow-sm shadow-black hover:border-black h-5 w-5"/>
                           <label for="pack" className='text-lg  font-semibold pl-3 text-white drop-shadow-lg'> Pack on 1</label><br/>
                           <input type="checkbox" id="pack1" className="bg-smokewhite hover:bg-gray-200 rounded-lg text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                           <label for="pack1" className='text-lg font-semibold pl-3 text-white drop-shadow-lg'> Pack on 2</label><br/>
                           <input type="checkbox" id="pack2" className="bg-smokewhite hover:bg-gray-200  rounded-lg text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                           <label for="pack2" className='text-lg font-semibold pl-3 text-white drop-shadow-lg'> Pack on 3 </label><br/>
                           <input type="checkbox" id="pack3" className="bg-smokewhite hover:bg-gray-200  rounded-lg text-black focus:ring-white shadow-sm shadow-black hover:border-black h-5 w-5"/>
                           <label for="pack3" className='text-lg font-semibold pl-3 text-white drop-shadow-lg'> Pack on 4</label><br/>

                          
                           
                     </div> 
                     )}
                   </div>
                   </div>


                   



                   <div className="relative group w-full mt-3 py-2">
                   <button className="flex w-full justify-between " onClick={()=>setIsActive({...isActive, set1:!isActive.set1})}>
                     <p className=" text-white drop-shadow-lg  ml-3 font-medium flex " >  <h3> PRICE</h3></p>
                     <svg className="fill-current h-9 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                       <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                     </svg></button>
                   <div  className=" group-focus:block  ">
                    


                   {isActive.set1 && (
                       <div className='ml-5 h-28 overflow-auto no-scrollbar'>
                       <input type="checkbox" id="price" className="bg-smokewhite hover:bg-gray-200  rounded-sm text-black focus:ring-white   shadow-sm shadow-black hover:border-black h-5 w-5"/>
                       <label for="price" className='text-lg  text-center font-semibold pl-3 text-white  drop-shadow-lg'>  Rs.200 - Rs.500</label><br/>
                       <input type="checkbox" id="price1"  className="bg-smokewhite hover:bg-gray-200 rounded-sm text-black focus:ring-white  shadow-sm shadow-black hover:border-black h-5 w-5"/>
                       <label for="price1" className='text-lg font-semibold pl-3 text-white  drop-shadow-lg'> Rs.500 - Rs.800</label><br/>
                       <input type="checkbox" id="price2" className="bg-smokewhite hover:bg-gray-200 rounded-sm text-black focus:ring-white  shadow-sm shadow-black hover:border-black h-5 w-5"/>
                       <label for="price2" className='text-lg font-semibold pl-3 text-white  drop-shadow-lg'> Rs.800 - Rs.1200 </label><br/>   
                       <input type="checkbox" id="price3" className="bg-smokewhite hover:bg-gray-200 rounded-sm text-black focus:ring-white  shadow-sm shadow-black hover:border-black h-5 w-5"/>
                       <label for="price3" className='text-lg font-semibold pl-3 text-white  drop-shadow-lg'> Rs.1200 - Rs.2000</label><br/>
                       
                 </div> 
                 )}
               </div>
               </div>


               

                   
                   
               <div className="relative group w-full mt-3 py-2">
               <button className="flex w-full justify-between " onClick={()=>setIsActive({...isActive, set1:!isActive.set1})}>
                 <p className=" text-gray-900 drop-shadow-lg  ml-3 font-medium flex " >  <h3> PRICE</h3></p>
                 <svg className="fill-current h-9 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                   <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                 </svg></button>
               <div  className=" group-focus:block  ">
                


               {isActive.set1 && (
                   <div className='ml-5 h-28 overflow-auto no-scrollbar'>
                   <input type="checkbox" id="price" className="bg-smokewhite hover:bg-gray-200  rounded-full text-black focus:ring-white   shadow-sm shadow-black hover:border-black h-5 w-5"/>
                   <label for="price" className='text-lg  text-center font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'>  Rs.200 - Rs.500</label><br/>
                   <input type="checkbox" id="price1"  className="bg-smokewhite hover:bg-gray-200 rounded-full text-black focus:ring-white  shadow-sm shadow-black hover:border-black h-5 w-5"/>
                   <label for="price1" className='text-lg font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> Rs.500 - Rs.800</label><br/>
                   <input type="checkbox" id="price2" className="bg-smokewhite hover:bg-gray-200 rounded-full text-black focus:ring-white  shadow-sm shadow-black hover:border-black h-5 w-5"/>
                   <label for="price2" className='text-lg font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> Rs.800 - Rs.1200 </label><br/>   
                   <input type="checkbox" id="price3" className="bg-smokewhite hover:bg-gray-200 rounded-full text-black focus:ring-white  shadow-sm shadow-black hover:border-black h-5 w-5"/>
                   <label for="price3" className='text-lg font-semibold pl-3 text-gray-600 hover:text-black drop-shadow-lg'> Rs.1200 - Rs.2000</label><br/>
                   
             </div> 
             )}
           </div>
           </div>


           





</div>






                   <div className=" flex justify-evenly  text-sm text-gray-500 link-underline link-underline:hover ">
                       
                     
                       <button type="button" className="font-medium text-md text-gray-500 hover:text-gray-700 mb-20 " onClick={() => setOpen(!open)}>  Continue Shopping<span aria-hidden="true" > &rarr;</span>
                       </button>
                     
                   </div>

                   </div>


                  
              

               </div>
           
           </div>
       </div>
       </div>
   </div>)}


   </div>
   
         
   
   </div>

   <div className=' overflow-y-auto h-[55.7rem] '>
  
  <div className='flex flex-wrap justify-start lg:ml-96  px-1  pt-32'>
 

{product.map((pro) => ( 
<div className='my-3'>
<div className="bg-transparent border border-white w-[9rem] grow md:grow-0 md:w-[16.5rem] lg:w-[12rem] xl:w-[19rem] xl:h-[32.5rem] overflow-hidden rounded-lg shadow-md   hover:scale-105 hover:shadow-lg hover:shadow-white  duration-200 mx-1 lg:mx-3 ">
<Link to={""} >
<Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={3000}
            transitionDuration={1000}
            removeArrowOnDeviceType={["desktop","mobile","tablet","laptop"]}
            className=" "
          >
           
            <div>
              <img
                className="px-2 py-2 object-contain"
                src={"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1700944/2022/3/2/093bc645-d461-4128-94a1-0692803944141646215571321-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Cotton-Pure-Cotton--1.jpg"}
              />
              </div>

              <div>
              <img
                className="px-2 py-2 object-contain"
                src={"https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/608x608/products/6293/54775/2018-T-Shirt-Captain-America-Civil-War-Tee-3D-Printed-T-shirts-Men-Marvel-Avengers-3__54930.1526456339.jpg?c=2"}
              />
              </div>

              <div>
              <img
                className="px-2 py-2 object-contain"
                src={"https://i.pinimg.com/736x/cc/09/34/cc09344e766e4b33b725f9277cb03767.jpg"}
              />
              </div>
          </Carousel>
          <div className=" lg:hover:-translate-y-12 duration-1000 ease-in-out px-2 bg-gray-900 py-4  ">
            <div className="flex justify-start     border-t-3 ">
              <p className="text-sm  text-white font-medium pb-2 pl-3">
                {pro.product_name}{" "}
              </p>
            </div>
      
      <div className="text-start px-3  py-2 flex">
          <del className="text-xl  text-white">{pro.price}</del>  
          <p className='text-red-500 pl-5 text-xl '>{pro.old_price}</p>     
      </div>
      <div className='flex justify-between flex-wrap '>
      <div class="flex px-3 mt-2">
          <svg aria-hidden="true" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5  h-6 ">5.0</span>
      </div>
      <div className='mx-2 mr-4 mt-3'>
      <button  className= "hover:scale-105  text-white mb-3 justify-start bg-cyan-500 hover:bg-gray-600 shadow-md shadow-gray-500 white:bg-gray-800 font-medium rounded-lg text-sm px-3 py-2 animate-bounce delay-1000  flex capitalize"> <HiOutlineShoppingCart className='w-5 h-5 mr-1'/>Add to cart </button>
      </div>
      </div>
  </div>
  </Link>
</div>
</div>
))}   




  </div>
  </div>

   </div>



  )
}

export default Card