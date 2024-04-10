import Link from "next/link"

interface MobileNavBarProps {
  navItems: string[]
}

export default function MobileNavBar({ navItems }: MobileNavBarProps) {
  return (
    <div>
      <ul className="p-6">
        <li className="mb-3 text-lg">
          <Link href="#home">Home</Link>
        </li>
        <li className="mb-3 text-lg">
          <Link href="#frontend-tech-stack">{navItems[0]}</Link>
        </li>
        <li className="mb-3 text-lg">
          <Link href="#why-work">{navItems[1]}</Link>
        </li>
        <li className="mb-3 text-lg">
          <Link href="#meet-tail-section">{navItems[2]}</Link>
        </li>
        <li className="text-lg">
          <Link href="#about-me">{navItems[3]}</Link>
        </li>
      </ul>
    </div>
  )
}