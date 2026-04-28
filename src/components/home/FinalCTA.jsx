import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const FinalCTA = () => {
    return (
        <section className="relative overflow-hidden bg-[#050505] py-24 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(239,35,60,0.22),transparent_38%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:70px_70px] opacity-30" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 38 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.75 }}
                    className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.055] p-8 backdrop-blur-xl sm:p-12 lg:p-16"
                >
                    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                        {/* LEFT */}
                        <div>
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-red-400">
                                Tough Haulers Trade Limited
                            </p>

                            <h2 className="text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                                Powering the Future
                                <span className="block text-red-500">
                                    with Advanced Energy Solutions.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                                We provide a complete, end-to-end approach built on engineering
                                excellence, innovative technology, and global experience,
                                ensuring scalable, efficient, and future-ready solar and energy
                                systems from 100 kW to gigawatt-scale projects.
                            </p>

                            <div className="flex flex-wrap gap-4 mt-9">
                                <Link
                                    to="/contact"
                                    className="group inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-red-500 hover:shadow-red-500/40"
                                >
                                    Contact Us
                                    <ArrowUpRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </Link>

                                <Link
                                    to="/solutions"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-red-400 transition hover:text-white"
                                >
                                    Explore Solutions →
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="grid gap-4">
                            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                                <Phone className="mb-3 text-red-400" size={22} />
                                <p className="text-sm text-slate-400">Phone</p>
                                <p className="mt-1 font-bold text-white">+86 15158902408</p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                                <Mail className="mb-3 text-red-400" size={22} />
                                <p className="text-sm text-slate-400">Mail</p>
                                <p className="mt-1 font-bold text-white">
                                    Sales@toughhaulers.cn.com
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                                <MapPin className="mb-3 text-red-400" size={22} />
                                <p className="text-sm text-slate-400">Address</p>
                                <p className="mt-1 font-bold text-white">
                                    Yiwu, Zhejiang, China
                                    <br />
                                    Shenzhen, Guangdong, China
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
