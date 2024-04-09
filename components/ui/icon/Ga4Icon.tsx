import Image from "next/image"

export default function Ga4Icon() {
  return (
    <div className="w-12 h-12 animate-pulse mb-3">
      <Image
        src="/ga4.png"
        alt="ga4 logo" 
        width="48"
        height="48"
        className="rounded-xl"
      />
    </div>
  )
}
