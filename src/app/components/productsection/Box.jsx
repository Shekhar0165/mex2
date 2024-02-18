import React from "react";
import Box1 from "../box/Box1";
import Box2 from "../box/Box2";
import Banner from "../box/Banner";
export default function TodayBestProduct() {
  return (
    <div>
      <dev className="flex justify-evenly">
        <Box1/>
      </dev>
      <Banner/>
      <Box2 heading={"Today’s best deal"} prono={12}/>
    </div>
  );
}
