import Image from "next/image";
import Button from "@/components/Button"

import { usePathname } from "next/navigation";
import Pathname from "@/components/Pathname";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1> Home Page Online Coffee Shop</h1>
     <Button/>
     <button className="btn" > Hello !</button>
     <button className="btn hover:bg-blue-800 new" > Hello  Again!</button>

     <Pathname/> 
     <section className="flex flex-wrap justify-center items-center">

      <div className="w-1/2">
        <Image
          src="/logo.png"
          alt="coffee"
          width={300}
          height={300}
          layout="responsive"
        />
      </div>
      <div className="w-1/2">
        <Image
          src="/logo.png"
          alt="coffee"
          width={300}
          height={300}
          layout="responsive"
        />
      </div>
      <div className="w-1/2">
        <Image
          src="/logo.png"
          alt="coffee"
          width={300}
          height={300}
          layout="responsive"
        />
      </div>
      <div className="w-1/2">
        <Image
          src="/logo.png"
          alt="coffee"
          width={300}
          height={300}
          layout="responsive"
        />
      </div>
     </section>

    </main>
  );
}
