import * as React from "react";
import { useRouter } from "next/router";
import Image from "next/image"; // Import Image

function LandingPage() {
  const router = useRouter();

  // Function to handle login click
  const handleLogin = () => {
    router.push("/login/login");
  };

  return (
    <div
      className="pl-16 bg-lime-300 shadow-sm max-md:pl-5"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <div className="flex gap-5 h-full max-md:flex-col">
        <div className="flex flex-col w-6/12 h-full max-md:w-full">
          <div className="flex z-10 flex-col items-center mt-10 font-bold text-center h-full max-md:mt-5 max-md:max-w-full">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed0fd4ec77508fc16c44a49a926a47a314f0eead3b5aabca5394c5f943d26af8?apiKey=56720a43f79840e1abfb6fc8af490491"
              alt="Dashboard Logo"
              width={150}
              height={150}
              className="max-w-full aspect-[0.93]"
              loading="lazy"
            />
            <div className="mt-4 text-3xl text-lime-800">DASHBOARD REPLON</div>
            <div className="self-stretch mt-4 text-l text-lime-800 max-md:max-w-full flex-1 flex items-center justify-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum nisi at risus consequat, eget vehicula justo ultricies.
              Quisque eget eros quis nisi laoreet aliquam. Proin auctor, metus
              sit amet ultrices porta, tortor elit convallis quam, eget congue
              velit dolor sit amet urna. Phasellus nec nulla id ante tincidunt
              aliquam. Integer vitae lectus libero. Vivamus nec lorem at purus
              rhoncus laoreet sed sit amet arcu.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 h-full max-md:w-full">
          <div className="flex relative flex-col grow pt-12 pr-8 pb-2.5 text-center h-full max-md:max-w-full">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/afd5b473ea3b432b59bc9e38bb89a39c00de185fed28766231cfbdc22b438f12?apiKey=56720a43f79840e1abfb6fc8af490491"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
              loading="lazy"
            />
            <div
              className="relative self-end px-5 pt-1 pb-1 text-xl font-bold text-lime-800 whitespace-nowrap bg-white rounded-lg max-md:px-4 cursor-pointer"
              onClick={handleLogin}
            >
              Login
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

export default LandingPage;
