import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Server,
  Brain,
  Sparkles,
  CheckCircle2,
  Cpu,
  Coffee,
  Terminal,
  Layout,
  Atom,
  Database,
  GitBranch,
  Laptop,
  Boxes,
  Layers,
  Zap
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const iconCategoryMap: Record<string, React.ReactNode> = {
    Code: <Code size={18} />,
    Server: <Server size={18} />,
    Brain: <Brain size={18} />
  };

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee':
        return <Coffee size={20} />;
      case 'Terminal':
        return <Terminal size={20} />;
      case 'Cpu':
        return <Cpu size={20} />;
      case 'Layout':
        return <Layout size={20} />;
      case 'Atom':
        return <Atom size={20} />;
      case 'Database':
        return <Database size={20} />;
      case 'GitBranch':
        return <GitBranch size={20} />;
      case 'Laptop':
        return <Laptop size={20} />;
      case 'Boxes':
        return <Boxes size={20} />;
      case 'Layers':
        return <Layers size={20} />;
      case 'Zap':
        return <Zap size={20} />;
      default:
        return <CheckCircle2 size={20} />;
    }
  };

  const allSkillsList = [
    'Java',
    'Python',
    'C Language',
    'HTML5 & CSS3',
    'JavaScript',
    'React',
    'Spring Boot (STS)',
    'MySQL',
    'Git & GitHub',
    'VS Code',
    'OOPs Concepts',
    'DBMS',
    'Data Structures & Algorithms',
    'REST APIs'
  ];

  return (
    <section id="skills" className="section">
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
            <Code size={14} />
            <span>Technical Skills</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Technical <span className="gradient-text">Competencies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            A strong foundation across programming languages, database systems, developer tools, and core computer science principles.
          </motion.p>
        </div>

        {/* Tab Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem'
          }}
        >
          {skillCategories.map((category, index) => {
            const isActive = activeTab === index;
            return (
              <motion.button
                key={category.category}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.75rem 1.4rem',
                  borderRadius: '9999px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  transition: 'all 0.25s ease',
                  backgroundColor: isActive ? 'var(--primary)' : '#ffffff',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  border: isActive ? '1px solid var(--primary)' : '1px solid var(--border-subtle)',
                  boxShadow: isActive ? '0 4px 14px rgba(37, 99, 235, 0.3)' : 'var(--shadow-sm)'
                }}
              >
                {iconCategoryMap[category.iconName] || <Sparkles size={16} />}
                <span>{category.category}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Active Tab Skills Grid (Clean Cards, No Percentages) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            style={{
              maxWidth: '960px',
              margin: '0 auto 4rem auto'
            }}
          >
            <div
              style={{
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}
            >
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {skillCategories[activeTab].category}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.25rem' }}>
                {skillCategories[activeTab].description}
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.25rem'
              }}
            >
              {skillCategories[activeTab].skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
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
                      flexShrink: 0
                    }}
                  >
                    {getSkillIcon(skill.icon)}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '0.25rem'
                      }}
                    >
                      {skill.name}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5
                      }}
                    >
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All Skills Badge Cloud */}
        <div style={{ textAlign: 'center' }}>
          <h4
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--text-muted)',
              marginBottom: '1.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            Complete Skillset Summary
          </h4>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.65rem',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            {allSkillsList.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.5rem 1.15rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '9999px',
                  boxShadow: 'var(--shadow-sm)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  cursor: 'default'
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)'
                  }}
                />
                <span>{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
