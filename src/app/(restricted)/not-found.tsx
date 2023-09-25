import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-center">404 No Found</h1>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
