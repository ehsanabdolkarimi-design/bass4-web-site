const img = (name) => `/images/${name}`

export const team = [
  {
    id: 'daniel-morgan',
    name: 'Daniel Morgan',
    role: 'Managing Director',
    photo: img('team-1.jpg'),
    phone: '(555) 246-7890',
    email: 'daniel@horizonproperties.com',
    bio: 'Twenty years guiding luxury acquisitions across Texas and the West Coast, with a focus on architectural homes and off-market estates.',
  },
  {
    id: 'olivia-carter',
    name: 'Olivia Carter',
    role: 'Luxury Property Advisor',
    photo: img('team-2.jpg'),
    phone: '(555) 246-7891',
    email: 'olivia@horizonproperties.com',
    bio: 'Specialist in waterfront and coastal properties, representing buyers and sellers in Malibu, Miami and beyond.',
  },
  {
    id: 'james-wilson',
    name: 'James Wilson',
    role: 'Investment Consultant',
    photo: img('team-3.jpg'),
    phone: '(555) 246-7892',
    email: 'james@horizonproperties.com',
    bio: 'Advises private clients on portfolio strategy, development opportunities and yield-driven acquisitions.',
  },
  {
    id: 'sophia-bennett',
    name: 'Sophia Bennett',
    role: 'Senior Property Specialist',
    photo: img('team-4.jpg'),
    phone: '(555) 246-7893',
    email: 'sophia@horizonproperties.com',
    bio: 'Trusted advisor to relocating families and executives, known for a calm, detail-first approach to every transaction.',
  },
]

export const getAgent = (id) => team.find((t) => t.id === id)

export const services = [
  {
    title: 'Luxury Home Sales',
    description: 'Discreet, end-to-end representation for buyers and sellers of architectural and waterfront homes.',
  },
  {
    title: 'Property Investment',
    description: 'Portfolio strategy, acquisitions and yield analysis for private investors and family offices.',
  },
  {
    title: 'Property Marketing',
    description: 'Cinematic photography, film, staging and targeted campaigns that position every listing at its best.',
  },
  {
    title: 'Real Estate Advisory',
    description: 'Market intelligence and valuation-led guidance for confident decisions at every price point.',
  },
  {
    title: 'Property Valuation',
    description: 'Rigorous, defensible appraisals for estates, developments and unique architectural assets.',
  },
  {
    title: 'Relocation Services',
    description: 'Schools, neighborhoods, logistics and settling-in support for executives and growing families.',
  },
]

export const whyPoints = [
  { title: 'Curated Portfolio', text: 'Every listing is hand-selected for design, location and long-term value.' },
  { title: 'Market Intelligence', text: 'Proprietary data and local expertise behind every recommendation.' },
  { title: 'Absolute Discretion', text: 'Private negotiations and off-market access for our clients.' },
  { title: 'End-to-End Service', text: 'From first viewing to final signature — and well beyond.' },
]

export const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '$1.2B', label: 'Property Sales Volume' },
  { value: '480+', label: 'Homes Sold' },
  { value: '98%', label: 'Client Satisfaction' },
]
