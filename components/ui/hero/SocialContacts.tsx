import LinkedInButton from "../button/LinkedInButton"

interface SocialContactsProps {
  header: string,
  description: string
}

export default function SocialContacts({ header, description }: SocialContactsProps) {
  return (
    <section className="w-full py-32 mx-auto">
      <div className="container mx-auto grid items-center gap-4 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center">{header}</h2>
          <p className="max-w-[600px] text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="flex justify-center">
          <div className="mr-8">
            <LinkedInButton />
          </div>
          <div>
          <LinkedInButton />
          </div>
        </div>
      </div>
    </section>
  )
}