"use client";

import { CldImage } from "next-cloudinary";
import {
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { AddTags } from "./action";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import Link from "next/link";
import Dialogbox from "./dialogbox";

const View = ({ src, tag }: { src: string; tag: string[] }) => {
  const [fav, setfav] = useState(tag.includes("favourite"));
  return (
    <div className="relative">
      <CldImage
        className="rounded-sm"
        width="400"
        height="400"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />

      {/* heart icon for favourite */}
      <div
        className="absolute top-1 right-1"
        onClick={() => {
          setfav(!fav)
          AddTags(src, fav);
        }}
      >
        {fav ? (
          <AiFillHeart className="w-8 h-8 cursor-pointer text-red-500" />
        ) : (
          <AiOutlineHeart className="w-8 h-8 cursor-pointer text-white hover:text-red-500 duration-300" />
        )}
      </div>

      {/* edit icon for editing */}
      <div className="absolute top-1 left-1">
      <Link href={`/edit?publicid=${src}`} >
        <BiEditAlt className="w-8 h-8 cursor-pointer text-white hover:text-red-500 duration-300" />
      </Link> 
      </div>

      {/* add to album */}
<div className="absolute bottom-1 left-1">
<Dialogbox imageData={src}/>
        </div>
    </div>
  );
};

export default View;
