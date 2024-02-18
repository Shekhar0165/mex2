import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Banner() {

  return (
    <div className="flex justify-center">
      <Link href="/">
        <Image
          className="mx-4 cursor-pointer"
          src="/banner1.jpg"
          width={600}
          height={100}
          alt="banner"
        />
      </Link>
      <Link href="/">
        <Image
          className="mx-4 cursor-pointer"
          src="/banner2.jpg"
          width={600}
          height={100}
          alt="banner"
        />
      </Link>
    </div>
  );
}