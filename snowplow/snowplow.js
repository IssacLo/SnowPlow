import Analytics from "analytics";
import snowplowPlugin from "@analytics/snowplow";

const analytics = Analytics({
  app: "newTracker",
  plugins: [
    // Minimal recommended configuration
    snowplowPlugin({
      name: "try",
      scriptSrc: "https://4e30d199-be88-4f6b-8578-9c01f4f7a020.app.try-snowplow.com/try.js",
      collectorUrl: "https://4e30d199-be88-4f6b-8578-9c01f4f7a020.app.try-snowplow.com",
      platform: "web",
      forceSecureTracker: true,
      trackerSettings: {
        appId: "try-snowplow",
        contexts: {
          webPage: true,
          performanceTiming: true,
        },
      },
    }),
  ],
});

// Enable some automatic tracking before page event
analytics.on("initialize:snowplow", ({ instance }) => {
  instance.plugins.snowplow.enableActivityTracking(10, 10);
  instance.plugins.snowplow.enableLinkClickTracking();
});

//analytics.page();

//export default analytics;
