import { details } from "@/data/details"
import Image from "next/image"
import Link from "next/link"


export default function name({params}:{params:{
    product:string
}}) {
    const data = details
    
    if(params.product.length == 1){
    }
    const content = data.find((item)=>String(item.id)== params.product[0])
    const item = content?content.pic:"/car1.jpg"
return(
    <div className="bg-[#f0f8ff] py-8 sm:p-8 md:px-30 lg:px-52">
        <div>
            <h1 className="text-xl md:text-2xl text-center mb-6 font-semibold underline underline-offset-2">{content?.title} 2024 Price in Pakistan,Images,Reviews & Specs</h1>
            <div id="img" >
            <Image
                        src={item}
                        alt="car"
                        width={300}
                        height={250}
                        className="mx-auto"
                        ></Image>
                       
            </div>
            <div id="boxes" className="text-center mt-12">
                <button className=" mr-2 md:mr-5 text-white py-3 px-2 md:px-6 border-blue-700 rounded-md bg-blue-700 ">Book a test drive</button>
                <button className="transition-all duration-200 md:mr-5 py-3 hover:text-white hover:bg-blue-700 px-2 md:px-6 border bg-white border-blue-700 rounded-md">Car Inspection</button>
                <button className="mt-4 md:mt-0 transition-all duration-200 mr-2 md:mr-5 py-3 hover:text-white hover:bg-blue-700 px-2 md:px-6 border bg-white border-blue-700 rounded-md">Visit Place</button>
                <button className="mt-4 md:mt-0 transition-all duration-200 mr-2 md:mr-5 py-3 hover:text-white hover:bg-blue-700 px-2 md:px-6 border bg-white border-blue-700 rounded-md">Request Bank Finance</button>
            </div>
            <h2 className="text-xl md:text-2xl text-center my-3 font-semibold md:my-6">Vehicle Description</h2>
            <p><b>Number of Doors </b>4 
             <b> Engine </b>1800 CC
              <b> Condition </b>8.5 /10 
              <b> Driven </b>9500 KM
              <b> Suspension Type </b>Soft  Suspension 
              <b> Avg </b>13 KM per ltr  
              <b> Transmission </b>Automatic  
              <b> Fuel Type </b>High Octane  

            </p>
            <div id="ask" className="">
            <h3 className="text-[#3eb549] text-2xl my-6 text-center ">PKR {content?.ask}</h3>
                           
            </div>
            <div id="payment" className="text-center">
               <Link href={`/${params.product}/form`}>
               
                <button className="mr-5 text-white py-3 px-6 border-blue-700 rounded-md bg-blue-700 ">Make Payment</button>
               </Link>
            </div>
        </div>
    </div>
)
}