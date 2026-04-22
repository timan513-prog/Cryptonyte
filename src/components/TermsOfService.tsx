import React from 'react';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';

const SECTIONS = [
  {
    no: '01',
    title: 'Acceptance of terms',
    body: (
      <p>
        By accessing or using this website, you agree to be bound by
        these Terms of Service and our Privacy Policy. If you do not
        agree, please discontinue use of our website.
      </p>
    ),
  },
  {
    no: '02',
    title: 'Use of the website',
    body: (
      <ul className="space-y-2 list-disc list-inside marker:text-champagne-300">
        <li>You agree to use the website only for lawful purposes.</li>
        <li>
          You agree not to disrupt or interfere with the security or
          operation of the website.
        </li>
        <li>
          You may not use this site to distribute harmful content, spam,
          or malicious software.
        </li>
      </ul>
    ),
  },
  {
    no: '03',
    title: 'Intellectual property',
    body: (
      <p>
        All content on this website, including text, graphics, logos,
        and design, is the property of Cryptonyte unless otherwise
        stated. You may not reproduce, distribute, or exploit our
        content without written permission.
      </p>
    ),
  },
  {
    no: '04',
    title: 'No financial advice',
    body: (
      <p>
        The information on mykryptonyte.com is for educational purposes
        only and does not constitute financial, investment, or legal
        advice. Always consult a qualified professional before making
        any financial decisions.
      </p>
    ),
  },
  {
    no: '05',
    title: 'Third-party links',
    body: (
      <p>
        Our website may contain links to third-party websites. We are
        not responsible for the content, policies, or practices of these
        external sites.
      </p>
    ),
  },
  {
    no: '06',
    title: 'Disclaimer of warranties',
    body: (
      <p>
        We provide the website "as is" without warranties of any kind,
        express or implied. We make no guarantees about the accuracy,
        reliability, or availability of the site or its content.
      </p>
    ),
  },
  {
    no: '07',
    title: 'Limitation of liability',
    body: (
      <p>
        To the fullest extent permitted by law, Cryptonyte shall not be
        liable for any damages resulting from your use of the website,
        including but not limited to direct, indirect, incidental, or
        consequential damages.
      </p>
    ),
  },
  {
    no: '08',
    title: 'Changes to the terms',
    body: (
      <p>
        We may update these Terms of Service from time to time. Any
        changes will be posted on this page with a new effective date.
      </p>
    ),
  },
  {
    no: '09',
    title: 'Governing law',
    body: (
      <p>
        These Terms shall be governed by and interpreted under the laws
        of your local jurisdiction, without regard to its conflict of
        laws principles.
      </p>
    ),
  },
  {
    no: '10',
    title: 'Contact information',
    body: (
      <div className="space-y-2">
        <p>
          For any questions about these Terms of Service, please contact
          us at:
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

const TermsOfService: React.FC = () => {
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
            <Scale className="w-3.5 h-3.5" />
            Legal
          </span>
          <h1 className="display-xl text-cream-100 mt-4 mb-6 text-balance">
            Terms of Service
          </h1>
          <p className="text-cream-200/60 text-sm">
            Effective date · 12 December 2025
          </p>
          <p className="mt-6 text-lg text-cream-200/75 leading-relaxed max-w-3xl">
            Welcome to Cryptonyte. By accessing or using our website,
            mykryptonyte.com, you agree to the following terms. Please
            read them carefully.
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

export default TermsOfService;
