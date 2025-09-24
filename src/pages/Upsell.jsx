import React, { useEffect, useRef, useState } from "react";
import reviews from "../data/reviews";

const BASE_CHECKOUT = "https://whop.com/checkout/plan_yRLG1PNR7m8Yh?d2c=true";
const BUNDLE_CHECKOUT = "https://whop.com/checkout/plan_SLl41ao4uJJ9b?d2c=true";

const perks = [
  "Weekly live hot seats and teardown calls",
  "5× templates, prompts, and swipe files updated monthly",
  "Private deal room with collabs and client leads",
  "Accountability pod to keep you shipping every week",
];

const deliverables = [
  {
    title: "Launch control center",
    copy:
      "Plug into curated Notion dashboards, executive templates, and daily prompt drops so every campaign runs like a system.",
  },
  {
    title: "Creator AI vault",
    copy:
      "Access 200+ advanced prompt packs, brand voice kits, and swipe folders that update monthly for fresh inspiration.",
  },
  {
    title: "Revenue acceleration pods",
    copy:
      "Join micro-mastery cohorts where peers review funnels, ad angles, and automations to speed up monetization.",
  },
  {
    title: "Support line to the team",
    copy:
      "Drop questions into the private channel and get answers from Kevin, coaches, and top community operators.",
  },
];

const testimonials = reviews.slice(0, 2).map((review) => ({
  name: review.name,
  role: "Verified Member",
  quote: review.headline,
}));

