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
import JerseySwaps from "./pages/work/JerseySwaps";
import Compositions from "./pages/work/Compositions";
import Posters from "./pages/work/Posters";
import TGCGraphicsPacks from "./pages/work/TGCGraphicsPacks";
import TGCGiveaways from "./pages/work/TGCGiveaways";
import TGCCustomWork from "./pages/work/TGCCustomWork";
import RHxVisualsProjects from "./pages/work/RHxVisualsProjects";
import AFCDesigns from "./pages/work/AFCDesigns";
import AFCNews from "./pages/work/AFCNews";
import AFCAnalysis from "./pages/work/AFCAnalysis";
import GridironDriveNews from "./pages/work/GridironDriveNews";
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
          <Route path="/work/jersey-swaps" element={<JerseySwaps />} />
          <Route path="/work/compositions" element={<Compositions />} />
          <Route path="/work/posters" element={<Posters />} />
          <Route path="/work/tgc-graphics-packs" element={<TGCGraphicsPacks />} />
          <Route path="/work/tgc-giveaways" element={<TGCGiveaways />} />
          <Route path="/work/tgc-custom-work" element={<TGCCustomWork />} />
          <Route path="/work/rhxvisuals-projects" element={<RHxVisualsProjects />} />
          <Route path="/work/afc-designs" element={<AFCDesigns />} />
          <Route path="/work/afc-news" element={<AFCNews />} />
          <Route path="/work/afc-analysis" element={<AFCAnalysis />} />
          <Route path="/work/gridiron-drive-news" element={<GridironDriveNews />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
