import Image from 'next/image';
import VisitButton from '../button/VisitButton';

interface HeroTextProps {
  header: string;
  description: string;
  link: string;
}

interface HeroImageProps {
  image: string;
}

interface HeroWImageProps {
  position?: string;
  header: string;
  description: string;
  image: string;
  link: string;
}

function HeroText({ header, description, link }: HeroTextProps) {
  return (
    <div className="mr-auto place-self-center lg:col-span-7">
      <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{header}</h2>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{description}</p>
      <VisitButton 
        link={link}
      />
    </div>
  );
}

function HeroImage({ image }: HeroImageProps) {
  return (
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <Image 
        src={image}
        alt="Image" 
        height="500"
        width="500"
        className="rounded-xl"
      />
    </div>
  );
}

export default function HeroWImage({ header, description, image, link, position = 'left' }: HeroWImageProps) {

  const isImageLeft = position === 'left';
  let sectionId;
  
  if (header === "Meet TaiL") {
    sectionId = "meet-tail-section";
  } else if (header === "About Me") {
    sectionId = "about-me";
  }
  
  return (
    <section id={sectionId}>
      <div className="grid w-screen px-12 py-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        {isImageLeft && <HeroImage image={image} />}
        <HeroText 
          header={header} 
          description={description}
          link={link} 
        />
        {!isImageLeft && <HeroImage image={image} />}
      </div>
    </section>
  );
}
