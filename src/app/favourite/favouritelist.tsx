"use client";
import { useEffect, useState } from "react";
import { MyImage } from "./page";
import View from "./view";

const Favouritelist = ({ resources }: { resources: MyImage[] }) => {
  const [initialState, setInitialState] = useState(resources);
  useEffect(() => {
    setInitialState(resources);
  }, [resources]);
  return (
    <div className="max-w-7xl mx-auto p-5">
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4"
        style={{ columnGap: '1rem' }}>
      {initialState.map((item, i) => {
        return (
          <div key={i} className="break-inside-avoid mb-4">
            <View
              src={item.public_id}
              tag={item.tags}
              fun={(publicid: string) => {
                setInitialState((current) => {
                  return current.filter((val) => {
                    val.public_id !== publicid;
                  });
                });
              }}
            />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Favouritelist;
