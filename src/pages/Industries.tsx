import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ShoppingCart, HeartPulse, Layers, GraduationCap, Home, Store } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      name: "E-Commerce",
      icon: ShoppingCart,
      problem: "Manual order processing, slow customer support, and inefficient marketing campaigns leading to lost sales.",
      solution: "Automate order management, implement AI chatbots for 24/7 support, and deploy predictive marketing campaigns.",
      results: ["85% faster order processing", "3× customer satisfaction", "40% increase in repeat purchases"]
    },
    {
      name: "Healthcare",
      icon: HeartPulse,
      problem: "Overwhelming patient inquiries, appointment booking chaos, and manual administrative tasks.",
      solution: "AI chatbots for patient queries, smart appointment booking systems, and automated report generation.",
      results: ["90% automation of inquiries", "2.5× faster booking", "100% accuracy in reports"]
    },
    {
      name: "SaaS",
      icon: Layers,
      problem: "Low lead conversion rates, manual onboarding processes, and difficulty in identifying high-value prospects.",
      solution: "Predictive lead scoring, AI-driven onboarding flows, and automated customer success workflows.",
      results: ["35% higher conversions", "50% faster onboarding", "25% better retention"]
    },
    {
      name: "Education",
      icon: GraduationCap,
      problem: "Limited student support resources, difficulty in course recommendations, and manual administrative tasks.",
      solution: "Virtual assistants for 24/7 student support, AI-powered course recommendations, and automated grading.",
      results: ["24/7 student support", "60% better engagement", "80% time saved on admin"]
    },
    {
      name: "Real Estate",
      icon: Home,
      problem: "Slow response to property inquiries, inefficient lead nurturing, and manual follow-ups.",
      solution: "AI assistants for instant property information, automated lead nurturing campaigns, and smart scheduling.",
      results: ["Instant inquiry response", "4× faster lead nurturing", "30% more viewings"]
    },
    {
      name: "D2C Brands",
      icon: Store,
      problem: "Ineffective ad targeting, manual analytics tracking, and difficulty scaling campaigns.",
      solution: "Smart campaign targeting with AI, automated analytics dashboards, and predictive inventory management.",
      results: ["45% better ROAS", "Real-time insights", "20% less inventory waste"]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section with Shader Background */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Tailored AI Solutions for Every Industry
          </h1>
          <p className="text-xl text-white/80">
            Transform your industry with intelligent automation and AI-powered solutions
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card key={index} className="bg-purple-950/20 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Icon className="h-8 w-8 text-purple-400" />
                    </div>
                    <CardTitle className="text-2xl text-white">{industry.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Problem:</h4>
                    <CardDescription className="text-white/70">
                      {industry.problem}
                    </CardDescription>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">AI Solution:</h4>
                    <CardDescription className="text-white/70">
                      {industry.solution}
                    </CardDescription>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {industry.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-white/70">
                          <span className="text-purple-400">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;