<script lang="ts">
  import { base } from '../lib/base';

  const links = [
    { href: `${base}/docs`, label: 'Docs' },
    { href: `${base}/guide`, label: 'Guide' },
  ];

  const githubPath = 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z';
</script>

<nav class="nav" aria-label="Main navigation">
  <div class="nav-inner">
    <a href={`${base}/`} class="logo" aria-label="WarpKit home">
      <span class="logo-mark">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M8 16 Q12 14, 16 14" stroke="#060a14" stroke-width="1.5" fill="none" opacity="0.5" stroke-linecap="round"/>
          <path d="M6 16 Q12 16, 18 16" stroke="#060a14" stroke-width="1.8" fill="none" opacity="0.6" stroke-linecap="round"/>
          <path d="M8 16 Q12 18, 16 18" stroke="#060a14" stroke-width="1.5" fill="none" opacity="0.5" stroke-linecap="round"/>
          <path d="M18 10 L26 16 L18 22 L21 16 Z" fill="#060a14"/>
        </svg>
      </span>
      <span class="logo-text">WarpKit</span>
    </a>
    <ul class="nav-links">
      {#each links as link}
        <li>
          <a href={link.href} class="nav-link">{link.label}</a>
        </li>
      {/each}
      <li>
        <a
          href="https://github.com/upstat-io/warpkit"
          class="nav-link gh-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d={githubPath} fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/>
          </svg>
        </a>
      </li>
      <li>
        <a href={`${base}/docs`} class="nav-cta">Get Started</a>
      </li>
    </ul>
  </div>
</nav>

<style>
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: rgba(6, 10, 20, 0.7);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: var(--border-weight) solid var(--glass-border);
  }

  .nav-inner {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--gutter);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-bright);
    font-weight: 600;
    font-size: 1.05rem;
    letter-spacing: -0.01em;
  }

  .logo-mark {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    background: linear-gradient(135deg, var(--amber), var(--mauve));
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
  }

  .logo-mark svg {
    width: 26px;
    height: 26px;
  }

  .logo:hover .logo-mark {
    opacity: 1;
  }

  .logo-text {
    color: var(--text-bright);
  }

  .logo:hover .logo-text {
    color: #fff;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 28px;
    align-items: center;
  }

  .nav-links li {
    display: flex;
    align-items: center;
  }

  .nav-link {
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--text-muted);
    transition: color 0.2s;
  }

  .nav-link:hover {
    color: var(--text-bright);
  }

  .gh-link {
    display: flex;
    align-items: center;
    color: var(--text-muted);
  }

  .gh-link:hover {
    color: var(--text-bright);
  }

  .nav-cta {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--bg);
    background: var(--amber);
    padding: 6px 16px;
    border-radius: var(--radius-pill);
    transition: background 0.2s, transform 0.15s;
  }

  .nav-cta:hover {
    background: #fdb644;
    color: var(--bg);
    transform: translateY(-1px);
  }

  @media (max-width: 640px) {
    .nav-links {
      gap: 16px;
    }

    .nav-cta {
      display: none;
    }
  }
</style>
