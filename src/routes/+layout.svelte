<script lang="ts">
    import { browser } from "$app/environment";
    import { onNavigate } from "$app/navigation";
    import Header from "$lib/layouts/Header.svelte";
    import type { UserType } from "$lib/types/UserType";
    import "../app.css";

    export let data: { user: UserType };

    onNavigate((navigation) => {
        // this class is applied to the body on the main page, when filter or the map is open. This prevents the overflow-hidden to stay on page.
        if (browser) {
            if (document.body.classList.contains('overflow-y-hidden')) {
                document.body.classList.remove('overflow-y-hidden');
             }
        }
            if (!document.startViewTransition) return;

            return new Promise((resolve) => {
                document.startViewTransition(async () => {
                    resolve();
                    await navigation.complete;
                });
            });
        });    
</script>

{#if data?.user}
    <Header currentUser={{ username: data?.user.username, role: data?.user.role }}  />
{/if}
<slot />

<style>
    :global(body) {
        @apply bg-c-secondary-dark;
    }
</style>