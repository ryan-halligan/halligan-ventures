import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import GTFootball from "./pages/work/GTFootball";
import ReelAnalytics from "./pages/work/ReelAnalytics";
import SBC from "./pages/work/SBC";
import SigmaNu from "./pages/work/SigmaNu";
import VIP from "./pages/work/VIP";
import Personal from "./pages/work/Personal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work/gt-football" element={<GTFootball />} />
          <Route path="/work/reel-analytics" element={<ReelAnalytics />} />
          <Route path="/work/sbc" element={<SBC />} />
          <Route path="/work/sigma-nu" element={<SigmaNu />} />
          <Route path="/work/vip" element={<VIP />} />
          <Route path="/work/personal" element={<Personal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
