"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
const Navbar = () => {
  return (
    <div>
    <div className="border-b ">
          <div className="flex h-16 items-center px-4 container mx-auto">
            <Image src={"/album.png"}
            height={"50"}
            width={"50"}
            alt="logo"
            />
              PHOTOS APP
        <div className="ml-auto flex items-center space-x-4 ">
        {/* <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar> */}
  

     

        </div>
          </div>

        </div>  
    </div>
  )
}

export default Navbar
