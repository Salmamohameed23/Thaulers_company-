import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BatteryCharging, SunMedium, Cpu } from "lucide-react";

const partners = [
    {
        name: "EVE Energy",
        country: "China",
        icon: BatteryCharging,
        text: "Providing advanced battery technologies for large-scale energy storage applications.",
    },
    {
        name: "BYD",
        country: "China",
        icon: SunMedium,
        text: "A global leader in renewable energy and battery systems.",
    },
    {
        name: "RF Box Company",
        country: "Egypt",
        icon: Cpu,
        text: "Delivering engineering expertise and technical solutions.",
    },
];

const PartnersPreview = () => {
    return (
        <section className="relative overflow-hidden bg-[#F5F5F5] py-24 text-[#050505] lg:py-32">
            <div className="absolute right-[-80px] top-[-80px] h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left"
                >
                    <div>
                        <p className="mb-4 text-xs font-black uppercase tracking-[0.34em] text-red-600">
                            Our Partners
                        </p>

                        <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                            Global Technology
                            <span className="block text-red-600">& Engineering Network.</span>
                        </h2>
                    </div>

                    <Link
                        to="/partners"
                        className="group inline-flex items-center gap-3 rounded-full border border-black/15 bg-black/5 px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 hover:text-white"
                    >
                        View All Partners
                    </Link>
                </motion.div>

                {/* CARDS */}
                <div className="mt-16 grid gap-6 lg:grid-cols-3">
                    {partners.map((partner, index) => {
                        const Icon = partner.icon;

                        return (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, y: 38 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden rounded-[30px] border border-black/10 bg-white p-8 shadow-xl shadow-black/5 transition-all duration-300 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/10"
                            >
                                <div className="absolute right-6 top-6 text-7xl font-black text-black/[0.04]">
                                    0{index + 1}
                                </div>

                                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                                    <Icon size={30} />
                                </div>

                                <h3 className="text-3xl font-black tracking-tight">
                                    {partner.name}
                                </h3>

                                <p className="mt-2 text-sm font-bold uppercase tracking-[0.22em] text-red-600">
                                    {partner.country}
                                </p>

                                <p className="mt-6 text-base leading-8 text-neutral-600">
                                    {partner.text}
                                </p>

                            </motion.div>

                        );

                    })}
                </div>
            </div>
        </section>
    );
};

export default PartnersPreview;
