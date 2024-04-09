import Image from "next/image"

export default function VanillaJsIcon() {
  return (
    <div className="w-12 h-12 animate-pulse mb-3">
      <Image
        src="/vanilla-js.webp"
        alt="vanilla js logo" 
        width="48"
        height="48"
        className="rounded-xl"
      />
    </div>
  )
}
