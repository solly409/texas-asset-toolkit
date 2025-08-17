// Coming Soon page for Texas Asset Toolkit with embedded ConvertKit form in React and logo favicon

import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function ComingSoon() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://f.convertkit.com/ckjs/ck.5.js";
    script.async = true;
    document.body.appendChild(script);

    // Add favicon dynamically
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "/logo.png";
    favicon.type = "image/png";
    document.head.appendChild(favicon);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(favicon);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 p-8">
      {/* Logo and Title */}
      <div className="flex flex-col items-center space-y-4 mb-8">
        <img src="/logo.png" alt="Texas Asset Toolkit Logo" className="h-24 w-auto" />
        <h1 className="text-4xl font-bold text-center text-blue-800">Texas Asset Toolkit</h1>
        <p className="text-lg text-center text-gray-600 max-w-xl">
          Your essential guide to protecting property, minimizing risk, and securing your legacy — built specifically for Texans.
        </p>
      </div>

      {/* Teasers */}
      <div className="max-w-2xl text-center space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-red-700">Coming August 2025</h2>
          <p className="text-gray-700 mt-2">
            Our toolkit includes clear explanations, editable templates, and video walkthroughs for:
          </p>
          <ul className="list-disc list-inside text-left mt-4 text-gray-700">
            <li>Texas Homestead Protections</li>
            <li>Entity Structures: LLC, Series LLC, and LP</li>
            <li>Deeds and Title Fundamentals</li>
            <li>Transfer on Death & Lady Bird Deeds</li>
            <li>And more...</li>
          </ul>
        </div>

        {/* Embedded ConvertKit form */}
        <div className="mt-8">
          <p className="text-md text-gray-800">
            Want early access or to be notified when we launch?
          </p>
          <form
            action="https://app.kit.com/forms/8282825/subscriptions"
            className="seva-form formkit-form"
            method="post"
            data-uid="6adc491df2"
            data-format="inline"
            data-version="5"
            style={{ maxWidth: "500px", margin: "2rem auto" }}
          >
            <input
              type="email"
              name="email_address"
              placeholder="Email Address"
              required
              className="border border-gray-300 p-2 w-full mb-2"
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 w-full hover:bg-blue-800"
            >
              Join the Waitlist
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Texas Asset Toolkit. All rights reserved.
      </footer>

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}
