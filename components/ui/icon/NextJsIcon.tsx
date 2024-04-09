import Image from "next/image"

export default function NextJsIcon() {
  return (
    <div className="w-12 h-12 animate-pulse mb-3">
      <Image
        src="/next.png"
        alt="nextjs logo" 
        width="48"
        height="48"
        className="rounded-xl"
      />
    </div>
  )
}
