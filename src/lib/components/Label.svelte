<script lang="ts">
    import { createLabel, melt } from '@melt-ui/svelte'

    export let titulo = "titulo";
    export let value = "";
    export let placeholder = "";
    export let name = "";
    const {
        elements: { root }
    } = createLabel()
</script>

<div class="flex flex-col items-start justify-center w-full">
    <label
      use:melt={$root}
      for="email"
      class="mb-0.5 font-medium text-magnum-900"
      data-melt-part="root"
    >
      <span class="text-c-body-text">{titulo}</span>
    </label>
    <slot>
      <input
        type="text"
        name={name}
        class="h-10 w-full rounded-[5px] bg-c-secondary-light px-3 py-2 focus:outline-none text-c-body-text ring-c-primary focus:ring-2 transition-all "
        placeholder={placeholder}
        bind:value={value}
      />
    </slot>
</div>


  