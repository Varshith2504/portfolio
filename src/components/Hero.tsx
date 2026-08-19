import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  MapPin,
  FileDown
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const roles = [
    'Information Technology Student',
    'Full Stack Developer (React & Spring Boot)',
    'Python & AI/ML Enthusiast',
    'Database & Backend Developer'
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '7.5rem',
        paddingBottom: '3.5rem',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Text & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.45rem 1rem',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-subtle)',
                borderRadius: '9999px',
                boxShadow: 'var(--shadow-sm)',
                marginBottom: '1.5rem'
              }}
            >
              <span
                style={{
                  position: 'relative',
                  display: 'flex',
                  width: '9px',
                  height: '9px'
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)',
                    opacity: 0.75,
                    animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
                  }}
                />
                <span
                  style={{
                    position: 'relative',
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)'
                  }}
                />
              </span>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)'
                }}
              >
                {personalInfo.status}
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.4rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
                color: 'var(--text-primary)'
              }}
            >
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              <br />
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  minHeight: '1.25em',
                  fontSize: 'clamp(1.4rem, 3.2vw, 2.3rem)',
                  fontWeight: 700,
                  marginTop: '0.35rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    style={{
                      display: 'inline-block',
                      color: 'var(--primary)'
                    }}
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>

            {/* Subtitle Description */}
            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: '560px',
                marginBottom: '2.25rem'
              }}
            >
              {personalInfo.tagline}
            </p>

            {/* Resume Button & Social Links */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <motion.a
                href="/Varshith_Resume.pdf"
                download="Varshith_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="btn btn-primary"
                style={{
                  padding: '0.65rem 1.4rem',
                  fontSize: '0.92rem',
                  borderRadius: '9999px'
                }}
              >
                <FileDown size={17} />
                <span>Download Resume</span>
              </motion.a>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <motion.a
                  href="https://github.com/Varshith2504"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  whileHover={{ y: -3, scale: 1.08 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1.15rem',
                    borderRadius: '9999px',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <GithubIcon size={18} color="var(--primary)" />
                  <span>GitHub</span>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/ellendula-varshith"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  whileHover={{ y: -3, scale: 1.08 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1.15rem',
                    borderRadius: '9999px',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <LinkedinIcon size={18} color="var(--primary)" />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Cropped Profile Photo Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            {/* Main Photo Card Container */}
            <div
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '430px',
                padding: '1.25rem',
                position: 'relative',
                zIndex: 2,
                borderRadius: '28px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-xl)'
              }}
            >
              {/* Photo Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '420px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  backgroundColor: '#f1f5f9'
                }}
              >
                <motion.img
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%'
                  }}
                />

                {/* Subtle gradient overlay at bottom of photo */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.75) 0%, transparent 45%)'
                  }}
                />

                {/* Text on bottom of photo */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1.25rem',
                    right: '1.25rem',
                    color: '#ffffff'
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      backgroundColor: 'rgba(37, 99, 235, 0.9)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '9999px',
                      marginBottom: '0.35rem',
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    <Sparkles size={12} />
                    <span>B.Tech in Information Technology</span>
                  </div>
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      lineHeight: 1.2
                    }}
                  >
                    {personalInfo.name}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '2px' }}>
                    <MapPin size={13} color="#93c5fd" />
                    <span>Anurag University • Hyderabad</span>
                  </p>
                </div>
              </div>

              {/* Bottom Quick Info Bar */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                  marginTop: '1rem'
                }}
              >
                <div
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    padding: '0.75rem 1rem',
                    borderRadius: '14px',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem'
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--primary-light)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Code2 size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Focus</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      Full Stack
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    padding: '0.75rem 1rem',
                    borderRadius: '14px',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem'
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--primary-light)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Status</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      Available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Education Badge */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '-16px',
                left: '-14px',
                zIndex: 3,
                backgroundColor: '#ffffff',
                padding: '0.65rem 1.15rem',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <GraduationCap size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Education</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)' }}>B.Tech in IT</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};
