import { newTracker, trackPageView, enableActivityTracking } from "@snowplow/browser-tracker";
import {
  LinkClickTrackingPlugin,
  enableLinkClickTracking,
} from "@snowplow/browser-plugin-link-click-tracking";
import { trackSocialInteraction, SiteTrackingPlugin } from "@snowplow/browser-plugin-site-tracking";

export function initializeSnowplow() {
  newTracker("sp", "https://4e30d199-be88-4f6b-8578-9c01f4f7a020.app.try-snowplow.com", {
    appId: "try-snowplow",
    platform: "web",
    cookieDomain: "localhost:3000",
    // cookieDomain: null,
    // discoverRootDomain: true,
    // cookieName: "_sp_",
    // cookieSameSite: "Lax", // Recommended
    // cookieSecure: true,
    plugins: [SiteTrackingPlugin(), LinkClickTrackingPlugin()],
  });

  enableActivityTracking({
    minimumVisitLength: 30,
    heartbeatDelay: 10,
  });

  enableLinkClickTracking();

  trackPageView();
  console.log("456");
}

// trackPageView();
