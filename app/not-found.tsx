import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-32 px-4 text-center bg-ivory text-espresso">
      <div className="max-w-md space-y-6">
        <span className="font-mono text-xs uppercase tracking-widest text-terracotta bg-terracotta/10 px-3 py-1 rounded-full font-semibold">
          404 &bull; Page Not Found
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal">
          Lost your way?
        </h1>
        <p className="text-muted font-sans text-sm leading-relaxed">
          The page you are looking for doesn&apos;t exist or has moved. Let&apos;s get you
          back to our services and salon booking.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <Button href="/" variant="primary" size="md">
            Return Home
          </Button>
          <Button href="/services" variant="secondary" size="md">
            View Services
          </Button>
        </div>
      </div>
    </div>
  );
}

