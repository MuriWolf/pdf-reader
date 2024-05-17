<script lang="ts">
    import { createLabel, melt } from '@melt-ui/svelte'

    export let titulo = "titulo"
    const {
        elements: { root }
    } = createLabel()
</script>

<div class="flex flex-col items-start justify-center">
    <label
      use:melt={$root}
      for="email"
      class="mb-0.5 font-medium text-magnum-900"
      data-melt-part="root"
    >
      <span class="text-c-body-text">{titulo}</span>
    </label>
    <input
      type="text"
      id="email"
      class="h-10 w-[240px] rounded-[5px] bg-c-body-text px-3 py-2 focus:outline-none text-c-secondary-dark ring-c-body-text focus:ring-2 transition-all"
      placeholder="vanilla@melt-ui.com"
    />
  </div>