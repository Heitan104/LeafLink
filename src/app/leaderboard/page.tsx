import Image from "next/image";
import React from "react";

const Leaderboard = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center"
      style={{
          backgroundImage: 'url(/leaderboard.png)',
          backgroundRepeat: 'no-repeat'
        }}
       > </div>
  );
};

export default Leaderboard;
