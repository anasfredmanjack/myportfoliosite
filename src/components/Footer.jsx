import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black/40 backdrop-blur-lg">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter">
              PORTFOLIO<span className="text-neon-blue">.</span>
            </h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Crafting immersive digital experiences with modern technologies and creative design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="/projects" className="hover:text-neon-blue transition-colors w-fit">Projects</a>
              <a href="/about" className="hover:text-neon-blue transition-colors w-fit">About</a>
              <a href="/contact" className="hover:text-neon-blue transition-colors w-fit">Contact</a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-white font-bold">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-blue hover:text-white transition-all duration-300 group">
                <Github size={20} className="text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-blue hover:text-white transition-all duration-300 group">
                <Linkedin size={20} className="text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-blue hover:text-white transition-all duration-300 group">
                <Twitter size={20} className="text-gray-400 group-hover:text-white" />
              </a>
              <a href="mailto:hello@example.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-blue hover:text-white transition-all duration-300 group">
                <Mail size={20} className="text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 Anas Fred. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
}
