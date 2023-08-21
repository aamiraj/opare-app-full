import Sidebar from "@/components/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Sidebar Appprops={children} />
    </section>
  );
};

export default layout;
