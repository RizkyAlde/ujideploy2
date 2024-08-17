import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import {
  faHome,
  faChartLine,
  faPumpSoap,
  faBasketShopping,
  faDesktop,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const SidebarMenuItem = ({ href, icon, label, isActive, onClick }) => {
  return (
    <div
      href={href}
      className={`text-white text-base font-semibold flex items-center gap-x-3 px-4 py-3 ${
        isActive ? "bg-gray-600/25" : ""
      } hover:bg-gray-400/25 rounded-2xl cursor-pointer`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
      {label}
    </div>
  );
};

const Sidebar = () => {
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path;
  };

  const handleLogoutClick = () => {
    // Implement your logout logic here
    console.log("Logging out...");
  };

  return (
    <div
      className="fixed top-0 left-0 z-40 h-screen overflow-y-auto"
      style={{
        width: "255px",
        background: "linear-gradient(to bottom, #FFC224, #9EFF3D)",
        borderRadius: "0px 20px 20px 0px",
      }}
    >
      <div
        className="flex flex-col items-center"
        style={{ paddingTop: "40px" }} // Menggabungkan margin dan padding menjadi satu
      >
        <Image src="/assets/8.png" className="w-16 h-16 mb-2" alt="Logo" />
        <span className="text-white text-xl font-semibold">Republik Melon</span>
      </div>
      <div className="flex-grow-1 ml-3 py-4">
        <SidebarMenuItem
          href="/admin/home" 
          icon={faHome} 
          label="Home" 
          isActive={isActive("/admin/home")}
        />
        <SidebarMenuItem
          href="/admin/monitoring"
          icon={faDesktop}
          label="Monitoring"
          isActive={isActive("/admin/monitoring")}
        />
        <SidebarMenuItem
          href="/admin/produksi"
          icon={faBasketShopping}
          label="Production"
          isActive={isActive("/admin/produksi")}
        />
        <SidebarMenuItem
          href="/admin/prediksi"
          icon={faChartLine}
          label="Predictions"
          isActive={isActive("/admin/prediksi")}
        />
        <SidebarMenuItem 
          href="/admin/pompa" 
          icon={faPumpSoap} 
          label="Pump" 
          isActive={isActive("/admin/pompa")}
        />
      </div>
      <div className="fixed bottom-0 left-0 w-full p-3">
        <div
          className="w-full"
          style={{ maxWidth: "244px" }}
        >
          <SidebarMenuItem
            onClick={handleLogoutClick}
            icon={faSignOutAlt}
            label="Logout"
            className="ml-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;