import React from "react";
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
import WhyWithShader from "@/components/sections/WhyWithShader";

type Props = {
  reasons: string[];
  coreSolutions: { title: string; description: string; icon: any }[];
  stats: { icon: any; value: string; label: string }[];
  industries: { name: string; icon: any }[];
  testimonials: { quote: string; author: string }[];
};

const WhyPage = ({ reasons, coreSolutions, stats, industries, testimonials }: Props) => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <FadeIn>
        <section id="about" className="py-20 px-4 bg-black">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Naxshatraa AI</h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Naxshatraa AI is a new-age technology company that builds intelligent systems to automate, optimize, and accelerate business growth.
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-20 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Our Core Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreSolutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <Card key={index} className="bg-purple-950/20 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
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

      <FadeIn>
        <WhyWithShader reasons={reasons} />
      </FadeIn>

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

      <FadeIn>
        <section id="industries" className="py-20 px-4 bg-gradient-to-b from-black to-purple-950/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-3 p-6 bg-purple-950/20 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                    <Icon className="h-8 w-8 text-purple-400" />
                    <span className="text-sm text-white/90 text-center">{industry.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </FadeIn>

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

      <FadeIn>
        <section id="contact" className="py-24 px-4 bg-gradient-to-b from-black to-purple-950/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Innovate, Automate, and Elevate your business?</h2>
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg px-8 py-6 rounded-full">
              Let's Get Started
            </Button>
          </div>
        </section>
      </FadeIn>

      <Footer />
    </div>
  );
};

export default WhyPage;
