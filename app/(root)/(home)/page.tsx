import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-8 bg-gray-100">
      {/* Hero Section */}
      <section className="w-full bg-blue-600 text-white py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Tech Brew Coffee</h1>
          <p className="text-lg mb-6">Brewing the future, one cup at a time</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Tech Brew Coffee is a startup dedicated to combining the best of technology and coffee. We source the finest beans and use innovative brewing techniques to bring you a perfect cup every time.
          </p>
          <Image src="/path-to-your-about-image.jpg" alt="Tech Brew Coffee" width={600} height={400} className="mx-auto rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-6">Have any questions? We'd love to hear from you!</p>
         <Link href='/contact' className="bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-gray-200">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
