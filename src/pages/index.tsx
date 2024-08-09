
import { useState } from "react";
import Link from "next/link";
import { useGetHousesQuery } from "../components/redux/game/api/apiSlice";
import Notfound from "./[404]";
import NewsContent from "@/components/newscontent";
import { Card } from "antd";
import Footer from "@/components/shared/layout/footer";

const Home = () => {
  const { data: houses, error, isLoading } = useGetHousesQuery();
  const [search, setSearch] = useState("");
  const [sowgame, setShowgame] = useState(false);
  const [news, setShownews] = useState(true);

  const Handlegame = () => {
    setShowgame(true);
    setShownews(false);
  };
  const Handlenews = () => {
    setShowgame(false);
    setShownews(true);
  };

  const filteredHouses = houses?.filter((house: any) =>
    house.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  return (
    <>
      <main className="flex justify-between bg-red-400 py-[20px] px-[30px] items-center">
        <h1 className="text-2xl font-bold mb-4 text-white">G-Thrones Houses</h1>
        <input
          type="text"
          placeholder="Search for a house..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded mb-4 w-[700px]"
        />
        <div className="flex justify-center gap-[20px] items-center">
          <p onClick={Handlegame}>Games</p>
          <p onClick={Handlenews}>Blog</p>
        </div>
      </main>
      {news && <NewsContent />}
      {sowgame && (
        <div className="container mx-auto p-4">
          {filteredHouses && filteredHouses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredHouses.map((house: any) => (

                   <Card
                    key={house.url}
                     size="small"
                    title={house.name}
                    style={{
                    width: 400,
                    }}
                    >
                    
                      <p>
                    <strong>Region:</strong> {house.region}
                  </p>
                  <p>
                    <strong>Coat of Arms:</strong> {house.coatOfArms}
                  </p>
                       <Link
                    href={`/houses/${house.url.split("/").pop()}`}
                    legacyBehavior
                     >
                    <a className="text-red-400 pt[10px]">View Details</a>
                  </Link>
                   </Card>
              ))}
            </div>
          ) : (
            <>
              <Notfound />
              <p className="text-center text-red-400 text-xl">
                No houses found in our games thrones
              </p>
            </>
          )}
        </div>
      )}
     <Footer/>
    </>
  );
};

export default Home;

