import { navItems } from '@/copy/navigation'
import { items } from "@/copy/card-grid";

import CardWImageGrid from "@/components/ui/cards/CardWImageGrid";
import CardWIconGrid from '@/components/ui/cards/CardWIconGrid';
import NavBar from "@/components/ui/navigation/NavBar";
import HeroWImage from "@/components/ui/hero/HeroWImage";
import Footer from '@/components/ui/footer/Footer';
import { Typewriter } from '@/components/ui/hero/TypeWriter';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 pt-24">
      <NavBar 
        navItems={navItems}
      />
      <Typewriter />
      <CardWImageGrid
        header="My Experience & Skills" 
        items={items}
      />
      <CardWIconGrid
        header="Why I Want To Work At Your Company"
        items={items}
      />
      <HeroWImage 
      />
      <HeroWImage 
      />
      <HeroWImage 
      />
      <Footer />
    </main>
  );
}
