import s from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <a
        className={s.githubLink}
        href="https://github.com/SubZzzero"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Открыть GitHub-профиль SubZzzero"
      >
        <img className={s.githubIcon} src="/github.png" alt="" aria-hidden="true" />
        <span className={s.githubText}>GitHub</span>
      </a>
    </footer>
  );
};
