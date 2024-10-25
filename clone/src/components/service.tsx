import "./app.css"
import {Check} from "lucide-react"

export default function Service() {
    return(
        <>
        <div id="service" className="bg-[#f3f8ff] md:p-7 lg:py-10 lg:px-40">
            
            <h1 className="text-xl sm:text-2xl text-center font-bold pb-5">Sell Your Car on PakWheel and Get the Best Price</h1>
            <div className="container flex justify-between flex-wrap md:flex-nowrap">
       <div id="service1" className="md-w-2/5 relative">
        <div id="heading" className="font-semibold text-xl text-[#233d7b]  my-4"> Post Your Ad on PakWheels</div>
        <div id="list">
            <ul>
                <li><Check className="text-[#3eb549] h-full inline-block"/>Post your Ad for Free in 3 Easy Steps</li>
                <li><Check className="text-[#3eb549] h-full inline-block"/>Get Genuine offers from Verified Buyers</li>
                <li><Check className="text-[#3eb549] h-full inline-block"/>Sell your car Fast at the Best Price</li>
            </ul>
        </div>
        <div id="btn">
            <button className="my-5 bg-[#b73439] py-2 px-8 rounded-lg text-white text-lg border">Post Your Ad</button>
        </div>
       </div>
       <div className="center w-full p-5 md:w-1/5 relative">
        <div className=" absolute left-[40%] top-[40%] text-2xl text-[#7b8397] text-center align-middle">OR</div>
       </div>
       <div className=" md:w-2/5 relative">
        <div id="heading" className="font-semibold text-xl text-[#233d7b]  my-4"> Try PakWheels Sell it For Me</div>
        <div id="list">
            <ul>
                <li><Check className="text-[#3eb549] h-full inline-block"/>Dedicated Sales Expert to Sell your Car</li>
                <li><Check className="text-[#3eb549] h-full inline-block"/>We Bargain for you and share the Best Offer</li>
                <li><Check className="text-[#3eb549] h-full inline-block"/>We ensure Safe & secure Transaction</li>
            </ul>
        </div>
        <div id="btn">
            <button className="my-5 bg-[#518ecb] py-2 px-8 rounded-lg text-white text-lg border">Register Your Car</button>
        </div>
       </div>
       
       
            </div>
        </div> </>
    )
}