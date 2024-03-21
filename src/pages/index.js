import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push('/intro');
  };
  return (
    
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleButtonClick}>Go to Other Page</button>
    </div>
  );
}
