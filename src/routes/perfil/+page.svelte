<script lang="ts">
	import type { PdfType } from '$lib/types/PdfType.ts';
	import type { UserType } from '$lib/types/UserType.ts';
    import Envio from "$lib/components/Envio.svelte";
    import profile from "$lib/images/profile.jpg"

    export let data: { userData: UserType, userPosts: Array<PdfType> };
    
</script>

<main class="mx-auto px-4">
    <h1 class="max-w-3xl mx-auto text-c-body-text font-bold text-5xl">Perfil</h1>
    <section class="max-w-3xl mx-auto mt-4 bg-c-secondary rounded-2xl mb-8">
        <div class="flex max-[440px]:flex-col gap-4 bg-c-primary rounded-2xl p-4 mb-4 shadow-sm text-c-body-text text-lg">
            <div class=" min-[440px]:h-28 min-[440px]:w-28 overflow-hidden rounded-[5px] border-2 border-c-body-text">
                <img src={profile} alt="" class="w-full h-full">
            </div>
            {#if data}
                <div class="flex flex-col gap-2">
                    <h2><strong class="font-semibold">Nome: </strong>{data.userData.name}</h2>
                    <h2><strong class="font-semibold">Email/ID: </strong>{data.userData.email}</h2>
                    <h2><strong class="font-semibold">Total de Envios: </strong>{data.userData.quantidade_posts}</h2>
                </div>
            {:else} 
                <p class="text-c-body-text">loadind data ...</p>
            {/if}
        </div>
    
        <div class="p-4">
            <h2 class="text-c-body-text font-bold text-3xl mb-2">Envios</h2>
            <div class="flex flex-col gap-4">
                {#if data}
                    {#if data.userPosts.length > 0}
                        {#each data.userPosts as userPost }
                            <Envio multaDados={userPost} />    
                        {/each}
                    {/if}
                {/if}
            </div>
        </div>
    </section>
</main>