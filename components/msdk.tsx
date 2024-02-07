// components/msdk.tsx
"use client";

import { useEffect, useRef, useState } from 'react';

const appKey = 'yxszifc05b1bidcsqfr60806d'; // Use your actual Matterport SDK key

export function Msdk() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadSDK() {
      // Dynamically import to avoid SSR / ReferenceError: self is not defined
      const { setupSdk } = await import('@matterport/sdk');
      if (container.current) {
        const mpSdk = await setupSdk(appKey, {
          container: container.current.id,
          iframeAttributes: { width: '800px', height: '500px' },
        });
        console.log('Matterport SDK Loaded', mpSdk);
      }
    }
    loadSDK();
  }, []);

  return (
    <div ref={container} id="app" style={{ width: '800px', height: '500px' }}>
      {/* The Matterport SDK will render its content inside this div */}
    </div>
  );
}
