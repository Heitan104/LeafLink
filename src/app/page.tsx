'use client';
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";


const UserHomepage = () => {
  

  return (
    <>
      <Header />
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url(/background2.jpg)',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mt-20">
            <h1 className="text-8xl font-bold text-white">LeafLink</h1>
          </div>
          <div className="mb-20"></div>
          <div className="py-16 px-4">
            <p className="text-center text-white">
            With LeafLink, plant trees nearby and make a global impact.
            </p>
          </div>
          <div className="mb-20"></div>
          <Link href="/userHomepage">
            <Button className="bg-green-900 text-white py-6 px-10 rounded">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserHomepage;
