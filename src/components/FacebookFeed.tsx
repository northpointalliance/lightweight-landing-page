
import { useEffect, useRef } from 'react';

interface FacebookFeedProps {
  pageUrl: string;
  width?: number;
  height?: number;
  tabs?: string;
  small?: boolean;
  adapt?: boolean;
  hidecover?: boolean;
}

const FacebookFeed = ({
  pageUrl,
  width = 340,
  height = 500,
  tabs = "timeline",
  small = false,
  adapt = true,
  hidecover = false
}: FacebookFeedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Facebook SDK
    const loadFacebookSDK = () => {
      if (window.FB) {
        // If FB SDK is already loaded, parse the container
        if (containerRef.current) {
          window.FB.XFBML.parse(containerRef.current);
        }
        return;
      }
      
      // Add Facebook SDK script
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/he_IL/sdk.js#xfbml=1&version=v18.0';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
      
      // Define the FB init function
      window.fbAsyncInit = function() {
        window.FB.init({
          xfbml: true,
          version: 'v18.0'
        });
      };
    };

    loadFacebookSDK();
    
    // Cleanup function
    return () => {
      // No cleanup needed for the SDK as it should remain available
    };
  }, [pageUrl]);

  return (
    <div ref={containerRef} className="facebook-feed-container overflow-hidden rounded-lg shadow-lg">
      <div 
        className="fb-page" 
        data-href={pageUrl}
        data-width={width}
        data-height={height}
        data-tabs={tabs}
        data-small-header={small}
        data-adapt-container-width={adapt}
        data-hide-cover={hidecover}
        data-show-facepile="true"
      >
        <blockquote cite={pageUrl} className="fb-xfbml-parse-ignore">
          <a href={pageUrl} className="hebrew">לחם טוב - מאפייה משפחתית</a>
        </blockquote>
      </div>
    </div>
  );
};

export default FacebookFeed;
