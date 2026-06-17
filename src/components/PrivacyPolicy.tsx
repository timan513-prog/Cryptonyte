import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const SECTIONS = [
  {
    no: '01',
    title: 'Information we collect',
    body: (
      <>
        <p className="mb-4">We may collect the following:</p>
        <div className="space-y-3">
          <div className="rounded-xl border border-cream-100/10 bg-ink-800/60 p-4">
            <div className="text-champagne-200 font-medium mb-1">
              Personal information
            </div>
            <p className="text-cream-200/70 text-[15px]">
              Your name, email, or details you voluntarily provide when
              signing up for newsletters or contacting us.
            </p>
          </div>
          <div className="rounded-xl border border-cream-100/10 bg-ink-800/60 p-4">
            <div className="text-mint-300 font-medium mb-1">
              Non-personal information
            </div>
            <p className="text-cream-200/70 text-[15px]">
              Browser type, device information, IP address, and website
              usage data (pages visited, time spent).
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    no: '02',
    title: 'How we use your information',
    body: (
      <ul className="space-y-2 list-disc list-inside marker:text-champagne-300">
        <li>Provide and improve our services.</li>
        <li>Respond to inquiries and support requests.</li>
        <li>Send newsletters or updates (if you've opted in).</li>
        <li>Analyze site usage to enhance user experience.</li>
      </ul>
    ),
  },
  {
    no: '03',
    title: 'Cookies and tracking',
    body: (
      <>
        <p className="mb-4">We may use cookies or similar technologies to:</p>
        <ul className="space-y-2 list-disc list-inside marker:text-champagne-300 mb-4">
          <li>Improve site functionality.</li>
          <li>Analyze trends and traffic patterns.</li>
          <li>Remember user preferences.</li>
        </ul>
        <p>
          You can adjust your browser settings to refuse cookies, but some
          site features may not work properly without them.
        </p>
      </>
    ),
  },
  {
    no: '04',
    title: 'Sharing your information',
    body: (
      <>
        <p className="mb-4">
          We do not sell or rent your personal information. We may share
          data only when:
        </p>
        <ul className="space-y-2 list-disc list-inside marker:text-champagne-300">
          <li>Required by law or to protect legal rights.</li>
          <li>
            Working with trusted service providers who assist in site
            operations (e.g., hosting, analytics).
          </li>
        </ul>
      </>
    ),
  },
  {
    no: '05',
    title: 'Third-party links',
    body: (
      <p>
        Our website may contain links to third-party sites. We are not
        responsible for their privacy practices, so please review their
        policies separately.
      </p>
    ),
  },
  {
    no: '06',
    title: 'Data security',
    body: (
      <p>
        We implement reasonable security measures to protect your
        personal information. However, no online system is 100% secure,
        and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    no: '07',
    title: "Children's privacy",
    body: (
      <p>
        Our website is not intended for children under 13, and we do not
        knowingly collect their personal information.
      </p>
    ),
  },
  {
    no: '08',
    title: 'Your rights',
    body: (
      <ul className="space-y-2 list-disc list-inside marker:text-champagne-300">
        <li>Access or correct your personal information.</li>
        <li>Opt out of marketing emails.</li>
        <li>Delete your information (subject to legal obligations).</li>
      </ul>
    ),
  },
  {
    no: '09',
    title: 'Updates to this policy',
    body: (
      <p>
        We may update this Privacy Policy periodically. The updated
        version will be posted on this page with a revised effective
        date.
      </p>
    ),
  },
  {
    no: '10',
    title: 'Contact us',
    body: (
      <div className="space-y-2">
        <p>
          If you have any questions about this Privacy Policy, please
          contact us at:
        </p>
        <p>
          <span className="text-cream-100/60">Email · </span>
          <a
            href="mailto:mycryptonyte2026@gmail.com"
            className="text-champagne-200 hover:text-champagne-100 underline underline-offset-4"
          >
            mycryptonyte2026@gmail.com
          </a>
        </p>
        <p>
          <span className="text-cream-100/60">Website · </span>
          <a
            href="https://mycryptonyte.com/"
            className="text-champagne-200 hover:text-champagne-100 underline underline-offset-4"
          >
            mycryptonyte.com
          </a>
        </p>
      </div>
    ),
  },
];

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container-page max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="eyebrow">
            <Shield className="w-3.5 h-3.5" />
            Legal
          </span>
          <h1 className="display-xl text-cream-100 mt-4 mb-6 text-balance">
            Privacy Policy
          </h1>
          <p className="text-cream-200/60 text-sm">
            Effective date · 12 December 2025
          </p>
          <p className="mt-6 text-lg text-cream-200/75 leading-relaxed max-w-3xl">
            Cryptonyte ("we," "our," or "us") respects your privacy and
            is committed to protecting your personal information. This
            policy explains how we collect, use, and protect your
            information when you visit our website.
          </p>
        </motion.div>

        <div className="space-y-4">
          {SECTIONS.map((section, i) => (
            <motion.section
              key={section.no}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.3) }}
              className="card-raised p-8 lg:p-10"
            >
              <div className="flex items-start gap-6">
                <span className="font-mono text-xs text-champagne-300 tracking-widest mt-2 shrink-0">
                  {section.no}
                </span>
                <div className="flex-1">
                  <h2 className="font-display text-2xl text-cream-100 mb-4">
                    {section.title}
                  </h2>
                  <div className="text-cream-200/80 leading-relaxed text-[15.5px]">
                    {section.body}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
