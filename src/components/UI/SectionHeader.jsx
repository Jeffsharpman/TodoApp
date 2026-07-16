import { motion } from "framer-motion";

function SectionHeader({ eyebrow, title, sub }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-4 inline-flex items-center gap-3"
      >
        <span className="h-px w-8 bg-primary" />
        <span className="text-[10px] font-mono tracking-[0.4em] text-primary">
          {eyebrow}
        </span>
        <span className="h-px w-8 bg-primary" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="font-['Bebas_Neue'] text-4xl leading-tight text-ink md:text-5xl lg:text-6xl"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {sub && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-5 text-ink/60 md:text-lg"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}

export default SectionHeader;
