import CardWImageGrid from "@/components/ui/cards/CardWImageGrid";
import NavBar from "@/components/ui/navigation/NavBar";
import { navItems } from '@/copy/navigation'
import { items } from "@/copy/card-grid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 pt-24">
      <NavBar 
        navItems={navItems}
      />
      <CardWImageGrid 
        items={items}
      />
    </main>
  );
}
