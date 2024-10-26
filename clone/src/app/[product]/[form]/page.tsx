import Link from "next/link"


export default function Form() {
    return(
        <div className="h-screen w-screen bg-[#f3f8ff] flex flex-col justify-center  items-center text-center ">
        <form  className=" w-3/4 sm:w-1/2 md:w-1/3">
            <input   className="w-full p-2 border sm:p-4 my-3 rounded-md" type="text"  required placeholder="Enter Your Name" />
            <input  className="w-full p-2 border sm:p-4 my-3 rounded-md" type="text" required  placeholder="Enter Your Email" />
            <input  className="w-full p-2 border sm:p-4 my-3 rounded-md" type="text" required  placeholder="Enter Your Card Number" />
            <input  className="w-full p-2 border sm:p-4 my-3 rounded-md" type="text"  required placeholder="Enter Your Address" />
            <Link href={`/details/form/thanks`}>
               <button className="w-2/3 lg:w-1/2 p-2 border sm:p-4 my-3 rounded-md bg-blue-700 text-white lg:text-lg">Place Your Order</button>
       </Link>
        </form>

        </div>
    )   
}