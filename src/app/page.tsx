import Carousel from "@/components/Carousel/Carousel";
import OurProducts from "@/components/OurProducts";
import "animate.css";
import Carousel1 from "../assets/1.png";
import Carousel2 from "../assets/2.png";
import Carousel3 from "../assets/3.png";

export default function Home() {
  const images = [Carousel1, Carousel2, Carousel3]
  return (
    <>
      <main className="bg-white carouselAnimation">
        <Carousel carousels={images} />
      </main>
      <section className="max-w-[1080px] mx-auto ">
        <OurProducts />
      </section>
    </>
  );
}
