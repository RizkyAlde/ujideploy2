import React from "react";
import { useRouter } from "next/router";

function ProfilePage() {
  const router = useRouter();

  // Function to handle home click
  const handleHome = () => {
    router.push("/admin/home"); // Navigate to home page
  };

  return (
    <div
      className="bg-lime-300 shadow-sm max-md:pl-5"
      style={{ height: "100vh", overflow: "hidden" }} // Set tinggi 100vh dan sembunyikan overflow
    >
      <div className="flex gap-5 h-full max-md:flex-col">
        <div
          className="flex flex-col w-full h-full max-md:w-full"
          style={{
            backgroundImage: 'url("/assets/bg_melon.png")', // Ganti dengan path background image Anda
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex z-10 flex-col items-left mt-10 font-bold text-center h-full max-md:mt-5 max-md:max-w-full">
            <div className="flex items-center justify-center">
              <Image
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ed0fd4ec77508fc16c44a49a926a47a314f0eead3b5aabca5394c5f943d26af8?apiKey=56720a43f79840e1abfb6fc8af490491&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed0fd4ec77508fc16c44a49a926a47a314f0eead3b5aabca5394c5f943d26af8?apiKey=56720a43f79840e1abfb6fc8af490491&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed0fd4ec77508fc16c44a49a926a47a314f0eead3b5aabca5394c5f943d26af8?apiKey=56720a43f79840e1abfb6fc8af490491&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed0fd4ec77508fc16c44a49a926a47a314f0eead3b5aabca5394c5f943d26af8?apiKey=56720a43f79840e1abfb6fc8af490491&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed0fd4ec77508fc16c44a49a926a47a314f0eead3b5aabca5394c5f943d26af8?apiKey=56720a43f79840e1abfb6fc8af490491&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed0fd4ec77508fc16c44a49a926a47a314f0eead3b5aabca5394c5f943d26af8?apiKey=56720a43f79840e1abfb6fc8af490491&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed0fd4ec77508fc16c44a49a926a47a314f0eead3b5aabca5394c5f943d26af8?apiKey=56720a43f79840e1abfb6fc8af490491&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed0fd4ec77508fc16c44a49a926a47a314f0eead3b5aabca5394c5f943d26af8?apiKey=56720a43f79840e1abfb6fc8af490491&"
                className="max-w-full aspect-[0.93] w-[100px]" // Mengubah ukuran gambar agar lebih kecil
              />
              <div className="mt-4 text-xl text-lime-800 pr-10">
                DASHBOARD REPLON
              </div>
              <Image
                src="/assets/icon_home.png"
                alt="User Profile"
                className="profile-picture pl-44"
                onClick={handleHome} // Tambahkan event handler onClick
                style={{ cursor: "pointer", height: 30 }} // Tambahkan cursor pointer
              />
            </div>
            <div
              className="self-stretch mb-4 text-l text-lime-800 max-md:max-w-full flex-1 flex items-center justify-center mb-10"
              style={{ alignItems: "flex-end" }}
            >
              {" "}
              Dashboard Replon <br></br>
              Apa itu Replon Dashboard, Tujuan, Kontribusi, dan guidance
              dashboard master. Karena pengurus dan admin bisa jadi ganti-ganti
              setiap periode dan harapannya bisa diteruskan untuk versi
              berikutnya. ini versi 1.0 <br></br>
              ⚫⚫⚫⚫
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full max-md:w-full">
          <div
            className="flex relative flex-col grow pt-12 pr-8 pb-2.5 text-center h-full max-md:max-w-full"
            style={{ alignItems: "center" }}
          >
            {/* Tambahkan elemen gambar untuk profile picture di sini */}
            <div className="flex justify-center items-center mt-8">
              <Image
                src="/assets/logo.png" // Ganti dengan path gambar profile Anda
                alt="Profile Picture"
                className="w-[100px] h-[100px] rounded-full object-cover" // CSS untuk gambar profile
              />
            </div>
            {/* Tambahkan username di bawah profile picture */}
            <div className="mt-2 text-lime-800 font-bold">Username</div>
            <div
              className="self-stretch mb-4 text-l text-lime-800 max-md:max-w-full flex-1 flex items-center justify-center mb-10"
              style={{ alignItems: "flex-end" }}
            >
              {" "}
              Dashboard Replon V 1.0 <br></br>
              Politeknik Elektronika Negeri Surabaya ❤️ Republik Melon
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-2">
            <div className="text-sm leading-6 text-black">
              © 2024 Politeknik Elektronika Negeri Surabaya
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
