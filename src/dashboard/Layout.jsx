// Layout.js
import React, { useState } from "react";
import Sidebar from "./Sidebar"; // pastikan jalur impor benar
import TopBar from "./TopBar"; // pastikan jalur impor benar

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarWidth = 255; // Definisikan lebar sidebar di sini

  return (
    <div className="flex">
      <Sidebar />
      <div
        className="flex flex-col flex-1"
        style={{
          backgroundColor: "#ECEAE2",
        }}
      >
        <div style={{ paddingLeft: `${sidebarWidth}px` }}>
          {" "}
          {/* Menjaga konten tetap di sebelah kanan Sidebar */}
          <TopBar setIsSidebarOpen={setIsSidebarOpen} />
          {/* Konten utama dengan padding atas yang cukup untuk TopBar */}
          <main
            className={`flex-1 overflow-y-auto ${isSidebarOpen ? 'blur-sm' : ''}`}
            style={{ paddingTop: "64px" }}
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
