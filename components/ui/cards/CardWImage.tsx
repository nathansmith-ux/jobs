import Image from 'next/image'
import Link from 'next/link'

interface CardWImageProps {
  header: string;
  description: string;
  image: string;
}

export default function CardWImage({ header, description, image }: CardWImageProps) {

  return (
    <section>
      <div>
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image 
              className="object-cover w-full rounded-t-lg md:rounded-none md:rounded-s-lg" 
              src={image}
              alt=""
              width="150"
              height="150"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{header}</h3>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            </div>
        </div>
      </div>
    </section>
  )
}