import Head from 'next/head';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="container max-w-4xl mx-auto px-6 lg:px-12 py-20">
        <Head>
          <title>Terms of Service - Study Abroad</title>
        </Head>

        {/* Header with navigation back to home */}
        <div className="mb-12">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Terms Content */}
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              Please read these Terms of Use carefully as they apply to your use of the CSB Study Abroad website ("Website"). By using the Website, you agree to be bound by these Terms of Use which form a legally binding agreement between you and CSB. If you do not want to be bound by these Terms of Use, do not continue to use this Website.
            </p>
            <p className="mb-4">
              We may amend these Terms of Use at any time. Your continued use of the Website is considered to be acceptance of the amended Terms of Use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Disclaimer</h2>
            <p className="mb-4">
              CSB Study Abroad tries to make the information published on this website as accurate as possible. However, the information on this website is provided on an "as is" basis without any express or implied warranty. There is no guarantee given as to the accuracy or currency of any individual item on this website.
            </p>
            <p className="mb-4">
              Persons accessing the website who require confirmation of information should refer to CSB's source for information or should contact a CSB representative. CSB does not accept responsibility for any loss or damage occasioned by use of the information published on the website nor from any access to the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Copyright and Intellectual Property</h2>
            <p className="mb-4">
              The material on this Website, including all information such as text, graphics, images, photographs and sound, is protected by copyright. You must not alter, reproduce, store in retrieval system or transmit the material on this Website or any part thereof, unless authorized by CSB in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Consultation Services</h2>
            <p className="mb-4">Our consultation services include:</p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Initial consultation of up to one hour to discuss visa options</li>
              <li className="mb-2">Assessment based on your goals, eligibility, background and needs</li>
              <li className="mb-2">Professional guidance on application processes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Fees and Payment</h2>
            <p className="mb-4">
              Our consultation fees are clearly communicated before services begin. Payment terms and conditions include:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Fees are payable when the session is booked</li>
              <li className="mb-2">Cancellations must be made at least 24 hours before the appointment for a refund</li>
              <li className="mb-2">No refunds for no-shows or late cancellations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Privacy and Data Protection</h2>
            <p className="mb-4">
              We are committed to protecting your privacy and personal information. All information collected is handled in accordance with our Privacy Policy and applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. External Links</h2>
            <p className="mb-4">
              The external linked websites within the Website are not within the control of CSB. We do not take responsibility for the content in, or currency of, any externally linked sites. A link on the Website neither implies endorsement by CSB of the linked website, nor a relationship with the organization linked.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              CSB makes no warranties or representations about this Website or any of its content. To the maximum extent permitted by law, we exclude any liability which may arise from the use of this Website, its information or services provided.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
            <p className="mb-4">
              These Terms of Use are governed by the laws of Bangladesh. You submit to the non-exclusive jurisdiction of the courts of Bangladesh for any disputes arising from your use of the Website or these Terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}