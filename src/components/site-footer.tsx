import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-border py-6 text-xs text-muted-foreground">
      <div className="max-w-6xl mx-auto px-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>&copy; {new Date().getFullYear()} Polly. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <Link
            href="/privacy"
            className="hover:text-foreground underline-offset-4 hover:underline"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="hover:text-foreground underline-offset-4 hover:underline"
          >
            Terms
          </Link>
          <Link
            href="/contact"
            className="hover:text-foreground underline-offset-4 hover:underline"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
