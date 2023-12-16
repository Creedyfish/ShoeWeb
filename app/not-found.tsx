import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-28 text-slate-50 font-sans container mx-auto w-full flex justify-center h-screen items-center">
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-6xl  font-medium">404 Not Found</h1>
        <p className="text-2xl ">Could not find requested resource</p>
        <Link href="/" className="">
          Return Home
        </Link>
      </div>
    </div>
  );
}
