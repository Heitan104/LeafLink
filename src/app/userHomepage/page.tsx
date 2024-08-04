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
      <Header />

      {/* Background */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url(/background2.jpg)',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Profile Picture in top left corner */}
        <div className="absolute top-1 left-4 p-4 mt-10">
          <Image 
            src="/profilePicture.png" 
            alt="Profile Picture" 
            className="rounded-full"
            width={120} height={200} // Ensure the aspect ratio is correct
          />
        </div>

        {/* User Name */}
        <div className="absolute top-1 left-12 p-4 mt-10">  
        <p className="text-center text-white">
              {/* Add more content here */}
              Sarah K
        </p>
        </div>

        {/* Additional Content */}
        <div className="py-10 px-0">
            <p className="text-center text-white">
              {/* Add more content here */}
              Trees Planted: 5
            </p>
          </div>


        <div className="flex flex-col items-center justify-center h-full text-center">
          {/* Trees Planted */}

          {/* Additional Content */}
          <div className="py-10 px-4">
            <p className="text-center text-white">
              {/* Add more content here */}
              Trees Planted: 5
            </p>
          </div>
        </div>
      </div>

      {/* Add Footer */}
      <Footer />
    </>
  );
}

export default Page;
// npm run dev
