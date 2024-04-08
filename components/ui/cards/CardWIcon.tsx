interface CardWIconProps {
  header: string
  description: string
  icon?: string
}

export default function CardWIcon({ header, description, icon}: CardWIconProps) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {icon && (icon)}
        <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{header}</h3>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  )
}
