import { motion } from "framer-motion";
import {
  Building2,
  Mail,
  MapPin,
  MessageSquare,

  Send,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    text: "sales@toughhaulers.cn.com",
  },
  {
    icon: MapPin,
    title: "Operations",
    text: "China Supply Chain · Engineering Support in Egypt",
  },
  {
    icon: Building2,
    title: "Company",
    text: "TOUGH HAULERS TRADE LIMITED",
  },
];

const Contact = () => {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative overflow-hidden bg-white py-12 ">
        <div className="absolute left-0 top-0 h-full w-[5px] bg-red-600" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(220,38,38,0.07),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.018)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-14 max-w-4xl"
          >
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-red-600">
              Contact Us
            </p>

            <h1 className="text-[44px] font-black leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[76px]">
              Start your
              <span className="block ">
                energy project with us.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-[17px] leading-8 sm:text-lg">
              Contact TOUGH HAULERS TRADE LIMITED for solar power systems,
              battery energy storage solutions, full EPC solar and energy
              engineering, factory solutions, and global project support.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-[34px] border border-black/10 bg-white p-6 shadow-[0_25px_70px_rgba(0,0,0,0.08)] sm:p-8"
            >
              <p className="mb-7 text-xs font-black uppercase tracking-[0.24em] text-red-600">
                Company Contact
              </p>

              <div className="space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-3xl border border-black/10 bg-white p-5 shadow-[0_14px_35px_rgba(0,0,0,0.045)]"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 text-white">
                        <Icon size={20} />
                      </div>

                      <div>
                        <h3 className="text-[16px] font-bold text-neutral-950">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-[15px] leading-7 text-neutral-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-3xl bg-neutral-950 p-6 text-white">
                <MessageSquare className="mb-4 text-red-500" size={24} />
                <h3 className="text-xl font-black">Project Enquiry</h3>
                <p className="mt-3 text-[15px] leading-7 text-white/65">
                  Tell us about your project scope, required solution, country,
                  and technical requirements. Our team will review your request.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-[34px] border border-black/10 bg-white p-6 shadow-[0_25px_70px_rgba(0,0,0,0.08)] sm:p-8"
            >
              <p className="mb-7 text-xs font-black uppercase tracking-[0.24em] text-red-600">
                Send Message
              </p>

              <form className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-neutral-800">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="h-14 w-full rounded-2xl border border-black/10 bg-white px-5 text-[15px] outline-none transition focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-neutral-800">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      className="h-14 w-full rounded-2xl border border-black/10 bg-white px-5 text-[15px] outline-none transition focus:border-red-600"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-neutral-800">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company name"
                      className="h-14 w-full rounded-2xl border border-black/10 bg-white px-5 text-[15px] outline-none transition focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-neutral-800">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      className="h-14 w-full rounded-2xl border border-black/10 bg-white px-5 text-[15px] outline-none transition focus:border-red-600"
                    >
                      <option>Solar Power Systems</option>
                      <option>Battery Energy Storage Systems</option>
                      <option>Full EPC Solar & Energy Engineering</option>
                      <option>Factory Solutions</option>
                      <option>Gigawatt Projects</option>
                      <option>R&D / Technology Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-neutral-800">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell us about your project requirements..."
                    className="w-full resize-none rounded-2xl border border-black/10 bg-white px-5 py-4 text-[15px] outline-none transition focus:border-red-600"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-2 inline-flex w-fit items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-black text-white shadow-[0_18px_45px_rgba(220,38,38,0.25)] transition hover:-translate-y-1 hover:bg-neutral-950"
                >
                  Send Enquiry
                  <Send size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;