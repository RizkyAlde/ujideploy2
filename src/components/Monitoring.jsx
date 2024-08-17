import * as React from "react";
import Image from "next/image"; // Impor Image dari next/image

const data = [
  { hour: "00:00", temperature: 25 },
  { hour: "01:00", temperature: 27 },
  { hour: "02:00", temperature: 29 },
  { hour: "03:00", temperature: 31 },
  { hour: "04:00", temperature: 33 },
  { hour: "05:00", temperature: 35 },
  { hour: "06:00", temperature: 37 },
  { hour: "07:00", temperature: 39 },
  { hour: "08:00", temperature: 38 },
  { hour: "09:00", temperature: 36 },
  { hour: "10:00", temperature: 34 },
  { hour: "11:00", temperature: 32 },
  { hour: "12:00", temperature: 30 },
  { hour: "13:00", temperature: 28 },
  { hour: "14:00", temperature: 26 },
  { hour: "15:00", temperature: 24 },
  { hour: "16:00", temperature: 22 },
  { hour: "17:00", temperature: 20 },
  { hour: "18:00", temperature: 21 },
  { hour: "19:00", temperature: 23 },
  { hour: "20:00", temperature: 25 },
  { hour: "21:00", temperature: 27 },
  { hour: "22:00", temperature: 29 },
  { hour: "23:00", temperature: 31 },
];

