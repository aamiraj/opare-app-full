import Sidebar from "@/components/Shop/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Sidebar Appprops={children} />
    </section>
  );
};

export default layout;
