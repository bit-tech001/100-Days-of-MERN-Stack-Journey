const Home = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full">
            🚀 Build Faster with Confidence
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Create modern web <br />
            experiences with ease
          </h1>

          <p className="text-gray-600 text-lg max-w-lg">
            A clean and scalable UI foundation to build beautiful products.
            Focus on logic, performance, and user experience.
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Get Started
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="w-full h-60 md:h-96 bg-gradient-to-br  rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/c8/d4/7e/c8d47e71b899f48ce2efc2ff8904298c.jpg"
              alt="Hero illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
