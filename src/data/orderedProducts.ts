import { StaticImageData } from "next/image";
import Spice1 from "../assets/spice1.jpg";
import Spice2 from "../assets/spice2.jpeg";
import Spice3 from "../assets/spice3.jpg";

interface OrderedProduct {
  product_id: string;
  title: string;
  img: Array<StaticImageData>;
  price: number;
  discount: number;
  quantity: number;
  unit: "pieces" | "kilogram" | "gram";
  stock: "in-stock" | "out-of-stock";
  category: Array<string>;
}

export interface OrderedProductsType {
  id: string;
  status:
    | "pending"
    | "approved"
    | "rejected"
    | "canceled"
    | "processing"
    | "ready-to-ship"
    | "shipping"
    | "delivered";
  method: "COD" | "bkash";
  products: Array<OrderedProduct>;
  subTotal: number;
  shippingCost: number;
  discount: number;
  customer: {
    customer_id: string;
    name: string;
    email: string;
    verified: boolean;
    address: {
      phone: string;
      division: string;
      district: string;
      upazila: string;
      streetAddress: string;
    };
  };
}

export const orders: Array<OrderedProductsType> = [
  {
    id: "1",
    status: "pending",
    method: "COD",
    subTotal: 400,
    shippingCost: 60,
    discount: 50,
    products: [
      {
        product_id: "1",
        title: "Turmeric Powder 200g",
        img: [Spice1, Spice2, Spice3],
        price: 100,
        discount: 0,
        quantity: 1,
        unit: "pieces",
        stock: "in-stock",
        category: ["Spices"],
      },
    ],
    customer: {
      customer_id: "1",
      name: "John Doe",
      email: "john@email.com",
      verified: true,
      address: {
        phone: "+8801XXXXXXXX",
        division: "Chittagong",
        district: "Commilla",
        upazila: "Debidwar",
        streetAddress: "Holding #2, Borobazar",
      },
    },
  },
  {
    id: "2",
    status: "pending",
    method: "COD",
    subTotal: 400,
    shippingCost: 60,
    discount: 50,
    products: [
      {
        product_id: "1",
        title: "Turmeric Powder 200g",
        img: [Spice1, Spice2, Spice3],
        price: 100,
        discount: 0,
        quantity: 1,
        unit: "pieces",
        stock: "in-stock",
        category: ["Spices"],
      },
    ],
    customer: {
      customer_id: "1",
      name: "John Doe",
      email: "john@email.com",
      verified: true,
      address: {
        phone: "+8801XXXXXXXX",
        division: "Chittagong",
        district: "Commilla",
        upazila: "Debidwar",
        streetAddress: "Holding #2, Borobazar",
      },
    },
  },
];
