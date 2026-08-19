import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        backgroundColor: '#ffffff',
        padding: '2.5rem 0',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem'
          }}
        >
          {/* Copyright content on left */}
          <div
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              fontWeight: 500
            }}
          >
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          {/* Back to Top button on right */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.35rem',
              borderRadius: '9999px',
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              fontSize: '0.88rem',
              fontWeight: 700,
              boxShadow: 'var(--shadow-sm)',
              cursor: 'pointer'
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={15} color="var(--primary)" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
