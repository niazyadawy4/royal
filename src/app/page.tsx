import axios from "axios";
import Categories from "../components/Categories";
import BestSelling from "@/components/best-selling/BestSelling";
import Seperator from "@/components/ui/Seperator";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import FlashSale from "@/components/FlashSale";

export default async function Home() {
  const { data } = await axios.get("https://api.escuelajs.co/api/v1/categories")
  const first20Categories = data.slice(0, 20);
  const { data: productsData } = await axios.get("https://api.escuelajs.co/api/v1/products");
  const BestSellingProducts = productsData.slice(0, 4);
  const first8Products = productsData.slice(0, 6);


  return (
    <div className="">
      <TopBar />
      <Navbar/>
      <main>
        <HeroBanner />
        <FlashSale products={first8Products} />
        <Categories categories={first20Categories} />
        <Seperator />
        <BestSelling products={BestSellingProducts} />
      </main>
    </div>
  );
}
