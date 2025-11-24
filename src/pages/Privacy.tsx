import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section with Shader Background */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-white/70">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <div className="space-y-8 text-white/80">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="leading-relaxed">
                At Naxshatraa AI, we respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="leading-relaxed mb-3">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and business details</li>
                <li>Project requirements and communications</li>
                <li>Usage data and analytics</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="leading-relaxed mb-3">We use the collected information for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Providing and improving our services</li>
                <li>Communicating about projects and updates</li>
                <li>Analytics and service optimization</li>
                <li>Marketing communications (with your consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="leading-relaxed">
                We implement industry-standard security measures to protect your personal information. 
                All data is encrypted in transit and at rest. We regularly review and update our security practices 
                to ensure the highest level of protection.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Data Sharing</h2>
              <p className="leading-relaxed">
                We do not sell your personal information to third parties. We may share data with trusted service 
                providers who assist in operating our services, subject to strict confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Request corrections or deletions</li>
                <li>Opt-out of marketing communications</li>
                <li>Request data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
              <p className="leading-relaxed">
                We use cookies and similar technologies to improve user experience and analyze website traffic. 
                You can control cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@naxshatraa.ai
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;