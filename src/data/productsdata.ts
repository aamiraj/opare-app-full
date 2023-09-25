import { StaticImageData } from "next/image";
import Spice1 from "../assets/spice1.jpg";
import Spice2 from "../assets/spice2.jpeg";
import Spice3 from "../assets/spice3.jpg";

export interface ProductsType {
  id: string;
  title: string;
  img: Array<StaticImageData>;
  price: number;
  discount: number;
  quantity: number;
  unit: "pieces" | "kilogram" | "gram";
  stock: "in-stock" | "out-of-stock";
  category: Array<string>;
  description: string;
  avgRating: number;
  reviews: [
    {
      user_id: string;
      name: string;
      email: string;
      comment: string;
      rating: number;
      verified: boolean;
      date: string;
    }
  ];
}

export const products: Array<ProductsType> = [
  {
    id: "1",
    title: "Turmeric Powder 200g",
    img: [Spice1, Spice2, Spice3],
    price: 100,
    discount: 0.1,
    quantity: 1,
    unit: "pieces",
    stock: "in-stock",
    category: ["Spices"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta architecto doloribus, id quam corporis consequatur dolor modi soluta tempore in! Velit quasi quae minima blanditiis fugit nam deleniti illo quo!",
      avgRating: 3,
    reviews: [
      {
        user_id: "1",
        name: "John Doe",
        email: "john@gmail.com",
        comment: "This product is good.",
        rating: 4,
        verified: true,
        date: "2023-08-25T12:00:00-06:00",
      },
    ],
  },
  {
    id: "2",
    title: "Turmeric Powder 200g",
    img: [Spice1, Spice2, Spice3],
    price: 100,
    discount: 0.1,
    quantity: 1,
    unit: "pieces",
    stock: "in-stock",
    category: ["Spices"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta architecto doloribus, id quam corporis consequatur dolor modi soluta tempore in! Velit quasi quae minima blanditiis fugit nam deleniti illo quo!",
      avgRating: 3,
    reviews: [
      {
        user_id: "1",
        name: "John Doe",
        email: "john@gmail.com",
        comment: "This product is good.",
        rating: 4,
        verified: true,
        date: "2023-08-25T12:00:00-06:00",
      },
    ],
  },
  {
    id: "3",
    title: "Turmeric Powder 200g",
    img: [Spice1, Spice2, Spice3],
    price: 100,
    discount: 0.1,
    quantity: 1,
    unit: "pieces",
    stock: "in-stock",
    category: ["Spices"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta architecto doloribus, id quam corporis consequatur dolor modi soluta tempore in! Velit quasi quae minima blanditiis fugit nam deleniti illo quo!",
      avgRating: 3,
    reviews: [
      {
        user_id: "1",
        name: "John Doe",
        email: "john@gmail.com",
        comment: "This product is good.",
        rating: 4,
        verified: true,
        date: "2023-08-25T12:00:00-06:00",
      },
    ],
  },
  {
    id: "4",
    title: "Turmeric Powder 200g",
    img: [Spice1, Spice2, Spice3],
    price: 100,
    discount: 0.1,
    quantity: 1,
    unit: "pieces",
    stock: "in-stock",
    category: ["Spices"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta architecto doloribus, id quam corporis consequatur dolor modi soluta tempore in! Velit quasi quae minima blanditiis fugit nam deleniti illo quo!",
      avgRating: 3,
    reviews: [
      {
        user_id: "1",
        name: "John Doe",
        email: "john@gmail.com",
        comment: "This product is good.",
        rating: 4,
        verified: true,
        date: "2023-08-25T12:00:00-06:00",
      },
    ],
  },
  {
    id: "5",
    title: "Turmeric Powder 200g",
    img: [Spice1, Spice2, Spice3],
    price: 100,
    discount: 0.1,
    quantity: 1,
    unit: "pieces",
    stock: "in-stock",
    category: ["Spices"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta architecto doloribus, id quam corporis consequatur dolor modi soluta tempore in! Velit quasi quae minima blanditiis fugit nam deleniti illo quo!",
      avgRating: 3,
    reviews: [
      {
        user_id: "1",
        name: "John Doe",
        email: "john@gmail.com",
        comment: "This product is good.",
        rating: 4,
        verified: true,
        date: "2023-08-25T12:00:00-06:00",
      },
    ],
  },
  {
    id: "6",
    title: "Turmeric Powder 200g",
    img: [Spice1, Spice2, Spice3],
    price: 100,
    discount: 0.1,
    quantity: 1,
    unit: "pieces",
    stock: "in-stock",
    category: ["Spices"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta architecto doloribus, id quam corporis consequatur dolor modi soluta tempore in! Velit quasi quae minima blanditiis fugit nam deleniti illo quo!",
      avgRating: 3,
    reviews: [
      {
        user_id: "1",
        name: "John Doe",
        email: "john@gmail.com",
        comment: "This product is good.",
        rating: 4,
        verified: true,
        date: "2023-08-25T12:00:00-06:00",
      },
    ],
  },
];
