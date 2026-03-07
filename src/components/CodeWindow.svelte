<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title?: string;
    children: Snippet;
  }

  let { title = 'main.ts', children }: Props = $props();
</script>

<div class="code-window">
  <div class="title-bar">
    <div class="dots">
      <span class="dot dot-close"></span>
      <span class="dot dot-min"></span>
      <span class="dot dot-max"></span>
    </div>
    <span class="title">{title}</span>
    <span class="spacer"></span>
  </div>
  <div class="code-body">
    {@render children()}
  </div>
</div>

<style>
  .code-window {
    background: rgba(8, 12, 24, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: var(--border-weight) solid var(--glass-border);
    border-radius: var(--radius-md);
    overflow: hidden;
  }

  .title-bar {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    border-bottom: var(--border-weight) solid var(--glass-border);
    background: rgba(255, 255, 255, 0.02);
  }

  .dots {
    display: flex;
    gap: 6px;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .dot-close { background: rgba(255, 95, 87, 0.7); }
  .dot-min { background: rgba(255, 189, 46, 0.7); }
  .dot-max { background: rgba(39, 201, 63, 0.7); }

  .title {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-muted);
    margin-left: 12px;
  }

  .spacer {
    flex: 1;
  }

  .code-body {
    padding: 20px 24px;
    font-family: var(--font-mono);
    font-size: 0.82rem;
    line-height: 1.75;
    overflow-x: auto;
  }

  .code-body :global(pre) {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    border-radius: 0;
    backdrop-filter: none;
  }
</style>
