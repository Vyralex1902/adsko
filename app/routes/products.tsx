import '../styles/products.css';
import { motion } from "framer-motion";
import '../styles/global.css';

import { IoCloudDownloadOutline } from "react-icons/io5";

export default function ProductsPage() {
  return (
    <div style={{ width: "100%", height: "100%" }} className="flex flex-col justify-center items-center align-middle text-center darkmode-bg pt-20">
      <div className='mb-6'><h1 className="text-black dark:text-white text-6xl">Products</h1></div>

      <ProductCard />

      <div style={{ height: "800px" }}></div>
    </div>
  );
}

function ProductCard({ }) {
  return (
    <div id='product-card' className="shadow-md dark:shadow-none">
      <div className='pb-[1rem] bg-[rgb(18,16,55)] pt-[1rem]' id='product-card-sect1'>
        <h2>Product #1</h2>
        <p>Product 1 Description here.</p>
      </div>
      <div className=' bg-[rgb(1,22,39)]' id='downloadbtncontainer'>
        <div className='flex justify-center pt-2'>
          <div className='w-fit'>
            <a href='/'>
              <div className="downloadbtn_div">
                <motion.button className="downloadbtn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
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