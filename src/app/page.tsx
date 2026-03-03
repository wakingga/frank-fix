import { RateCalculator } from "@/components/RateCalculator";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8 text-center sm:p-20">
      <main className="flex w-full max-w-2xl flex-col items-center gap-8 flex-1 mt-10">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-slate-900 dark:text-white">
          Frank&apos;s Friendly Fixing
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 sm:text-xl">
          Fair exchange rate for EUR/CHF peer-to-peer swaps.
        </p>

        <div className="w-full my-4">
          <RateCalculator />
        </div>

        <div className="w-full">
          <WaitlistForm />
        </div>
      </main>

      <footer className="w-full max-w-2xl mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 text-center">
        <p className="mb-2"><strong>Legal Disclaimer:</strong> Frank is a tool for finding fair exchange rates between peers. We are not a bank, broker, or financial institution. Frank does not hold, transfer, or manage any funds. Any exchange of currency must be conducted independently between consenting users at their own risk.</p>
        <p>&copy; {new Date().getFullYear()} Frank&apos;s Friendly Fixing. All rights reserved.</p>
      </footer>
    </div>
  );
}
