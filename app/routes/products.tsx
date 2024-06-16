import '../styles/products.css';
import { motion } from "framer-motion";
import '../styles/global.css';

import sampleimg from "../assets/csharp.png"
import sampleimg2 from "../assets/html.png"

import { IoCloudDownloadOutline } from "react-icons/io5";

export default function ProductsPage() {
  return (
    <div style={{ width: "100%", height: "100%" }} className="flex flex-col justify-center items-center align-middle text-center darkmode-bg pt-20">
      <div className='mb-6'><h1 className="text-black dark:text-white text-6xl">Products</h1></div>
<div id='productsContainer' className='flex flex-col gap-2'>
<ProductCard title="Product #1" desc="A Description" img={sampleimg}/>
<ProductCard title="Product #2" desc="A Description 2" img={sampleimg2}/>
</div>
      <div style={{ height: "800px" }}></div>
    </div>
  );
}

function ProductCard({title, desc, img} : {title:string, desc:string, img:any}) {
  return (
    <div id='product-card' className="shadow-md dark:shadow-none bg-gradient-to-b from-[rgb(20,19,62)] to-[rgb(37,35,158)]">
      <div className='pb-[1rem] pt-[1rem] flex flex-col justify-center items-center' id='product-card-sect1'>
        <img className='w-20 h-20 rounded-md border-0 relative top-1' src={img}/>
        <h2>{title}</h2>
        <p className='max-w-[500px] max-h-[100px]'>{desc}</p>
      </div>
      <div className='' id='downloadbtncontainer'>
        <div className='flex justify-center pt-2'>
          <div className='w-fit'>
            <a href='/'>
              <div className="downloadbtn_div">
                <motion.button className="downloadbtn" whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.8 }}>
                  <div className='flex flex-col justify-center items-center'>
                    <IoCloudDownloadOutline className='w-5 h-5' />
                    <p>DOWNLOAD</p>
                  </div>
                </motion.button>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div>
      <a href='/'>
      <p className='underline text-blue-500 text-xs -mt-2'>MORE INFO</p>
      </a>
      </div>
    </div>
  );
}

// function GlowingProductCard({ }) {
//   return (
//     <div id='card2-body' className="bg-[#1E1E1E] dark:bg-white/[.025]">
//           <div id="cards2">
//             <div className="card2">
//               <div className="card2-content">
                
//               </div>
//             </div>
//           </div>
//         </div>
//   );
//}