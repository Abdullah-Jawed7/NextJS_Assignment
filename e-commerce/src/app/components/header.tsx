import react from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, User } from 'lucide-react'
import { Input}from '@/components/ui/input'
import Image from 'next/image'


export default function Header() {
    return(
        <>
  <div className="hidden sm:flex items-center pr-[15%] justify-end upper h-12 w-full bg-black text-white">
<div className="  content flex sm:w-full md:w-3/4 justify-between">
    <p className='text-[#dfdddd]  text-sm' >Summer Sale for All Swim Suits And Free Express Delivery - OFF 50% <b className='text-white'>ShopNow</b> </p>
    <button className='flex items-center gap-1 text-[#dfdddd]'>English <Image src='/Vector.png' alt='pic' width={10} height={10}  /> </button>
</div>
  </div>
  <header className='w-full h-24'>
    <div className="content">
        <div className="logo align-middle">
            <Image src='/Exclusive.png' alt='logo' width={120} height={26}/>
        </div>
        <div className="options">
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Sign Up</li>
            </ul>
        </div>
        <div className="icons">
            <Input/>
            <Image src={}/>
        </div>
    </div>
  </header>
        </>
    )
}