// import Image from "next/image";
// import { Inter } from "next/font/google";
// import Header from "@/components/header";
// import Content from "@/components/content";
// import Footer from "@/components/footer";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return (
//     <div className="flex flex-col justify-center items-center h-[80vh]">
//       <Header />
//       <Content />
//       <Footer />
//     </div>
//   );
// }

import { useState } from 'react';
import Link from 'next/link';
import { useGetHouseDetailsQuery } from '@/game/api/apiSlice';
import { useGetHousesQuery } from '@/game/api/apiSlice'; 

const Home = () => {
  const { data: houses, error, isLoading } = useGetHousesQuery(); 
  const [search, setSearch] = useState('');

  const filteredHouses = houses?.filter((house: any) =>
    house.name.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Game of Thrones Houses</h1>
      <input
        type="text"
        placeholder="Search for a house..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredHouses?.map((house: any) => (
          <div key={house.url} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{house.name}</h2>
            <p><strong>Region:</strong> {house.region}</p>
            <p><strong>Coat of Arms:</strong> {house.coatOfArms}</p>
            <Link href={`/houses/${house.url.split('/').pop()}`} legacyBehavior>
              <a className="text-blue-500">View Details</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
