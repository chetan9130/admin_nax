import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section with Shader Background */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Terms of Service
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
              <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using Naxshatraa AI's services, you accept and agree to be bound by these Terms of Service. 
                If you do not agree with any part of these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Services Description</h2>
              <p className="leading-relaxed">
                Naxshatraa AI provides AI automation, digital marketing, SEO (GEO), website development, and mobile app 
                development services. We reserve the right to modify, suspend, or discontinue any aspect of our services 
                at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
              <p className="leading-relaxed mb-3">As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services in compliance with all applicable laws</li>
                <li>Not engage in any activity that could harm our services or other users</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <p className="leading-relaxed">
                All content, designs, code, and materials created by Naxshatraa AI remain our intellectual property unless 
                otherwise specified in a written agreement. Upon full payment, clients receive the agreed-upon usage rights 
                for deliverables specific to their project.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
              <p className="leading-relaxed">
                Payment terms are specified in individual project agreements. Clients agree to pay all fees as outlined 
                in their contract. Late payments may incur additional charges and service suspension.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Confidentiality</h2>
              <p className="leading-relaxed">
                Both parties agree to keep confidential any proprietary information shared during the course of our engagement. 
                This includes business strategies, technical specifications, and any other sensitive information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="leading-relaxed">
                Naxshatraa AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                resulting from the use or inability to use our services. Our total liability shall not exceed the amount 
                paid by the client for the specific service in question.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="leading-relaxed">
                Either party may terminate services with written notice as specified in the project agreement. Upon termination, 
                client remains responsible for payment of services rendered up to the termination date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Modifications to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately 
                upon posting. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="leading-relaxed">
                These terms shall be governed by the laws of India. Any disputes arising from these terms or our services 
                shall be subject to the jurisdiction of courts in Pune, Maharashtra.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="leading-relaxed">
                For questions regarding these Terms of Service, please contact us at:
                <br />
                Email: legal@naxshatraa.ai
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;