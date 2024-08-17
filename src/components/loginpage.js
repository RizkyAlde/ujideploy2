import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      alert("Login berhasil!");
      router.push("/admin/home");
    } else {
      setError("Email atau password salah!");
    }
  };

  const handleSignin = () => {
    router.push("/login/signin");
  };

  const handleForgotPassword = async () => {
    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Email reset password telah dikirim.");
      } else {
        setError(data.error || "Terjadi kesalahan. Coba lagi nanti.");
      }
    } catch (error) {
      setError("Gagal mengirim email reset password. Coba lagi nanti.");
    }
  };

  return (
    <div
      className="pl-16 bg-lime-300 shadow-sm max-md:pl-5"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <div className="flex gap-5 h-full max-md:flex-col">
        <div className="flex flex-col w-6/12 h-full max-md:w-full">
          <div className="flex z-10 flex-col items-left mt-10 font-bold text-center h-full max-md:mt-5 max-md:max-w-full">
            <div className="flex items-center">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed0fd4ec77508fc16c44a49a926a47a314f0eead3b5aabca5394c5f943d26af8?apiKey=56720a43f79840e1abfb6fc8af490491"
                alt="Dashboard Logo"
                width={120}
                height={112} // Adjust height as needed to match the aspect ratio
                className="max-w-full"
                layout="fixed" // Use layout="fixed" to control the size directly
              />
              <div className="mt-4 text-xl text-lime-800">DASHBOARD REPLON</div>
            </div>
            <div className="bg-lime-300 mt-3 rounded-lg">
              <div className="flex justify-center mb-1"></div>
              <h2 className="text-2xl text-lime-800 font-bold mb-2 text-left">
                Login
              </h2>
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="text-red-500 text-sm mb-4">{error}</div>
                )}
                {message && (
                  <div className="text-green-500 text-sm mb-4">{message}</div>
                )}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm text-left mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Username@gmail.com"
                    style={{
                      color: "gray",
                      fontWeight: "400",
                      fontSize: "0.775rem",
                    }}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm text-left mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    style={{
                      color: "gray",
                      fontWeight: "400",
                      fontSize: "0.775rem",
                    }}
                  />
                </div>
                <div className="flex items-center justify-between mb-6">
                  <a
                    href="#"
                    className="inline-block align-baseline font-bold text-xs text-gray-800 hover:text-gray-900"
                    onClick={handleForgotPassword}
                  >
                    Forgot Password?
                  </a>
                  <p className="text-gray-700 text-xs">
                    Don't have account?{" "}
                    <a
                      href="#"
                      className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800"
                      onClick={handleSignin}
                    >
                      Create New One
                    </a>
                  </p>
                </div>
                <div className="text-center">
                  <button
                    className="bg-lime-800 hover:bg-lime-600 text-white font-bold w-full py-2 px-3 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 h-full max-md:w-full">
          <div className="flex relative flex-col grow pt-12 pr-8 pb-2.5 text-center h-full max-md:max-w-full">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/afd5b473ea3b432b59bc9e38bb89a39c00de185fed28766231cfbdc22b438f12?apiKey=56720a43f79840e1abfb6fc8af490491"
              alt="Dashboard Background"
              layout="fill" // Use layout="fill" to cover the container
              objectFit="cover" // Adjust to cover the container with the image
              className="object-cover absolute inset-0 size-full"
            />
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

export default LoginPage;
