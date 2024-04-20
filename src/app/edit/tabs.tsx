
"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CldImage } from "next-cloudinary";

export function TabsDemo({src}:{src:string}) {
  return (
    <Tabs defaultValue="original" className="w-full py-4 px-4">
      <TabsList className="grid w-full grid-cols-1 sm:grid-cols-4 gap-1 sm:gap-4">
        <TabsTrigger value="original">Original</TabsTrigger>
        <TabsTrigger value="blur">Blur</TabsTrigger>
        <TabsTrigger value="gray">Gray Scale</TabsTrigger>
        <TabsTrigger value="oil">Oil Paint</TabsTrigger>
      </TabsList>
      {/* original */}
      <TabsContent value="original">
        <div className="flex flex-wrap gap-7 justify-center py-40 sm:py-4">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            className="max-w-full"
          />

          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            className="max-w-full"
          />
        </div>
      </TabsContent>

      {/* blur */}
      <TabsContent value="blur">
        <div className="flex flex-wrap gap-7 justify-center py-40 sm:py-4 ">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            className="max-w-full"
          />

          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            blur={800}
            className="max-w-full"
          />
        </div>
      </TabsContent>

      {/* gray scale */}
      <TabsContent value="gray">
        <div className="flex flex-wrap gap-7 justify-center py-40 sm:py-4">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            className="max-w-full"
          />

          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            grayscale={true}
            className="max-w-full"
          />
        </div>
      </TabsContent>

    {/* oil paint */}
    <TabsContent value="oil">
        <div className="flex flex-wrap gap-7 justify-center py-40 sm:py-4">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            className="max-w-full"
          />

          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            oilPaint={true}
            className="max-w-full"
          />
        </div>
      </TabsContent>

    </Tabs>
  );
}
