import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Sparkles,
  ExternalLink,
  MapPin
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="section-badge"
          >
            <Mail size={14} />
            <span>Contact Details</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Let's Connect & <span className="gradient-text">Work Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            Seeking entry-level IT positions, software engineering roles, and development internships.
          </motion.p>
        </div>

        {/* Single Unified Contact Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="glass-card contact-card-box"
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            padding: '2.5rem 1.75rem',
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          {/* Status Badge */}
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                backgroundColor: 'var(--primary-light)',
                borderRadius: '9999px',
                border: '1px solid rgba(37, 99, 235, 0.2)'
              }}
            >
              <Sparkles size={15} color="var(--primary)" />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>
                Open to Immediate IT & Software Engineering Roles
              </span>
            </div>
          </div>

          <h3
            style={{
              fontSize: '1.6rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '0.5rem'
            }}
          >
            Get In Touch Directly
          </h3>
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              textAlign: 'center',
              lineHeight: 1.6,
              maxWidth: '520px',
              margin: '0 auto 2rem auto'
            }}
          >
            Reach out through direct email, phone, or connect on LinkedIn and GitHub.
          </p>

          {/* Contact Details Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
            {/* Email Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.1rem 1.25rem',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '14px',
                width: '100%',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Mail size={20} />
              </div>
              <div style={{ minWidth: 0, flex: 1, overflow: 'hidden' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Email Address
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    fontSize: 'clamp(0.85rem, 3.8vw, 1.05rem)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginTop: '2px',
                    wordBreak: 'break-word',
                    overflowWrap: 'anywhere',
                    display: 'block',
                    lineHeight: 1.3
                  }}
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Phone Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.1rem 1.25rem',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '14px',
                width: '100%',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Phone size={20} />
              </div>
              <div style={{ minWidth: 0, flex: 1, overflow: 'hidden' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Phone Number
                </div>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  style={{
                    fontSize: 'clamp(0.9rem, 3.8vw, 1.05rem)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginTop: '2px',
                    display: 'block',
                    lineHeight: 1.3
                  }}
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn & GitHub Direct Link Buttons */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
              marginBottom: '1.5rem'
            }}
          >
            <motion.a
              href="https://linkedin.com/in/ellendula-varshith"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-secondary"
              style={{
                padding: '0.85rem 1.25rem',
                fontSize: '0.92rem',
                borderRadius: '12px',
                justifyContent: 'center',
                gap: '0.6rem'
              }}
            >
              <LinkedinIcon size={18} color="var(--primary)" />
              <span>LinkedIn</span>
              <ExternalLink size={14} color="var(--text-muted)" />
            </motion.a>

            <motion.a
              href="https://github.com/Varshith2504"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-secondary"
              style={{
                padding: '0.85rem 1.25rem',
                fontSize: '0.92rem',
                borderRadius: '12px',
                justifyContent: 'center',
                gap: '0.6rem'
              }}
            >
              <GithubIcon size={18} color="var(--primary)" />
              <span>GitHub</span>
              <ExternalLink size={14} color="var(--text-muted)" />
            </motion.a>
          </div>

          {/* Location Footnote */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              color: 'var(--text-muted)'
            }}
          >
            <MapPin size={14} color="var(--primary)" />
            <span>{personalInfo.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
