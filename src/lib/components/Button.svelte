<script lang="ts">
    export let disabled = false;
    
</script>

<button class="py-3 px-6 bg-c-primary text-c-body-text font-medium rounded-full block hover:bg-c-primary/80 w-full transition-all shadow-sm hover:shadow-transparent duration-75 ease-in active:scale-95 {$$restProps.class || ''}" type="button" on:click|preventDefault disabled={disabled}>
    <slot />
</button>