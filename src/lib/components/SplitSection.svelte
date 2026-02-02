<script>
  export let id
</script>

<section {id} class="split-section">
  <div class="split-left">
    <div class="left-content">
      <slot name="left-content" />
    </div>
  </div>

  <div class="split-right">
    <div class="right-content">
      <slot name="right-content" />
    </div>
  </div>
</section>

<style>
  .split-section {
    display: flex;
    height: 100vh;
    overflow: hidden;
    /* box-shadow: inset 0 -1px 0 rgba(255,255,255,0.05); */
  }

  .split-left {
    flex: 0 0 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
  }

  .left-content {
    max-width: 320px;
    text-align: left;
    color: white;
  }

  .split-right {
    background-color: white;
    flex: 1;
    position: relative;
  }

  .right-content {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    inset: 0;
  }

  /* Responsive */
  @media (max-width: 900px) {
    .split-section {
      flex-direction: column;
      height: auto;
    }

    .split-left,
    .split-right {
      flex: unset;
      width: 100%;
      min-height: auto;
    }

    .split-left {
      padding: 4rem 2rem;
    }

    .split-right {
      height: 280px;
    }
  }
</style>