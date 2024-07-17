// import "../index.css";

const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="hero-content flex-1 w-screen">
              <p className="text-lg md:text-xl lg:text-2xl">
                We are the World Best IT Company
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Welcome to our Website!!
              </h1>
              <p className="mt-4 text-2xl">
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Thapa Technical,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <div className="btn btn-group mt-6">
                <a href="/contact">
                  <button className="bg-btn-color text-white py-2 px-4 rounded hover:opacity-75">
                    Connect Now
                  </button>
                </a>
                <a href="/services" className="ml-4">
                  <button className="secondary-btn text-btn-color py-2 px-4 rounded border border-btn-color hover:opacity-55">
                    Learn More
                  </button>
                </a>
              </div>
            </div>

            {/* Hero images */}
            <div className="hero-image flex-1  ">
              <img
                src="/images/home.png"
                alt="coding together"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg hidden md:flex justify-center"
              />
            </div>
          </div>
        </section>

        {/* Analytics section */}
        <section className="section-analytics mt-16">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-bg-color p-8 rounded-lg">
            <div className="text-center border-b sm:border-b-0 sm:border-r border-dark-color pb-8 sm:pb-0 sm:pr-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                50+
              </h2>
              <p className="mt-2 text-lg md:text-xl lg:text-2xl">
                Registered Companies
              </p>
            </div>
            <div className="text-center border-b sm:border-b-0 sm:border-r border-dark-color pb-8 sm:pb-0 sm:pr-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                10,000+
              </h2>
              <p className="mt-2 text-lg md:text-xl lg:text-2xl">
                Happy Clients
              </p>
            </div>
            <div className="text-center border-b sm:border-b-0 sm:border-r border-dark-color pb-8 sm:pb-0 sm:pr-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                500+
              </h2>
              <p className="mt-2 text-lg md:text-xl lg:text-2xl">
                Well Known Developers
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                24/7
              </h2>
              <p className="mt-2 text-lg md:text-xl lg:text-2xl">Service</p>
            </div>
          </div>
        </section>

        {/* Third section */}
        <section className="section-hero mt-16">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hero images */}
            <div className="hero-image flex justify-center">
              <img
                src="/images/design.png"
                alt="coding together"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg"
              />
            </div>

            <div className="hero-content">
              <p className="text-lg md:text-xl lg:text-2xl">
                We are here to help you
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Get Started Today
              </h1>
              <p className="mt-4 text-base md:text-lg lg:text-xl">
                Ready to take the first step towards a more efficient and secure
                IT infrastructure? Contact us today for a free consultation and
                let's discuss how Thapa Technical can help your business thrive
                in the digital age.
              </p>
              <div className="block sm:inline-block btn btn-group mt-6">
                <a href="/contact">
                  <button className="bg-btn-color text-white py-2 px-4 rounded hover:opacity-75">
                    Connect Now
                  </button>
                </a>
                <a href="/services" className="ml-4">
                  <button className="  secondary-btn text-btn-color mt-3 py-2 px-4 rounded border border-btn-color hover:opacity-55">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
