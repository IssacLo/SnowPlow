import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";
import { initializeSnowplow } from "../snowPlow1";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("123");
    initializeSnowplow();
  });

  return (
    <div>
      {/* <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            function getMetaContentByName(name,content){
              var content = (content==null)?'content':content;
              return document.querySelector("meta[name='"+name+"']").getAttribute(content);
            }
            var cg_n = getMetaContentByName("WT.cg_n");
            var cg_s = getMetaContentByName("WT.cg_s");
            ;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
            p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
            };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
            n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","https://4e30d199-be88-4f6b-8578-9c01f4f7a020.app.try-snowplow.com/try.js",
            "snowplow"));
            window.snowplow('newTracker', 'try', '4e30d199-be88-4f6b-8578-9c01f4f7a020.app.try-snowplow.com', { appId: "try-snowplow", 
            platform: "web",
            forceSecureTracker: true,
            contexts: {
              webPage: true, 
              performanceTiming: true 
            }});
            window.snowplow('trackPageView');
      
            `,
          }}
        />
      </Head> */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
