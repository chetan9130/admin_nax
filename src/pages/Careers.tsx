import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Laptop, Rocket, TrendingUp, Palette } from "lucide-react";

const Careers = () => {
  const openRoles = [
    {
      title: "AI Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Pune / Hybrid",
      description: "Build and deploy AI agents, voice assistants, and automation systems using cutting-edge technologies."
    },
    {
      title: "Frontend Engineer (Next.js)",
      department: "Engineering",
      type: "Full-time",
      location: "Pune / Hybrid",
      description: "Create beautiful, responsive web applications with modern frameworks and AI integrations."
    },
    {
      title: "Marketing Strategist (AI-driven campaigns)",
      department: "Marketing",
      type: "Full-time",
      location: "Pune / Hybrid",
      description: "Design and execute AI-powered marketing campaigns that drive growth and engagement."
    },
    {
      title: "Content & Prompt Engineer",
      department: "Content",
      type: "Full-time / Contract",
      location: "Remote",
      description: "Craft compelling content and optimize AI prompts for maximum effectiveness across platforms."
    }
  ];

  const perks = [
    { icon: Laptop, title: "Hybrid Work", description: "Flexible work arrangements" },
    { icon: Rocket, title: "Real Impact Projects", description: "Work on meaningful solutions" },
    { icon: TrendingUp, title: "Fast Career Growth", description: "Rapid advancement opportunities" },
    { icon: Palette, title: "Creative Freedom", description: "Bring your ideas to life" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section with Shader Background */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Build the Future with Us
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We're a fast-growing AI company looking for curious minds, dreamers, and doers 
            to join our mission of making AI accessible to every business.
          </p>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Join Naxshatraa AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <Card key={index} className="bg-purple-950/20 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                  <CardContent className="pt-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-purple-500/20 rounded-lg">
                        <Icon className="h-8 w-8 text-purple-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{perk.title}</h3>
                    <p className="text-white/70">{perk.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {openRoles.map((role, index) => (
              <Card key={index} className="bg-purple-950/20 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl text-white mb-2">{role.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="text-sm px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">
                          {role.department}
                        </span>
                        <span className="text-sm px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">
                          {role.type}
                        </span>
                        <span className="text-sm px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">
                          {role.location}
                        </span>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-purple-500/50 text-purple-400 hover:bg-purple-500/20"
                    >
                      Apply Now
                    </Button>
                  </div>
                  <CardDescription className="text-white/70 text-base">
                    {role.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Culture</h2>
          <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
            We're a team of passionate innovators who believe in the power of AI to transform businesses. 
            We move fast, learn constantly, and celebrate wins together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-950/20 border border-purple-500/20 rounded-lg p-8">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
              <p className="text-white/70">Push boundaries and explore new possibilities</p>
            </div>
            <div className="bg-purple-950/20 border border-purple-500/20 rounded-lg p-8">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-2">Collaborative</h3>
              <p className="text-white/70">Work together to achieve extraordinary results</p>
            </div>
            <div className="bg-purple-950/20 border border-purple-500/20 rounded-lg p-8">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-white mb-2">Growth Mindset</h3>
              <p className="text-white/70">Learn, adapt, and grow with every challenge</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-purple-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            We're always looking for talented individuals. Send us your resume!
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg px-8 py-6 rounded-full"
          >
            Send Application
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;