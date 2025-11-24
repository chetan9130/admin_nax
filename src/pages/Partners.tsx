import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Partners = () => {
  const techPartners = [
    { name: "OpenAI", category: "AI Models" },
    { name: "LangChain", category: "AI Framework" },
    { name: "Vercel", category: "Deployment" },
    { name: "Firebase", category: "Backend" },
    { name: "Google Cloud", category: "Infrastructure" },
    { name: "WhatsApp API", category: "Communication" }
  ];

  const benefits = [
    "Access to exclusive resources and training",
    "Co-marketing opportunities",
    "Revenue sharing on joint projects",
    "Early access to new features",
    "Dedicated partner support",
    "Joint case study development"
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section with Shader Background */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Collaborating with Industry Leaders
          </h1>
          <p className="text-xl text-white/80">
            Building the future of AI together with our trusted partners
          </p>
        </div>
      </section>

      {/* Tech Partners */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Technology Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techPartners.map((partner, index) => (
              <Card key={index} className="bg-purple-950/20 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-3">🤝</div>
                  <h3 className="text-white font-semibold mb-1">{partner.name}</h3>
                  <p className="text-purple-400 text-xs">{partner.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Partners */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-6">Agency Partners</h2>
          <p className="text-lg text-white/70 text-center mb-12 max-w-3xl mx-auto">
            We collaborate with freelancers, marketing studios, and AI integrators to deliver 
            world-class solutions to our clients.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-purple-950/20 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Marketing Agencies</CardTitle>
                <CardDescription className="text-white/70">
                  Enhance your offerings with AI-powered marketing solutions
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-purple-950/20 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Development Studios</CardTitle>
                <CardDescription className="text-white/70">
                  Integrate cutting-edge AI into your client projects
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-purple-950/20 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Independent Consultants</CardTitle>
                <CardDescription className="text-white/70">
                  Offer AI transformation services with our support
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Partnership Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-purple-950/20 rounded-lg border border-purple-500/20">
                <span className="text-purple-400 text-xl">✓</span>
                <p className="text-white/90">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-purple-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Join our growing network of partners and build the future of AI together
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg px-8 py-6 rounded-full"
          >
            Become a Partner
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;