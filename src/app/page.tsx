

export default function Home() {


  return (
    <main className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background image or gradient */}
        <div className="absolute inset-0">
          {/* Example: Earth background with an overlay */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/earth-bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-opacity-50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Decentralized Hosting for a Borderless Future
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
            Experience next-generation, distributed hosting with unmatched speed,
            security, and scalability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#pricing"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="border border-green-500 hover:bg-green-500 hover:text-white text-white font-semibold py-3 px-6 rounded-md transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features / Explanation */}
      <section id="learn-more" className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionizing Hosting: Faster, Safer, Greener
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 mb-8">
            Harness the power of decentralized storage to ensure your data is
            replicated across multiple nodes worldwide—eliminating single points
            of failure and minimizing latency.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {/* Card 1 */}
            <div className="bg-gray-800 p-6 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Faster</h3>
              <p className="text-gray-400">
                Leverage global edge nodes for ultra-low latency and
                near-instant load times anywhere on Earth.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-800 p-6 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Safer</h3>
              <p className="text-gray-400">
                End-to-end encryption, immutable backups, and robust
                fault-tolerance for ultimate peace of mind.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-gray-800 p-6 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Greener</h3>
              <p className="text-gray-400">
                Distributed networks optimize resource usage and reduce carbon
                footprint with efficient data replication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Flexible Pricing for Every Stage
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {/* Plan 1 */}
            <div className="bg-gray-900 p-8 rounded-md flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Startup</h3>
              <p className="text-5xl font-bold mb-2">$19</p>
              <p className="text-gray-400 mb-6">per month</p>
              <ul className="text-gray-400 space-y-2 mb-6">
                <li>10 GB Decentralized Storage</li>
                <li>50 GB Bandwidth</li>
                <li>24/7 Support</li>
              </ul>
              <a
                href="#"
                className="mt-auto block bg-green-500 text-center py-2 rounded hover:bg-green-600 transition"
              >
                Get Started
              </a>
            </div>
            {/* Plan 2 */}
            <div className="bg-gray-900 p-8 rounded-md flex flex-col border-2 border-green-500">
              <h3 className="text-xl font-semibold mb-2">Growing</h3>
              <p className="text-5xl font-bold mb-2">$49</p>
              <p className="text-gray-400 mb-6">per month</p>
              <ul className="text-gray-400 space-y-2 mb-6">
                <li>50 GB Decentralized Storage</li>
                <li>250 GB Bandwidth</li>
                <li>24/7 Priority Support</li>
                <li>Advanced Analytics</li>
              </ul>
              <a
                href="#"
                className="mt-auto block bg-green-500 text-center py-2 rounded hover:bg-green-600 transition"
              >
                Get Started
              </a>
            </div>
            {/* Plan 3 */}
            <div className="bg-gray-900 p-8 rounded-md flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Scale</h3>
              <p className="text-5xl font-bold mb-2">$99</p>
              <p className="text-gray-400 mb-6">per month</p>
              <ul className="text-gray-400 space-y-2 mb-6">
                <li>200 GB Decentralized Storage</li>
                <li>1 TB Bandwidth</li>
                <li>24/7 Premium Support</li>
                <li>Custom Integrations</li>
              </ul>
              <a
                href="#"
                className="mt-auto block bg-green-500 text-center py-2 rounded hover:bg-green-600 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Innovators */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Trusted by Innovators Worldwide
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {/* Replace these with actual logos */}
            <div className="h-8 w-auto flex items-center">
            </div>
            <div className="h-8 w-auto flex items-center">

            </div>
            <div className="h-8 w-auto flex items-center">

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="p-4 bg-gray-900 rounded">
              <summary className="font-semibold text-white cursor-pointer">
                How secure is decentralized hosting?
              </summary>
              <p className="mt-2 text-gray-400">
                Your data is encrypted and spread across multiple nodes globally,
                ensuring robust fault tolerance and security.
              </p>
            </details>

            <details className="p-4 bg-gray-900 rounded">
              <summary className="font-semibold text-white cursor-pointer">
                Can I easily migrate from traditional hosting?
              </summary>
              <p className="mt-2 text-gray-400">
                Yes, we provide migration tools and detailed documentation to
                help you transition smoothly.
              </p>
            </details>

            <details className="p-4 bg-gray-900 rounded">
              <summary className="font-semibold text-white cursor-pointer">
                Is there a free trial available?
              </summary>
              <p className="mt-2 text-gray-400">
                We offer a 14-day free trial with no credit card required, so you
                can explore our platform risk-free.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try Rocky for Free. No Strings Attached.
          </h2>
          <p className="text-gray-300 mb-8">
            Get started with a free trial and experience decentralized hosting
            firsthand.
          </p>
          <a
            href="#"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition"
          >
            Start Your Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
