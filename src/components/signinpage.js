import React, { useState } from "react";
import { useRouter } from "next/router";

function SigninPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = { email, username, password };
    localStorage.setItem("user", JSON.stringify(userData));
    alert("User registered successfully!");

    handleSignin();
  };

  const handleSignin = () => {
    router.push("/login/login");
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
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ed0fd4ec77508fc16c44a49a926a47a314f0eead3b5aabca5394c5f943d26af8?apiKey=56720a43f79840e1abfb6fc8af490491&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed0fd4ec77508fc16c44a49a926a47a314f0eead3b5aabca5394c5f943d26af8?apiKey=56720a43f79840e1abfb6fc8af490491&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed0fd4ec77508fc16c44a49a926a47a314f0eead3b5aabca5394c5f943d26af8?apiKey=56720a43f79840e1abfb6fc8af490491&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed0fd4ec77508fc16c44a49a926a47a314f0eead3b5aabca5394c5f943d26af8?apiKey=56720a43f79840e1abfb6fc8af490491&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed0fd4ec77508fc16c44a49a926a47a314f0eead3b5aabca5394c5f943d26af8?apiKey=56720a43f79840e1abfb6fc8af490491&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed0fd4ec77508fc16c44a49a926a47a314f0eead3b5aabca5394c5f943d26af8?apiKey=56720a43f79840e1abfb6fc8af490491&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed0fd4ec77508fc16c44a49a926a47a314f0eead3b5aabca5394c5f943d26af8?apiKey=56720a43f79840e1abfb6fc8af490491&width=2000 2000w"
                className="max-w-full aspect-[0.93] w-[120px]"
              />
              <div className="mt-4 text-xl text-lime-800">DASHBOARD REPLON</div>
            </div>
            <div className="bg-lime-300 mt-3 rounded-lg">
              <div className="flex justify-center mb-1"></div>
              <h2 className="text-2xl text-lime-800 font-bold mb-2 text-left">
                Sign In
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
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
                      fontSize: "0.875rem",
                    }}
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="username"
                    className="block text-gray-700 text-sm text-left mb-2"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    style={{
                      color: "gray",
                      fontWeight: "400",
                      fontSize: "0.875rem",
                    }}
                  />
                </div>
                <div className="mb-2">
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
                      fontSize: "0.875rem",
                    }}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-gray-700 text-sm text-left mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    style={{
                      color: "gray",
                      fontWeight: "400",
                      fontSize: "0.875rem",
                    }}
                  />
                </div>
                <div className="text-center">
                  <button
                    className="bg-lime-800 hover:bg-lime-600 text-white font-bold w-full py-2 px-3 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 h-full max-md:w-full">
          <div className="flex relative flex-col grow pt-12 pr-8 pb-2.5 text-center h-full max-md:max-w-full">
            <Image
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/afd5b473ea3b432b59bc9e38bb89a39c00de185fed28766231cfbdc22b438f12?apiKey=56720a43f79840e1abfb6fc8af490491&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd5b473ea3b432b59bc9e38bb89a39c00de185fed28766231cfbdc22b438f12?apiKey=56720a43f79840e1abfb6fc8af490491&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd5b473ea3b432b59bc9e38bb89a39c00de185fed28766231cfbdc22b438f12?apiKey=56720a43f79840e1abfb6fc8af490491&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd5b473ea3b432b59bc9e38bb89a39c00de185fed28766231cfbdc22b438f12?apiKey=56720a43f79840e1abfb6fc8af490491&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd5b473ea3b432b59bc9e38bb89a39c00de185fed28766231cfbdc22b438f12?apiKey=56720a43f79840e1abfb6fc8af490491&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd5b473ea3b432b59bc9e38bb89a39c00de185fed28766231cfbdc22b438f12?apiKey=56720a43f79840e1abfb6fc8af490491&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd5b473ea3b432b59bc9e38bb89a39c00de185fed28766231cfbdc22b438f12?apiKey=56720a43f79840e1abfb6fc8af490491&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd5b473ea3b432b59bc9e38bb89a39c00de185fed28766231cfbdc22b438f12?apiKey=56720a43f79840e1abfb6fc8af490491&width=1600 1600w"
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

export default SigninPage;
