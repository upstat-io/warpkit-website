<script lang="ts">
  interface Props {
    title: string;
    description: string;
    accent?: 'amber' | 'mauve' | 'cyan' | 'coral';
  }

  let { title, description, accent = 'amber' }: Props = $props();
</script>

<div class="card" class:amber={accent === 'amber'} class:mauve={accent === 'mauve'} class:cyan={accent === 'cyan'} class:coral={accent === 'coral'}>
  <div class="card-accent"></div>
  <h3>{title}</h3>
  <p>{description}</p>
</div>

<style>
  .card {
    position: relative;
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: var(--border-weight) solid var(--glass-border);
    border-radius: var(--radius-md);
    padding: 32px 28px;
    overflow: hidden;
    transition: border-color 0.25s, transform 0.2s;
  }

  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: var(--glass-shine);
    pointer-events: none;
  }

  .card:hover {
    border-color: var(--glass-border-hover);
    transform: translateY(-2px);
  }

  .card-accent {
    width: 32px;
    height: 4px;
    border-radius: var(--radius-pill);
    margin-bottom: 20px;
  }

  .amber .card-accent { background: var(--amber); }
  .mauve .card-accent { background: var(--mauve); }
  .cyan .card-accent { background: var(--cyan); }
  .coral .card-accent { background: var(--coral); }

  .card:hover.amber { border-color: rgba(245, 166, 35, 0.2); }
  .card:hover.mauve { border-color: rgba(196, 160, 232, 0.2); }
  .card:hover.cyan { border-color: rgba(125, 211, 252, 0.2); }
  .card:hover.coral { border-color: rgba(224, 122, 95, 0.2); }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
    font-weight: 600;
    color: var(--text-bright);
    text-transform: none;
    letter-spacing: normal;
  }

  p {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.65;
  }
</style>
