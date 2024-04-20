"use client"
import { CldUploadButton, CldImage } from 'next-cloudinary';
import { useState } from 'react';

interface UploadImage {
  event: "success";
  info: {
    public_id: string;  
  }
}

const Page = () => {
  const [imageId, setImageId] = useState("cld-sample-3");

  return (
    <div>
      <main className='flex pt-24 flex-col items-center justify-between  max-sm:-mt-20 '>
        <CldUploadButton className='pb-12'
          uploadPreset="pfyf1lbr"
          onUpload={(result) => {
            let res = result as unknown as UploadImage;
            setImageId(res.info.public_id);  
          }}
        />
<div className=''>

      <CldImage className=''
          width="250"
          height="250"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
          />

</div>
      </main>
    </div>
  );
}

export default Page;
