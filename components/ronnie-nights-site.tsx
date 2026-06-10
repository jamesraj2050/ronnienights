"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  CalendarDays,
  ChefHat,
  ChevronLeft,
  ChevronRight,
  GlassWater,
  Mail,
  MapPin,
  Mic2,
  Music2,
  Phone,
  Quote,
  Sparkles,
  Star,
  X
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const navItems = ["Home", "About", "Events", "Reviews", "Gallery", "Contact"];

const heroImages = [
  "/images/hero-ronnie-1.png",
  "/images/hero-ronnie-2.png",
  "/images/hero-ronnie-3.png",
  "/images/hero-ronnie-4.png",
  "/images/hero-ronnie-5.png"
];

const experiences = [
  {
    icon: GlassWater,
    title: "Signature Cocktails",
    text: "Expertly crafted drinks made by passionate bartenders."
  },
  {
    icon: ChefHat,
    title: "Delicious Food",
    text: "Delectable dishes and share plates perfect for a night out."
  },
  {
    icon: Music2,
    title: "Live Entertainment",
    text: "Comedy nights, DJs, and exciting upcoming events."
  }
];

const events = [
  {
    eyebrow: "Every Wednesday",
    title: "Comedy Night",
    icon: Mic2,
    image: "/images/Ronnie3.jpeg",
    text: "Get ready to laugh out loud with PortCity Comedy Club's weekly comedy nights. Grab a drink, take a seat, and let the hilarity unfold."
  },
  {
    eyebrow: "Every Friday & Saturday",
    title: "DJ Music",
    icon: Music2,
    image: "/images/Ronnie4.jpeg",
    text: "From 9 PM till late, enjoy incredible music, energetic vibes, and unforgettable weekends."
  },
  {
    eyebrow: "Coming Soon",
    title: "Open Mic Sundays",
    icon: Sparkles,
    image: "/images/Ronnie5.jpeg",
    text: "SHOW YOUR TALENT & WIN BIG! Winner Takes All. Perform, sell tickets, and take home 100% of ticket sales if your self-rating matches the judges' scores."
  }
];

const testimonials = [
  {
    name: "Princess Maleine Gonzales",
    text: "Worth every dollar. Staff know their craft and the atmosphere was amazing."
  },
  {
    name: "Grace",
    text: "A small intimate bar with a fantastic atmosphere and cool vibe."
  },
  {
    name: "Elsparo",
    text: "Chill late-night bar with friendly bartenders. Highly recommend."
  },
  {
    name: "Grace M",
    text: "Really fun place with a cosy atmosphere."
  },
  {
    name: "Kurtley Watson",
    text: "An incredibly cool environment with great music and the perfect place for a dance."
  },
  {
    name: "Sean Olsen",
    text: "If you've been here, you'll understand. If you haven't, go."
  }
];

const quotes = [
  '"I feel sorry for people who don\'t drink..."',
  '"Cocktails are a social lubricant."',
  '"No great story ever started with someone eating a salad."'
];

const galleryImages = [
  "/images/Ronnie1.jpeg",
  "/images/Ronnie2.jpeg",
  "/images/Ronnie4.jpeg",
  "/images/Ronnie5.jpeg",
  "/images/Ronnie6.png",
  "/images/Ronnie7.png"
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      variants={fadeUp}
      className="mb-5 text-xs font-bold uppercase tracking-[0.42em] text-[#D4AF37]"
    >
      {children}
    </motion.p>
  );
}

function Stars() {
  return (
    <div className="flex gap-1 text-[#D4AF37]" aria-label="Five star review">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M14.2 8.4V6.9c0-.72.48-.89.82-.89h2.08V2.62L14.24 2.6c-3.18 0-3.9 2.38-3.9 3.9v1.9H7.9v3.5h2.44V22h3.86V11.9h2.62l.35-3.5H14.2Z" />
    </svg>
  );
}

