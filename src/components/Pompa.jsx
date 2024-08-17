import * as React from "react";
import Image from "next/image"; // Impor Image dari next/image

function Pompa() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#ECEAE2" }}
    >
      <div className="self-center my-auto text-xl leading-5 text-black font-bold mt-10">
        STATUS POMPA 12 GREEN HOUSE
      </div>

      <div className="px-6 py-4 bg-white rounded-lg shadow-[0px_8px_24px_rgba(69,69,80,0.1)] md:px-3 md:py-3 mt-4 mb-5 mx-4">
        <div className="flex flex-col gap-3 md:flex-row md:gap-3">
          <div className="flex flex-col w-full md:w-3/12 mr-2">
            <div className="flex flex-col grow px-5 pt-4 w-full font-bold bg-lime-300 rounded-lg shadow-lg min-h-[250px]">
              <div className="flex flex-col md:flex-row gap-5 justify-between">
                <div className="my-auto text-xl leading-5 text-black">
                  Green House 1
                </div>
                <Image
                  src="/assets/greenhouse.png"
                  alt="Green House 1"
                  width={50}
                  height={50}
                  className="mx-auto mb-2"
                />
              </div>
              <div className="shrink-0 h-0.5 mt-2 bg-lime-800 border-2 border-lime-800 border-solid" />
              <Image
                src="/assets/switch-on.png"
                alt="Switch On"
                width={150}
                height={50}
                className="mx-auto mb-2"
              />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-3/12">
            <div className="flex flex-col grow px-5 pt-4 w-full font-bold bg-lime-300 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row gap-5 justify-between">
                <div className="my-auto text-xl leading-5 text-black">
                  Green House 2
                </div>
                <Image
                  src="/assets/greenhouse.png"
                  alt="Green House 2"
                  width={50}
                  height={50}
                  className="mx-auto mb-2"
                />
              </div>
              <div className="shrink-0 h-0.5 mt-2 bg-lime-800 border-2 border-lime-800 border-solid" />
              <Image
                src="/assets/switch-off.png"
                alt="Switch Off"
                width={150}
                height={50}
                className="mx-auto mb-2"
              />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-3/12">
            <div className="flex flex-col grow px-5 pt-4 w-full font-bold bg-lime-300 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row gap-5 justify-between">
                <div className="my-auto text-xl leading-5 text-black">
                  Green House 3
                </div>
                <Image
                  src="/assets/greenhouse.png"
                  alt="Green House 3"
                  width={50}
                  height={50}
                  className="mx-auto mb-2"
                />
              </div>
              <div className="shrink-0 h-0.5 mt-2 bg-lime-800 border-2 border-lime-800 border-solid" />
              <Image
                src="/assets/switch-on.png"
                alt="Switch On"
                width={150}
                height={50}
                className="mx-auto mb-2"
              />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-3/12">
            <div className="flex flex-col grow px-5 pt-4 w-full font-bold bg-lime-300 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row gap-5 justify-between">
                <div className="my-auto text-xl leading-5 text-black">
                  Green House 4
                </div>
                <Image
                  src="/assets/greenhouse.png"
                  alt="Green House 4"
                  width={50}
                  height={50}
                  className="mx-auto mb-2"
                />
              </div>
              <div className="shrink-0 h-0.5 mt-2 bg-lime-800 border-2 border-lime-800 border-solid" />
              <Image
                src="/assets/switch-off.png"
                alt="Switch Off"
                width={150}
                height={50}
                className="mx-auto mb-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:gap-2">
        <div className="px-6 py-4 bg-white w-[63%] md:w-full rounded-lg shadow-[0px_8px_24px_rgba(69,69,80,0.1)] md:px-3 md:py-3 mr-2 mt-1 mb-5 mx-4 mb-2">
          <div className="flex flex-col h-[100%] px-8 py-4 bg-lime-300 rounded-lg shadow-lg max-md:max-h-full max-md:max-w-full">
            <div className="self-center my-auto text-xl leading-5 text-black font-bold mb-4">
              GRAFIK STATUS POMPA
            </div>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/16875721bcb69c7855732e2ae445fa5244725b627edc50866c221e65922f5991?apiKey=56720a43f79840e1abfb6fc8af490491&width=800"
              alt="Grafik Status Pompa"
              width={800}
              height={300}
              className="w-full aspect-[2.7]"
            />
          </div>
        </div>
      </div>
      <div className="text-sm leading-6 text-black flex justify-center mb-2">
        © 2024 Politeknik Elektronika Negeri Surabaya
      </div>
    </div>
  );
}

export default Pompa;
