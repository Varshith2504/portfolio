import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack & Web', 'AI & Machine Learning'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
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
            <FolderGit2 size={14} />
            <span>Featured Projects</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Practical & Academic <span className="gradient-text">Project Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            End-to-end full-stack web applications and AI/ML document intelligence systems.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '9999px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  backgroundColor: isSelected ? 'var(--primary)' : '#ffffff',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid var(--primary)' : '1px solid var(--border-subtle)',
                  boxShadow: isSelected ? '0 4px 14px rgba(37, 99, 235, 0.3)' : 'var(--shadow-sm)'
                }}
              >
                {cat}
              </motion.button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderRadius: '24px',
                  cursor: 'pointer',
                  backgroundColor: '#ffffff'
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Card Image Cover */}
                <div
                  style={{
                    position: 'relative',
                    height: '230px',
                    width: '100%',
                    overflow: 'hidden',
                    backgroundColor: '#e2e8f0'
                  }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      display: 'flex',
                      gap: '0.5rem'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        backgroundColor: '#ffffff',
                        color: 'var(--primary)',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '9999px',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                    >
                      {project.category}
                    </span>
                    {project.featured && (
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          backgroundColor: 'var(--primary)',
                          color: '#ffffff',
                          padding: '0.3rem 0.75rem',
                          borderRadius: '9999px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          boxShadow: '0 2px 8px rgba(37, 99, 235, 0.3)'
                        }}
                      >
                        <Sparkles size={11} /> Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content Body */}
                <div
                  style={{
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.3rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        lineHeight: 1.3
                      }}
                    >
                      {project.title}
                    </h3>
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary-light)',
                        color: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '1.5rem',
                      flexGrow: 1
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Metrics snippet */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '0.6rem',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'var(--bg-primary)',
                      borderRadius: '12px',
                      marginBottom: '1.5rem',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    {project.metrics.map((m, i) => (
                      <div key={i} style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{m.label}</div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--primary)' }}>
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.45rem',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid var(--border-subtle)'
                    }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          backgroundColor: 'var(--bg-primary)',
                          color: 'var(--text-secondary)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '6px',
                          border: '1px solid var(--border-subtle)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
