import { addToCart } from "@/slices/cart";
import { removeFrimCart } from "@/slices/cart";
import { useDispatch } from "react-redux";
export default function Header() {
  const distpatch = useDispatch();

  const Handleclick = () => {
    distpatch(addToCart());
  };
  const HandleclickRemove = () => {
    distpatch(removeFrimCart());
  };
  return (
    <div className="w-full h-[300px] bg-red-300 flex justify-center items-center gap-[20px]">
      <button
        onClick={Handleclick}
        className="bg-white p-[15px] rounded-[10px]"
      >
        AddToCat
      </button>
      <button
        onClick={HandleclickRemove}
        className="bg-white p-[15px] rounded-[10px]"
      >
        RemoveFromCart
      </button>
    </div>
  );
}
