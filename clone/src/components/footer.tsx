import Image from "next/image"
import Link from "next/link"
export default function Footer() {
    return(
        <footer className="footer h-24 bg-gradient-to-b from-[#000409] to-[#011c3a]">
            <div className="text-center">
            <Image
         className="mx-auto pt-2"
          src="/logo.png"
          alt="logo"
          width={150}
          height={38}
          priority
        />
        <Link target="_blank" href={"https://pk.linkedin.com/in/abdullah-muhammad-jawed-60b27a282?trk=public_post_feed-actor-name"}><h3 className="text-white text-lg py-3 text-center">Developed by Abdullah</h3></Link>
        
            </div>
        </footer>
    )
} 