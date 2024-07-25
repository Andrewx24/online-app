import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-6">Learn more about our team and mission.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Our mission is to provide the best services to our customers with dedication and passion. We aim to bring innovation and creativity to everything we do.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>
          <div className="flex flex-wrap justify-center">
            {/* Team Member */}
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <Image src="/team-member-1.jpg" alt="Team Member 1" width={150} height={150} className="rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">John Doe</h3>
                <p className="text-gray-700">CEO</p>
              </div>
            </div>
            {/* Team Member */}
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <Image src="/team-member-2.jpg" alt="Team Member 2" width={150} height={150} className="rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
                <p className="text-gray-700">CTO</p>
              </div>
            </div>
            {/* Team Member */}
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <Image src="/team-member-3.jpg" alt="Team Member 3" width={150} height={150} className="rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Alice Brown</h3>
                <p className="text-gray-700">CFO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
