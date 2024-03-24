import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full overflow-hidden h-[560vh] bg-gray-950">
      <div className="w-[99vw] relative left-[80vh] h-[150vh] bg-gradient-radial from-yellow-300 via-slate-950 opacity-30 blur-3xl to-slate-950 rounded-full"></div>
      <div className="w-[99vw] h-[150vh] relative right-[80vh] bg-gradient-radial from-pink-300 via-slate-950 opacity-30 blur-3xl to-slate-950 rounded-full"></div>
      <div className="w-[100vw] h-[150vh] relative left-[60vh] bg-gradient-radial from-emerald-300 via-slate-950 opacity-30 blur-xl to-slate-950 rounded-full"></div>
      <div className="w-[70vw] relative right-[25vh] bottom-[35vh] h-[140vh] bg-gradient-radial from-yellow-300 via-slate-950 opacity-30 blur-xl to-slate-950 rounded-full"></div>
      <div className="h-[560vh] w-full absolute top-0 left-0 flex flex-col items-center">
        {/* Header */}
        <div className="w-full h-[10vh] sticky top-0 bg-gray-950 opacity-90 backdrop-blur-sm flex items-center justify-around text-lg text-zinc-500">
          <div className=" bg-[url('https://nestmoodle.xyz/pluginfile.php/1/core_admin/logo/0x150/1708914414/NHS.d046134c.png')] w-[7vw] h-[4.5vh] relative left-[4vw] bg-cover bg-center"></div>
          <div className="gap-[2vw] flex">
            <a href="">Нүүр</a>
            <div className="flex flex-row justify-center items-center">
              <a href="">Бидний тухай</a>
            </div>
            <a href="">Мэдээлэл</a>
            <a href="">Хөтөлбөр</a> 
            <a href="">Холбогдох</a>
          </div>
          <div className="gap-[1vw] flex items-center relative">
            <b className="text-md">EN</b>
            <b>|</b>
            <b className="text-white">  MN</b>
            <button className="border-red-400 border-2 py-[0.5vh] px-[1vw] rounded-md bg-black">Элсэлт</button>
          </div>
        </div>
        {/* Body */}
        {/* Undarmaltsetseg */}
        <div className="text-3xl flex flex-col items-center mt-[11vh]">
          <b className="block">БАГА АНГИ</b>
          <b className="text-yellow-500 text-3xl">ТӨВ СУРГУУЛЬ</b>
        </div>
        <div className="w-[65vw] h-[160vh] overflow-hidden mr-[10vw] mt-[8vh] flex flex-row gap-[1vw]">
          <div>
            <div className="w-[16vw] h-[33vh] bg-white rounded-xl"></div>
            <b className="text-2xl relative top-[2vh]">Д. Ундармалцэцэг</b>
            <p className="relative top-[3vh]  text-cyan-400">Бага ангийн сургалтын менежер /Төв</p>
            <p className="relative top-[3vh]  text-cyan-400">сургууль/</p>
            <p className="relative top-[3vh]">Бага ангийн багш</p>
          </div>
          <div className="flex flex-col gap-[0.5vh]">
            <p>Бага ангийн багш</p>
            <p className="text-cyan-400">МУБИС</p>
            <p className="text-gray-400">2000</p>
            <p className="mt-[2vh]">Боловсролын удирдлагын магистр</p>
            <p className="text-cyan-400">БЭЗДС</p>
            <p className="text-gray-400">2013</p>
            <p className="mt-[2vh]">Бага ангийн багш</p>
            <p className="text-cyan-400">Зуун билиг сургууль</p>
            <p className="text-gray-400">2005-2007</p>
            <p className="mt-[2vh]">Бага ангийн багш</p>
            <p className="text-cyan-400">Билгүүн номч сургууль</p>
            <p className="text-gray-400">2007</p>
            <p className="mt-[2vh]">Бага ангийн сургалтын менежер</p>
            <p className="text-cyan-400">Билгүүн номч сургууль</p>
            <p className="text-gray-400">2013-2021</p>
          </div>
          <div className="ml-[10vw]">
            <b className="text-3xl">Тэнхимийн багш нар</b>
            <div className="flex flex-col gap-[1.3vh] ml-[2vw] mt-[2vh] text-[1.6vh] font-serif">
              <div className="flex gap-[1vw]">
                <p>T. Grace</p>
                <p>|</p>
                <p className="text-gray-400">Англи хэлний багш</p>
              </div>
              <div className="flex gap-[1vw]">
                <p>Ж. Амаржаргал</p>
                <p>|</p>
                <p className="text-gray-400">Хөгжийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Баасанжав</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[0.5vw]">
              <p>Б. Гоомарал</p>
                <p>|</p>
                <p className="text-gray-400">Кодчилол Steam хөтөлбөрийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Даваадулам</p>
                <p>|</p>
                <p className="text-gray-400">Биеийн тамирын багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ш. Дуламсүрэн</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ч. Дэлгэрсайхан</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Л. Жавзандолгор</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ж. Жавхлан-Од</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Г. Золбаяр</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Н. Золзаяа</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>М. Минжбадрах</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Д. Мөнхцэцэг</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Наранзаяа</p>
                <p>|</p>
                <p className="text-gray-400">EQ сэтгэл судлаач багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Нарантуяа</p>
                <p>|</p>
                <p className="text-gray-400">Англи хэлний багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>С. Нямцэцэг</p>
                <p>|</p>
                <p className="text-gray-400">Дүрслэх урлагийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Д. Оюударь</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн туслах багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Х. Пүрэвсүрэн</p>
                <p>|</p>
                <p className="text-gray-400">Бүжгийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>М. Пүрэвсүрэн</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>М. Солонго</p>
                <p>|</p>
                <p className="text-gray-400">EQ сэтгэл судлаач багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>А. Туул</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Т. Түвшинжаргал</p>
                <p>|</p>
                <p className="text-gray-400">Англи хэлний багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>С. Түмэндэмбэрэл</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Ууганзаяа</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Н. Үржиг</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Цэвэлсүрэн</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
            </div>
          </div>
        </div>
        {/* Bayarmaa */}
        <div className="text-3xl flex flex-col items-center mt-[5vh ]">
          <b className="block">БАГА АНГИ</b>
          <b className="text-pink-400 text-3xl uppercase">Хан-Уул салбар</b>
        </div>
        <div className="w-[65vw] h-[95vh] overflow-hidden mr-[10vw] mt-[8vh] flex flex-row gap-[1vw]">
          <div>
            <div className="w-[16vw] h-[33vh] bg-white rounded-xl"></div>
            <b className="text-2xl relative top-[2vh]">Ж. Баяармаа</b>
            <p className="relative top-[3vh]  text-cyan-400">Бага ангийн сургалтын менежер /Төв</p>
            <p className="relative top-[3vh]  text-cyan-400">сургууль/</p>
            <p className="relative top-[3vh]">Бага ангийн багш</p>
          </div>
          <div className="flex flex-col gap-[0.5vh]">
            <p>Бага ангийн багш</p>
            <p className="text-cyan-400">МУБИС</p>
            <p className="text-gray-400">2000</p>
            <p className="mt-[2vh]">Боловсролын удирдлагын магистр</p>
            <p className="text-cyan-400">БЭЗДС</p>
            <p className="text-gray-400">2013</p>
            <p className="mt-[2vh]">Бага ангийн багш</p>
            <p className="text-cyan-400">Зуун билиг сургууль</p>
            <p className="text-gray-400">2005-2007</p>
            <p className="mt-[2vh]">Бага ангийн багш</p>
            <p className="text-cyan-400">Билгүүн номч сургууль</p>
            <p className="text-gray-400">2007</p>
          </div>
          <div className="ml-[10vw]">
            <b className="text-3xl">Тэнхимийн багш нар</b>
            <div className="flex flex-col gap-[1.2vh] ml-[2vw] mt-[2vh] text-[1.6vh] font-serif">
              <div className="flex gap-[1vw] items-center">
                <p>T. Grace</p>
                <p>|</p>
                <p className="text-gray-400">Англи хэлний багш</p>
              </div>
              <div className="flex gap-[1vw]">
                <p>Ж. Амаржаргал</p>
                <p>|</p>
                <p className="text-gray-400">Хөгжийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Баасанжав</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[0.5vw] ">
              <p>Б. Гоомарал</p>
                <p>|</p>
                <p className="text-gray-400">Кодчилол Steam хөтөлбөрийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Даваадулам</p>
                <p>|</p>
                <p className="text-gray-400">Биеийн тамирын багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ш. Дуламсүрэн</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ч. Дэлгэрсайхан</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Л. Жавзандолгор</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ж. Жавхлан-Од</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Г. Золбаяр</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Н. Золзаяа</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
            </div>
          </div>
        </div>
        {/* Gerelmaa */}
        <div className="text-3xl flex flex-col items-center">
          <b className="block uppercase">Дунд сургуулийн</b>
          <b className="text-purple-500 text-3xl uppercase">багш нар</b>
        </div>
        <div className="w-[65vw] h-[110vh] overflow-hidden mr-[10vw] mt-[8vh] flex flex-row gap-[1vw]">
          <div>
            <div className="w-[16vw] h-[33vh] bg-white rounded-xl"></div>
            <b className="text-2xl relative top-[2vh]">Д. Гэрэлмаа</b>
            <p className="relative top-[3vh]  text-cyan-400">Бага ангийн сургалтын менежер /Төв</p>
            <p className="relative top-[3vh]  text-cyan-400">сургууль/</p>
            <p className="relative top-[3vh]">Бага ангийн багш</p>
          </div>
          <div className="flex flex-col gap-[0.5vh]">
            <p>Бага ангийн багш</p>
            <p className="text-cyan-400">МУБИС</p>
            <p className="text-gray-400">2000</p>
            <p className="mt-[2vh]">Боловсролын удирдлагын магистр</p>
            <p className="text-cyan-400">БЭЗДС</p>
            <p className="text-gray-400">2013</p>
            <p className="mt-[2vh]">Бага ангийн багш</p>
            <p className="text-cyan-400">Зуун билиг сургууль</p>
            <p className="text-gray-400">2005-2007</p>
            <p className="mt-[2vh]">Бага ангийн багш</p>
            <p className="text-cyan-400">Билгүүн номч сургууль</p>
            <p className="text-gray-400">2007</p>
            <p className="mt-[2vh]">Бага ангийн сургалтын менежер</p>
            <p className="text-cyan-400">Билгүүн номч сургууль</p>
            <p className="text-gray-400">2013-2021</p>
            <p className="mt-[2vh]">Бага ангийн сургалтын менежер</p>
            <p className="text-cyan-400">Билгүүн номч сургууль</p>
            <p className="text-gray-400">2013-2021</p>
          </div>
          <div className="ml-[10vw]">
            <b className="text-3xl">Тэнхимийн багш нар</b>
            <div className="flex flex-col gap-[1.2vh] ml-[2vw] mt-[2vh] text-[1.6vh] font-serif">
              <div className="flex gap-[1vw]">
                <p>T. Grace</p>
                <p>|</p>
                <p className="text-gray-400">Англи хэлний багш</p>
              </div>
              <div className="flex gap-[1vw]">
                <p>Ж. Амаржаргал</p>
                <p>|</p>
                <p className="text-gray-400">Хөгжийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Баасанжав</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[0.5vw]">
              <p>Б. Гоомарал</p>
                <p>|</p>
                <p className="text-gray-400">Кодчилол Steam хөтөлбөрийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Даваадулам</p>
                <p>|</p>
                <p className="text-gray-400">Биеийн тамирын багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ш. Дуламсүрэн</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ч. Дэлгэрсайхан</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Л. Жавзандолгор</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ж. Жавхлан-Од</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Г. Золбаяр</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Н. Золзаяа</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>М. Минжбадрах</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Д. Мөнхцэцэг</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Наранзаяа</p>
                <p>|</p>
                <p className="text-gray-400">EQ сэтгэл судлаач багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Нарантуяа</p>
                <p>|</p>
                <p className="text-gray-400">Англи хэлний багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>С. Нямцэцэг</p>
                <p>|</p>
                <p className="text-gray-400">Дүрслэх урлагийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Д. Оюударь</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн туслах багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Х. Пүрэвсүрэн</p>
                <p>|</p>
                <p className="text-gray-400">Бүжгийн багш</p>
              </div>
            </div>
          </div>
        </div>
        {/* Tamir */}
        <div className="text-3xl flex flex-col items-center mt-[10vh]">
          <b className="block">Ахлах сургуулийн</b>
          <b className="text-emerald-400 text-3xl uppercase">багш нар</b>
        </div>
        <div className="w-[65vw] h-[100vh] overflow-hidden mr-[10vw] mt-[8vh] flex flex-row gap-[1vw]">
          <div>
            <div className="w-[16vw] h-[33vh] bg-white rounded-xl"></div>
            <b className="text-2xl relative top-[2vh]">О. Тамир</b>
            <p className="relative top-[3vh]  text-cyan-400">Бага ангийн сургалтын менежер /Төв</p>
            <p className="relative top-[3vh]  text-cyan-400">сургууль/</p>
            <p className="relative top-[3vh]">Бага ангийн багш</p>
          </div>
          <div className="flex flex-col gap-[0.5vh]">
            <p>Бага ангийн багш</p>
            <p className="text-cyan-400">МУБИС</p>
            <p className="text-gray-400">2000</p>
            <p className="mt-[2vh]">Боловсролын удирдлагын магистр</p>
            <p className="text-cyan-400">БЭЗДС</p>
            <p className="text-gray-400">2013</p>
            <p className="mt-[2vh]">Бага ангийн багш</p>
            <p className="text-cyan-400">Зуун билиг сургууль</p>
            <p className="text-gray-400">2005-2007</p>
            <p className="mt-[2vh]">Бага ангийн багш</p>
            <p className="text-cyan-400">Билгүүн номч сургууль</p>
            <p className="text-gray-400">2007</p>
            <p className="mt-[2vh]">Бага ангийн сургалтын менежер</p>
            <p className="text-cyan-400">Билгүүн номч сургууль</p>
            <p className="text-gray-400">2013-2021</p>
          </div>
          <div className="ml-[10vw]">
            <b className="text-3xl">Тэнхимийн багш нар</b>
            <div className="flex flex-col gap-[1.2vh] ml-[2vw] mt-[2vh] text-[1.6vh] font-serif">
              <div className="flex gap-[1vw]">
                <p>T. Grace</p>
                <p>|</p>
                <p className="text-gray-400">Англи хэлний багш</p>
              </div>
              <div className="flex gap-[1vw]">
                <p>Ж. Амаржаргал</p>
                <p>|</p>
                <p className="text-gray-400">Хөгжийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Баасанжав</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[0.5vw]">
              <p>Б. Гоомарал</p>
                <p>|</p>
                <p className="text-gray-400">Кодчилол Steam хөтөлбөрийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Даваадулам</p>
                <p>|</p>
                <p className="text-gray-400">Биеийн тамирын багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ш. Дуламсүрэн</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ч. Дэлгэрсайхан</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Л. Жавзандолгор</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ж. Жавхлан-Од</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Г. Золбаяр</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Н. Золзаяа</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>М. Минжбадрах</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Д. Мөнхцэцэг</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Наранзаяа</p>
                <p>|</p>
                <p className="text-gray-400">EQ сэтгэл судлаач багш</p>
              </div>
            </div>
          </div>
        </div>
        {/* Sod-Od */}
        <div className="text-3xl flex flex-col items-center mt-[10vh]">
          <b className="block">Мэдээлэл технологийн</b>
          <b className="text-white text-3xl">хэлтэс</b>
        </div>
        <div className="w-[65vw] h-[100vh] overflow-hidden mr-[10vw] mt-[8vh] flex flex-row gap-[1vw]">
          <div>
            <div className="w-[16vw] h-[33vh] bg-white rounded-xl"></div>
            <b className="text-2xl relative top-[2vh]">Б. Сод-Од</b>
            <p className="relative top-[3vh]">Технологи эрхэлсэн захирал</p>
          </div>
          <div className="flex flex-col gap-[0.5vh]">
            <p>Компьютерийн ухааны Магистр</p>
            <p className="text-gray-400">2014</p>
            <p className="text-cyan-400 mt-[2vh]">Компьютерийн ухааны Докторант</p>
            <p className="text-gray-400">2017</p>
            <p className="mt-[2vh]">Программ хангамжийн багш</p>
            <p className="text-cyan-400">ШУТИС-КТМС </p>
            <p className="text-gray-400">2012-2014</p>
            <p className="mt-[2vh]">Компьютерийн ухааны салбарын багш</p>
            <p className="text-cyan-400">ШУТИС-МХТС</p>
            <p className="text-gray-400">2014-2022</p>
            <p className="mt-[2vh]">Үүсгэн байгуулагч</p>
            <p className="text-cyan-400">LIT Academy</p>
          </div>
          <div className="ml-[10vw]">
            <b className="text-3xl">Тэнхимийн багш нар</b>
            <div className="flex flex-col gap-[1.2vh] ml-[2vw] mt-[2vh] text-[1.6vh] font-serif">
              <div className="flex gap-[1vw]">
                <p>T. Grace</p>
                <p>|</p>
                <p className="text-gray-400">Англи хэлний багш</p>
              </div>
              <div className="flex gap-[1vw]">
                <p>Ж. Амаржаргал</p>
                <p>|</p>
                <p className="text-gray-400">Хөгжийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Баасанжав</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[0.5vw]">
              <p>Б. Гоомарал</p>
                <p>|</p>
                <p className="text-gray-400">Кодчилол Steam хөтөлбөрийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Б. Даваадулам</p>
                <p>|</p>
                <p className="text-gray-400">Биеийн тамирын багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ш. Дуламсүрэн</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ч. Дэлгэрсайхан</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Л. Жавзандолгор</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Ж. Жавхлан-Од</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Г. Золбаяр</p>
                <p>|</p>
                <p className="text-gray-400">Бага ангийн багш</p>
              </div>
              <div className="flex gap-[1vw]">
              <p>Н. Золзаяа</p>
                <p>|</p>
                <p className="text-g100vhray-400">Бага ангийн багш</p>
              </div>  
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="w-full h-[67vh] border-t border-gray-800 flex justify-around items-center gap-[10vh]">
            <div className="mb-[12vh]">
              <div className="bg-[url('https://nestmoodle.xyz/pluginfile.php/1/core_admin/logo/0x150/1708914414/NHS.d046134c.png')] w-[10vw] h-[6.5vh] bg-cover bg-center "></div>
              <div className="flex gap-[1vw] mt-[2vh]">
                <div className="w-[2.5vw] h-[5vh] bg-gray-700 rounded-md flex justify-center items-center"></div>
                <div className="w-[2.5vw] h-[5vh] bg-gray-700 rounded-md flex justify-center items-center"></div>
                <div className="w-[2.5vw] h-[5vh] bg-gray-700 rounded-md flex justify-center items-center"></div>
                <div className="w-[2.5vw] h-[5vh] bg-gray-700 rounded-md flex justify-center items-center"></div>
                <div className="w-[2.5vw] h-[5vh] bg-gray-700 rounded-md flex justify-center items-center"></div>
                <div className="w-[2.5vw] h-[5vh] bg-gray-700 rounded-md flex justify-center items-center"></div>
              </div>
              <div className="mt-[2vh]">© 2023 | Nest Education IT School | V.2.0</div>
            </div>
            <div className="flex flex-col gap-[2vh]">
              <div className="flex items-center gap-[1.5vw]">
                <div className="w-[2.5vw] h-[5vh] bg-gray-700 rounded-md flex justify-center items-center"></div>
                <u>contact@nhs.edu.mn</u>
              </div>
              <div className="flex items-center gap-[1.5vw]">
                <div className="w-[2.5vw] h-[5vh] bg-gray-700 rounded-md flex justify-center items-center"></div>
                <div className="flex flex-col ">
                  <u>7799-5555</u>
                  <u>7799-4444</u>
                </div>
              </div>
              <div className="flex items-center gap-[1.5vw]">
                <div className="w-[2.5vw] h-[5vh] bg-gray-700 rounded-md flex justify-center items-center"></div>
                <div className="flex flex-col">
                  <p className="">Даваа - Баасан 10:00 - 16:00,</p>
                  <p className="">Бямба - Ням: Амарна</p>
                </div>
              </div>
              <div className="flex items-center gap-[1.5vw] ">
                <div className="w-[2.5vw] h-[5vh] bg-gray-700 rounded-md flex justify-center items-center"></div>
                <p className="w-[17vw]"> Нэст Эдүкэйшн сургуулийн байр Оюутны гудамж, 8-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот</p>
              </div>

            </div>
        </div>

      </div>
    </div>
  );
}
