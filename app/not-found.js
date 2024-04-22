import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex w-ful flex-col items-center justify-center bg-black h-screen">
      <h2 className="text-3xl text-primaryColor font-bold">Page Not Found</h2>
      <h2 className="text-xl text-primaryText/80 mt-2 font-bold">
        {"Looks like this page doesn't exist"}
      </h2>
      <Link className="text-primaryColor underline mt-4" href="/home">
        Go back home
      </Link>
    </div>
  );
}
