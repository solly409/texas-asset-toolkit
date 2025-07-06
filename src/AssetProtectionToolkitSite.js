// Website structure and design for "Texas Asset Toolkit" with red, white, and blue color theme

export default function AssetProtectionToolkitSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="p-6 bg-blue-800 text-white shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Texas Asset Toolkit Logo" className="h-10 w-auto" />
          <h1 className="text-2xl font-bold">Texas Asset Toolkit</h1>
        </div>
        <nav className="space-x-4">
          <a href="#toolkit" className="hover:underline text-white">Toolkit</a>
          <a href="#blog" className="hover:underline text-white">Blog</a>
          <a href="#about" className="hover:underline text-white">About</a>
          <a href="#contact" className="hover:underline text-white">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="p-10 bg-red-700 text-center">
        <h2 className="text-4xl font-semibold mb-4 text-white">Protect Your Property, Business, and Legacy in Texas</h2>
        <p className="mb-6 text-lg text-white">Download our expert-designed, ready-to-use toolkit with templates, guides, and videos tailored for Texas residents.</p>
        <a href="#pricing" className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg shadow hover:bg-blue-800">Get the Toolkit</a>
      </section>

      {/* What’s Inside */}
      <section id="toolkit" className="p-10">
        <h3 className="text-3xl font-semibold mb-6 text-center text-red-800">What’s Included</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-xl shadow bg-white">
            <h4 className="text-xl font-bold mb-2 text-blue-800">Texas Homestead Exemption Guide</h4>
            <p>Clear explanation of exemptions with actionable steps.</p>
          </div>
          <div className="p-6 border rounded-xl shadow bg-white">
            <h4 className="text-xl font-bold mb-2 text-blue-800">Entity Comparison & Setup Checklist</h4>
            <p>LLC vs. Series LLC vs. LP – When and why to use each.</p>
          </div>
          <div className="p-6 border rounded-xl shadow bg-white">
            <h4 className="text-xl font-bold mb-2 text-blue-800">Editable Legal Templates</h4>
            <p>Downloadable and customizable documents in Word format.</p>
          </div>
          <div className="p-6 border rounded-xl shadow bg-white">
            <h4 className="text-xl font-bold mb-2 text-blue-800">Bonus Resources</h4>
            <p>Deed types guide, liability cheat sheet, and more.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="p-10 bg-blue-50 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-blue-900">Choose Your Toolkit</h3>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="p-6 border rounded-xl shadow w-full md:w-1/3 bg-white">
            <h4 className="text-xl font-bold mb-2 text-red-700">Starter Toolkit – $39</h4>
            <p className="mb-4">Perfect for DIY Texans who want a solid foundation.</p>
            <ul className="text-left mb-4 list-disc list-inside">
              <li><strong>Texas Homestead Exemption Guide</strong> — step-by-step home protection strategies</li>
              <li><strong>Entity Comparison Chart & Checklist</strong> — LLCs, Series LLCs, LPs</li>
              <li><strong>Editable Legal Templates</strong> — Word-format documents</li>
              <li><strong>Bonus Resource Sheet</strong> — deed types, liability cheat sheet</li>
            </ul>
            <p className="mb-4 text-sm">Delivered as PDF + Word files. Great for homeowners and small business owners.</p>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Buy Now</button>
          </div>

          <div className="p-6 border rounded-xl shadow w-full md:w-1/3 bg-white">
            <h4 className="text-xl font-bold mb-2 text-blue-700">Premium Toolkit – $129</h4>
            <p className="mb-4">Full protection with extras that save you time and headaches.</p>
            <ul className="text-left mb-4 list-disc list-inside">
              <li><strong>Everything in the Starter Toolkit</strong></li>
              <li><strong>Walkthrough Video Series</strong> — explanations from a Texas attorney</li>
              <li><strong>Lifetime Updates</strong> — new templates and guides as they’re added</li>
              <li><strong>Premium Templates</strong> — Series LLC, Trusts, affidavit samples</li>
              <li><strong>Priority Support Access</strong> — direct email support</li>
            </ul>
            <p className="mb-4 text-sm">Ideal for investors, landowners, and entrepreneurs.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy Now</button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-left max-w-3xl mx-auto">
          <h4 className="text-2xl font-semibold mb-4 text-center text-red-800">Frequently Asked Questions</h4>
          <div className="mb-6">
            <h5 className="font-bold">Is this toolkit a substitute for hiring a lawyer?</h5>
            <p>No. It’s a set of tools and explanations created by a Texas attorney — ideal for people who want to educate themselves or prepare before hiring legal counsel. But it’s not legal advice.</p>
          </div>
          <div className="mb-6">
            <h5 className="font-bold">Do I need a business to use this?</h5>
            <p>No. The Starter Toolkit is perfect for individuals, families, and property owners. The Premium version is great for anyone with assets in their name or running a business.</p>
          </div>
          <div className="mb-6">
            <h5 className="font-bold">Can I use this even if I already have a will or trust?</h5>
            <p>Yes. These tools complement existing estate planning documents and focus specifically on liability protection and asset structuring under Texas law.</p>
          </div>
          <div className="mb-6">
            <h5 className="font-bold">What format is the toolkit delivered in?</h5>
            <p>All documents are downloadable immediately. Templates are in Word format. Videos are hosted online with private access links.</p>
          </div>
          <div className="mb-6">
            <h5 className="font-bold">Is there a refund policy?</h5>
            <p>If you're not satisfied within 7 days of purchase, email us and we’ll make it right.</p>
          </div>
        </div>
      </section>

      {/* Blog Teasers */}
      <section id="blog" className="p-10">
        <h3 className="text-3xl font-semibold mb-6 text-center text-blue-800">Latest Blog Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl shadow bg-white">
            <h5 className="text-lg font-bold">How to Shield Your Home From Lawsuits</h5>
            <p className="text-sm mt-2">A practical guide to Texas homestead protection.</p>
          </div>
          <div className="p-6 border rounded-xl shadow bg-white">
            <h5 className="text-lg font-bold">Series LLCs: What You Need to Know</h5>
            <p className="text-sm mt-2">Understanding a powerful tool for Texas real estate investors.</p>
          </div>
          <div className="p-6 border rounded-xl shadow bg-white">
            <h5 className="text-lg font-bold">Common Asset Protection Mistakes</h5>
            <p className="text-sm mt-2">Avoid the traps that cost Texans their assets.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-10 bg-red-50">
        <h3 className="text-3xl font-semibold mb-6 text-center text-blue-900">About the Creator</h3>
        <p className="max-w-3xl mx-auto text-center text-blue-800">Created by a licensed Texas attorney with years of experience in asset protection, estate planning, and rural property law. This toolkit reflects the most common and costly legal blind spots faced by Texas families and entrepreneurs.</p>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-red-800">Have Questions?</h3>
        <p className="mb-4">Reach out for support, licensing, or collaboration inquiries.</p>
        <a href="mailto:info@TexasAssetToolkit.com" className="text-blue-700 hover:underline">info@TexasAssetToolkit.com</a>
      </section>

      {/* Footer */}
      <footer className="p-4 text-center text-sm text-white bg-blue-900">
        © {new Date().getFullYear()} Texas Asset Toolkit. All rights reserved.
      </footer>
    </div>
  )
}
