import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  Calendar,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Terminal,
  Cpu
} from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal size={22} />;
      case 'Cpu':
        return <Cpu size={22} />;
      case 'Sparkles':
      default:
        return <Sparkles size={22} />;
    }
  };

  return (
    <section id="education" className="section">
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
            <GraduationCap size={14} />
            <span>Academic & Certifications</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Education & <span className="gradient-text">Verified Credentials</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            Academic background in Information Technology paired with recognized industry certifications.
          </motion.p>
        </div>

        {/* Education Timeline */}
        <div style={{ maxWidth: '950px', margin: '0 auto 4.5rem auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginBottom: '2rem'
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: 'var(--primary-light)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <BookOpen size={20} />
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Academic Background
            </h3>
          </div>

          <div
            style={{
              position: 'relative',
              paddingLeft: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}
          >
            {/* Vertical timeline line */}
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                bottom: '1rem',
                left: '7px',
                width: '3px',
                backgroundColor: 'var(--border-subtle)',
                borderRadius: '9999px'
              }}
            />

            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                style={{ position: 'relative' }}
              >
                {/* Node Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-2rem',
                    top: '1.5rem',
                    transform: 'translateX(-50%)',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    border: '4px solid var(--primary)',
                    boxShadow: '0 0 10px rgba(37, 99, 235, 0.4)',
                    zIndex: 2
                  }}
                />

                {/* Card */}
                <div className="glass-card" style={{ padding: '2rem', backgroundColor: '#ffffff' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      marginBottom: '1rem'
                    }}
                  >
                    <div>
                      <h4
                        style={{
                          fontSize: '1.3rem',
                          fontWeight: 800,
                          color: 'var(--text-primary)',
                          marginBottom: '0.3rem'
                        }}
                      >
                        {edu.institution}
                      </h4>
                      <p
                        style={{
                          fontSize: '1rem',
                          fontWeight: 600,
                          color: 'var(--primary)'
                        }}
                      >
                        {edu.degree}
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          backgroundColor: 'var(--bg-primary)',
                          color: 'var(--text-secondary)',
                          padding: '0.35rem 0.8rem',
                          borderRadius: '9999px',
                          border: '1px solid var(--border-subtle)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem'
                        }}
                      >
                        <Calendar size={13} />
                        {edu.period}
                      </span>
                      <span
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          backgroundColor: 'var(--primary-light)',
                          color: 'var(--primary)',
                          padding: '0.35rem 0.85rem',
                          borderRadius: '9999px',
                          border: '1px solid rgba(37, 99, 235, 0.2)'
                        }}
                      >
                        {edu.scoreLabel}: {edu.score}
                      </span>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: '0.96rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                      marginBottom: '1.25rem'
                    }}
                  >
                    {edu.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {edu.highlights.map((item, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.6rem',
                          fontSize: '0.92rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6
                        }}
                      >
                        <CheckCircle2
                          size={16}
                          color="var(--primary)"
                          style={{ flexShrink: 0, marginTop: '3px' }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div style={{ maxWidth: '950px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginBottom: '2rem'
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: 'var(--primary-light)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Award size={20} />
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Industry Certifications
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {certificationsData.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#ffffff'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        backgroundColor: 'var(--primary-light)',
                        color: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {getCertIcon(cert.icon)}
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        backgroundColor: 'var(--primary-light)',
                        color: 'var(--primary)',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '9999px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        border: '1px solid rgba(37, 99, 235, 0.2)'
                      }}
                    >
                      {cert.issuer}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontSize: '1.18rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      lineHeight: 1.35,
                      marginBottom: '0.6rem'
                    }}
                  >
                    {cert.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6
                    }}
                  >
                    {cert.description}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    marginTop: '1.5rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-subtle)',
                    fontSize: '0.82rem',
                    color: 'var(--primary)',
                    fontWeight: 700
                  }}
                >
                  <CheckCircle2 size={15} />
                  <span>Credential Verified</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
