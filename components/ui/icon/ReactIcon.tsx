import Image from "next/image"

export default function ReactIcon() {
  return (
    <div className="w-12 h-12 animate-pulse mb-3">
      <Image
        src="/react.png"
        alt="react logo" 
        width="48"
        height="48"
        className="rounded-xl"
      />
    </div>
  )
}
