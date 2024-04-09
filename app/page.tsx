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
        description="I specialize in using React, jQuery, and Vanilla JavaScript for building responsive and engaging web interfaces. My approach focuses on creating intuitive user experiences with efficient and dynamic content, ensuring both functionality and aesthetic appeal in web applications."
        items={frontEnd}
      />
      <CardWIconGrid
        header="My Backend Tech Stack"
        description="My backend expertise encompasses Next.js, Express, and Ruby on Rails, focusing on developing scalable and efficient server-side solutions. I aim to create robust web applications that are maintainable and high-performing."
        items={backEnd}
      />
      <CardWIconGrid
        header="My SEO Tech Stack"
        description="Utilizing tools like Ahrefs, GA4, and Screaming Frog, I focus on optimizing websites for enhanced search engine visibility. My strategy includes thorough audits, keyword research, and leveraging data-driven techniques for improved search rankings and user engagement."
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
        description="Hey There! My name is Nathan Smith and I have 3+ years of experience as an SEO with a year of agency experience. I transitioned into the tech industry through a Lighthouse Labs Bootcamp where I learned how to think like a developer and now am able to build full stack web applications from the ground up then optimize them for Google Search." 
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
