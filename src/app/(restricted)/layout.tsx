import "../globals.css";
import type { Metadata } from "next";
import { Karla } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo_big.png";
import { HiMenuAlt2 } from "react-icons/hi";

const karla = Karla({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OPARE | Accurate Product Accurate Service",
  description:
    "We guarantee to provide you with quality goods as well as services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${karla.className} max-w-screen-xl mx-auto`}>
        <div className="drawer lg:drawer-open">
          <input
            id="dashboardDrawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            {/* Page content here */}
            <div className="flex-none absolute top-8 left-8 lg:hidden">
              <label
                htmlFor="dashboardDrawer"
                className="btn btn-circle btn-secondary text-xl"
              >
                <HiMenuAlt2 />
              </label>
            </div>
            <div className="lg:hidden w-full flex justify-center items-center my-8 py-8">
              <Link href="/admin">
                <Image src={Logo} alt="Opare logo" width={120} quality={100} />
              </Link>
            </div>
            <div>{children}</div>
          </div>
          <div className="drawer-side">
            <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-56 min-h-full bg-base-100 text-base-content">
              {/* Sidebar content here */}
              <li className="btn-link">
                <div className="flex justify-center items-center">
                  <Link href="/admin">
                    <Image
                      src={Logo}
                      alt="Opare logo"
                      width={120}
                      quality={100}
                    />
                  </Link>
                </div>
              </li>
              <li>
                <Link href={"/orders"}>Orders</Link>
              </li>
              <li>
                <Link href={"/customers"}>Customers</Link>
              </li>
              <li>
                <Link href={"/products"}>Products</Link>
              </li>
              <li>
                <Link href={"/add-product"}>Add Product</Link>
              </li>
              <li>
                <Link href={"/add-employer"}>Add Employer</Link>
              </li>
              <li>
                <Link href={"/"} className="link">
                  Back to main site
                </Link>
              </li>
              <li className="btn btn-error my-2">
                Log out
              </li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
