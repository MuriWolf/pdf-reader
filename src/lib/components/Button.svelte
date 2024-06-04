<script lang="ts">
    export let disabled = false;
    
</script>

<button class="py-3 px-6 bg-c-primary text-c-body-text font-medium rounded-[5px] block hover:bg-c-primary/80 w-full transition-all shadow-sm hover:shadow-transparent duration-75 ease-in active:scale-95 {$$restProps.class || ''}" on:click disabled={disabled}>
    <slot />
</button>