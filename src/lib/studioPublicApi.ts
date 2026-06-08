export type StudioPlanFeatures = {
  locations: boolean;
  scheduling: boolean;
  prayerTimes: boolean;
  messages: boolean;
  streaming: boolean;
  adsAi: boolean;
  devices: boolean;
  nowPlaying: boolean;
};

export type StudioPublicPlan = {
  slug: string;
  name: string;
  description: string | null;
  priceMonthlyCents: number;
  priceYearlyCents: number;
  currency: string;
  maxLocations: number;
  adsAiCreditsPerMonth: number;
  features: StudioPlanFeatures;
  isDefault: boolean;
  sortOrder: number;
};

export type StudioPricingSnapshot = {
  plans: StudioPublicPlan[];
  trial: {
    enabled: boolean;
    days: number;
  };
  updatedAt: string;
};

const EMPTY_SNAPSHOT: StudioPricingSnapshot = {
  plans: [],
  trial: { enabled: false, days: 14 },
  updatedAt: new Date(0).toISOString()
};

function studioApiBase(): string {
  const base = (
    process.env.STUDIO_PUBLIC_API_URL ??
    process.env.NEXT_PUBLIC_STUDIO_API_URL ??
    "https://studio.qaissar.com"
  ).replace(/\/$/, "");
  return base;
}

/** Live plans from Qaissar Studio admin (revalidates every minute). */
export async function fetchStudioPricing(): Promise<StudioPricingSnapshot> {
  const url = `${studioApiBase()}/api/public/subscription-plans`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 }
    });
    if (!res.ok) {
      console.warn("[studioPublicApi] pricing fetch failed:", res.status);
      return EMPTY_SNAPSHOT;
    }
    const data = (await res.json()) as StudioPricingSnapshot;
    if (!Array.isArray(data.plans)) {
      return EMPTY_SNAPSHOT;
    }
    return {
      plans: data.plans,
      trial: data.trial ?? EMPTY_SNAPSHOT.trial,
      updatedAt: data.updatedAt ?? new Date().toISOString()
    };
  } catch (err) {
    console.warn("[studioPublicApi] pricing fetch error:", err);
    return EMPTY_SNAPSHOT;
  }
}

export function studioAppUrl(): string {
  return (
    process.env.NEXT_PUBLIC_STUDIO_APP_URL ?? "https://studio.qaissar.com"
  ).replace(/\/$/, "");
}
