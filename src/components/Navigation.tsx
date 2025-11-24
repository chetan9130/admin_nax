import { Link } from "react-router-dom";
import MegaMenu from "@/components/ui/mega-menu";
import type { MegaMenuItem } from "@/components/ui/mega-menu";
import logo from "@/assets/logos/nlogo.png";

import {
  Bot,
  TrendingUp,
  Search,
  Globe,
  Smartphone,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NAV_ITEMS: MegaMenuItem[] = [
    {
      id: 1,
      label: "Services",
      subMenus: [
        {
          title: "Core Solutions",
          items: [
            {
              label: "AI Automations",
              description: "Self-learning smart systems",
              icon: Bot,
            },
            {
              label: "Digital Marketing",
              description: "AI-driven growth engines",
              icon: TrendingUp,
            },
            {
              label: "SEO (GEO)",
              description: "AI tool optimization",
              icon: Search,
            },
          ],
        },
        {
          title: "Development",
          items: [
            {
              label: "Website Development",
              description: "AI-powered websites",
              icon: Globe,
            },
            {
              label: "Mobile App Development",
              description: "Intelligent mobile experiences",
              icon: Smartphone,
            },
          ],
        },
      ],
    },
    { id: 2, label: "About", link: "/about" },
    { id: 3, label: "Solutions", link: "/solutions" },
    { id: 4, label: "Industries", link: "/industries" },
    { id: 5, label: "Case Studies", link: "/case-studies" },
    { id: 6, label: "Resources", link: "/resources" },
    { id: 7, label: "Contact", link: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Naxshatraa AI" 
              className="h-16 w-auto sm:h-32"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 ml-auto">
            <MegaMenu items={NAV_ITEMS} />
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-2 rounded-full"
              onClick={() => {
                const isMobile =
                  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  );

                if (isMobile) {
                  window.location.href = "tel:+917588490885";
                } else {
                  alert("Call us at: +91 7588490885");
                }
              }}
            >
              Talk to an Expert
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-black/90 border-t border-white/10 py-4 space-y-4">
            {NAV_ITEMS.map((item) =>
              item.subMenus ? (
                <div key={item.id} className="px-4">
                  <p className="text-white font-semibold mb-2">
                    {item.label}
                  </p>
                  {item.subMenus.map((group, idx) => (
                    <div key={idx} className="ml-3 space-y-2">
                      {group.items.map((sub, subIdx) => (
                        <p
                          key={subIdx}
                          className="text-white/80 text-sm hover:text-white cursor-pointer"
                        >
                          {sub.label}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.id}
                  to={item.link!}
                  className="block text-white px-4 py-2 hover:bg-white/10 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}

            {/* Mobile Button */}
            <div className="px-4 pt-2">
              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                onClick={() => {
                  const isMobile =
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    );

                  if (isMobile) {
                    window.location.href = "tel:+917588490885";
                  } else {
                    alert("Call us at: +91 7588490885");
                  }
                }}
              >
                Talk to an Expert
              </Button>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};
