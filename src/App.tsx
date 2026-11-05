import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "./pages/Home";
import Engineering from "./pages/Engineering";
import RyanOS from "./pages/RyanOS";
import Analytics from "./pages/Analytics";
import Design from "./pages/Design";
import ExperiencePage from "./pages/ExperiencePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Old V1 URLs → new homes, so existing links keep working.
const legacy: Record<string, string> = {
  "/education": "/experience",
  "/work/gt-football": "/experience",
  "/work/reel-analytics": "/analytics",
  "/work/sbc": "/experience",
  "/work/sigma-nu": "/experience",
  "/work/vip": "/analytics",
  "/work/personal": "/about",
  "/work/races": "/about",
  "/work/training": "/about",
  "/work/goals": "/about",
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/engineering/ryan-os" element={<RyanOS />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/design" element={<Design />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {Object.entries(legacy).map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          <Route path="/work/*" element={<Navigate to="/design" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