export default function Upsell() {
  const iframeRef = useRef(null);
  const [iframeReady, setIframeReady] = useState(false);
  const [iframeBlocked, setIframeBlocked] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!iframeReady) {
        setIframeBlocked(true);
      }
    }, 4000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [iframeReady]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#060B19] via-[#0B1532] to-[#060B19] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <header className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-200">
            One-Time Bundle Offer
          </span>
          <h1 className="mt-6 text-4xl font-black text-yellow-300 sm:text-5xl">
            Unlock the Pro Community for <span className="text-white">$9.99 today</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-yellow-100/85 sm:text-lg">
            Normally $99/month. Get founder-level access to advanced prompts, weekly coaching, and a private network. Cancel anytime — keep everything you download.
          </p>
        </header>

        <section className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_65px_-40px_rgba(8,9,27,1)] backdrop-blur">
              <h2 className="text-xl font-semibold text-white">Here’s what’s inside</h2>
              <ul className="mt-4 space-y-3 text-sm text-yellow-100/85">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-yellow-400/20 text-xs font-bold text-yellow-300">
                      ✓
                    </span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid gap-4 rounded-2xl border border-yellow-400/40 bg-yellow-400/10 px-5 py-4 text-yellow-100/90">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-200">Today Only</p>
                <p className="text-2xl font-bold text-white">
                  $9.99<span className="ml-2 text-base font-normal text-yellow-200/80">(normally $99)</span>
                </p>
                <p className="text-sm">
                  Lock in discounted access for your first month. Cancel anytime with one click — no questions asked.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">What members are saying</h3>
              <div className="mt-4 space-y-5">
                {testimonials.map((t) => (
                  <blockquote key={t.name} className="rounded-2xl bg-[#0F1D3C]/80 p-4 text-sm leading-relaxed text-yellow-100/80">
                    “{t.quote}”
                    <footer className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-200">
                      {t.name} · {t.role}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>

          <aside className="sticky top-8 space-y-6 rounded-3xl border border-yellow-400/40 bg-[#0B1532]/90 p-7 shadow-[0_25px_65px_-35px_rgba(8,9,27,1)] backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-yellow-100/80">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-200">Fast Track</p>
              <p className="mt-2 text-sm leading-relaxed">
                The Pro Community overlays your sprint with advanced launch systems, weekly playbooks, and live call replays so you never stall.
              </p>
            </div>
            <div className="rounded-2xl bg-yellow-400/15 p-4 text-yellow-100/85">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-200">Lifetime Guarantee</p>
              <p className="mt-2 text-sm leading-relaxed">
                Try it for a month. Not a fit? Email us and we’ll refund your first payment — keep the downloads.
              </p>
            </div>
            <a
              href={BUNDLE_CHECKOUT}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-yellow-400 px-6 py-3 text-base font-semibold text-[#0B1220] shadow-lg shadow-yellow-400/30 transition hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              Yes, add the Pro Community
            </a>
            <a
              href={BASE_CHECKOUT}
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
            >
              No thanks, continue without it
            </a>
            <p className="text-center text-[11px] uppercase tracking-[0.3em] text-yellow-200/70">
              Decision locks when this page closes.
            </p>
          </aside>
        </section>

        <section className="mt-16 grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_65px_-40px_rgba(8,9,27,1)] backdrop-blur lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-200">Everything you unlock</p>
            <h2 className="text-3xl font-bold text-yellow-300 sm:text-4xl">Stacked deliverables to scale faster</h2>
            <p className="text-sm leading-relaxed text-yellow-100/85">
              We designed the Pro Community to be your execution layer. These are the exact deliverables you’ll see once you upgrade—no guesswork, no fluff.
            </p>
            <ul className="space-y-4 text-sm text-yellow-100/85">
              {deliverables.map((item) => (
                <li key={item.title} className="rounded-2xl border border-white/10 bg-[#0F1D3C]/80 p-4">
                  <p className="text-base font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-yellow-100/80">{item.copy}</p>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                href={BUNDLE_CHECKOUT}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-yellow-400 px-6 py-3 text-base font-semibold text-[#0B1220] shadow shadow-yellow-400/30 transition hover:-translate-y-0.5 hover:bg-yellow-300 sm:w-auto"
              >
                Upgrade for $9.99
              </a>
              <span className="text-xs uppercase tracking-[0.3em] text-yellow-200/70">
                Instant access · Cancel anytime
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl border border-yellow-400/40 bg-[#0B1532]/90 p-5 text-yellow-100/85">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-200">Checkout without leaving</p>
              <p className="mt-2 text-sm leading-relaxed">
                Prefer to stay on this page? Use the embedded checkout below. Mobile users can hit the button under the frame if the embed feels cramped.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#060B19] shadow-[0_25px_65px_-40px_rgba(8,9,27,1)]">
              {!iframeReady && !iframeBlocked ? (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#060B19]">
                  <p className="text-sm text-yellow-100/70">Loading checkout…</p>
                </div>
              ) : null}
              {iframeBlocked ? (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#060B19]/95 px-6 text-center">
                  <p className="text-sm font-semibold text-white">Checkout blocked by browser</p>
                  <p className="text-xs text-yellow-100/75">
                    Some browsers prevent embeds for security. Tap the button below to open the secure checkout in a new tab.
                  </p>
                  <a
                    href={BUNDLE_CHECKOUT}
                    className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-5 py-2 text-sm font-semibold text-[#0B1220] shadow shadow-yellow-400/30 transition hover:-translate-y-0.5 hover:bg-yellow-300"
                  >
                    Open checkout
                  </a>
                </div>
              ) : null}
              <iframe
                title="Join the Pro Community"
                src={BUNDLE_CHECKOUT}
                ref={iframeRef}
                className="h-[560px] w-full"
                loading="lazy"
                sandbox="allow-forms allow-scripts allow-popups allow-same-origin"
                allow="payment"
                onLoad={() => setIframeReady(true)}
              />
            </div>
            <a
              href={BUNDLE_CHECKOUT}
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
            >
              Open checkout in a new tab
            </a>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-center text-2xl font-bold text-yellow-300 sm:text-3xl">Verified community reviews</h2>
          <p className="mt-4 text-center text-sm text-yellow-100/75">
            Screenshots pulled straight from the Pro Community dashboard.
          </p>
          <div className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="snap-center min-w-[260px] rounded-3xl border border-white/10 bg-[#0F1D3C]/90 p-5 text-left shadow-[0_20px_60px_-35px_rgba(8,9,27,0.95)] backdrop-blur"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-yellow-400/15 text-lg">
                    <span aria-hidden="true">{review.emoji}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{review.name}</p>
                    <div className="mt-1 flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <svg
                          key={idx}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-3.5 w-3.5 text-yellow-300"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.034a1 1 0 00-1.175 0l-2.802 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-yellow-100/80">{review.headline}</p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-yellow-200/70">
                  {review.date}
                  {review.after ? <span className="ml-2 text-yellow-200/60">· {review.after}</span> : null}
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-16 text-center text-xs text-yellow-100/60">
          <a href="/" className="font-semibold text-yellow-200 transition hover:text-white">
            ← Return to the sprint overview
          </a>
        </footer>
      </div>
    </main>
  );
}
