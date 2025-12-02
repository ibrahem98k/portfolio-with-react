import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { gsap } from 'gsap'
import './App.css'

function App() {
  const [route, setRoute] = useState('home')
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-quart',
    })
  }, [])

  useEffect(() => {
    if (route === 'article1' || route === 'article2' || route === 'article3') {
      window.scrollTo(0, 0)
    }
    AOS.refreshHard()
  }, [route])

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.scrollY
      const leftColumn = document.querySelector('.left-column')
      if (!leftColumn) return

      if (scrollY > lastScrollY && scrollY > 50) {
        leftColumn.classList.add('scrolled-down')
        leftColumn.classList.remove('scrolled-up')
      } else if (scrollY < lastScrollY && scrollY > 50) {
        leftColumn.classList.add('scrolled-up')
        leftColumn.classList.remove('scrolled-down')
      } else {
        leftColumn.classList.remove('scrolled-down', 'scrolled-up')
      }
      lastScrollY = scrollY
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleBackToThoughts = () => {
    setRoute('home')
    setTimeout(() => {
      document.getElementById('thoughts')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
  }
  return (
    <div className="page page-centered">
      <header className="top-header">
        <div className="top-header-pill">
          <button
            className="header-icon-btn"
            aria-label="Home"
            onClick={() => {
              setRoute('home')
              setTimeout(
                () =>
                  document
                    .getElementById('home')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
                0
              )
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="header-icon-svg"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            <span className="header-icon-label">Home</span>
          </button>
          <button
            className="header-icon-btn"
            aria-label="Folder"
            onClick={() => {
              setRoute('home')
              setTimeout(
                () =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
                0
              )
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="header-icon-svg"
            >
              <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
            </svg>
            <span className="header-icon-label">Projects</span>
          </button>
          <button
            className="header-icon-btn"
            aria-label="Work"
            onClick={() => {
              setRoute('home')
              setTimeout(
                () =>
                  document
                    .getElementById('experience')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
                0
              )
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="header-icon-svg"
            >
              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
            <span className="header-icon-label">Experience</span>
          </button>
          <button
            className="header-icon-btn"
            aria-label="Tools"
            onClick={() => {
              setRoute('home')
              setTimeout(
                () =>
                  document
                    .getElementById('tools')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
                0
              )
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="header-icon-svg"
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
            </svg>
            <span className="header-icon-label">Tools</span>
          </button>
          <button
            className="header-icon-btn"
            aria-label="Edit"
            onClick={() => {
              setRoute('home')
              setTimeout(
                () =>
                  document
                    .getElementById('thoughts')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
                0
              )
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="header-icon-svg"
            >
              <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
            </svg>
            <span className="header-icon-label">Thoughts</span>
          </button>
        </div>
      </header>

      {route === 'home' && (
        <main className="main-columns" id="home">
          <div className="left-column" data-aos="fade-right" data-aos-duration="900">
            <div className="profile-card">
              <div className="profile-top">
                <div className="profile-visual">
                  <img src="/photo_2025-12-02_21-23-27.jpg" alt="Ibrahem Khalil" className="profile-photo" />
                </div>
              </div>
              <div className="profile-content">
                <h2 className="profile-name">Ibrahem Khalil</h2>
                <p className="profile-role">Software Engineer</p>
                <p className="profile-copy">
                  A Software Engineer who has developed countless innovative solutions.
                </p>
                <p className="profile-copy secondary">
                  Focused on front‑end experiences, modern React tooling, and clean product design.
                </p>

                <div className="profile-social-row">
                  <a
                    className="profile-icon-btn"
                    href="https://github.com/ibrahem98k"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="social-icon"
                      aria-hidden="true"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a
                    className="profile-icon-btn"
                    href="https://www.linkedin.com/in/ibrahem-khalil-6361b7386/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="social-icon"
                      aria-hidden="true"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    className="profile-icon-btn"
                    href="https://discord.com/"
                    aria-label="Discord"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="social-icon"
                      aria-hidden="true"
                    >
                      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                      <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                    </svg>
                  </a>
                  <a
                    className="profile-icon-btn"
                    href="https://www.instagram.com/ibraskywalker666/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="social-icon"
                      aria-hidden="true"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="right-column" data-aos="fade-up" data-aos-duration="700">
            <div className="hero-heading-block">
              <h1 className="hero-title-main">
                SOFTWARE <br />
                <span className="hero-title-outline">ENGINEER</span>
              </h1>
              <p className="hero-subtitle">
                Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into
                beautifully crafted products.
              </p>
            </div>

            <div className="hero-stats-row">
              <div className="hero-stat">
                <p className="hero-stat-number">+12</p>
                <p className="hero-stat-label">YEARS OF<br />EXPERIENCE</p>
              </div>
              <div className="hero-stat">
                <p className="hero-stat-number">+46</p>
                <p className="hero-stat-label">PROJECTS<br />COMPLETED</p>
              </div>
              <div className="hero-stat">
                <p className="hero-stat-number">+20</p>
                <p className="hero-stat-label">WORLDWIDE<br />CLIENTS</p>
              </div>
            </div>

            <div className="showcase-grid">
              <div
                className="showcase-card orange"
                onClick={() => document
                  .getElementById('experience')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                <div className="showcase-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
                    <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
                    <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
                  </svg>
                </div>
                <h3 className="showcase-title">DYNAMIC ANIMATION,<br />MOTION DESIGN</h3>
                <div className="showcase-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
              </div>
              <div
                className="showcase-card green"
                onClick={() => document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                <div className="showcase-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M9 3v18" />
                    <path d="M3 9h18" />
                  </svg>
                </div>
                <h3 className="showcase-title">FRAMER, FIGMA,<br />WORDPRESS, REACTJS</h3>
                <div className="showcase-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
              </div>
            </div>

            <section className="projects-section" id="projects" data-aos="fade-up">
              <div className="section-header-block">
                <h2 className="section-title-main">
                  RECENT <br />
                  <span className="section-title-outline">PROJECTS</span>
                </h2>
              </div>

              <div className="projects-list">
                <a
                  className="project-item"
                  href="https://github.com/ibrahem98k/weather-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="project-thumbnail">
                    <div className="project-thumb-placeholder">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2" />
                        <path d="M12 20v2" />
                        <path d="m4.93 4.93 1.41 1.41" />
                        <path d="m17.66 17.66 1.41 1.41" />
                        <path d="M2 12h2" />
                        <path d="M20 12h2" />
                        <path d="m6.34 17.66-1.41 1.41" />
                        <path d="m19.07 4.93-1.41 1.41" />
                      </svg>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 className="project-name">Weather App</h3>
                    <p className="project-description">
                      Minimal React weather dashboard that fetches real‑time data for any city and visualizes key
                      conditions at a glance.
                    </p>
                  </div>
                  <div className="project-arrow-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </div>
                </a>

                <a
                  className="project-item"
                  href="https://github.com/ibrahem98k/formify-hackthon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="project-thumbnail">
                    <div className="project-thumb-placeholder purple">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <path d="M7 8h10" />
                        <path d="M7 12h6" />
                        <path d="M7 16h4" />
                      </svg>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 className="project-name">Formify App</h3>
                    <p className="project-description">
                      Multi‑step form experience built for a hackathon, with validation, progress indication, and smooth
                      transitions between steps.
                    </p>
                  </div>
                  <div className="project-arrow-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </div>
                </a>

                <a
                  className="project-item"
                  href="https://github.com/ibrahem98k/portfolio-project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="project-thumbnail">
                    <div className="project-thumb-placeholder svelte">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="14" rx="2" />
                        <path d="M8 18v2h8v-2" />
                        <circle cx="9" cy="10" r="2" />
                        <path d="M15 9h3" />
                        <path d="M15 13h3" />
                      </svg>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 className="project-name">Portfolio in Svelte</h3>
                    <p className="project-description">
                      Clean personal portfolio site that highlights projects, tech stack, and contact information with
                      smooth scrolling sections.
                    </p>
                  </div>
                  <div className="project-arrow-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </div>
                </a>
              </div>
            </section>

            <section className="experience-section" id="experience" data-aos="fade-up">
              <div className="section-header-block">
                <h2 className="section-title-main">
                  12 YEARS OF <br />
                  <span className="section-title-outline">EXPERIENCE</span>
                </h2>
              </div>

              <div className="experience-list">
                <a
                  className="experience-item"
                  href="https://www.shulalab.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="experience-content">
                    <h3 className="experience-company">Shu`la Lab</h3>
                    <p className="experience-description">
                      Building Shu`la, a focused app for memorizing the Holy Quran, with simple flows and a calm, clear
                      reading experience across Android devices.
                    </p>
                    <p className="experience-dates">Jan 2024 - Present</p>
                  </div>
                  <div className="experience-arrow-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </div>
                </a>

                <a
                  className="experience-item"
                  href="https://www.youtube.com/watch?v=6EA-MIYY1bg&list=RDMM3wVTmlD86a8&index=31"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="experience-content">
                    <h3 className="experience-company">Hooverphonic – Mad About You (Live)</h3>
                    <p className="experience-description">
                      Live performance of Hooverphonic's "Mad About You" recorded at Koningin Elisabethzaal in 2012,
                      showcasing cinematic strings and powerful vocals on stage.
                    </p>
                    <p className="experience-dates">Live session · 2012</p>
                  </div>
                  <div className="experience-arrow-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </div>
                </a>

                <a
                  className="experience-item"
                  href="https://www.youtube.com/watch?v=vapyib1k2MU&list=RDMM3wVTmlD86a8&index=3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="experience-content">
                    <h3 className="experience-company">Glimpse of Us x La La Land Edit</h3>
                    <p className="experience-description">
                      Fan-made edit blending Joji's "Glimpse of Us" with scenes from La La Land, cutting emotional
                      moments of Mia and Sebastian to the lyrics.
                    </p>
                    <p className="experience-dates">Video edit · 2022</p>
                  </div>
                  <div className="experience-arrow-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </div>
                </a>
              </div>
            </section>

            <section className="tools-section" id="tools" data-aos="fade-up">
              <div className="section-header-block">
                <h2 className="section-title-main">
                  PREMIUM <br />
                  <span className="section-title-outline">TOOLS</span>
                </h2>
              </div>

              <div className="tools-grid">
                <a
                  className="tool-card"
                  href="https://www.framer.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="tool-icon framer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path d="M5 3h10a1 1 0 0 1 .7.3l3 3A1 1 0 0 1 19 8h-6l4 4-3.3 3.3A1 1 0 0 1 13 16H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" fill="#000000" />
                    </svg>
                  </div>
                  <div className="tool-text">
                    <h3 className="tool-name">Framer</h3>
                    <p className="tool-description">Website Builder</p>
                  </div>
                </a>

                <a
                  className="tool-card"
                  href="https://www.figma.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="tool-icon figma">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path d="M9 3h3a3 3 0 1 1 0 6H9z" fill="#f24e1e" />
                      <path d="M9 9h3a3 3 0 1 1 0 6H9z" fill="#ff7262" />
                      <path d="M9 15h3a3 3 0 1 1-3 3z" fill="#a259ff" />
                      <path d="M6 3h3v6H6a3 3 0 1 1 0-6z" fill="#0acf83" />
                      <path d="M6 9h3v6H6a3 3 0 1 1 0-6z" fill="#1abcfe" />
                    </svg>
                  </div>
                  <div className="tool-text">
                    <h3 className="tool-name">Figma</h3>
                    <p className="tool-description">Design Tool</p>
                  </div>
                </a>

                <a
                  className="tool-card"
                  href="https://www.lemonsqueezy.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="tool-icon lemon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path d="M8 4.5c.6-.4 1.4-.4 2 0l2.2 1.4a3 3 0 0 1 1.3 2.5v.2a3 3 0 0 1-1.3 2.5L9.9 13a2 2 0 0 1-2 0L5.7 11.1A3 3 0 0 1 4.5 8.7v-.2A3 3 0 0 1 5.7 6z" fill="#facc15" />
                      <path d="M13.2 6.2 15 5.1a2 2 0 0 1 2.1.1l1.1.8a2 2 0 0 1 .3 3.1l-1.5 1.5" fill="#fbbf24" />
                    </svg>
                  </div>
                  <div className="tool-text">
                    <h3 className="tool-name">Lemon Squeezy</h3>
                    <p className="tool-description">Payments Provider</p>
                  </div>
                </a>

                <a
                  className="tool-card"
                  href="https://chat.openai.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="tool-icon chatgpt">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3.2 8 5.1 6.5 9 8 12.9 12 14.8 16 12.9 17.5 9 16 5.1z" />
                      <path d="M8 5.1 12 7v3.8l-4-1.9z" />
                      <path d="M16 5.1 12 7" />
                    </svg>
                  </div>
                  <div className="tool-text">
                    <h3 className="tool-name">ChatGPT</h3>
                    <p className="tool-description">AI Assistant</p>
                  </div>
                </a>

                <a
                  className="tool-card"
                  href="https://www.notion.so/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="tool-icon notion">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="1.6"
                    >
                      <rect x="4" y="4" width="16" height="16" rx="2.5" fill="#ffffff" />
                      <path d="M9 17V7l6 10V7" />
                    </svg>
                  </div>
                  <div className="tool-text">
                    <h3 className="tool-name">Notion</h3>
                    <p className="tool-description">Productivity Tool</p>
                  </div>
                </a>

                <a
                  className="tool-card highlight"
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="tool-icon nextjs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="38"
                      viewBox="0 0 48 24"
                      fill="none"
                    >
                      <text x="4" y="16" fill="#ffffff" fontSize="10" fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">NEXT.</text>
                    </svg>
                  </div>
                  <div className="tool-text">
                    <h3 className="tool-name">Nextjs</h3>
                    <p className="tool-description">React framework</p>
                  </div>
                </a>
              </div>
            </section>

            <section className="thoughts-section" id="thoughts" data-aos="fade-up">
              <div className="section-header-block">
                <h2 className="section-title-main">
                  DESIGN <br />
                  <span className="section-title-outline">THOUGHTS</span>
                </h2>
              </div>

              <div className="thoughts-list">
                <article
                  className="thought-item"
                  onClick={() => setRoute('article1')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="thought-main">
                    <h3 className="thought-title">Starting and Growing a Career in Web Design</h3>
                    <p className="thought-excerpt">
                      As the internet continues to develop and grow exponentially, jobs related to the industry do too,
                      particularly those that relate to web design and development.
                    </p>
                    <p className="thought-meta">Apr 10, 2022 · 6min read</p>
                  </div>
                  <div className="thought-arrow-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </div>
                </article>

                <article
                  className="thought-item"
                  onClick={() => setRoute('article2')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="thought-main">
                    <h3 className="thought-title">Starting and Growing a Career in Web Design</h3>
                    <p className="thought-excerpt">
                      As the internet continues to develop and grow exponentially, jobs related to the industry do too,
                      particularly those that relate to web design and development.
                    </p>
                    <p className="thought-meta">Apr 8, 2022 · 6min read</p>
                  </div>
                  <div className="thought-arrow-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </div>
                </article>

                <article
                  className="thought-item"
                  onClick={() => setRoute('article3')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="thought-main">
                    <h3 className="thought-title">How Can Designers Prepare for the Future?</h3>
                    <p className="thought-excerpt">
                      In this era of rapid change, are we, as product people, equipped to design for automation, machine
                      learning, and AI?
                    </p>
                    <p className="thought-meta">Feb 28, 2022 · 8min read</p>
                  </div>
                  <div className="thought-arrow-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </div>
                </article>
              </div>
            </section>

            <section className="contact-section" data-aos="fade-up">
              <div className="section-header-block">
                <h2 className="section-title-main">
                  LET'S WORK <br />
                  <span className="section-title-outline">TOGETHER</span>
                </h2>
              </div>

              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contact-row contact-row-two">
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      className="contact-input"
                      placeholder="Your Name" />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="contact-input"
                      placeholder="you@email.com" />
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="budget">Budget</label>
                    <select id="budget" className="contact-input">
                      <option value="">Select...</option>
                      <option value="1-5k">$1k – $5k</option>
                      <option value="5-10k">$5k – $10k</option>
                      <option value="10k+">$10k+</option>
                    </select>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      className="contact-input contact-textarea"
                      placeholder="Message"
                      rows={4} />
                  </div>
                </div>

                <button type="submit" className="contact-submit">Submit</button>
              </form>
            </section>
          </div>
      </main>
      )}

      {route === 'article1' && (
        <main className="main-columns article-page" data-aos="fade-up">
          <div className="left-column">
            <div className="profile-card">
              <div className="profile-top">
                <div className="profile-visual">
                  <img src="/photo_2025-12-02_21-23-27.jpg" alt="Ibrahem Khalil" className="profile-photo" />
                </div>
              </div>
              <div className="profile-content">
                <h2 className="profile-name">Ibrahem Khalil</h2>
                <p className="profile-role">Software Engineer</p>
                <p className="profile-copy">
                  A Software Engineer who has developed countless innovative solutions.
                </p>
                <p className="profile-copy secondary">
                  Focused on front‑end experiences, modern React tooling, and clean product design.
                </p>

                <div className="profile-social-row">
                  <a
                    className="profile-icon-btn"
                    href="https://github.com/ibrahem98k"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="social-icon"
                      aria-hidden="true"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a
                    className="profile-icon-btn"
                    href="https://www.linkedin.com/in/ibrahem-khalil-6361b7386/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="social-icon"
                      aria-hidden="true"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    className="profile-icon-btn"
                    href="https://discord.com/"
                    aria-label="Discord"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="social-icon"
                      aria-hidden="true"
                    >
                      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                      <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                    </svg>
                  </a>
                  <a
                    className="profile-icon-btn"
                    href="https://www.instagram.com/ibraskywalker666/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="social-icon"
                      aria-hidden="true"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="right-column article-right">
            <div className="article-hero-wrapper">
              <img src="/2152001132.jpg" alt="Workspace" className="article-hero-image" />
            </div>

            <h1 className="article-title">Starting and Growing a Career in Web Design</h1>

            <div className="article-body">
              <p className="article-paragraph">
                As the internet continues to develop and grow exponentially, jobs related to the industry do too,
                particularly those that relate to web design and development. The prediction is that by 2029, the job
                outlook for these two fields will grow by 8%—significantly faster than average. Whether you’re seeking
                salaried employment or aiming to work in a freelance capacity, a career in web design can offer a
                variety of employment arrangements, competitive salaries, and opportunities to utilize both technical
                and creative skill sets.
              </p>

              <h2 className="article-subheading">What does a career in web design involve?</h2>
              <p className="article-paragraph">
                A career in website design can involve the design, creation, and coding of a range of website types.
                Other tasks will typically include liaising with clients and discussing website specifications,
                incorporating feedback, working on graphic design and image editing, and enabling multimedia features
                such as audio and video. Requiring a range of creative and technical skills, web designers may be
                involved in work across a range of industries, including software companies, IT consultancies, web
                design companies, corporate organizations, and more.
              </p>

              <p className="article-paragraph">
                In contrast with web developers, web designers tend to play a more creative role, crafting the overall
                vision and design of a site, and determining how to best incorporate the necessary functionality.
                However, there can be significant overlap between the roles.
              </p>

              <h2 className="article-subheading">Full-stack, back-end, and front-end web development</h2>
              <p className="article-paragraph">
                Web developers can focus on the back-end, front-end, or full-stack development, and typically utilize a
                range of programming languages, libraries, and frameworks to do so. Web designers may work more closely
                with front-end engineers to establish the user-end functionality and appearance of a site.
              </p>

              <h2 className="article-subheading">Are web designers in demand?</h2>
              <p className="article-paragraph">
                In our ever-increasingly digital environment, there is a constant need for websites—and therefore for
                web designers and developers. Web designers with significant coding experience are typically in higher
                demand and can usually expect a higher salary.
              </p>
            </div>
            <button className="article-back-thoughts" onClick={handleBackToThoughts}>
              ← Back to thoughts
            </button>
            <section className="contact-section">
              <div className="section-header-block">
                <h2 className="section-title-main">
                  LET'S WORK <br />
                  <span className="section-title-outline">TOGETHER</span>
                </h2>
              </div>

              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contact-row contact-row-two">
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="name-article1">Name</label>
                    <input
                      id="name-article1"
                      type="text"
                      className="contact-input"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="email-article1">Email</label>
                    <input
                      id="email-article1"
                      type="email"
                      className="contact-input"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="budget-article1">Budget</label>
                    <select id="budget-article1" className="contact-input">
                      <option value="">Select...</option>
                      <option value="1-5k">$1k – $5k</option>
                      <option value="5-10k">$5k – $10k</option>
                      <option value="10k+">$10k+</option>
                    </select>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="message-article1">Message</label>
                    <textarea
                      id="message-article1"
                      className="contact-input contact-textarea"
                      placeholder="Message"
                      rows={4}
                    />
                  </div>
                </div>

                <button type="submit" className="contact-submit">Submit</button>
              </form>
            </section>
          </div>
        </main>
      )}

      {route === 'article3' && (
        <main className="main-columns article-page" data-aos="fade-up">
          <div className="left-column">
            <div className="profile-card">
              <div className="profile-top">
                <div className="profile-visual">
                  <img src="/photo_2025-12-02_21-23-27.jpg" alt="Ibrahem Khalil" className="profile-photo" />
                </div>
              </div>
              <div className="profile-content">
                <h2 className="profile-name">Ibrahem Khalil</h2>
                <p className="profile-role">Software Engineer</p>
                <p className="profile-copy">
                  A Software Engineer who has developed countless innovative solutions.
                </p>
                <p className="profile-copy secondary">
                  Focused on front‑end experiences, modern React tooling, and clean product design.
                </p>

                <div className="profile-social-row">
                  <a
                    className="profile-icon-btn"
                    href="https://github.com/ibrahem98k"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="social-icon"
                      aria-hidden="true"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a
                    className="profile-icon-btn"
                    href="https://www.linkedin.com/in/ibrahem-khalil-6361b7386/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="social-icon"
                      aria-hidden="true"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    className="profile-icon-btn"
                    href="https://discord.com/"
                    aria-label="Discord"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="social-icon"
                      aria-hidden="true"
                    >
                      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                      <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                    </svg>
                  </a>
                  <a
                    className="profile-icon-btn"
                    href="https://www.instagram.com/ibraskywalker666/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="social-icon"
                      aria-hidden="true"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="right-column article-right">
            <div className="article-hero-wrapper">
              <img
                src="/team-meeting-renewable-energy-project-close-up.jpg"
                alt="Team meeting renewable energy project"
                className="article-hero-image"
              />
            </div>

            <h1 className="article-title">How Can Designers Prepare for the Future?</h1>

            <div className="article-body">
              <p className="article-paragraph">
                Last month, I had the chance to attend CSS Day in Amsterdam, a two day event split between a UI day and
                a CSS day. The talks were as diverse as the background of the speakers themselves, but there was one
                common thread: in this era of rapid change, are we, as product people, equipped to design for
                automation, machine learning, and AI?
              </p>

              <h2 className="article-subheading">What does automation mean for designers?</h2>
              <p className="article-paragraph">
                It's hard to work on a product team that hasn’t automated some part of their workflow in the name of
                productivity. If machines can take care of the repeatable tasks and heavy lifting, designers can focus
                on doing more meaningful work. But how does this affect the way we use the work being created by
                machines?
              </p>
              <p className="article-paragraph">
                Josh Clark, founder of design studio Big Medium, provoked the audience with this question during his
                talk, “A.I. is your New Design Material”. Some of the most impressive advancements in recent technology
                are things like facial recognition, predictive text, and image search, all powered by machine learning.
                But it's important to remember—all of these technologies are still built on code. The upside is less
                room for error. No real emotions, expectations, or feelings get in the way of the job it was designed
                to do.
              </p>
              <p className="article-paragraph">
                According to Josh, that is the most fundamental thing to understand when it comes to machines. Not
                meeting our human expectations doesn’t automatically make the technology itself a failure. These things
                were, by definition, built on logic, which begs the question: can a robot's solution actually be wrong?
              </p>
              <p className="article-paragraph">
                The point of introducing machine learning into our products was never to have them do all the work.
                Instead, algorithms and logic-based solutions ought only provide humans with better insight so as to
                empower us to arrive at better solutions, faster.
              </p>

              <h2 className="article-subheading">How do we design for the unknown future?</h2>
              <p className="article-paragraph">
                As designers and researchers, we essentially always need to think about how we design products for the
                future, even as we’re meeting the demands of present day design. A tall order, especially when things
                move as fast as they have been over the last decade.
              </p>
              <p className="article-paragraph">
                Jared Spool, Co-Founder of UIE, asks, "What was the most important thing you learned yesterday, and how
                will it impact what you do in the future?" He advocates for looking back at the ways in which our
                design processes have already changed and how UX has evolved from a nice-to-have to a core part of
                successful products.
              </p>

              <h2 className="article-subheading">Are we designing for users or ourselves?</h2>
              <p className="article-paragraph">
                People don't always know what they want, even if they think they do. As Joe Leech, a UX psychologist,
                says, "People want more choices, but can't deal with them." So how do we design for our users if our
                users aren’t always telling us the truth?
              </p>
              <p className="article-paragraph">
                Back in the 2000s, psychologists Sheena Iyengar and Mark Lepper ran a study on consumer choices with 6
                versus 30 varieties of jam. More jam was sold when there were only 6 options, even though people said
                they preferred the week with 30. The lesson: user research and understanding human psychology are
                critical if we want to design products that truly work for people.
              </p>
            </div>
            <button className="article-back-thoughts" onClick={handleBackToThoughts}>
              ← Back to thoughts
            </button>
            <section className="contact-section">
              <div className="section-header-block">
                <h2 className="section-title-main">
                  LET'S WORK <br />
                  <span className="section-title-outline">TOGETHER</span>
                </h2>
              </div>

              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contact-row contact-row-two">
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="name-article3">Name</label>
                    <input
                      id="name-article3"
                      type="text"
                      className="contact-input"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="email-article3">Email</label>
                    <input
                      id="email-article3"
                      type="email"
                      className="contact-input"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="budget-article3">Budget</label>
                    <select id="budget-article3" className="contact-input">
                      <option value="">Select...</option>
                      <option value="1-5k">$1k – $5k</option>
                      <option value="5-10k">$5k – $10k</option>
                      <option value="10k+">$10k+</option>
                    </select>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="message-article3">Message</label>
                    <textarea
                      id="message-article3"
                      className="contact-input contact-textarea"
                      placeholder="Message"
                      rows={4}
                    />
                  </div>
                </div>

                <button type="submit" className="contact-submit">Submit</button>
              </form>
            </section>
          </div>
        </main>
      )}

      {route === 'article2' && (
        <main className="main-columns article-page" data-aos="fade-up">
          <div className="left-column">
            <div className="profile-card">
              <div className="profile-top">
                <div className="profile-visual">
                  <img src="/photo_2025-12-02_21-23-27.jpg" alt="Ibrahem Khalil" className="profile-photo" />
                </div>
              </div>
              <div className="profile-content">
                <h2 className="profile-name">Ibrahem Khalil</h2>
                <p className="profile-role">Software Engineer</p>
                <p className="profile-copy">
                  A Software Engineer who has developed countless innovative solutions.
                </p>
                <p className="profile-copy secondary">
                  Focused on front‑end experiences, modern React tooling, and clean product design.
                </p>

                <div className="profile-social-row">
                  <a
                    className="profile-icon-btn"
                    href="https://github.com/ibrahem98k"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="social-icon"
                      aria-hidden="true"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a
                    className="profile-icon-btn"
                    href="https://www.linkedin.com/in/ibrahem-khalil-6361b7386/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="social-icon"
                      aria-hidden="true"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    className="profile-icon-btn"
                    href="https://discord.com/"
                    aria-label="Discord"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="social-icon"
                      aria-hidden="true"
                    >
                      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                      <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                    </svg>
                  </a>
                  <a
                    className="profile-icon-btn"
                    href="https://www.instagram.com/ibraskywalker666/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="social-icon"
                      aria-hidden="true"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="right-column article-right">
            <div className="article-hero-wrapper">
              <img src="/still-life-device-table.jpg" alt="Workspace" className="article-hero-image" />
            </div>

            <h1 className="article-title">Starting and Growing a Career in Web Design</h1>

            <div className="article-body">
              <p className="article-paragraph">
                As the internet continues to develop and grow exponentially, jobs related to the industry do too,
                particularly those that relate to web design and development. The prediction is that by 2029, the job
                outlook for these two fields will grow by 8%—significantly faster than average. Whether you’re seeking
                salaried employment or aiming to work in a freelance capacity, a career in web design can offer a
                variety of employment arrangements, competitive salaries, and opportunities to utilize both technical
                and creative skill sets.
              </p>

              <h2 className="article-subheading">What does a career in web design involve?</h2>
              <p className="article-paragraph">
                A career in website design can involve the design, creation, and coding of a range of website types.
                Other tasks will typically include liaising with clients and discussing website specifications,
                incorporating feedback, working on graphic design and image editing, and enabling multimedia features
                such as audio and video. Requiring a range of creative and technical skills, web designers may be
                involved in work across a range of industries, including software companies, IT consultancies, web
                design companies, corporate organizations, and more.
              </p>

              <p className="article-paragraph">
                In contrast with web developers, web designers tend to play a more creative role, crafting the overall
                vision and design of a site, and determining how to best incorporate the necessary functionality.
                However, there can be significant overlap between the roles.
              </p>

              <h2 className="article-subheading">Full-stack, back-end, and front-end web development</h2>
              <p className="article-paragraph">
                Web developers can focus on the back-end, front-end, or full-stack development, and typically utilize a
                range of programming languages, libraries, and frameworks to do so. Web designers may work more closely
                with front-end engineers to establish the user-end functionality and appearance of a site.
              </p>

              <h2 className="article-subheading">Are web designers in demand?</h2>
              <p className="article-paragraph">
                In our ever-increasingly digital environment, there is a constant need for websites—and therefore for
                web designers and developers. With 17.4 billion websites in existence as of January 2020, the demand
                for web developers is only expected to rise. Web designers with significant coding experience are
                typically in higher demand and can usually expect a higher salary. Like all jobs, there are likely to be
                a range of opportunities, some of which are better paid than others.
              </p>

              <p className="article-paragraph">
                If you're interested in pursuing a career in web design or starting a freelance business, having a
                professional portfolio website is essential. You can explore ready-made web design templates tailored
                for showcasing your work and impressing potential clients at Templyo. These templates make it easier to
                create stunning websites without the need for extensive coding knowledge.
              </p>
            </div>
            <button className="article-back-thoughts" onClick={handleBackToThoughts}>
              ← Back to thoughts
            </button>
            <section className="contact-section">
              <div className="section-header-block">
                <h2 className="section-title-main">
                  LET'S WORK <br />
                  <span className="section-title-outline">TOGETHER</span>
                </h2>
              </div>

              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contact-row contact-row-two">
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="name-article2">Name</label>
                    <input
                      id="name-article2"
                      type="text"
                      className="contact-input"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="email-article2">Email</label>
                    <input
                      id="email-article2"
                      type="email"
                      className="contact-input"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="budget-article2">Budget</label>
                    <select id="budget-article2" className="contact-input">
                      <option value="">Select...</option>
                      <option value="1-5k">$1k – $5k</option>
                      <option value="5-10k">$5k – $10k</option>
                      <option value="10k+">$10k+</option>
                    </select>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="message-article2">Message</label>
                    <textarea
                      id="message-article2"
                      className="contact-input contact-textarea"
                      placeholder="Message"
                      rows={4}
                    />
                  </div>
                </div>

                <button type="submit" className="contact-submit">Submit</button>
              </form>
            </section>
          </div>
        </main>
      )}
    </div>
  )
}

export default App
