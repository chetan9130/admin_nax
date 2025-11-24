import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const CaseStudies = () => {
  const cases = [
    {
      client: "HealthSync Hospital",
      industry: "Healthcare",
      challenge: "Managing 1,000+ patient inquiries daily with limited staff, leading to long wait times and frustrated patients.",
      solution: "Implemented multilingual Voice AI Assistant supporting English, Hindi, and Marathi for patient calls and appointment booking.",
      results: [
        "85% automation of patient calls",
        "2.5× faster appointment booking",
        "100% accuracy in daily reports",
        "40+ hours saved per week"
      ],
      testimonial: "The Voice AI transformed our patient experience. Wait times dropped dramatically and our staff can focus on critical care.",
      author: "Dr. Sharma, Hospital Administrator"
    },
    {
      client: "EcomGrowth",
      industry: "E-Commerce",
      challenge: "Manual lead follow-up process resulting in slow response times and lost sales opportunities.",
      solution: "AI Sales Agent integrated with CRM for instant lead response, qualification, and nurturing campaigns.",
      results: [
        "3× faster lead response time",
        "20% increase in conversion rates",
        "50% reduction in manual work",
        "Automated follow-ups 24/7"
      ],
      testimonial: "Our sales team now focuses on closing deals while AI handles the initial outreach. Revenue jumped 35% in Q1.",
      author: "Rajesh Kumar, CEO"
    },
    {
      client: "EduTech Platform",
      industry: "Education",
      challenge: "Students needed 24/7 support but staff was only available during business hours.",
      solution: "Deployed AI Virtual Assistant for course recommendations, doubt clearing, and enrollment assistance.",
      results: [
        "24/7 student support coverage",
        "60% improvement in engagement",
        "1,500+ queries handled daily",
        "90% student satisfaction score"
      ],
      testimonial: "Students love the instant support. Our enrollment rates increased significantly after implementation.",
      author: "Priya Desai, Founder"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section with Shader Background */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Real Results from Real Projects
          </h1>
          <p className="text-xl text-white/80">
            See how we've transformed businesses across industries
          </p>
        </div>
      </section>      {/* Case Studies */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto space-y-12">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="bg-purple-950/20 border-purple-500/20">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-3xl text-white mb-2">{caseStudy.client}</CardTitle>
                    <span className="text-purple-400 text-sm">{caseStudy.industry}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Challenge</h4>
                    <p className="text-white/70">{caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Solution</h4>
                    <p className="text-white/70">{caseStudy.solution}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Results</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {caseStudy.results.map((result, idx) => (
                      <div key={idx} className="bg-purple-950/30 border border-purple-500/20 rounded-lg p-4 text-center">
                        <p className="text-white/90 font-medium">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-purple-950/30 border-l-4 border-purple-500 p-6 rounded">
                  <p className="text-lg text-white/90 italic mb-2">"{caseStudy.testimonial}"</p>
                  <p className="text-purple-400 font-semibold">— {caseStudy.author}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-purple-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to see similar results?
          </h2>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg px-8 py-6 rounded-full"
          >
            Get a Demo
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;