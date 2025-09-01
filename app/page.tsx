import Link from "next/link"

//กันลืม rafce ,rfce ,rfc
const page = async() => {
  return (
    <>
    <nav>
      <div className="flex gap-4 text-7xl">
      <Link href="/USE_TEST">USE_TEST</Link>
      </div>
    </nav>
    </>
  )
}
export default page
