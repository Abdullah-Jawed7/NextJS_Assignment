"use client"
import { Star} from "lucide-react"
import { details } from "@/lib/details";
import Image from "next/image";
import Link from "next/link";

export default function Cars() {
    const data = details
    return(
        <>
        <div  className="bg-[#f3f8ff]  py-10 md:px-20 lg:px-36 ">
            <h1 className="text-2xl font-semibold block pb-10">Featured New Cars:</h1>
            <div className="container flex justify-evenly flex-wrap lg:flex-nowrap">
                {data.map((item)=>(
                    
                    <div key={item.id} className="bg-white rounded-md my-8 lg:my-0 ">
                        
                        <Link href={`/${item.id}`}>
                        <div>
                            <div id="img">
                              
                                <Image
                                src={item.pic}
                                alt="car"
                                width={230}
                                height={170}
                                ></Image>
                               
                                </div>
                            <div id="detail" className="text-center ">
                                <h1 className="text-[#233d7b] text-lg font-semibold">{item.title}</h1>
                                <h3 className="text-[#3eb549]  ">PKR {item.ask}</h3>
                            </div>
                            <div id="stars" className="text-center py-2 pb-3">
                               <Star className="inline-block h-3 w-3 fill-current p-0 m-0 text-[#ef730f]"/> 
                               <Star className="inline-block h-3 w-3 fill-current p-0 m-0 text-[#ef730f]"/> 
                               <Star className="inline-block h-3 w-3 fill-current p-0 m-0 text-[#ef730f]"/> 
                               <Star className="inline-block h-3 w-3  p-0 m-0 text-[#ef730f]"/> 
                               <Star className="inline-block h-3 w-3  p-0 m-0 text-[#ef730f]"/>
                               <p className="text-[#7b8397] inline-block ms-2 text-sm"> {item.review} Reviews</p>
                              
                            </div>
                        </div>
                        </Link>
                         </div>
                ))}
            </div>
        </div>
         </>
    )
}