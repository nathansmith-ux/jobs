import CardWImage from "./CardWImage";

interface CardWImageProps {
  items: CardItem[]
  header: string
}

interface CardItem {
  header: string,
  description: string,
  image: string
}

function CardWImageGrid({ items, header }: CardWImageProps) {
  return (
    <section className="w-screen">
      <h2>{header}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((card, index) => (
            <div
              key={index}
            >
              <CardWImage 
                header={card.header}
                description={card.description}
                image={card.image}
              />
            </div>
          ))}
        </div>
    </section>
  )
}

export default CardWImageGrid