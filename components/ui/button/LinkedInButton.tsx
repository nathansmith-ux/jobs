import Link from "next/link"

export default function LinkedInButton() {
  return (
    <Link
      href="https://www.linkedin.com/in/nathan-smith-1a5814207/"
    >
      <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
        View My LinkedIn
      </button>
    </Link>
  )
}