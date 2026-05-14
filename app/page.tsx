export default function Home() {
  const faqs = [
    {
      q: "How does the AI analyze my Shorts?",
      a: "We extract the first 3 seconds of your uploaded Short and run it through OpenAI Vision API to score pacing, visual contrast, text clarity, and emotional pull — then generate specific rewrite suggestions."
    },
    {
      q: "Who is this built for?",
      a: "YouTube creators with 10k+ subscribers who want data-driven feedback on hooks instead of guessing why some Shorts flop."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel from your Lemon Squeezy customer portal in one click. No questions, no friction."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-4 py-16 flex flex-col gap-16">
      {/* Hero */}
      <section className="flex flex-col gap-6 text-center">
        <span className="text-xs uppercase tracking-widest text-[#58a6ff] font-semibold">
          AI Hook Optimizer
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Stop Losing Viewers in the{" "}
          <span className="text-[#58a6ff]">First 3 Seconds</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto">
          Upload your YouTube Short and get AI-powered hook analysis with
          actionable suggestions to maximize retention — before you publish.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Optimizing — $11/mo
          </a>
          <span className="text-sm text-[#8b949e]">Cancel anytime</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8b949e] mt-2">
          <span>✓ First 3-second AI analysis</span>
          <span>✓ Hook rewrite suggestions</span>
          <span>✓ Retention score</span>
          <span>✓ Unlimited uploads</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col gap-6 items-center">
        <h2 className="text-2xl font-bold text-white">Simple Pricing</h2>
        <div className="w-full max-w-sm border border-[#30363d] rounded-2xl p-8 flex flex-col gap-5 bg-[#161b22]">
          <div className="flex items-end gap-2">
            <span className="text-5xl font-extrabold text-white">$11</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm">
            Everything you need to turn weak hooks into scroll-stopping openers.
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            {[
              "AI analysis of first 3 seconds",
              "Hook score + retention prediction",
              "Specific rewrite suggestions",
              "Unlimited Short uploads",
              "Analysis history dashboard",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="mt-2 bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors text-center text-base"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] text-center">Secured by Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white text-center">FAQ</h2>
        <div className="flex flex-col gap-4">
          {faqs.map(({ q, a }) => (
            <div
              key={q}
              className="border border-[#30363d] rounded-xl p-5 bg-[#161b22] flex flex-col gap-2"
            >
              <p className="font-semibold text-white">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pt-4 border-t border-[#21262d]">
        © {new Date().getFullYear()} YouTube Shorts Hook Optimizer. All rights reserved.
      </footer>
    </main>
  );
}
