export default function Footer() {
  return (
    <footer className="bg-white border-t border-t-gray-200 text-center py-8 mt-16">
      <div className="flex justify-center gap-6 mb-4 text-gray-600">
        <a href="/" className="hover:text-indigo-600">Home</a>
        <a href="/about" className="hover:text-indigo-600">About</a>
        <a href="/projects" className="hover:text-indigo-600">Projects</a>
        <a href="/contact" className="hover:text-indigo-600">Contact</a>
      </div>
      <p className="text-gray-500 text-sm">© 2024 Fullstack Developer. All Rights Reserved.</p>
    </footer>
  );
}
