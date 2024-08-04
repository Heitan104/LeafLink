import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Page = () => {
  return (
    <>
      {/* Header */}
      <Header title={"TerraTree24"}/>

      {/* Background */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url(/background2.jpg)',
          backgroundRepeat: 'no-repeat'
        }}
      >
            <div 
            className="absolute top-1 left-0 right-0 p-4 mt-10 flex items-center justify-between px-2 border-0 bg-green-900">
            <Image 
              src="/profilePicture.png" 
              alt="Profile Picture" 
              className="rounded-full"
              width={120} height={200} // Ensure the aspect ratio is correct
            />
            {/* trees planted */}
            <p className="text-center text-white text-xl">
              Trees Planted: 103
            </p>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full text-center">
          {/* Trees Planted */}

        </div>

      {/* Add Footer */}
      <Footer />
    </>
  );
}

export default Page;
// npm run dev
