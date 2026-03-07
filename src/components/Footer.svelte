<script lang="ts">
  import { base } from '../lib/base';

  const year = new Date().getFullYear();

  const links = [
    { href: `${base}/docs`, label: 'Docs' },
    { href: `${base}/guide`, label: 'Guide' },
    { href: 'https://github.com/upstat-io/warpkit', label: 'GitHub', external: true },
  ];
</script>

<footer class="footer">
  <div class="footer-inner">
    <!-- LCARS-subtle accent bar -->
    <div class="lcars-bar">
      <span class="seg-amber" style="flex: 3"></span>
      <span class="seg-mauve" style="flex: 1"></span>
      <span class="seg-cyan" style="flex: 2"></span>
      <span class="seg-amber" style="flex: 0.5"></span>
    </div>

    <div class="footer-body">
      <div class="footer-brand">
        <span class="brand-name">WarpKit</span>
        <span class="brand-desc">Svelte 5 SPA framework</span>
      </div>

      <nav class="footer-links" aria-label="Footer navigation">
        {#each links as link}
          <a
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
          >{link.label}</a>
        {/each}
      </nav>

      <div class="footer-meta">
        <span>A project by <a href="https://upstat.io" target="_blank" rel="noopener noreferrer">Upstat</a></span>
        <span class="copyright">{year}</span>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    padding: 0 var(--gutter) 40px;
    margin-top: 120px;
  }

  .footer-inner {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .footer-body {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 32px;
    gap: 40px;
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .brand-name {
    font-weight: 600;
    font-size: 0.95rem;
    color: var(--text-bright);
  }

  .brand-desc {
    font-size: 0.8rem;
    color: var(--text-muted);
  }

  .footer-links {
    display: flex;
    gap: 24px;
  }

  .footer-links a {
    font-size: 0.85rem;
    color: var(--text-muted);
    transition: color 0.2s;
  }

  .footer-links a:hover {
    color: var(--text-bright);
  }

  .footer-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 0.8rem;
    color: var(--text-muted);
  }

  .footer-meta a {
    color: var(--amber);
  }

  .footer-meta a:hover {
    color: var(--text-bright);
  }

  .copyright {
    opacity: 0.5;
  }

  @media (max-width: 640px) {
    .footer-body {
      flex-direction: column;
      gap: 24px;
    }
  }
</style>
