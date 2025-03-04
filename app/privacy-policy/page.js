import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="container max-w-4xl mx-auto px-6 lg:px-12 py-20">
        <Head>
          <title>Privacy-Policy</title>
          <meta name="description" content="Privacy policy of CSB Study Abroad. Learn about how we handle and protect your personal information." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        {/* Header with navigation back to home */}
        <div className="mb-12">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>

        {/* Policy Content */}
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to CSB Study Abroad (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This privacy policy describes how we collect, use, and protect your personal information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Personal identification information (name, email address, phone number)</li>
              <li className="mb-2">Educational background and academic records</li>
              <li className="mb-2">Passport and visa-related information</li>
              <li className="mb-2">Financial information for processing applications and services</li>
              <li className="mb-2">Communication preferences and history</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Process your university and visa applications</li>
              <li className="mb-2">Provide educational counseling and support services</li>
              <li className="mb-2">Communicate with you about events and services</li>
              <li className="mb-2">Improve our services and website functionality</li>
              <li className="mb-2">Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
            <p className="mb-4">We may share your information with:</p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Educational institutions as part of the application process</li>
              <li className="mb-2">Immigration authorities for visa processing</li>
              <li className="mb-2">Third-party service providers who assist in our operations</li>
              <li className="mb-2">Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Access your personal information</li>
              <li className="mb-2">Correct inaccurate or incomplete information</li>
              <li className="mb-2">Request deletion of your information</li>
              <li className="mb-2">Object to certain processing of your information</li>
              <li className="mb-2">Withdraw consent where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to collect information about your browsing behavior and preferences. You can control cookie settings through your browser preferences.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
