import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Bot, TrendingUp, Search, Globe, Smartphone } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      title: "AI Automations",
      description: "Turn repetitive tasks into intelligent workflows. Build ecosystems of AI agents that manage sales, HR, and customer service.",
      icon: Bot,
      services: [
        "AI Agent Orchestration",
        "Voice AI Assistants",
        "Document-to-Action AI",
        "Predictive Task Automation",
        "AI Customer Support Bots"
      ]
    },
    {
      title: "Digital Marketing (AI-Led)",
      description: "AI-powered marketing campaigns that personalize every message and optimize in real time.",
      icon: TrendingUp,
      services: [
        "AI Social Media Management",
        "Predictive Growth Engine",
        "Synthetic Persona Marketing",
        "AI Copywriting",
        "Community-Led Growth"
      ]
    },
    {
      title: "SEO (GEO)",
      description: "Optimize for Google, ChatGPT, Gemini & Perplexity — the future of search.",
      icon: Search,
      services: [
        "Generative Engine Optimization (GEO)",
        "Conversational Search Optimization (CSO)",
        "AI Search Visibility Analytics",
        "Schema Enhancement",
        "Voice Search Optimization"
      ]
    },
    {
      title: "Website Development",
      description: "Build fast, beautiful, AI-powered digital experiences.",
      icon: Globe,
      services: [
        "AI-Personalized Websites",
        "3D & Interactive Design",
        "Conversion-Focused Pages",
        "Headless CMS Integration",
        "AI Chat Integration"
      ]
    },
    {
      title: "Mobile App Development",
      description: "Smarter mobile experiences powered by AI.",
      icon: Smartphone,
      services: [
        "AI Chatbots",
        "Conversational Commerce",
        "AR/VR Integration",
        "Analytics & Maintenance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section with Shader Background */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI-Powered Solutions for Modern Business
          </h1>
          <p className="text-xl text-white/80">
            From automations to digital transformation, we build the future
          </p>
        </div>
      </section>      {/* Solutions Grid */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto space-y-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card key={index} className="bg-purple-950/20 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg">
                      <Icon className="h-8 w-8 text-purple-400" />
                    </div>
                    <CardTitle className="text-3xl text-white">{solution.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg text-white/80">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Sub-services:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {solution.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-white/70">
                        <span className="text-purple-400">→</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-purple-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Not sure where to start?
          </h2>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg px-8 py-6 rounded-full"
          >
            Let's Plan Your AI Journey
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;