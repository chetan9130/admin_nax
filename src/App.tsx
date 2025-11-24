import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocomotiveScroll } from "@/hooks/use-locomotive-scroll";

import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
const queryClient = new QueryClient();

const AppContent = () => {
  useLocomotiveScroll();

  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<AdminLogin />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div data-scroll-container>
        <AppContent />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
