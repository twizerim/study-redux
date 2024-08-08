import { useGetPokesQuery } from "../components/redux/lib/api";
import { RootState } from "../components/redux/lib/store";
import { useSelector } from "react-redux";

export default function Content() {
  const cartStore = useSelector((state: RootState) => {
    return state.cart.products
  });
  const { data } = useGetPokesQuery();
  console.log(data);
  return (
    <div className="w-full h-[1000px] bg-blue-600 flex justify-center items-center">
      <p>{cartStore}</p>
    </div>
  );
}
