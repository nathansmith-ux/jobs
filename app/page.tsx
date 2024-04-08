import { navItems } from '@/copy/navigation'
import { items } from "@/copy/card-grid";

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
      <CardWIconGrid
        header="My Frontend Tech Stack"
        items={items}
      />
      <CardWIconGrid
        header="My Backend Tech Stack"
        items={items}
      />
      <CardWIconGrid
        header="My SEO Tech Stack"
        items={items}
      />
      <HeroWImage 
      />
      <HeroWImage 
        position="right"
      />
      <HeroWImage 
      />
      <Footer />
    </main>
  );
}
