import CoffeeLists from "@/components/CoffeLists"
export default function Store() { 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1 className=" text-5xl align-top"> Store Page Online Coffee Shop</h1>
     <CoffeeLists/>
    </main>
  );
}