import { newTracker, trackPageView } from "@snowplow/browser-tracker";
import { trackSocialInteraction, SiteTrackingPlugin } from "@snowplow/browser-plugin-site-tracking";

export function initializeSnowplow() {
  newTracker("sp", "https://4e30d199-be88-4f6b-8578-9c01f4f7a020.app.try-snowplow.com", {
    appId: "try-snowplow",
    platform: "web",
    cookieDomain: "https://my-website.com",
    plugins: [SiteTrackingPlugin()],
  });

  trackPageView();
  console.log("456");
}

// trackPageView();
