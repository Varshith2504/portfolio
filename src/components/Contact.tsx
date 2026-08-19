import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  MapPin
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

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
          className="glass-card"
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            padding: '2.5rem',
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

          {/* Contact Methods Stack Inside The Box */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
            {/* Email Row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
                padding: '1rem 1.25rem',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--primary-light)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Mail size={19} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Email</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {personalInfo.email}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <motion.button
                  onClick={copyEmail}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    backgroundColor: copiedEmail ? '#eff6ff' : '#ffffff',
                    color: 'var(--primary)',
                    border: '1px solid rgba(37, 99, 235, 0.3)',
                    cursor: 'pointer'
                  }}
                >
                  {copiedEmail ? (
                    <>
                      <Check size={14} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>

                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn btn-primary"
                  style={{
                    padding: '0.45rem 0.85rem',
                    fontSize: '0.82rem',
                    borderRadius: '8px'
                  }}
                >
                  <span>Send Mail</span>
                </motion.a>
              </div>
            </div>

            {/* Phone Row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
                padding: '1rem 1.25rem',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--primary-light)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Phone size={19} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Phone</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {personalInfo.phone}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <motion.button
                  onClick={copyPhone}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    backgroundColor: copiedPhone ? '#eff6ff' : '#ffffff',
                    color: 'var(--primary)',
                    border: '1px solid rgba(37, 99, 235, 0.3)',
                    cursor: 'pointer'
                  }}
                >
                  {copiedPhone ? (
                    <>
                      <Check size={14} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>

                <motion.a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn btn-secondary"
                  style={{
                    padding: '0.45rem 0.85rem',
                    fontSize: '0.82rem',
                    borderRadius: '8px'
                  }}
                >
                  <span>Call</span>
                </motion.a>
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

          {/* Location Inside The Box */}
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
