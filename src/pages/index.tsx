import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Content from "@/components/content";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
