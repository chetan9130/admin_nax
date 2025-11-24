import Hero from "@/components/ui/animated-shader-hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Bot,
  TrendingUp,
  Search,
  Globe,
  Smartphone,
  Clock,
  Zap,
  TrendingUpIcon,
  ShoppingCart,
  HeartPulse,
  Layers,
  GraduationCap,
  Home,
  Store,
} from "lucide-react";
import FadeIn from "@/components/ui/fade-in";

const Index = () => {
  const handleGetDemo = () => {
   window.location.href = "/contact";
  };

  const handleTalkToExpert = () => {
    const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    window.location.href = "tel:+917588490885";
  } else {
    alert("Call us at: +91 7588490885");
  }
  };

  const coreSolutions = [
    {
      title: "AI Automations",
      description: "Transform manual operations into self-learning, smart systems.",
      icon: Bot,
    },
    {
      title: "Digital Marketing",
      description: "AI-driven growth engines that boost engagement and ROI.",
      icon: TrendingUp,
    },
    {
      title: "SEO (GEO)",
      description: "Get found not only on Google — but also inside AI tools like ChatGPT, Gemini & Perplexity.",
      icon: Search,
    },
    {
      title: "Website Development",
      description: "Modern, AI-powered websites that convert and adapt in real-time.",
      icon: Globe,
    },
    {
      title: "Mobile App Development",
      description: "Intelligent mobile experiences with chatbots, analytics & personalization.",
      icon: Smartphone,
    },
  ];

  const whyChooseUs = [
    "AI-First Mindset — we think automation first.",
    "Modular Solutions — scale as you grow.",
    "Multilingual Voice & Chat (English, Hindi, Marathi).",
    "Future-Ready for 2025+ AI Economy.",
    "Affordable for Startups, Powerful for Enterprises.",
  ];

  const stats = [
    { icon: Clock, value: "90%", label: "reduction in manual data entry" },
    { icon: Zap, value: "3×", label: "faster customer response time" },
    { icon: TrendingUpIcon, value: "25%", label: "higher lead conversion rates" },
  ];

  const industries = [
    { name: "E-Commerce", icon: ShoppingCart },
    { name: "Healthcare", icon: HeartPulse },
    { name: "SaaS", icon: Layers },
    { name: "Education", icon: GraduationCap },
    { name: "Real Estate", icon: Home },
    { name: "D2C Brands", icon: Store },
  ];

  const testimonials = [
    {
      quote: "Naxshatraa AI helped us automate our marketing reports — saving us 40+ hours a month!",
      author: "CEO, EcomGrowth",
    },
    {
      quote: "Their voice AI agent transformed our customer support!",
      author: "Founder, HealthSync",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <Hero
        trustBadge={{
          text: "AI-First Technology Company",
          icons: ["✨"],
        }}
        headline={{
          line1: "Empowering Businesses through",
          line2: "AI & Automation",
        }}
        subtitle="From startups to enterprises — we help you save time, reduce costs, and grow faster with intelligent AI systems."
        buttons={{
          primary: {
            text: "Get a Demo",
            onClick: handleGetDemo,
          },
          secondary: {
            text: "Talk to an Expert",
            onClick: handleTalkToExpert,
          },
        }}
      />

      {/* About Section */}
        <FadeIn>
          <section id="about" className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Naxshatraa AI</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Naxshatraa AI is a new-age technology company that builds intelligent systems to automate, optimize, and accelerate
            business growth. We combine the power of AI Automation, Digital Marketing, and Next-Gen Web Experiences to make
            your business future-ready.
          </p>
        </div>
        </section>
      </FadeIn>

      {/* Core Solutions */}
        <FadeIn>
          <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Our Core Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card
                  key={index}
                  className="bg-purple-950/20 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-purple-500/20 rounded-lg">
                        <Icon className="h-6 w-6 text-purple-400" />
                      </div>
                      <CardTitle className="text-white">{solution.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70">{solution.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        </section>
      </FadeIn>

      {/* Why Choose Us Section */}
      <FadeIn>
        <section className="py-20 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="p-6 bg-purple-950/20 rounded-lg border border-purple-500/20">
                  <p className="text-white/90">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Business Impact Stats */}
        <FadeIn>
          <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Business Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-8 bg-purple-950/20 rounded-lg border border-purple-500/20">
                  <Icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <p className="text-white/70">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Industries We Serve */}
        <FadeIn>
          <section id="industries" className="py-20 px-4 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-6 bg-purple-950/20 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <Icon className="h-8 w-8 text-purple-400" />
                  <span className="text-sm text-white/90 text-center">{industry.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Testimonials */}
        <FadeIn>
          <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-purple-950/20 border-purple-500/20">
                <CardContent className="pt-6">
                  <p className="text-lg text-white/90 mb-4 italic">"{testimonial.quote}"</p>
                  <p className="text-purple-400 font-semibold">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Final CTA */}
        <FadeIn>
          <section id="contact" className="py-24 px-4 bg-gradient-to-b from-black to-purple-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Innovate, Automate, and Elevate your business?
          </h2>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg px-8 py-6 rounded-full"
            onClick={() => console.log("Let's Get Started clicked")}
          >
            Let's Get Started
          </Button>
        </div>
      </section>
      </FadeIn>

      <Footer />
    </div>
  );
};

export default Index;
