import { TabsDemo } from "./tabs"

const Page = ( {searchParams: { publicid }} 
  :
  {searchParams: { publicid : string }} 
) => {
 
  return (
    <>
        <div className="px-4 pt-9 flex items-center justify-between">
    <h1 className='text-4xl font-bold tracking-tight pb-2'>Edit Picture</h1>
    </div>  
    <TabsDemo src={publicid}/>
    
    </>

  )
}

export default Page