export function RonnieNightsSite() {
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 900], [0, 160]);
  const quoteY = useTransform(scrollY, [1800, 3600], [-80, 80]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroImage((current) => (current + 1) % heroImages.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, []);

  const nextTestimonial = () => setActiveTestimonial((current) => (current + 1) % testimonials.length);
  const previousTestimonial = () =>
    setActiveTestimonial((current) => (current - 1 + testimonials.length) % testimonials.length);

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="section-shell flex h-20 items-center justify-between">
          <a href="#home" className="font-display text-2xl font-bold tracking-wide">
            RONNIE <span className="gold-text">NIGHTS</span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-semibold uppercase tracking-[0.24em] text-white/65 transition hover:text-[#D4AF37]"
              >
                {item}
              </a>
            ))}
          </nav>
          <a href="#contact" className={cn(buttonVariants({ variant: "outline", size: "default" }), "hidden sm:inline-flex")}>
            Book a Night
          </a>
        </div>
      </header>

      <section id="home" className="noise relative flex min-h-screen items-center overflow-hidden pt-20">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <AnimatePresence mode="sync">
            <motion.div
              key={heroImages[activeHeroImage]}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1.15 }}
              exit={{ opacity: 0, scale: 1.12 }}
              transition={{ opacity: { duration: 1.4, ease: "easeInOut" }, scale: { duration: 7, ease: "easeOut" } }}
            >
              <Image
                src={heroImages[activeHeroImage]}
                alt="Ronnie Nights cocktail bar atmosphere"
                fill
                priority={activeHeroImage === 0}
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.72)_38%,rgba(0,0,0,0.38)_72%,rgba(0,0,0,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,rgba(212,175,55,0.22),transparent_34%),linear-gradient(180deg,rgba(8,8,8,0)_55%,#080808_100%)]" />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="section-shell relative z-10 grid min-h-[calc(100vh-5rem)] items-center py-20"
        >
          <div className="max-w-4xl">
            <SectionLabel>Fremantle • Western Australia</SectionLabel>
            <motion.h1
              variants={fadeUp}
              className="font-display max-w-4xl text-5xl font-black leading-[0.95] tracking-[0.015em] text-white sm:text-6xl md:text-7xl xl:text-[7.2rem]"
            >
              For the <span className="gold-text">LOVE</span> of{" "}
              <span className="inline-flex items-baseline">
                <span className="relative inline-block">
                  <span className="opacity-0">i</span>
                  <span aria-hidden="true" className="absolute bottom-0 left-0">
                    ı
                  </span>
                  <Image
                    src="/images/heart-dot.png"
                    alt=""
                    width={26}
                    height={26}
                    className="absolute -top-[0.04em] left-1/2 h-[0.24em] w-[0.24em] -translate-x-1/2 object-contain"
                  />
                </span>
                t!
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-8 max-w-2xl text-lg leading-8 text-white/74 md:text-xl">
              Experience an exciting atmosphere while indulging in handcrafted cocktails, delicious food, and
              unforgettable music.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-base leading-8 text-white/58 md:text-lg">
              Located in the heart of Fremantle, Ronnie Nights offers an intimate setting for cocktail lovers, music
              enthusiasts, and those seeking unforgettable nights.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#events" className={cn(buttonVariants({ size: "lg" }))}>
                Explore Events
              </a>
              <a href="#contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
                Contact Us
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-white/55"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
          <ArrowDown className="h-5 w-5 text-[#D4AF37]" />
        </motion.a>
      </section>

      <section id="about" className="relative overflow-hidden bg-[#080808] py-28">
        <div className="absolute left-[-10%] top-24 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="section-shell grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]"
        >
          <motion.div variants={fadeUp} className="relative min-h-[540px] overflow-hidden rounded-[2.5rem]">
            <Image src="/images/Ronnie2.jpeg" alt="Ronnie Nights intimate cocktail bar" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="glass absolute bottom-6 left-6 right-6 rounded-[1.6rem] p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-[#D4AF37]">Boutique Bar</p>
              <p className="mt-2 text-white/72">Warm lighting, close company, and nights worth remembering.</p>
            </div>
          </motion.div>

          <motion.div variants={stagger}>
            <SectionLabel>About Ronnie Nights</SectionLabel>
            <motion.h2 variants={fadeUp} className="font-display text-5xl font-bold leading-tight tracking-[-0.04em] md:text-7xl">
              A Hidden Gem in Fremantle
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-7 text-lg leading-8 text-white/68">
              Ronnie Nights is a unique and intimate small bar where guests come together to enjoy exceptional
              cocktails, delicious food, and unforgettable entertainment.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-5 text-lg leading-8 text-white/68">
              Whether you&apos;re celebrating with friends or simply looking for the perfect late-night vibe, Ronnie Nights
              delivers an experience unlike any other.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-[#121212] py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="section-shell"
        >
          <SectionLabel>The Experience</SectionLabel>
          <motion.h2 variants={fadeUp} className="font-display max-w-3xl text-5xl font-bold tracking-[-0.04em] md:text-7xl">
            Crafted for cocktail lovers, music seekers, and midnight stories.
          </motion.h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {experiences.map((experience) => {
              const Icon = experience.icon;
              return (
                <motion.div key={experience.title} variants={fadeUp} whileHover={{ y: -10, scale: 1.015 }}>
                  <Card className="glass h-full overflow-hidden rounded-[2rem]">
                    <CardContent className="p-8">
                      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="font-display text-3xl font-bold">{experience.title}</h3>
                      <p className="mt-4 leading-7 text-white/62">{experience.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section id="events" className="relative overflow-hidden bg-[#080808] pb-28 pt-14">
        <div className="absolute right-[-8%] top-1/3 h-96 w-96 rounded-full bg-[#D89B2B]/10 blur-3xl" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="section-shell"
        >
          <SectionLabel>Events</SectionLabel>
          <motion.h2 variants={fadeUp} className="font-display max-w-4xl text-5xl font-bold tracking-[-0.045em] md:text-7xl">
            Three reasons every week can become unforgettable.
          </motion.h2>
          <div className="mt-16 space-y-8">
            {events.map((event, index) => {
              const Icon = event.icon;
              const reverse = index % 2 === 1;
              return (
                <motion.article
                  key={event.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className={cn(
                    "glass grid overflow-hidden rounded-[2.4rem] lg:grid-cols-2",
                    reverse && "lg:[&>div:first-child]:order-2"
                  )}
                >
                  <div className="relative min-h-[320px] overflow-hidden">
                    <Image src={event.image} alt={event.title} fill className="object-cover transition duration-700 hover:scale-110" sizes="(min-width: 1024px) 50vw, 100vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="flex min-h-[320px] flex-col justify-center p-8 md:p-12">
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37] text-black">
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="text-sm font-bold uppercase tracking-[0.34em] text-[#D4AF37]">{event.eyebrow}</p>
                    <h3 className="mt-3 font-display text-4xl font-bold tracking-[-0.035em] md:text-6xl">{event.title}</h3>
                    <p className="mt-6 max-w-xl text-lg leading-8 text-white/66">{event.text}</p>
                    {event.title === "Open Mic Sundays" && (
                      <a href="#contact" className="mt-7 text-sm font-bold uppercase tracking-[0.26em] text-[#D4AF37]">
                        Sign up and showcase your talent
                      </a>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section id="reviews" className="bg-[#121212] pb-28 pt-14">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <SectionLabel>Reviews</SectionLabel>
            <motion.h2 variants={fadeUp} className="font-display text-5xl font-bold tracking-[-0.04em] md:text-7xl">
              Loved by late-night locals.
            </motion.h2>
          </div>
          <motion.div variants={fadeUp} className="glass relative overflow-hidden rounded-[2.4rem] p-8 md:p-12">
            <Quote className="absolute right-10 top-8 h-24 w-24 text-[#D4AF37]/10" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45 }}
              >
                <Stars />
                <p className="mt-8 font-display text-3xl leading-tight text-white md:text-5xl">
                  &ldquo;{testimonials[activeTestimonial].text}&rdquo;
                </p>
                <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                  {testimonials[activeTestimonial].name}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-10 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setActiveTestimonial(index)}
                    className={cn(
                      "h-2.5 rounded-full transition-all",
                      index === activeTestimonial ? "w-10 bg-[#D4AF37]" : "w-2.5 bg-white/20 hover:bg-white/40"
                    )}
                    aria-label={`Show review by ${testimonial.name}`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" onClick={previousTestimonial} aria-label="Previous review">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next review">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="noise relative min-h-[72vh] overflow-hidden pb-28 pt-16">
        <motion.div
          style={{ y: quoteY }}
          className="absolute inset-[-10%] bg-[url('/images/Ronnie6.png')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.24),transparent_45%)]" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="section-shell relative z-10 flex min-h-[52vh] flex-col justify-center"
        >
          <SectionLabel>Overheard at the bar</SectionLabel>
          <div className="grid gap-8">
            {quotes.map((quote, index) => (
              <motion.p
                key={quote}
                variants={fadeUp}
                className={cn(
                  "font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl",
                  index === 1 && "pl-0 text-[#D4AF37] md:pl-24",
                  index === 2 && "pl-0 text-white/78 md:pl-48"
                )}
              >
                {quote}
                {index === 0 && <span className="block pt-3 text-lg font-sans uppercase tracking-[0.28em] text-[#D4AF37]">— Frank Sinatra</span>}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="gallery" className="bg-[#080808] pb-28 pt-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="section-shell"
        >
          <SectionLabel>Gallery</SectionLabel>
          <motion.div variants={fadeUp} className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="font-display max-w-3xl text-4xl font-bold tracking-[-0.035em] md:text-5xl">
              Warm lights, beautiful drinks, unforgettable nights.
            </h2>
            <p className="max-w-sm text-white/58">A masonry-style glimpse into the mood of Ronnie Nights. More photography can drop in here as new assets arrive.</p>
          </motion.div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <motion.button
                key={image}
                variants={fadeUp}
                type="button"
                onClick={() => setActiveImage(image)}
                className="group block h-72 w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] md:h-80"
              >
                <Image
                  src={image}
                  alt={`Ronnie Nights gallery image ${index + 1}`}
                  width={700}
                  height={520}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[#121212] py-28">
        <div className="absolute left-1/3 top-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="font-display text-5xl font-bold tracking-[-0.04em] md:text-7xl">Visit Us</h2>
            <div className="mt-10 space-y-8 text-white/70">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-[#D4AF37]" />
                <div>
                  <p className="font-semibold text-white">75–77 Market Street</p>
                  <p>Fremantle WA 6160</p>
                  <p>Australia</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CalendarDays className="mt-1 h-6 w-6 shrink-0 text-[#D4AF37]" />
                <div>
                  <p className="font-semibold text-white">Opening Hours</p>
                  <p>Wednesday & Thursday: 4 PM – 11 PM</p>
                  <p>Friday–Sunday: 4 PM – Late</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-1 h-6 w-6 shrink-0 text-[#D4AF37]" />
                <a href="mailto:ronnienights@outlook.com" className="transition hover:text-[#D4AF37]">
                  ronnienights@outlook.com
                </a>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 h-6 w-6 shrink-0 text-[#D4AF37]" />
                <p>Enquiries, private events, and talent submissions welcome.</p>
              </div>
            </div>
            <div className="map-frame mt-10 overflow-hidden rounded-[2rem] border border-white/10">
              <iframe
                title="Ronnie Nights Google Map"
                src="https://www.google.com/maps?q=75%E2%80%9377%20Market%20Street%2C%20Fremantle%20WA%206160&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.form variants={fadeUp} className="glass rounded-[2.4rem] p-6 md:p-10">
            <h3 className="font-display text-4xl font-bold">Make an enquiry</h3>
            <p className="mt-3 text-white/58">Tell us what kind of night you have in mind.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Input aria-label="Name" placeholder="Name" />
              <Input aria-label="Email" type="email" placeholder="Email" />
              <Input aria-label="Phone" placeholder="Phone" />
              <Input aria-label="Subject" placeholder="Subject" />
              <Textarea aria-label="Message" placeholder="Message" className="md:col-span-2" />
            </div>
            <Button type="submit" size="lg" className="mt-7 w-full md:w-auto">
              Send Enquiry
            </Button>
          </motion.form>
        </motion.div>
      </section>

      <footer className="bg-[#080808] py-16">
        <div className="section-shell">
          <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <h2 className="font-display text-5xl font-black tracking-[-0.04em]">RONNIE NIGHTS</h2>
              <p className="mt-4 text-2xl text-[#D4AF37]">For the LOVE ❤️ of It!</p>
            </div>
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Explore</p>
              <div className="grid grid-cols-2 gap-3 text-white/62">
                {navItems.map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[#D4AF37]">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Find Us</p>
              <p className="text-white/62">75–77 Market Street</p>
              <p className="text-white/62">Fremantle WA 6160</p>
              <a href="mailto:ronnienights@outlook.com" className="mt-4 block text-white/62 transition hover:text-[#D4AF37]">
                ronnienights@outlook.com
              </a>
              <div className="mt-6 flex gap-3">
                <a href="#" aria-label="Instagram" className={cn(buttonVariants({ variant: "outline", size: "icon" }))}>
                  <InstagramIcon />
                </a>
                <a href="#" aria-label="Facebook" className={cn(buttonVariants({ variant: "outline", size: "icon" }))}>
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>
          <p className="pt-8 text-sm text-white/38">© {new Date().getFullYear()} Ronnie Nights. Boutique cocktail bar and live entertainment in Fremantle.</p>
        </div>
      </footer>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white"
              aria-label="Close gallery image"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="relative h-[86vh] w-full max-w-5xl overflow-hidden rounded-[2rem]"
              onClick={(event) => event.stopPropagation()}
            >
              <Image src={activeImage} alt="Expanded Ronnie Nights gallery image" fill className="object-contain" sizes="100vw" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
