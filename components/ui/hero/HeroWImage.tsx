import Image from 'next/image';

interface HeroTextProps {
  header: string;
  description: string;
}

interface HeroImageProps {
  image: string;
}

interface HeroWImageProps {
  position?: string;
  header: string;
  description: string;
  image: string;
}

function HeroText({ header, description }: HeroTextProps) {
  return (
    <div className="mr-auto place-self-center lg:col-span-7">
      <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{header}</h2>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{description}</p>
      {/* Buttons and other content */}
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
      />
    </div>
  );
}

export default function HeroWImage({ header, description, image, position = 'left' }: HeroWImageProps) {
  const isImageLeft = position === 'left';
  return (
    <section>
      <div className="grid w-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        {isImageLeft && <HeroImage image={image} />}
        <HeroText 
          header={header} 
          description={description} 
        />
        {!isImageLeft && <HeroImage image={image} />}
      </div>
    </section>
  );
}
