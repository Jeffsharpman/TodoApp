import { motion } from "framer-motion";
import { Code2, Globe, ExternalLink } from "lucide-react";
import { fadeInUp, staggerContainer } from "../lib/animations";
import Card from "../UI/Card";
import Badge from "../UI/Badge";
import Button from "../UI/Button";

const SERVICES = [
  "Custom Website Development",
  "Web Application Development",
  "React & Laravel Development",
  "E-commerce Solutions",
  "Admin Dashboards",
  "SEO Optimization",
];

const AboutDeveloper = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      aria-labelledby="about-developer-heading"
    >
      <Card variant="default" padding="p-7">
        {/* Section label */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-2 mb-5"
        >
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          <span className="font-mono text-[9px] text-muted tracking-[3px]">
            ABOUT THE DEVELOPER
          </span>
        </motion.div>

        <div className="w-full h-px bg-line mb-5" />

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Developer info */}
          <motion.div variants={fadeInUp} className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <Code2 size={20} className="text-black" />
              </div>
              <div>
                <h2
                  id="about-developer-heading"
                  className="font-['Bebas_Neue'] text-[22px] tracking-[1px] text-ink leading-none"
                >
                  Oyenuga Joshua
                </h2>
                <p className="font-mono text-[9px] text-muted tracking-[2px] mt-0.5">
                  FULL STACK WEB DEVELOPER
                </p>
              </div>
            </div>

            <p className="text-inksoft text-sm leading-relaxed mb-4">
              NovaTask was built by{" "}
              <span className="text-ink font-medium">Oyenuga Joshua</span>, a
              full stack web developer and the founder of{" "}
              <span className="text-primary font-medium">Sharpman</span> — a web
              development and digital solutions brand based in Lagos, Nigeria.
              Sharpman specializes in building custom websites, web
              applications, e-commerce solutions, and admin dashboards for
              businesses and individuals.
            </p>

            <p className="text-inksoft text-sm leading-relaxed mb-5">
              This project is one of several applications developed by Oyenuga
              Joshua under the Sharpman brand. Each project is crafted with
              attention to performance, accessibility, and modern design
              standards.
            </p>

            {/* Services */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap gap-2 mb-5"
            >
              {SERVICES.map((service) => (
                <motion.span key={service} variants={fadeInUp}>
                  <Badge
                    variant="default"
                    className="!text-[10px] !tracking-wide"
                  >
                    {service}
                  </Badge>
                </motion.span>
              ))}
            </motion.div>

            {/* CTA links */}
            <div className="flex flex-wrap gap-3">
              <Button
                variant="primary"
                size="sm"
                href="https://sharpman.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-[10px] !font-mono !px-5 !py-2.5 !tracking-widest !rounded-lg"
              >
                <Globe size={14} />
                EXPLORE THE SHARPMAN PORTFOLIO
              </Button>
              <Button
                variant="outline"
                size="sm"
                href="https://sharpman.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-[10px] !font-mono !px-5 !py-2.5 !tracking-widest !rounded-lg"
              >
                <ExternalLink size={14} />
                LEARN MORE ABOUT OYENUGA JOSHUA
              </Button>
            </div>
          </motion.div>

          {/* Brand card */}
          <motion.div
            variants={fadeInUp}
            className="lg:w-[280px] flex-shrink-0"
          >
            <Card variant="surface" padding="p-5" rounded="xl">
              <div className="mb-4">
                <span className="font-['Bebas_Neue'] text-[28px] tracking-[2px] text-ink leading-none">
                  SHARP<span className="text-primary">MAN</span>
                </span>
                <p className="font-mono text-[9px] text-muted tracking-[2px] mt-1">
                  DESIGN. CODE. <span className="text-primary">ELEVATE</span>.
                </p>
              </div>

              <div className="w-full h-px bg-line mb-4" />

              <p className="font-mono text-[10px] text-muted leading-relaxed mb-4">
                Web development and digital solutions brand delivering custom
                websites, web apps, and digital experiences.
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  <span className="font-mono text-[9px] text-muted tracking-wide">
                    Lagos, Nigeria
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  <a
                    href="mailto:buildwithsharpman@gmail.com"
                    className="font-mono text-[9px] text-muted tracking-wide hover:text-primary transition-colors"
                  >
                    buildwithsharpman@gmail.com
                  </a>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                href="https://sharpman.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full !text-center !text-[9px] !font-mono !px-4 !py-2 !tracking-widest !rounded-lg"
              >
                VIEW MORE PROJECTS BY SHARPMAN
              </Button>
            </Card>
          </motion.div>
        </div>

        {/* JSON-LD for About section */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "About the Developer — NovaTask",
              description:
                "NovaTask was built by Oyenuga Joshua, founder of Sharpman — a web development and digital solutions brand.",
              author: {
                "@type": "Person",
                name: "Oyenuga Joshua",
                url: "https://sharpman.netlify.app",
              },
              isPartOf: {
                "@type": "WebSite",
                name: "NovaTask",
                url: "https://novatodos.netlify.app",
              },
            }),
          }}
        />
      </Card>
    </motion.section>
  );
};

export default AboutDeveloper;
