import CardWImage from "./CardWImage";

interface CardWImageProps {
  items: CardItem[]
}

interface CardItem {
  header: string,
  description: string,
  image: string
}

function CardWImageGrid({ items }: CardWImageProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-stretch">
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
  )
}

export default CardWImageGrid
