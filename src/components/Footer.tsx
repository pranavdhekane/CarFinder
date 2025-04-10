
export const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold">CarFinder</h4>
          <p className="text-gray-400">Find the right car, fast.</p>
        </div>

        <div className="flex gap-6">
          <a href="/about" className="hover:underline text-gray-300">About</a>
          <a href="/contact" className="hover:underline text-gray-300">Contact</a>
          <a href="/wishlist" className="hover:underline text-gray-300">Wishlist</a>
        </div>

        <div className="text-gray-500 text-xs text-center md:text-right">
          © {new Date().getFullYear()} CarFinder. All rights reserved.
        </div>
      </div>
    </footer>

  )
}
