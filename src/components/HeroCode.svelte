<script lang="ts">
  const code = `<span class="kw">import</span> { createRoute, createStateRoutes } <span class="kw">from</span> <span class="str">'@warpkit/core'</span>;

<span class="kw">export const</span> routes = <span class="fn">createStateRoutes</span>({
  <span class="key">unauthenticated</span>: {
    routes: [
      <span class="fn">createRoute</span>({
        path: <span class="str">'/login'</span>,
        component: () =&gt; <span class="kw">import</span>(<span class="str">'./Login.svelte'</span>),
      }),
    ],
    default: <span class="str">'/login'</span>,
  },
  <span class="key">authenticated</span>: {
    routes: [
      <span class="fn">createRoute</span>({
        path: <span class="str">'/dashboard'</span>,
        component: () =&gt; <span class="kw">import</span>(<span class="str">'./Dashboard.svelte'</span>),
      }),
    ],
    default: <span class="str">'/dashboard'</span>,
  },
});`;
</script>

<div class="code-window">
  <!-- LCARS top bar -->
  <div class="lcars-top">
    <span class="lcars-seg seg-amber" style="flex: 3"></span>
    <span class="lcars-seg seg-mauve" style="flex: 1"></span>
    <span class="lcars-seg seg-cyan" style="flex: 1.5"></span>
  </div>
  <div class="title-bar">
    <span class="title">routes.ts</span>
    <span class="title-badge">TypeScript</span>
  </div>
  <div class="code-body">
    <pre>{@html code}</pre>
  </div>
</div>

<style>
  .code-window {
    background: rgba(6, 10, 20, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-md);
    overflow: hidden;
  }

  /* LCARS accent bar at top */
  .lcars-top {
    display: flex;
    gap: 3px;
    height: 5px;
  }

  .lcars-seg {
    border-radius: 0;
  }

  .lcars-top .lcars-seg:first-child {
    border-radius: var(--radius-md) 0 0 0;
  }

  .lcars-top .lcars-seg:last-child {
    border-radius: 0 var(--radius-md) 0 0;
  }

  .seg-amber { background: var(--amber); }
  .seg-mauve { background: var(--mauve); }
  .seg-cyan { background: var(--cyan); }

  .title-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 18px;
    border-bottom: 1px solid var(--glass-border);
    background: rgba(255, 255, 255, 0.02);
  }

  .title {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-muted);
  }

  .title-badge {
    font-size: 0.6rem;
    font-weight: 500;
    color: var(--cyan);
    background: rgba(125, 211, 252, 0.1);
    border: 1px solid rgba(125, 211, 252, 0.2);
    padding: 2px 8px;
    border-radius: var(--radius-pill);
    letter-spacing: 0.03em;
  }

  .code-body {
    padding: 20px 24px;
    overflow-x: auto;
  }

  .code-body pre {
    font-family: var(--font-mono);
    font-size: 0.82rem;
    line-height: 1.75;
    color: var(--text);
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    border-radius: 0;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }

  /* No LCARS bar on inner pre */
  .code-body pre::before {
    display: none;
  }

  .code-body :global(.kw) { color: var(--mauve); }
  .code-body :global(.str) { color: var(--amber); }
  .code-body :global(.fn) { color: var(--cyan); }
  .code-body :global(.key) { color: var(--coral); }
</style>
