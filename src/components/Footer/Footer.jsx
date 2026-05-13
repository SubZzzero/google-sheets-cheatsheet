import s from './Footer.module.css';

export const Footer = ({ ui }) => {
  return (
    <footer className={s.footer}>
      <a
        className={s.githubLink}
        href="https://github.com/SubZzzero"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ui.githubAriaLabel}
      >
        <img className={s.githubIcon} src="/github.png" alt="" aria-hidden="true" />
        <span className={s.githubText}>{ui.githubText}</span>
      </a>
    </footer>
  );
};
