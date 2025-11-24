import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";


import leoVideo from "@/assets/video/leo3.mp4";
import rupeshimg from "@/assets/team/rupesh.jpeg";
import chetanimg from "@/assets/team/chetan.jpg";
import atharvaimg from "@/assets/team/atharva.jpeg";
import tanishqimg from "@/assets/team/tanishq.jpg";
import karanimg from "@/assets/team/karan.jpg";
import ruchaimg from "@/assets/team/rucha.jpeg";
import manasimg from "@/assets/team/manas.jpeg";
import bhavesimg from "@/assets/team/bhavesh.jpeg";
import ashishimg from "@/assets/team/ashish.jpg";
import FadeIn from "@/components/ui/fade-in";

const LinkedInIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 448 512" 
    className="w-7 h-7 fill-purple-300 hover:fill-purple-500 transition-all"
  >
    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.7 
    53.7 0 1 1 53.7-53.7 53.7 53.7 0 0 1-53.7 
    53.7zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 
    0-55.7 37.7-55.7 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 
    42.6-48.3 87.7-48.3 93.8 0 111.1 61.8 111.1 
    142.3V448z"/>
  </svg>
);

const About = () => {
  const values = [
    { icon: "⚙️", title: "Innovation", description: "Pushing boundaries with cutting-edge AI solutions" },
    { icon: "🤝", title: "Integrity", description: "Building trust through transparency and ethics" },
    { icon: "🧠", title: "Intelligence", description: "Data-driven decisions and smart automation" },
    { icon: "🌍", title: "Impact", description: "Creating meaningful change for businesses worldwide" },
  ];

  const team = [
    {
      name: "Rupesh Shinde",
      role: "AI Developer",
      image: rupeshimg,
      description: "Transforms complex ideas into intelligent, automated solutions.",
      superpower: "Solves complex logic like magic ✨",
      linkedin: "https://linkedin.com/in/rupeshttps://www.linkedin.com/in/rupesh-shinde-94a2b01b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_apph"
    },
    {
      name: "Tanishq Jarsodiwala",
      role: "Full Stack Developer",
      image: tanishqimg,
      description: "Bridges creativity and code to craft seamless digital experiences.",
      superpower: "Creates pixel-perfect UIs effortlessly 🎨",
      linkedin: "https://www.linkedin.com/in/tanishq-jarsodiwala?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Chetan Sonawane",
      role: "Mobile App Developer",
      image: chetanimg,
      description: "Makes data move smoothly behind every high-performing application.",
      superpower: "Solves backend bottlenecks before they even appear 🔍⚡",
      linkedin: "https://www.linkedin.com/in/chetan-sonawane-61990a251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Karan Marathe",
      role: "AWS Specialist",
      image: karanimg,
      description: "Builds cloud-powered infrastructures that never fail.",
      superpower: "Deploys cloud systems with zero downtime ☁️",
      linkedin: "https://www.linkedin.com/in/karan-marathe?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Atharva Bhat",
      role: "Frontend Developer",
      image: atharvaimg,
      description: "Turns ideas into visually stunning interfaces.",
      superpower: "Turns imagination into beautiful UI 🔥",
      linkedin: "https://www.linkedin.com/in/atharvabhat?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Rucha Ahire",
      role: "React Developer",
      image: ruchaimg,
      description: "Crafts intuitive, responsive interfaces that users love to use.",
      superpower: "Creates accessible experiences that everyone can use ♿️",
      linkedin: "https://www.linkedin.com/in/rucha-ahire09"
    },
    
  {
  name: "Manas Kulkarni",
  role: "Digital Marketing Specialist",
  image: manasimg,
  description: "Drives growth through smart digital strategies.",
  superpower: "Turns data into high-impact campaigns 📈",
  linkedin: "https://www.linkedin.com/in/manas-kulkarni-44045229a/"
},
{
  name: "Bhavesh Ahire",
  role: "Social Media Manager",
  image: bhavesimg,
  description: "Creates engaging content that builds community.",
  superpower: "Makes posts go viral effortlessly 🔥",
  linkedin: "https://www.linkedin.com/in/bhavesh-ahire-26aaa1287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
},
{
  name: "Ashish Anand",
  role: "UI/UX Designer",
  image: ashishimg,
  description: "Designs clean, intuitive user experiences.",
  superpower: "Turns ideas into stunning designs 🎨",
  linkedin: "https://linkedin.com/in/ashish"
},


  ];

  return (
    <div className="min-h-screen bg-black relative">
      <style>{`
        .video-container {
          width: 600px;
          max-width: 90vw;
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          border-radius: 12px;
        }

        .video {
          width: 50vh;
          height: 55vh;
          display: block;
          object-fit: cover;
          mix-blend-mode: screen;
        }
      `}</style>

      <Navigation />

      {/* Intro Section */}
      <section className="relative py-32 px-4 bg-black overflow-hidden">
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our Story — Where Vision Meets Innovation
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 px-4 bg-black overflow-hidden">
      
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Founded in Pune, Naxshatraa AI was created with one mission:
            To simplify technology and make AI accessible to every business.
          </p>
          <p className="text-lg text-white/80 leading-relaxed">
            We're a team of innovators, developers, designers, and AI enthusiasts — dedicated to transforming how businesses work through automation and intelligence.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black to-purple-950/20 overflow-hidden">
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
          <Card className="bg-purple-950/20 border-purple-500/20">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold text-white mb-4">Vision</h2>
              <p className="text-lg text-white/80">
                To empower 1,000+ businesses by 2030 with AI-driven transformation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-purple-950/20 border-purple-500/20">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold text-white mb-4">Mission</h2>
              <p className="text-lg text-white/80">
                Build human-centered AI systems that work smarter, faster, and safer.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20 px-4 bg-black overflow-hidden">
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-purple-950/20 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mascot */}
      <section className="relative py-12 px-2 bg-gradient-to-b from-black to-purple-950/20 overflow-hidden">
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Leo - Our Mascot 🦁</h2>
          <p className="text-xl text-white/80 mb-8">
            Leo represents courage, creativity, and intelligence — the heart of Naxshatraa AI's vision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 px-4">
          <div className="video-container">
            <video autoPlay loop muted playsInline className="video">
              <source src={leoVideo} type="video/mp4" />
            </video>
          </div>

          <FadeIn>
            <div className="text-center md:text-left md:flex-1">
              <h3 className="text-3xl font-bold text-white">Hello, I am Leo</h3>
              <p className="text-white/80 mt-3">
                I'm the friendly mascot of Naxshatraa AI here to represent creativity and intelligence.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black to-purple-950/20 overflow-hidden">
       
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-purple-950/20 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 p-4 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
                />

                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <p className="text-purple-300 mb-1">{member.role}</p>

                <p className="text-white/70 text-sm mb-2">{member.description}</p>

                <p className="text-white/80 text-sm italic mb-4">
                  <span className="font-semibold text-purple-300">Superpower:</span> {member.superpower}
                </p>

                {/* LinkedIn Icon */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center mt-3"
                >
                  <LinkedInIcon />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
