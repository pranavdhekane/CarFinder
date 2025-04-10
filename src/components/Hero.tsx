import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="py-8 md:py-16 px-8 grid place-items-center text-center">
        <h3 className="text-sm md:text-md text-gray-600">Smart Search. Confident Choice.</h3>
        <h1 className="text-5xl md:text-6xl font-semibold mt-2 mb-5">Find Your Perfect Ride</h1>
        <h2 className="text-xl md:text-2xl font-semibold md:w-3/5 text-gray-700">
          Whether you're looking for a daily commuter or your dream car, we help you discover the best options tailored to your needs.
        </h2>
        <p className="mt-4 mb-6 text-yellow-900 bg-yellow-200 font-medium px-4 py-2 rounded-xl">
          Start exploring now.
        </p>
        <div className="space-x-4">
          <Button onClick={() => navigate("/cars")}>Search Cars</Button>
          <Button variant="outline" className="border-neutral-900" onClick={() => navigate("/about")}>
            Learn More
          </Button>
        </div>
      </div>

      <div className="px-12 py-10 bg-blue-100">
        <h1 className="text-3xl md:text-5xl font-semibold md:mb-10 mb-5">What we Provide?</h1>
        <div className="text-sm md:text-lg text-gray-700 flex flex-col md:flex-row justify-center items-start md:items-center md:gap-10 bg-white p-5 rounded-2xl text-left">
          <ul className="list-disc list-inside space-y-2">
            <li>Search across top brands — from reliable to luxury.</li>
            <li>Smart filters for budget, fuel type, body style & more.</li>
            <li>Every car from budget-friendly to supercars.</li>
            <li>Detailed car profiles with specs, images & reviews.</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time availability based on your location.</li>
            <li>Save favorites & compare cars side-by-side.</li>
            <li>Mobile-friendly design for seamless browsing.</li>
            <li>Clean and intuitive UI focused on your needs.</li>
          </ul>
        </div>
      </div>

      <div className="py-16 px-8 bg-gradient-to-r from-purple-100 via-blue-100 to-teal-100 text-center mt-8">
        <h2 className="text-4xl font-bold mb-4">Enjoy the Experience</h2>
        <p className="text-md text-gray-700 max-w-2xl mx-auto mb-6">
          Take your time, explore a variety of cars, and find the one that feels just right for you. With our smooth interface and detailed listings, your perfect ride is just a few clicks away.
        </p>
        <a href="/cars" className="bg-black text-white px-6 py-3 rounded hover:bg-zinc-900 transition">
          Get Started
        </a>
      </div>
    </div>
  )
}

export default Hero;
