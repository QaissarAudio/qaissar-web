interface LinkedInButtonProps {
  href?: string
  className?: string
}

export function LinkedInButton({
  href = 'https://www.linkedin.com/company/qaissar',
  className = '',
}: LinkedInButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={['linkedin-footer-btn', className].filter(Boolean).join(' ')}
      aria-label="Qaissar on LinkedIn"
    >
      <span className="linkedin-footer-btn__sign" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M20.447 20.452H17.01v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.588V9h3.31v1.561h.046c.461-.873 1.586-1.794 3.265-1.794 3.492 0 4.138 2.299 4.138 5.29v6.395zM5.337 7.433a1.92 1.92 0 1 1 0-3.84 1.92 1.92 0 0 1 0 3.84zm1.657 13.019H3.68V9h3.314v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </span>
      <span className="linkedin-footer-btn__text">LinkedIn</span>
    </a>
  )
}

export default LinkedInButton
