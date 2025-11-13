import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col gap-3 min-w-[300px]">
        <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>

        <Link
          className="px-3 py-2 border border-white text-white text-center cursor-pointer"
          href="/signin"
        >
          Sign in to Todo app
        </Link>
        <Link
          className="px-3 py-2 border border-white text-white text-center cursor-pointer"
          href="/signup"
        >
          Sign up to Todo app
        </Link>
      </div>
    </div>
  );
}
