import { useEffect, useState } from 'react'
import enquire from 'enquire.js'

if (typeof window !== 'undefined') {
  // Fix: enquire relies on the matchMedia API. It utilises both matchMedia and matchMedia.addListener.
  // Unfortunately the matchMedia API isn't universally supported in browsers
  const matchMediaPolyfill = (mediaQuery: string) => {
    return {
      media: mediaQuery,
      matches: false,
      addListener() {
      },
      removeListener() {
      },
    };
  };
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

export function useMobileLayout(): boolean {
  const [isMobile, setIsMobile] = useState(false);
  const mobileQuery = 'only screen and (max-width: 767.99px)'

  useEffect(() => {
    const handler = {
      match: function() { setIsMobile(true) },
      unmatch : function() { setIsMobile(false) }
    }

    enquire.register(mobileQuery, handler)
    return () => {
      enquire.unregister(mobileQuery , handler)
    }
  })
  return isMobile
}