import Link from "next/link"
import { ICustomer } from "@/lib/type"






export default async function Customers() {

const users = await fetch("https://jsonplaceholder.typicode.com/users")
const data:ICustomer[]= await users.json()


    return(
        <>
         <div id="service" className="bg-[#f3f8ff] md:p-7 lg:py-10 lg:px-20">
            
            <h1 className="text-4xl  md:text-6xl sm:text-2xl text-center font-bold pb-5 underline">Our Happy Customers</h1>
           <div className="flex flex-wrap m-2 md:gap-5 justify-evenly">
{data.map((item)=>(
    <div key={item.id} className="w-64 h-56 p-2 sm:p-5">
    <p><b>Name: </b>{item.name}</p>
    <p><b>Email: </b>{item.email}</p>
    <p><b>Phone: </b>{item.phone}</p>
    <p><b>City: </b>{item.address.city}</p>  
    <Link href={`/customer/${item.id}`} >
    
    <button className="px-2  bg-blue-800 text-slate-100 text-lg"  >See More</button>
    </Link>

    </div>
))}
           </div>
        </div> 
        </>
    )
}