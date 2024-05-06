import React from 'react';
import image2 from "./2.jpg";
import image3 from "./3.png";
const About = () => {
//   return (
//     <div className='p-40 m-auto w-2/3 h-2/3'>
//           <p className="font-extralight w-full">Welcome to SmartPhone Corner! We are dedicated to bringing you the latest and
//             greatest smartphones on
//             the market. Whether you're an Android aficionado or an iOS enthusiast, we have something for
//        </p>
//        <div className='ml-0'>
//         <img src="2.jpg" alt="smart1" />
//        </div>
//        <div className='mr-0'>
//         <img src="3.png" alt="smart2" />
//        </div>
//     </div>
//   );
// };
return (
  <div className="grid grid-cols-3 grid-rows-2 gap-4 pt-14">
  <div className="col-span-1 row-span-1 relative">
    <img src={image2} height="10" alt='sm2' className="w-full absolute top-0 left-0 -translate-x-1/2 rounded-full" />
  </div>
  <div className="col-span-1 row-span-1 flex justify-center items-center">
    <h1 className="text-black font-semibold text-4xl">Smartphone Corner</h1>
  </div>
  <div className="col-span-1 row-span-1"></div>
  
  <div className="col-span-1 row-span-1"></div>
  
  <div className="col-span-1 row-span-1 ">
      <p className="text-center font-extralight  ">
        Welcome to SmartPhone Corner! We are dedicated to bringing you the latest and greatest smartphones on the market. Whether you're an Android aficionado or an iOS enthusiast, we have something
      </p>
  </div>
  <div className="col-span-1 row-span-1 relative">
    <img src={image3} style={{height:220}} alt="Image3" className="w-full translate-x-1/2 rounded-full" />
</div>

</div>
);
};
export default About;
