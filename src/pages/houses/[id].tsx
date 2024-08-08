import { useGetHouseDetailsQuery } from "@/game/api/apiSlice";
import { useRouter } from "next/router";

const HouseDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: house,
    error,
    isLoading,
  } = useGetHouseDetailsQuery(id as string);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  return (
    <div className="container mx-auto p-4">
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
  );
};

export default HouseDetails;
