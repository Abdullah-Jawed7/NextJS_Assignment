import Link from "next/link"


export default function Header() {
    return(
        <>
        <div className="bg-emerald-700 h-20 w-full  flex align-middle justify-evenly">
            <div className="text-xl sm:text-3xl w-1/5 sm:w-1/3 font-bold  my-5 sm:my-4 ">Abdullah...</div>
            <div className="w-1/2 my-5">
                <ul className="flex  justify-evenly">
                    
                    <Link href={"project"}>  <li className="text-lg font-semibold">Projects</li> </Link>
                    <Link href={"/"}>  <li className="text-lg font-semibold">About Me</li> </Link>
                <Link href={"/"}>  <li className="text-lg font-semibold">Contact Us</li> </Link>
                </ul>
            </div>
        </div>
        </>
    )
}