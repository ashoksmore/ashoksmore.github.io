const icons = {
  ownership: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M4 7h16M4 12h10M4 17h6" strokeLinecap="round" />
      <circle cx="18" cy="17" r="3" />
      <path d="M18 14v-4l2-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  standards: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 11l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  mentor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
      <path d="M14 20c0-2.2 1.3-4 3.5-4.5" strokeLinecap="round" />
    </svg>
  ),
  communicate: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M21 12a8 8 0 01-8 8H7l-4 2v-4.5A8 8 0 1112 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8v4l2.5 1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function TeamValueIcon({ name }) {
  return <span className="team-value-icon">{icons[name]}</span>;
}
