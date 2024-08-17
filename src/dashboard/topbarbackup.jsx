import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import NotificationSidebar from "../components/notification"; // pastikan jalur impor benar

const TopBar = ({ sidebarWidth }) => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isSidebarOpen, setLocalIsSidebarOpen] = useState(false);
    const [notifications, setNotifications] = useState([
      "PRODUKSI: Ada data outlier! (5 menit yang lalu)",
      "MONITORING: Ada data outlier! (23 jam yang lalu)",
      "POMPA: Ada data outlier! (23 jam yang lalu)",
      "PREDIKSI: Ada data outlier! (1 hari yang lalu)"
    ]);
    const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShow(false); // Sembunyikan TopBar saat menggulir ke bawah
      } else {
        setShow(true); // Tampilkan TopBar saat menggulir ke atas
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const effectiveSidebarWidth = sidebarWidth || 250; // Anggap lebar sidebar adalah 250px jika tidak ditentukan

  const handleUserIconClick = () => {
    router.push('/admin/profil');
  };

  const handleBellIconClick = () => {
    setLocalIsSidebarOpen(!isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`${show ? "fixed" : "hidden"} top-0 left-0 z-30 w-full`}
      style={{ paddingLeft: `${effectiveSidebarWidth + 20}px` }}
    >
      <div
        className="flex justify-between items-center mt-4 mr-4 py-2 pr-5 pl-6 bg-black rounded-tl-lg"
        style={{ height: "64px", borderRadius: "8px 8px 8px 8px" }}
      >
        <div className="flex flex-grow items-center">
          <div className="text-md font-bold text-center text-white mr-4">
            RepLon Dashboard v.01.
          </div>
          <div className="flex-auto text-xs font-bold text-center text-white">
            Visualization of greenhouse melon cultivation conditions Wates
            District, Blitar Regency, East Java
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            icon={faBell}
            className="text-white text-xl cursor-pointer"
            onClick={handleBellIconClick}
          />
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-white text-2xl cursor-pointer"
            onClick={handleUserIconClick}
          />
        </div>
      </div>
      <NotificationSidebar
        isOpen={isSidebarOpen}
        onClose={() => {
          setLocalIsSidebarOpen(false);
          setIsSidebarOpen(false);
        }}
        notifications={notifications}
      />
    </div>
  );
};

export default TopBar;
