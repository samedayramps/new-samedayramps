import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg mb-8">
          We&apos;ve received your quote request and will get back to you shortly.
        </p>
        <Link 
          href="/" 
          className="btn btn-primary"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
} 