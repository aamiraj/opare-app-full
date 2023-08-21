import Carousel from "@/components/Carousel/Carousel";
import OurProducts from "@/components/OurProducts";
import "animate.css";

export default function Home() {
  return (
    <>
      <main className="bg-white carouselAnimation">
        <Carousel />
      </main>
      <section>
        <OurProducts />
      </section>
    </>
  );
}
