import  cloudinary  from 'cloudinary';
import Favouritelist from './favouritelist';

export interface MyImage{
  public_id:string;
  tags:string[]
}

const Gallery =async () => {
 let res=(await cloudinary.v2.search
  .expression("resource_type:image AND tags=favourite")
  .sort_by('public_id','desc')
  .max_results(5)
  .with_field("tags")
  .execute()) as {resources:MyImage[]};
 
  return (
<>
    <div className="px-4 pt-9 flex items-center justify-between">
    <h1 className='text-4xl font-bold tracking-tight'>Favourite</h1>
    
    </div>  

<Favouritelist  resources={res.resources}/>

    </>
    
  )
}

export default Gallery
