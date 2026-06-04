export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container-max section-padding py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
        </p>
        <nav className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
