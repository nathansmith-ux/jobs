import Image from "next/image"

export default function ScreamingFrogIcon() {
  return (
    <div className="w-12 h-12 animate-pulse mb-3">
      <Image
        src="/screaming-frog.jpeg"
        alt="screaming frog logo" 
        width="48"
        height="48"
        className="rounded-xl"
      />
    </div>
  )
}
