import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Page = () => {
  return (
    <>
    {/* Header */}
    <Header handleMenuChange={() => {}}/>
    <div
    // Background Image
    className="relative min-h-screen bg-cover bg-center"
    style={{
      backgroundImage: 'url(/background2.jpg)',
      // backgroundSize: 'cover',
      // backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
    >
      <div className="flex flex-col items-center justify-center py-16 text-center">

        {/* Heading */}
        <div className="mt-20">
          <h1 className="text-8xl font-bold text-white">LeafLink</h1>
        </div>

        {/* space */}
        <div className="mb-20"></div>

        {/* Additional Content */}
        <div className="py-16 px-4">
          <p className="text-center text-white">
            {/* Add more content here */}
            Description Here
          </p>
        </div>

        {/* space */}
        <div className="mb-20"></div>

        {/* Get Started Today Button */}
        <Link href="/userHomepage">
            <Button className="bg-green-900 text-white py-6 px-10 rounded">
              Get Started Today
            </Button>
        </Link>
      </div>
    </div>

    {/* Add Footer */}
    <Footer />
    </>
  );
}

import { MapProvider } from "@/providers/map-provider";
import MapComponent from "@/components/ui/map";

export default function Home() {
  return (
    <MapProvider>
      <main>
        <MapComponent />
      </main>
    </MapProvider>
  );
}

// npm run dev