import React from 'react'
import Reveal from '../components/Reveal'
import TeamCard from '../components/TeamCard'
import CTASection from '../components/CTASection'
import { team } from '../data/team'

export default function Team() {
  return (
    <>
      <section className="page-hero" aria-label="Team">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> <span aria-hidden="true">/</span> <span aria-current="page">Team</span></nav>
          <h1>Meet the Advisors</h1>
          <p>A small team, chosen for expertise, discretion and a shared love of great architecture.</p>
        </div>
      </section>

      <section className="section section-team" aria-label="Team members">
        <div className="container">
          <div className="team-grid">
            {team.map((m, i) => (
              <Reveal key={m.id} delay={i * 70}>
                <TeamCard member={m} />
                <p className="team-bio">{m.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
