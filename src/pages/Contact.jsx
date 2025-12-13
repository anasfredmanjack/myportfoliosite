import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const toastId = toast.loading('Transmitting...');

        try {
            await axios.post('/api/contact', formData);
            toast.success('Transmission received!', { id: toastId });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error(error);
            toast.error('Transmission failed.', { id: toastId });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-32">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Initialize <span className="text-neon-blue">Contact</span>
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Ready to collaborate? Send a signal.
                </p>
            </motion.div>

            <motion.form
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card w-full max-w-2xl p-8 md:p-12 rounded-3xl space-y-6"
                onSubmit={handleSubmit}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                        <User className="absolute left-4 top-4 text-gray-500" size={20} />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                            required
                        />
                    </div>
                    <div className="relative">
                        <Mail className="absolute left-4 top-4 text-gray-500" size={20} />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                            required
                        />
                    </div>
                </div>

                <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-gray-500" size={20} />
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                        required
                    />
                </div>

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Message System..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                    required
                ></textarea>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {loading ? 'Transmitting...' : (
                        <>
                            Send Message <Send size={20} />
                        </>
                    )}
                </button>
            </motion.form>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-12"
            >
                <a
                    href="/anasfredmainresume.pdf"
                    download="Anas_Fred_Resume.pdf"
                    className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors border-b border-transparent hover:border-neon-blue pb-1"
                >
                    <span className="font-mono">DOWNLOAD RESUME</span>
                    <Send className="rotate-180" size={16} />
                </a>
            </motion.div>
        </section>
    );
}