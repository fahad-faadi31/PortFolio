/**
 * Badge — small pill used for technology tags (project cards, skills).
 * Deliberately tiny and un-opinionated so it reads as metadata,
 * not another button competing for attention.
 */
export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border bg-surface/80
        px-3 py-1 text-xs font-medium text-text-secondary ${className}`}
    >
      {children}
    </span>
  );
}
