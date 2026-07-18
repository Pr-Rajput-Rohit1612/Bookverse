import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function MainLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `
          linear-gradient(rgba(24,16,12,.25), rgba(24,16,12,.25)),
          url('/wood.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex min-h-screen items-start">

        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => {
            setSidebarCollapsed((current) => !current);
          }}
        />

        <div className="min-w-0 flex-1 rounded-l-[34px] border-l border-[#E6D8C4] bg-[#F8F3EB]/96 backdrop-blur-sm">

          <Navbar />

          <main className="px-8 py-6">
            <Outlet />
          </main>

        </div>

      </div>
    </div>
  );
}