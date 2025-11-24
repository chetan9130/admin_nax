import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const FAQ = () => {
  const faqs = [
    {
      question: "How fast can we start?",
      answer: "Usually within 2–4 weeks depending on project scope. We begin with a discovery call to understand your needs, followed by a proposal and timeline. Simple automations can start in as little as 1 week."
    },
    {
      question: "Do you support Hindi/Marathi?",
      answer: "Yes! We offer multilingual support for both voice and chat in English, Hindi, and Marathi. Our AI systems are trained to understand context and nuances in all three languages."
    },
    {
      question: "What tech stack do you use?",
      answer: "We leverage cutting-edge technologies including OpenAI for AI models, LangChain for orchestration, Next.js for web development, Firebase for backend, WhatsApp API for messaging, and Google Cloud for infrastructure."
    },
    {
      question: "How do you measure ROI?",
      answer: "We track multiple metrics including time saved through automation, faster lead response times, improved conversion rates, reduced operational costs, and customer satisfaction scores. We provide detailed analytics dashboards for real-time monitoring."
    },
    {
      question: "Do you offer pilot projects?",
      answer: "Yes! We offer startup-friendly trial projects to demonstrate value before full commitment. This allows you to test our solutions with minimal risk and see tangible results."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve E-Commerce, Healthcare, SaaS, Education, Real Estate, and D2C Brands. Our solutions are customizable to fit the unique needs of any industry."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely! We specialize in seamless integrations with CRMs, ERPs, marketing platforms, and custom systems. Our solutions are designed to enhance, not replace, your current tech stack."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive support including initial training, documentation, ongoing maintenance, and 24/7 technical assistance for critical systems. Each client gets a dedicated account manager."
    },
    {
      question: "Is our data secure?",
      answer: "Security is our top priority. We follow industry-standard encryption, comply with data protection regulations, and implement strict access controls. All data is stored securely on enterprise-grade infrastructure."
    },
    {
      question: "What makes Naxshatraa AI different?",
      answer: "We're AI-first in our approach, offer modular solutions that scale with you, provide multilingual support, and focus on measurable business impact. We're affordable for startups yet powerful enough for enterprises."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section with Shader Background */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-white/80">Everything you need to know about our AI solutions</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-purple-950/20 border border-purple-500/20 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white hover:text-purple-400 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-purple-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Our team is here to help. Get in touch and we'll answer any questions you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg rounded-full transition-all">
              Contact Us
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-lg rounded-full transition-all">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;