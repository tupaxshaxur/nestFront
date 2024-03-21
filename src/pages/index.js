import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full overflow-hidden h-[500vh] bg-gray-950">
      <div className="w-[99vw] relative left-[80vh] h-[150vh] bg-gradient-radial from-yellow-300 via-slate-950 opacity-30 blur-3xl to-slate-950 rounded-full"></div>
      <div className="w-[99vw] h-[150vh] relative right-[80vh] bg-gradient-radial from-pink-300 via-slate-950 opacity-30 blur-3xl to-slate-950 rounded-full"></div>
      <div className="w-[100vw] h-[150vh] relative left-[60vh] bg-gradient-radial from-emerald-300 via-slate-950 opacity-30 blur-xl to-slate-950 rounded-full"></div>
      <div className="w-[70vw] relative right-[25vh] bottom-[35vh] h-[140vh] bg-gradient-radial from-yellow-300 via-slate-950 opacity-30 blur-xl to-slate-950 rounded-full"></div>
      <div className="h-[500vh] w-full absolute top-0 left-0 flex flex-col items-center">
        {/* Header */}
        <div className="w-full h-[8vh] sticky top-0 bg-gray-950 opacity-50 backdrop-blur-xl flex items-center justify-around text-lg">
          <div className=" bg-[url('https://nestmoodle.xyz/pluginfile.php/1/core_admin/logo/0x150/1708914414/NHS.d046134c.png')] w-[7vw] h-[4.5vh] bg-cover bg-center"></div>
          <div className="gap-[2vw] flex">
            <a href="">Нүүр</a>
            <div className="flex flex-row justify-center items-center">
              <a href="">Бидний тухай</a>
              <div className="bg-[url('https://flaticons.net/icon.php?slug_category=application&slug_icon=arrowhead-down')] w-[1vw] h-[1vh] "></div>
            </div>
            <a href="">Мэдээлэл</a>
            <a href="">Хөтөлбөр</a>
            <a href="">Холбогдох</a>
          </div>
          <div className="gap-12 flex items-center relative">
            <b className="text-md">EN  |    MN</b>
            <button className="border-red-400 border-2 py-2 px-4 rounded-md bg-black">Элсэлт</button>
          </div>
        </div>
        {/* Body */}
        <div className="text-3xl flex flex-col items-center mt-[12vh]">
          <b className="block">БАГА АНГИ</b>
          <b className="text-yellow-500 text-4xl">ТӨВ СУРГУУЛЬ</b>
        </div>
        {/* Undarmaltsetseg */}
        <div className="w-[63vw] h-[100vh] overflow-hidden bg-black relative right-[5vw] mt-[11vh]">
          <div>
            <div className="w-[16vw] h-[33vh] bg-white rounded-xl"></div>
            <b className="text-2xl ">Д. Ундармалцэцэг</b>
          </div>
        </div>

      </div>
    </div>
  );
}
