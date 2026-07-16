import Card from "./Card";
import Button from "./Button";
import Eyebrow from "./Eyebrow";
import Input from "./Input";
import Textarea from "./Textarea";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get back to you within 24 hours.");
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, color-mix(in srgb, var(--primary) 10%, transparent), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <Eyebrow>GET IN TOUCH</Eyebrow>
          <h2 className="mt-3 font-['Bebas_Neue'] text-4xl tracking-wider text-ink md:text-5xl">
            NEED <span className="text-primary">HELP</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Got questions, feature ideas, or found a bug? We&apos;d love your
            feedback to make NovaTask better.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          {/* Contact Form */}
          <Card variant="surface" className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
              <Input label="Full Name" type="text" name="name" required />
              <Input label="Email" type="email" name="email" required />

              <Input
                label="Subject"
                placeholder="Feature request, bug report, feedback..."
                className="md:col-span-2"
              />

              <div className="md:col-span-2">
                <Textarea
                  label="Message"
                  placeholder="Tell us what's on your mind..."
                  rows={4}
                />
              </div>

              <div className="md:col-span-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-5">
            {[
              ["EMAIL", "buildwithsharpman@gmail.com"],
              ["WHATSAPP", "+234 907 028 1022"],
              ["HOURS", "Mon - Fri, 9:00 - 18:00 WAT"],
              ["LOCATION", "Lagos, Nigeria"],
            ].map(([title, value]) => (
              <Card key={title} variant="surface" className="p-5">
                <div className="text-[10px] font-mono tracking-[0.35em] text-primary">
                  {title}
                </div>
                <div className="mt-1 text-lg text-ink">{value}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
