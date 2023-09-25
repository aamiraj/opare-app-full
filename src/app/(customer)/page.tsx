import Carousel from "@/components/Home/Carousel";
import Carousel1 from "../../assets/1.png";
import Carousel2 from "../../assets/2.png";
import Carousel3 from "../../assets/3.png";
import { products } from "@/data/productsdata";
import ProductsCard from "@/components/Shop/ProductsCard";

export default function Home() {
  const images = [Carousel1, Carousel2, Carousel3];
  return (
    <main>
      <section className="bg-white">
        <Carousel carousels={images} />
      </section>
      <section className="max-w-[1080px] mx-auto ">
        <h1>Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
          {products.map((prod, i) => (
            <ProductsCard key={i} appProps={prod} />
          ))}
        </div>
      </section>
    </main>
  );
}
