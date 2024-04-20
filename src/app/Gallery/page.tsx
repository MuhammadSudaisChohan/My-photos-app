
import { CldUploadButton } from 'next-cloudinary';
import Upload from './upload';
import  cloudinary  from 'cloudinary';
import  View  from '../Gallery/view';

interface MyImage{
  public_id:string;
  tags:string[]
}

const Gallery =async () => {
 let res=(await cloudinary.v2.search
  .expression('resource_type:image ')
  .sort_by('public_id','desc')
  .max_results(30)
  .with_field("tags")
  .execute()) as {resources:MyImage[]};
 
  return (
<>
    <div className="px-4 pt-9 flex items-center justify-between  ">
    <h1 className='text-4xl font-bold tracking-tight'>Gallery</h1>
    <Upload/>
    </div>  

<div >
<div className='columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 p-5'>
  {
    res.resources.map((item,i)=>{
      return <div key={i} className='break-inside-avoid p-1 shadow-md rounded-lg '>
        <View src={item.public_id} tag={item.tags}/>
      </div>
    })
  }
</div>
</div>
    </>
    
  )
}

export default Gallery
