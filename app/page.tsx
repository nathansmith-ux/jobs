import { navItems } from '@/copy/navigation'
import { frontEnd, backEnd, seo, reasons } from "@/copy/card-grid";

import CardWIconGrid from '@/components/ui/cards/CardWIconGrid';
import NavBar from "@/components/ui/navigation/NavBar";
import HeroWImage from "@/components/ui/hero/HeroWImage";
import Footer from '@/components/ui/footer/Footer';
import { Typewriter } from '@/components/ui/hero/TypeWriter';
import SocialContacts from '@/components/ui/hero/SocialContacts';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 pt-20">
      <NavBar 
        navItems={navItems}
      />
      <Typewriter />
      <CardWIconGrid
        header="My Frontend Tech Stack"
        description="Hello There I am doing this"
        items={frontEnd}
      />
      <CardWIconGrid
        header="My Backend Tech Stack"
        description="Hello There I am doing this"
        items={backEnd}
      />
      <CardWIconGrid
        header="My SEO Tech Stack"
        description="Hello There I am doing this"
        items={seo}
      />
      <CardWIconGrid
        header="Why I Want To Work At Your Company"
        description="Hello There I am doing this"
        items={reasons}
      />
      <HeroWImage
        header="Meet TaiL"
        description="TaiL is a full stack AI application designed to re-imagine the way choose your own adventure stories are told. Each situation can be approach uniquely and the AI will evaluate whether you're successful or not." 
        image="/dungeon-master.webp"
        link="https://www.tail-adventures.com/"
      />
      <HeroWImage 
        position="right"
        header="Schema Forge"
        description="Schema Forge is a SaaS application designed to help SEO's write comprehensive structured data markup efficiently. This allows SEO's to directly communicate with search engine crawlers." 
        image="/coloredLogo.png"
        link="https://schemaforge.io/"
      />
      <HeroWImage 
        header="About Me"
        description="hello" 
        image="/head-shot.jpeg"
        link="https://www.whitewallsmedia.ca/"
      />
      <SocialContacts 
        header="I Would Love To Connect & Continue The Conversation"
        description="You can find me on LinkedIn or Github"
      />
      <Footer />
    </main>
  );
}
