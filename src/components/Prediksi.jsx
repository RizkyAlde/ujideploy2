import React from "react";
import Image from "next/image";

const dataSuhu = [
  { x: "00:00", y: 25 },
  { x: "01:00", y: 26 },
  // ... (remaining data points)
];

const dataKelembapan = [
  { x: "00:00", y: 50 },
  { x: "01:00", y: 52 },
  // ... (remaining data points)
];

function PrediksiPage() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#ECEAE2" }}
    >
      <p className="text-black font-bold md:px-3 mt-5 md:py-3 mx-3">
        Prediksi Satu Hari Kedepan!
      </p>
      <div
        className="flex-2 rounded-tl-2xl rounded-tr-2xl p-4 shadow flex justify-between md:px-3 md:py-3 mt-1 mx-4"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <select
          style={{
            backgroundColor: "#AED260",
            color: "black",
            paddingRight: "0.5px",
          }}
          className="border border-green-200 rounded-xl p-2 pl-2 cursor-pointer focus:outline-none font-bold focus:border-green-200"
        >
          <option style={{ backgroundColor: "#AED260", color: "black" }}>
            Green House 1
          </option>
          {/* (remaining greenhouse options) */}
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
          <p className="text-center text-black font-bold mb-2">2.500 lux</p>
        </div>
      </div>
    </div>
  );
}

export default PrediksiPage;
