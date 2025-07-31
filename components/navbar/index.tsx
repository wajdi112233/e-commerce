import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-gray-900 w-full p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-extrabold text-emerald-600">
          SHOPIFY
        </Link>

        <div className="flex items-center gap-20 justify-beetween">
          <Link
            href="/solutions"
            className="text-white hover:text-gray-900 whitespace-nowrap flex "
          >
            Solutions
          </Link>

          <Link
            href="/pricing"
            className="text-white hover:text-gray-900 whitespace-nowrap"
          >
            Pricing
          </Link>

          <Link
            href="/resources"
            className="text-white hover:text-gray-900 whitespace-nowrap"
          >
            Resources
          </Link>

          <Link
            href="/enterprise"
            className="text-white hover:text-gray-900 whitespace-nowrap"
          >
            Enterprise ~
          </Link>

          <Link
            href="/whats-new"
            className="text-white hover:text-gray-900 whitespace-nowrap"
          >
            What's new
          </Link>
        </div>

        <Link
          href="/login"
          className="text-white hover:text-gray-900 whitespace-nowrap"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}
