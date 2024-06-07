<script>
    import Header from "$lib/layouts/Header.svelte";
    import "../app.css";
    
</script>

<Header />
<slot />

<style>
    :global(body) {
        @apply bg-c-secondary-dark;
    }
</style>