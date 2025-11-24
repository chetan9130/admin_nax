import { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "@/lib/firebase";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const contactRef = ref(db, "contacts");
      await push(contactRef, {
        ...formData,
        createdAt: new Date().toISOString(),
      });

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Firebase Error:", error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Let's Build the Future Together
          </h1>
          <p className="text-xl text-white/80">
            Get in touch with our team to discuss your AI transformation journey
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-purple-950/20 border-purple-500/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send us a message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-white/5 border-white/20 text-white"
                />

                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="bg-white/5 border-white/20 text-white"
                />

                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="bg-white/5 border-white/20 text-white"
                />

                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="bg-white/5 border-white/20 text-white"
                />

                <select
  name="service"
  value={formData.service}
  onChange={handleChange}
  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
>
  <option value="" className="text-black bg-white">Preferred Service</option>
  <option value="ai-automation" className="text-black bg-white">AI Automations</option>
  <option value="digital-marketing" className="text-black bg-white">Digital Marketing</option>
  <option value="seo-geo" className="text-black bg-white">SEO (GEO)</option>
  <option value="website" className="text-black bg-white">Website Development</option>
  <option value="mobile" className="text-black bg-white">Mobile App Development</option>
</select>


                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="bg-white/5 border-white/20 text-white"
                />

                {success && (
                  <p className="text-green-400 text-center font-medium">
                    ✅ Message sent successfully!
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                >
                  {loading ? "Sending..." : "Submit Inquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div className="space-y-6">
  {/* Email Card */}
  <Card className="bg-purple-950/20 border-purple-500/20">
    <CardContent className="pt-6 flex gap-4">
      <div className="p-4 bg-purple-500/30 rounded-full">
        <Mail className="text-purple-300" />
      </div>
      <div>
        <h3 className="text-white font-semibold">Email Us</h3>
        <a
          href="mailto:hello@naxshatraai.tech"
          className="text-white/70 hover:underline"
        >
          hello@naxshatraai.tech
        </a>
      </div>
    </CardContent>
  </Card>

  {/* Phone Card */}
  <Card className="bg-purple-950/20 border-purple-500/20">
    <CardContent className="pt-6 flex gap-4">
      <div className="p-4 bg-purple-500/30 rounded-full">
      <a
          href="tel:+917588490885"
          className="text-white/70 hover:underline"
        >
        <Phone className="text-purple-300" />
        </a>
      </div>
      <div>
        <h3 className="text-white font-semibold">Call Us</h3>
        <a
          href="tel:+917588490885"
          className="text-white/70 hover:underline"
        >
          +91 7588490885
        </a>
      </div>
    </CardContent>
  </Card>

  {/* Location Card */}
  <Card className="bg-purple-950/20 border-purple-500/20">
    <CardContent className="pt-6 flex gap-4">
      <div className="p-4 bg-purple-500/30 rounded-full">
      <a
          href="https://maps.google.com?q=Pune, Maharashtra, India"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:underline"
        >
        <MapPin className="text-purple-300" />
        </a>
      </div>
      <div>
        <h3 className="text-white font-semibold">Visit Us</h3>
        <a
          href="https://maps.google.com?q=Pune, Maharashtra, India"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:underline"
        >
          Pune, Maharashtra, India
        </a>
      </div>
    </CardContent>
  </Card>

  {/* WhatsApp Card */}
 <Card className="bg-green-600/20 border border-green-500/30 hover:border-green-500/60 transition-all duration-300">
  <CardContent className="pt-6 flex gap-4">
    
   <div className="w-12 h-12 flex items-center justify-center bg-green-500/20 rounded-full">
  <MessageCircle className="text-green-300 w-6 h-6" />
</div>


    <div className="flex-1">
      <h3 className="text-white font-semibold">WhatsApp</h3>
      <p className="text-white/70 mb-3">
        Chat with our Team instantly
      </p>

      <a
        href="https://wa.me/7588490885?text=Hi%2C%20I%20need%20support"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="bg-green-600 hover:bg-purple-700 text-white">
          Talk to Expert
        </Button>
      </a>
    </div>

  </CardContent>
</Card>

</div>
        </div>        
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Find Us
          </h2>

          <div className="h-96 rounded-lg overflow-hidden border border-purple-500/20">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=18.526551802904294,73.87669575951945&z=15&output=embed"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
