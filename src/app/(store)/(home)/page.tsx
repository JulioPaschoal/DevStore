import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <div className="grid max-h[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/moletom-never-stop-learning.png"
          className=""
          width={920}
          height={920}
          quality={100}
          alt=""
        />
      </Link>
      <Link
        href="/"
        className="group col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/moletom-ai-side.png"
          className=""
          width={920}
          height={920}
          quality={100}
          alt=""
        />
      </Link>
      <Link
        href="/"
        className="group col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/moletom-never-stop-learning.png"
          className=""
          width={920}
          height={920}
          quality={100}
          alt=""
        />
      </Link>
    </div>
  )
}