export default function MonitoringPage() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#ECEAE2" }}
    >
      <div
        className="flex-2 rounded-tl-2xl rounded-tr-2xl p-4 shadow flex justify-between md:px-3 md:py-3 mt-10 mx-4 "
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <select
          style={{
            backgroundColor: "#AED260",
            color: "black",
            paddingRight: "0.5px",
          }}
          className="border border-green-200 rounded-xl p-2 pl-2 cursor-pointer focus:outline-none font-bold focus:border-green-200 "
        >
          <option
            className="focus:font-bold"
            style={{
              backgroundColor: "#AED260",
              color: "black",
            }}
          >
            Green House 1
          </option>
          <option style={{ backgroundColor: "#AED260", color: "black" }}>
            Green House 2
          </option>
          <option style={{ backgroundColor: "#AED260", color: "black" }}>
            Green House 3
          </option>
          <option style={{ backgroundColor: "#AED260", color: "black" }}>
            Green House 4
          </option>
          <option style={{ backgroundColor: "#AED260", color: "black" }}>
            Green House 5
          </option>
          <option style={{ backgroundColor: "#AED260", color: "black" }}>
            Green House 6
          </option>
          <option style={{ backgroundColor: "#AED260", color: "black" }}>
            Green House 7
          </option>
          <option style={{ backgroundColor: "#AED260", color: "black" }}>
            Green House 8
          </option>
          <option style={{ backgroundColor: "#AED260", color: "black" }}>
            Green House 9
          </option>
          <option style={{ backgroundColor: "#AED260", color: "black" }}>
            Green House 10
          </option>
          <option style={{ backgroundColor: "#AED260", color: "black" }}>
            Green House 11
          </option>
          <option style={{ backgroundColor: "#AED260", color: "black" }}>
            Green House 12
          </option>
        </select>
      </div>
      <div
        className="flex-2 bg-white p-4 shadow flex justify-between md:px-3 md:py-3 mx-4"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        {/* Widget 1 */}
        <div
          className="flex-1 rounded-2xl p-2 shadow mr-2"
          style={{ backgroundColor: "#FFA62F" }}
        >
          <p className="text-center text-black font-bold mb-2">Suhu</p>
          <Image
            src="/assets/temperature.png"
            alt="icon suhu"
            width={50}
            height={50}
            className="mx-auto mb-2"
          />
          <p className="text-center text-black font-bold mb-2">30 C</p>
        </div>
        {/* Widget 2 */}
        <div
          className="flex-1 rounded-2xl p-1 shadow mx-2"
          style={{ backgroundColor: "#AED260" }}
        >
          <p className="text-center text-black font-bold mb-2">
            Kelembapan Udara
          </p>
          <Image
            src="/assets/humidity (2).png"
            alt="icon kelembapan udara"
            width={50}
            height={50}
            className="mx-auto mb-2"
          />
          <p className="text-center text-black font-bold mb-2">40.2%</p>
        </div>
        {/* Widget 3 */}
        <div
          className="flex-1 rounded-2xl p-1 shadow mx-2"
          style={{ backgroundColor: "#FFA62F" }}
        >
          <p className="text-center text-black font-bold mb-2">
            Intensitas Cahaya
          </p>
          <Image
            src="/assets/sunlight (1).png"
            alt="icon intensitas cahaya"
            width={50}
            height={50}
            className="mx-auto mb-2"
          />
          <p className="text-center text-black font-bold mb-2">881lux</p>
        </div>
        {/* Widget 4 */}
        <div
          className="flex-1 rounded-2xl p-1 shadow mx-2"
          style={{ backgroundColor: "#AED260" }}
        >
          <p className="text-center text-black font-bold mb-2">
            Kelembapan Tanah
          </p>
          <Image
            src="/assets/watering.png"
            alt="icon kelembaban tanah"
            width={50}
            height={50}
            className="mx-auto mb-2"
          />
          <p className="text-center text-black font-bold mb-2">60.8%</p>
        </div>
      </div>
      <div
        className="rounded-bl-2xl rounded-br-2xl mb-5 md:px-3 md:pb-3 mx-4"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="mb-2">
          <p className="text-black font-bold">KETERANGAN:</p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <div
              className="rounded py-3 px-6 shadow mr-2"
              style={{ backgroundColor: "#AED260" }}
            ></div>
            <p className="text-black font-bold mr-5">Ideal</p>
          </div>
          <div className="flex items-center">
            <div
              className="rounded py-3 px-6 shadow mr-2 ml-2"
              style={{ backgroundColor: "#FFA62F" }}
            ></div>
            <p className="text-black font-bold">Tidak Ideal</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:gap-2 mb-5">
        <div className="px-6 py-4 bg-white w-full rounded-lg shadow-[0px_8px_24px_rgba(69,69,80,0.1)] md:px-3 md:py-3 mt-1 mb-5 mx-4 mb-2">
          <div className="flex flex-col h-[100%]  px-8 py-4 bg-lime-300 rounded-lg shadow-lg max-md:max-h-full max-md:max-w-full">
            <div className="self-center my-auto text-xl leading-5 text-black font-bold">
              LINE CHART TEMPERATURE
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-2 md:flex-row md:flex-row md:gap-1">
          <div className="px-6 py-4 bg-white w-[30%] rounded-lg shadow-[0px_8px_24px_rgba(69,69,80,0.1)] md:px-3 md:py-3 mt-1 mb-5 mx-4 mb-2">
            <div className="flex flex-col h-[100%]  px-8 py-4 bg-lime-300 rounded-lg shadow-lg max-md:max-h-full max-md:max-w-full">
              <div className="self-center my-auto text-xl leading-5 text-black font-bold">
                STATUS POMPA
              </div>
            </div>
          </div>
          <div className="px-6 py-4 bg-white w-[70%] rounded-lg shadow-[0px_8px_24px_rgba(69,69,80,0.1)] md:px-3 md:py-3 mt-1 mb-5 mx-4 mb-2">
            <div className="flex flex-col h-[100%]  px-8 py-4 bg-lime-300 rounded-lg shadow-lg max-md:max-h-full max-md:max-w-full">
              <div className="self-center my-auto text-xl leading-5 text-black font-bold">
                SCATTER PLOT
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm leading-6 text-black flex justify-center mb-2">
        © 2024 Politeknik Elektronika Negeri Surabaya
      </div>
    </div>
  );
}
