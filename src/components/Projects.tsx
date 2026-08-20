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
            Click any project card to view complete features, architecture, and source code.
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

        {/* Compact Projects Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            maxWidth: '1100px',
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
                whileHover={{ y: -5 }}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  backgroundColor: '#ffffff'
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Card Image Cover */}
                <div
                  style={{
                    position: 'relative',
                    height: '200px',
                    width: '100%',
                    overflow: 'hidden',
                    backgroundColor: '#e2e8f0'
                  }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
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
                      top: '0.85rem',
                      left: '0.85rem',
                      display: 'flex',
                      gap: '0.4rem'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        backgroundColor: '#ffffff',
                        color: 'var(--primary)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                    >
                      {project.category}
                    </span>
                    {project.featured && (
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          backgroundColor: 'var(--primary)',
                          color: '#ffffff',
                          padding: '0.25rem 0.65rem',
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

                {/* Compact Card Body */}
                <div
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        gap: '0.5rem',
                        marginBottom: '0.5rem'
                      }}
                    >
                      <h3
                        style={{
                          fontSize: '1.18rem',
                          fontWeight: 800,
                          color: 'var(--text-primary)',
                          lineHeight: 1.3
                        }}
                      >
                        {project.title}
                      </h3>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--primary-light)',
                          color: 'var(--primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <ArrowUpRight size={16} />
                      </div>
                    </div>

                    {/* Short Tagline */}
                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        marginBottom: '1.25rem'
                      }}
                    >
                      {project.tagline}
                    </p>
                  </div>

                  <div>
                    {/* Tech stack badges */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem',
                        paddingTop: '1rem',
                        borderTop: '1px solid var(--border-subtle)',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              backgroundColor: 'var(--bg-primary)',
                              color: 'var(--text-secondary)',
                              padding: '0.2rem 0.55rem',
                              borderRadius: '6px',
                              border: '1px solid var(--border-subtle)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span
                            style={{
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              color: 'var(--primary)'
                            }}
                          >
                            +{project.tags.length - 4} more
                          </span>
                        )}
                      </div>

                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: 'var(--primary)'
                        }}
                      >
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Popup Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
