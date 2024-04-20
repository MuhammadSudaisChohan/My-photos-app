
  import React from 'react'
  import { Button } from "@/components/ui/button"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { FolderType } from './page'
  import Link from 'next/link'

  const Folderlist = ({folder}:{folder:FolderType}) => {
    return (
      <Card className="max-w-sm w-full mx-auto md:max-w-md lg:max-w-lg xl:max-w-xl p-4 ">
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>Plese click on view now button to view the pictures present in {folder.name}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end ">
        <Link  href={`/album/${folder.name}`}>
         
        <Button>View Album</Button>
        
        </Link>
      </CardFooter>
    </Card>
    )
  }

  export default Folderlist
