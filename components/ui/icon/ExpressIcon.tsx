import Image from "next/image"

export default function ExpressIcon() {
  return (
    <div className="w-12 h-12 animate-pulse mb-3">
      <Image
        src="/express.png"
        alt="express js logo" 
        width="48"
        height="48"
        className="rounded-xl"
      />
    </div>
  )
}
