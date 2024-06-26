
import { CldUploadButton } from 'next-cloudinary';
import  cloudinary  from 'cloudinary';
import  View  from './view';

interface MyImage{
  public_id:string;
  tags:string[]
}

const Gallery =async ({params}:{params:{ pictures: string }}) => {

    let res=(await cloudinary.v2.search
  .expression(`resource_type:image AND folder=${params.pictures}`)
  .sort_by('public_id','desc')
  .max_results(30)
  .with_field("tags")
  .execute()) as {resources:MyImage[]};
 
  return (
<>
    <div className="px-4 pt-9 ">
    <h1 className='text-4xl font-bold tracking-tight'>{`Album Name:${params.pictures}`}</h1>

    </div>  

<div className='columns-4 gap-4 space-y-4 mx-auto p-5'>
  {
    res.resources.map((item,i)=>{
      return <div key={i} className='break-inside-avoid'>
        <View src={item.public_id} tag={item.tags}/>
      </div>
    })
  }
</div>

    </>
    
  )
}

export default Gallery
