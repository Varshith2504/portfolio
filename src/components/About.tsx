import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Zap,
  Users,
  Lightbulb,
  Code,
  MapPin,
  Clock,
  Award,
  FileDown
} from 'lucide-react';
import { personalInfo, statsData } from '../data/portfolioData';

export const About: React.FC = () => {
  const coreStrengths = [
    {
      icon: Users,
      title: 'Team Collaboration',
      desc: 'Work effectively in teams, share ideas openly, and communicate smoothly to achieve shared milestones.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      desc: 'Analytical thinking with a systematic approach to debugging, algorithmic challenges, and code optimization.'
    },
    {
      icon: Zap,
      title: 'Adaptability & Learning',
      desc: 'Passionate about rapid learning, exploring emerging technologies, and embracing modern software industry practices.'
    },
    {
      icon: Code,
      title: 'Full-Stack Foundation',
      desc: 'Hands-on practical development experience spanning React SPAs, Spring Boot REST services, Python scripts, and MySQL.'
    }
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
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
            <User size={14} />
            <span>Professional Summary</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            About Me & <span className="gradient-text">Career Aspirations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            Information Technology student eager to apply programming knowledge and build practical industry solutions.
          </motion.p>
        </div>

        {/* Narrative & Location Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            marginBottom: '4rem'
          }}
          className="about-grid"
        >
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="glass-card"
            style={{ padding: '2.5rem', backgroundColor: '#ffffff' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                marginBottom: '1.5rem',
                paddingBottom: '1.25rem',
                borderBottom: '1px solid var(--border-subtle)'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid var(--primary)',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
                  flexShrink: 0
                }}
              >
                <img
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%'
                  }}
                />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    color: 'var(--text-primary)',
                    fontWeight: 800,
                    marginBottom: '0.2rem'
                  }}
                >
                  {personalInfo.name}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--primary)', fontWeight: 600 }}>
                  {personalInfo.role}
                </p>
              </div>
            </div>

            {personalInfo.summary.map((paragraph, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                  marginBottom: idx !== personalInfo.summary.length - 1 ? '1.25rem' : '0'
                }}
              >
                {paragraph}
              </p>
            ))}

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.85rem',
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <motion.a
                href="/Varshith_Resume.pdf"
                download="Varshith_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="btn btn-primary"
                style={{
                  padding: '0.5rem 1.15rem',
                  fontSize: '0.88rem',
                  borderRadius: '9999px',
                  gap: '0.4rem'
                }}
              >
                <FileDown size={16} />
                <span>Download Resume</span>
              </motion.a>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  backgroundColor: 'var(--bg-primary)',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <MapPin size={14} color="var(--primary)" />
                <span>{personalInfo.location}</span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  backgroundColor: 'var(--bg-primary)',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <Clock size={14} color="var(--primary)" />
                <span>IST (India Standard Time)</span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  backgroundColor: 'var(--primary-light)',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(37, 99, 235, 0.2)'
                }}
              >
                <Award size={14} color="var(--primary)" />
                <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Google Cloud, Infosys & Wipro Certified</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Pillars Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {coreStrengths.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-card"
                  style={{
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--primary-light)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h4
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      marginBottom: '0.4rem',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {value.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6
                    }}
                  >
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Animated Statistics Counters */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card"
              style={{
                padding: '2rem 1.5rem',
                textAlign: 'center',
                backgroundColor: '#ffffff'
              }}
            >
              <div
                style={{
                  fontSize: '2.4rem',
                  fontWeight: 900,
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.03em',
                  marginBottom: '0.35rem',
                  color: 'var(--primary)'
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem'
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)'
                }}
              >
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1.2fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
