import Script from "next/script";
import { GOOGLE_ADS_CONVERSION } from "@/lib/google-ads";

export default function GoogleAdsConversion() {
  return (
    <Script id="google-ads-conversion" strategy="afterInteractive">
      {`
        gtag('event', 'conversion', {'send_to': '${GOOGLE_ADS_CONVERSION}'});
      `}
    </Script>
  );
}
