import QuoteForm from '@/components/QuoteForm';

export default function QuotePage() {
  return (
    <main className="min-h-screen">
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold">Request a Quote</h1>
      </div>
      <QuoteForm />
    </main>
  );
} 