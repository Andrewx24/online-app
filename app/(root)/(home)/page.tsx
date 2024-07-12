import Image from "next/image";
import Button from "@/components/Button"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1> Home Page Online Coffee Shop</h1>
     <Button/>
     <button className="btn:hoover" > Hello !</button>
    </main>
  );
}
