import Link from "next/link";

export default function LayoutRentFemboy({ children }) {
  return (
    <div className="min-h-screen bg-pinky-50 text-gray-800">
      <header className="bg-pinky-100 border-b">
        <div className="max-w-6xl mx-auto p-4 flex justify-between">
          <Link href="/ayuAtama/rent-femboy/" className="font-bold text-pinky-600">
            RentFemboy
          </Link>
          <nav className="space-x-4">
            <Link href="/ayuAtama/rent-femboy/profiles">Browse</Link>
            <Link href="/ayuAtama/rent-femboy/auth/login">Login</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">{children}</main>

      <footer className="border-t bg-pinky-100 p-4 text-sm text-center">
        <div className="space-x-4">
          <Link href="/ayuAtama/rent-femboy/legal/terms">Terms</Link>
          <Link href="/ayuAtama/rent-femboy/legal/privacy">Privacy</Link>
          <Link href="/ayuAtama/rent-femboy/legal/disclaimer">Disclaimer</Link>
          <Link href="/ayuAtama/rent-femboy/contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
