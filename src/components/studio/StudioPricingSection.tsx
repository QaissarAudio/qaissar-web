import Link from 'next/link'
import { Check, Sparkles } from 'lucide-react'

import {
  fetchStudioPricing,
  studioAppUrl,
  type StudioPlanFeatures,
  type StudioPublicPlan,
} from '@/lib/studioPublicApi'

const FEATURE_LABELS: Record<keyof StudioPlanFeatures, string> = {
  locations: 'Multi-location management',
  scheduling: 'Advanced scheduling',
  prayerTimes: 'Prayer times & azan',
  messages: 'Timed messages & jingles',
  streaming: 'Secure live streaming',
  adsAi: 'AI voice ads',
  devices: 'Device management',
  nowPlaying: 'Now playing dashboard',
}

function formatMoney(cents: number, currency: string): string {
  try {
    return new Intl.NumberFormat('en', {
      style: 'currency',
      currency: currency || 'USD',
      maximumFractionDigits: cents % 100 === 0 ? 0 : 2,
    }).format(cents / 100)
  } catch {
    return `$${(cents / 100).toFixed(2)}`
  }
}

function enabledFeatures(features: StudioPlanFeatures): string[] {
  return (Object.keys(FEATURE_LABELS) as (keyof StudioPlanFeatures)[])
    .filter((key) => features[key])
    .map((key) => FEATURE_LABELS[key])
}

function PlanCard({
  plan,
  trialEnabled,
  trialDays,
  studioUrl,
}: {
  plan: StudioPublicPlan
  trialEnabled: boolean
  trialDays: number
  studioUrl: string
}) {
  const features = enabledFeatures(plan.features)
  const monthly = formatMoney(plan.priceMonthlyCents, plan.currency)
  const yearly = formatMoney(plan.priceYearlyCents, plan.currency)
  const showYearly =
    plan.priceYearlyCents > 0 &&
    plan.priceYearlyCents < plan.priceMonthlyCents * 12

  return (
    <article
      className={[
        'flex h-full flex-col rounded-2xl border p-6 md:p-8 shadow-sm transition-shadow',
        plan.isDefault
          ? 'border-brand-red/40 bg-gradient-to-b from-white to-red-50/40 shadow-[0_12px_40px_rgba(196,30,58,0.08)] ring-1 ring-brand-red/20'
          : 'border-black/8 bg-white hover:shadow-md',
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-extrabold text-brand-black">{plan.name}</h3>
          {plan.description ? (
            <p className="mt-2 text-sm font-light leading-relaxed text-brand-gray-800">
              {plan.description}
            </p>
          ) : null}
        </div>
        {plan.isDefault ? (
          <span className="shrink-0 rounded-full bg-brand-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            Popular
          </span>
        ) : null}
      </div>

      <div className="mt-6">
        <p className="flex items-baseline gap-1">
          <span className="text-3xl font-extrabold text-brand-black">{monthly}</span>
          <span className="text-sm font-medium text-brand-gray-800">/ month</span>
        </p>
        {showYearly ? (
          <p className="mt-1 text-xs text-brand-gray-800">
            or {yearly} billed yearly
          </p>
        ) : null}
      </div>

      <ul className="mt-5 space-y-2 text-sm text-brand-gray-800">
        <li className="flex items-center gap-2 font-semibold text-brand-black">
          <Check className="h-4 w-4 shrink-0 text-brand-red" aria-hidden />
          Up to {plan.maxLocations} location{plan.maxLocations === 1 ? '' : 's'}
        </li>
        {plan.adsAiCreditsPerMonth > 0 ? (
          <li className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 shrink-0 text-brand-red" aria-hidden />
            {plan.adsAiCreditsPerMonth} AI voice ads / month
          </li>
        ) : null}
        {features.map((label) => (
          <li key={label} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden />
            <span>{label}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 pt-2">
        <a
          href={studioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={[
            'inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition-colors',
            plan.isDefault
              ? 'bg-brand-red text-white hover:bg-[#a81830]'
              : 'border border-brand-black/15 bg-white text-brand-black hover:border-brand-red/40 hover:text-brand-red',
          ].join(' ')}
        >
          {trialEnabled
            ? `Start ${trialDays}-day trial`
            : 'Get started'}
        </a>
      </div>
    </article>
  )
}

export async function StudioPricingSection() {
  const [{ plans, trial }, studioUrl] = await Promise.all([
    fetchStudioPricing(),
    Promise.resolve(studioAppUrl()),
  ])

  return (
    <section className="bg-[#f7f7f8] py-20 md:py-24" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 block text-[var(--text-body-sm)] font-semibold uppercase tracking-[0.12em] text-brand-red">
            Plans & pricing
          </span>
          <h2 className="text-[clamp(2rem,3vw,2.75rem)] font-extrabold leading-tight text-brand-black">
            Simple plans that scale with your locations
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-10 bg-brand-red" aria-hidden="true" />
          <p className="mt-6 text-[var(--text-body)] font-light leading-relaxed text-brand-gray-800">
            Pricing is managed in Qaissar Studio — changes in the admin panel appear here
            automatically. Pick a plan and manage billing inside your Studio account.
          </p>
          {trial.enabled ? (
            <p className="mt-4 text-sm font-semibold text-brand-black">
              Every plan includes a {trial.days}-day free trial — no credit card required to
              explore.
            </p>
          ) : null}
        </div>

        {plans.length > 0 ? (
          <div
            className={[
              'mt-12 grid gap-6',
              plans.length === 1
                ? 'max-w-md mx-auto'
                : plans.length === 2
                  ? 'md:grid-cols-2 max-w-4xl mx-auto'
                  : 'md:grid-cols-2 lg:grid-cols-3',
            ].join(' ')}
          >
            {plans.map((plan) => (
              <PlanCard
                key={plan.slug}
                plan={plan}
                trialEnabled={trial.enabled}
                trialDays={trial.days}
                studioUrl={studioUrl}
              />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-lg rounded-2xl border border-dashed border-black/15 bg-white px-6 py-10 text-center">
            <p className="text-sm text-brand-gray-800">
              Pricing is temporarily unavailable. Open Studio to sign in or contact us for a
              quote.
            </p>
            <a
              href={studioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full bg-brand-red px-5 py-2.5 text-sm font-bold text-white hover:bg-[#a81830]"
            >
              Go to Studio
            </a>
          </div>
        )}

        <p className="mt-10 text-center text-xs text-brand-gray-800">
          Need a custom deployment?{' '}
          <Link href="/about" className="font-semibold text-brand-red hover:underline">
            Contact us
          </Link>
          .
        </p>
      </div>
    </section>
  )
}

export default StudioPricingSection
