import AdminStat from "@/components/Admin/AdminStat";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <div className="max-w-[1440px] mx-auto p-8">
      <h1 className="text-6xl font-bold my-10">Hello, Admin page!</h1>
      <div className="flex flex-row gap-10 justify-start items-center">
        <AdminStat title={"Total Orders"} value={"11"} href={"/orders"}/>
        <AdminStat title={"Total Products"} value={"20"} href={"/products"}/>
        <AdminStat title={"Total Customers"} value={"32"} href={"/customers"}/>
        <AdminStat title={"Total Employers"} value={"01"} href={"/employer"}/>
      </div>
    </div>
  );
}
