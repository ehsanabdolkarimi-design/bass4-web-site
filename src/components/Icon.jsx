import React from 'react'

// Shared minimal line-icon set (stroke-based, currentColor)
const paths = {
  truck: <><path d="M1 5h12v11H1z" /><path d="M13 8h4l3 3v5h-7" /><circle cx="5.5" cy="17.5" r="1.8" /><circle cx="16.5" cy="17.5" r="1.8" /></>,
  shield: <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" />,
  chat: <path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5Z" />,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3m0 14v3M2 12h3m14 0h3M4.9 4.9l2.1 2.1m10 10 2.1 2.1M19.1 4.9 17 7m-10 10-2.1 2.1" /></>,
  check: <path d="m4 12.5 5 5L20 6.5" />,
  lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
  tag: <><path d="M2 12 12 2h9v9L11 21l-9-9Z" /><circle cx="16.5" cy="7.5" r="1.5" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  cart: <><path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L22 7H6" /><circle cx="9.5" cy="20.5" r="1.6" /><circle cx="18.5" cy="20.5" r="1.6" /></>,
  heart: <path d="M12 21s-8-5.3-8-11a4.6 4.6 0 0 1 8-3.2A4.6 4.6 0 0 1 20 10c0 5.7-8 11-8 11Z" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 5-5.5 8-5.5s6.5 1.5 8 5.5" /></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6L22 7" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>,
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  x: <path d="M5 5l14 14M19 5 5 19" />,
  chevronLeft: <path d="m15 5-7 7 7 7" />,
  chevronRight: <path d="m9 5 7 7-7 7" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  trash: <><path d="M3 6h18M8 6V4h8v2m-9 0 1 15h8l1-15" /></>,
  arrowLeft: <path d="M19 12H5m6 6-6-6 6-6" />,
  arrowRight: <path d="M5 12h14m-6-6 6 6-6 6" />,
}

export function Icon({ name, size = 18, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {paths[name] || null}
    </svg>
  )
}

export default Icon
