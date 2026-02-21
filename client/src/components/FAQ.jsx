import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer: 'I offer branding, creative design, user-focused product design, and responsive website development. From research to launch, I help bring ideas to life.',
    open: true,
  },
  { id: 2, question: 'How fast will I receive my work?', answer: 'Timelines depend on project scope. I’ll provide a clear schedule at the start and keep you updated throughout.', open: false },
  { id: 3, question: "What's your refund policy?", answer: 'I work in phases with clear deliverables. If a phase doesn’t meet the agreed scope, we’ll fix it or discuss alternatives.', open: false },
  { id: 4, question: 'What if I have a single project?', answer: 'Single projects are welcome. I’ll scope the work and deliver on time and on budget.', open: false },
  { id: 5, question: 'Do you offer ongoing support?', answer: 'Yes. I offer retainer and support options for maintenance and iterations after launch.', open: false },
  { id: 6, question: 'Are there any hidden costs?', answer: 'No. All costs are outlined in the proposal. Any changes that affect scope are discussed before work continues.', open: false },
];

export default function FAQ() {
  const [items, setItems] = useState(faqs);

  const toggle = (id) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, open: !item.open } : { ...item, open: false }))
    );
  };

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-accent">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <h2 className="font-display font-bold text-2xl text-white">Support & FAQs</h2>
        </div>
        <p className="text-white/80 mb-10">
          Not sure yet? Have some questions? Here are the most frequently asked.
        </p>
        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl border overflow-hidden transition-colors ${
                item.open ? 'border-accent/30 bg-dark-muted' : 'border-white/5 bg-dark-muted/50'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-display font-medium text-white">{item.question}</span>
                <span className="flex-shrink-0 text-white/50">
                  <svg
                    className={`w-5 h-5 transition-transform ${item.open ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {item.open && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-white/80 text-sm leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
