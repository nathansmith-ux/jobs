import Image from "next/image"

export default function RubyOnRailsIcon() {
  return (
    <div className="w-12 h-12 animate-pulse mb-3">
      <Image
        src="/ruby.png"
        alt="ruby on rails logo" 
        width="48"
        height="48"
        className="rounded-xl"
      />
    </div>
  )
}
