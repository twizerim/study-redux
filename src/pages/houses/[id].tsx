import { useGetHouseDetailsQuery } from "../../components/redux/game/api/apiSlice";
import { useRouter } from "next/router";
import Link from "next/link";

const HouseDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: house,
    error,
    isLoading,
  } = useGetHouseDetailsQuery(id as string);

  if (isLoading) return <p className="text-center text-red-400">Loading...</p>;
  if (error) return <p>An error occurred</p>;

  return (
     <div className="flex justify-center items-center h-[80vh] ">
        <div className="container mx-auto p-4  w-[50%] rounded-[10px] shadow-md">
      <h1 className="text-2xl font-bold mb-4">{house.name}</h1>
      <p>
        <strong>Region:</strong> {house.region}
      </p>
      <p>
        <strong>Coat of Arms:</strong> {house.coatOfArms}
      </p>
      <p>
        <strong>Current Lord:</strong> {house.currentLord}
      </p>
      <p>
        <strong>Overlord:</strong> {house.overlord}
      </p>
      <p>
        <strong>Founded:</strong> {house.founded}
      </p>
    </div>
     </div>
  );
};

export default HouseDetails;
