import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          Don&apos;t worry, even the best make mistakes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={"/"}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition-colors flex items-center justify-center"
          >
            <ArrowLeft className="size-4 mr-2" />
            Go back to Dashboard
          </Link>
        </div>
      </div>

      <footer className="text-sm text-muted-foreground  mt-12 text-center">
        if you think this is a bug, please report it to{" "}
        <Link
          href="https://github.com/pray3m"
          className="underline text-accent-foreground hover:text-accent-foreground/80"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/pray3m
        </Link>
      </footer>
    </div>
  );
}

export default NotFoundPage;
