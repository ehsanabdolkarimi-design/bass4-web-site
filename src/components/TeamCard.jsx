import React from 'react'

/** Portrait card with hover socials — reused on Home and Team pages. */
export default function TeamCard({ member }) {
  return (
    <article className="team-card">
      <div className="team-photo">
        <img src={member.photo} alt={`Portrait of ${member.name}`} loading="lazy" />
        <div className="team-socials">
          <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>✉</a>
          <a href={`tel:${member.phone.replace(/[^\d+]/g, '')}`} aria-label={`Call ${member.name}`}>☎</a>
          <a href="#" aria-label={`${member.name} on LinkedIn`}>in</a>
        </div>
      </div>
      <div className="team-meta">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
    </article>
  )
}
