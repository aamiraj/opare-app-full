import Carousel from "@/components/Carousel/Carousel";
import Menus from "@/components/Menus";
import OurProducts from "@/components/OurProducts";
import "animate.css";

export default function Home() {
  return (
    <>
      <div>
        <Menus />
      </div>
      <main className="bg-white carouselAnimation">
        <Carousel />
      </main>
      <section>
        <OurProducts />
      </section>
    </>
  );
}
