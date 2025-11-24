import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BookOpen, FileText, PlayCircle, Code } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Blog",
      icon: FileText,
      description: "AI trends, automation guides, and marketing tactics",
      items: [
        "Getting Started with AI Automation in 2025",
        "How GEO Will Replace Traditional SEO",
        "Building Voice AI Assistants for Healthcare",
        "Multilingual Chatbots: Best Practices"
      ]
    },
    {
      title: "Playbooks",
      icon: BookOpen,
      description: "Downloadable strategy PDFs and implementation guides",
      items: [
        "AI Automation Playbook for Startups",
        "Digital Marketing with AI: Complete Guide",
        "Implementing Voice AI: Step by Step",
        "GEO Optimization Checklist"
      ]
    },
    {
      title: "Webinars",
      icon: PlayCircle,
      description: "Learn live from our AI and automation experts",
      items: [
        "Building AI Agents for Sales Automation",
        "Future of Search: Beyond Google",
        "Creating Multilingual Customer Experiences",
        "AI-Powered Growth Strategies"
      ]
    },
    {
      title: "Templates",
      icon: Code,
      description: "Free marketing & automation prompt kits",
      items: [
        "AI Prompt Library for Marketing",
        "Customer Service Bot Templates",
        "Sales Automation Workflows",
        "Content Generation Prompts"
      ]
    },
    {
      title: "Research",
      icon: FileText,
      description: "Original insights from Naxshatraa Labs",
      items: [
        "AI Adoption in Indian SMBs: 2025 Report",
        "Voice AI Performance Benchmarks",
        "GEO vs SEO: Comparative Analysis",
        "Multilingual AI: Language Accuracy Study"
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
            Resources & Learning Hub
          </h1>
          <p className="text-xl text-white/80">
            Everything you need to understand and implement AI automation
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto space-y-12">
          {resourceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="bg-purple-950/20 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <CardTitle className="text-2xl text-white">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-white/70">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white/80 hover:text-white transition-colors cursor-pointer">
                        <span className="text-purple-400 mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-purple-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Subscribe to our newsletter for the latest AI insights and resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-purple-500"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;