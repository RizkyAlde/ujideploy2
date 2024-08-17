import React from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartLine,
  faPumpSoap,
  faBasketShopping,
  faDesktop,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image"; // Import Image from next/image

const SidebarMenuItem = ({ href, icon, label, isActive }) => {
  const router = useRouter(); // Access the router object

  const handleClick = (event) => {
    event.preventDefault(); // Prevent default link behavior
    router.push(href); // Use router.push for navigation
  };

  return (
    <a
      href={href}
      className={`text-white text-base font-semibold flex items-center gap-x-3 px-4 py-3 ${
        isActive ? "bg-gray-600/25" : ""
      } hover:bg-gray-400/25 rounded-2xl my-2`}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
      {label}
    </a>
  );
};

const Sidebar = () => {
  const router = useRouter(); // Use useRouter hook to access the current route

  // Function to check if the current route is the active route
  const isActive = (href) => {
    return router.pathname === href;
  };

  return (
    <div
      className="fixed top-0 left-0 z-40 h-screen overflow-y-auto"
      style={{
        width: "250px",
        background: "linear-gradient(to bottom, #FFC224, #9EFF3D)",
      }}
    >
      <div className="flex flex-col items-center">
        <Image
          src="/assets/logo.png"
          className="w-20 h-20 mb-2 mt-5"
          alt="Logo"
          width={80} // Set width
          height={80} // Set height
        />
        <span className="text-white font-bold text-xl">DASHBOARD REPLON</span>
      </div>
      <div className="flex-grow ml-3 py-4">
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
        <div className="w-full" style={{ maxWidth: "238px" }}>
          <SidebarMenuItem
            href="/login/landing"
            icon={faSignOutAlt}
            label="Logout"
            isActive={isActive("/login/landing")}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
