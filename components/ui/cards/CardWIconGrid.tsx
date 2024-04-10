import CardWIcon from "./CardWIcon";

interface CardWImageProps {
  items: CardItem[]
  header: string
  description: string
}

interface CardItem {
  header: string,
  description: string,
  image?: string
}

export default function CardWIconGrid({ items, header, description }: CardWImageProps) {

  let sectionId;
  
  if (header === "My Frontend Tech Stack") {
    sectionId = "frontend-tech-stack";
  } else if (header === "Why I Want To Work At Your Company") {
    sectionId = "why-work";
  }

  return (
    <section id={sectionId} className="w-screen py-16 lg:py-32 px-10">
      <h2 className="text-5xl font-semibold mb-6">{header}</h2>
      <p className="text-lg mb-8">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((card, index) => (
            <div
              key={index}
            >
              <CardWIcon 
                header={card.header}
                description={card.description}
                icon={card.image}
              />
            </div>
          ))}
        </div>
    </section>
  )
}
