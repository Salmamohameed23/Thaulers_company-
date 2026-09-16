import { motion } from "framer-motion";
import PropTypes from "prop-types";

const variants = {
    fadeUp: { hidden: { opacity: 0, y: 42 }, show: { opacity: 1, y: 0 } },
    fadeLeft: { hidden: { opacity: 0, x: -42 }, show: { opacity: 1, x: 0 } },
    fadeRight: { hidden: { opacity: 0, x: 42 }, show: { opacity: 1, x: 0 } },
    zoomIn: {
        hidden: { opacity: 0, scale: 0.94 },
        show: { opacity: 1, scale: 1 },
    },
};

const Reveal = ({ children, type = "fadeUp", delay = 0, className = "" }) => {
    return (
        <motion.div
            variants={variants[type]}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.7, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
Reveal.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    delay: PropTypes.number,
    className: PropTypes.string,
};

export default Reveal;
