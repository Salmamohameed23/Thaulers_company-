import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Factory,
    Cpu,
    Boxes,
    GraduationCap,
    DraftingCompass,
    Wrench,
    ArrowUpRight,
} from "lucide-react";

const factoryPoints = [
    {
        icon: Factory,
        title: "Production Lines & Machinery",
        text: "Full supply of production lines and machinery for battery production facilities.",
    },
    {
        icon: Boxes,
        title: "Components & Materials",
        text: "All required components and materials for complete factory operation.",
    },
    {
        icon: Cpu,
        title: "Production Know-How",
        text: "Operational strategies and manufacturing process support.",
    },
    {
        icon: DraftingCompass,
        title: "Engineering Designs",
        text: "Engineering designs and manufacturing processes for factory setup.",
    },
    {
        icon: GraduationCap,
        title: "Worker Training",
        text: "Worker training and technical support for real production readiness.",
    },
    {
        icon: Wrench,
        title: "Mold Sets Supply",
        text: "Complete mold sets for over 50 different battery models.",
    },
];

const FactoryPreview = () => {
    return (
        <section className="relative overflow-hidden bg-[#08090B] py-24 text-white lg:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(239,35,60,0.14),transparent_32%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:76px_76px] opacity-40" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
                    <motion.div
                        initial={{ opacity: 0, x: -45 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.75 }}
                    >
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-red-400">
                            Factory Solutions
                        </p>

                        <h2 className="text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                            Complete Technology Transfer
                            <span className="block text-red-500">
                                & Turnkey Factory Solutions.
                            </span>
                        </h2>

                        <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
                            We provide end-to-end turnkey factory solutions, enabling our
                            partners to establish and operate fully functional production
                            facilities from scratch.
                        </p>

                        <div className="mt-8 rounded-3xl border border-red-500/20 bg-red-500/10 p-6">
                            <p className="text-sm font-semibold leading-7 text-slate-200">
                                We have successfully delivered full technology transfer from
                                Chinese manufacturers to Egyptian factories, including complete
                                battery production facilities.
                            </p>
                        </div>

                        <Link
                            to="/factory"
                            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-500"
                        >
                            Explore Factory Solutions
                            <ArrowUpRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>
                    </motion.div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {factoryPoints.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 36 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ duration: 0.55, delay: index * 0.08 }}
                                    whileHover={{ y: -8 }}
                                    className="group rounded-[28px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur transition-all duration-300 hover:border-red-500/40 hover:bg-white/[0.08]"
                                >
                                    <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-red-500/10 text-red-400 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                                        <Icon size={24} />
                                    </div>

                                    <h3 className="text-lg font-black leading-tight text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-400">
                                        {item.text}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FactoryPreview;
