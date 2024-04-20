import cloudinary from "cloudinary"
import Folderlist from "./folderlist"

export interface FolderType{
  name:string
  path:string
}

const Page =async () => {
  const {folders}= (await cloudinary.v2.api.root_folders()) as {
    folders:FolderType[]
  }

  return (
    <div className="container mx-auto ">
          <div className="px-4 pt-9 ">
    <h1 className='text-4xl font-bold tracking-tight'>Picture Albums</h1>
    </div>
    {/* data folders */}

    <div className="px-5 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {folders.map((item,i)=>{  
        return(
          <div key={i} >
            <Folderlist  folder={item} />

          </div>
        )
      })}
    </div>
    </div>
  )
} 

export default Page