<script lang="ts">
	import type { PdfType } from '$lib/types/PdfType.ts';
	import type { UserType } from '$lib/types/UserType.ts';
    import Envio from "$lib/components/Envio.svelte";
    import profile from "$lib/images/profile.jpg"

    export let data: { userData: UserType, userPosts: Array<PdfType>, currentUser: boolean };
    
</script>

{data.currentUser}

<main class="mx-auto p-4">
    <h1 class="max-w-3xl mx-auto text-c-body-text font-bold text-5xl">Perfil</h1>
    <section class="flex flex-col gap-12 max-w-3xl mx-auto mt-12 rounded-2xl mb-8">
        <div class="flex max-[440px]:flex-col items-center gap-4 text-c-body-text text-lg">
            <div class="min-[440px]:h-28 min-[440px]:w-28 overflow-hidden rounded-full ">
                <img src="" alt="No image" class="flex items-center justify-center w-full h-full text-c-secondary-dark bg-c-secondary-lighter">
            </div>
            {#if data.userData}
                <div class="flex flex-col gap-2">
                    <h2 class="text-[28px] font-medium">{data.userData.nome_user}</h2>
                    <h3 class="text-c-body-text/80 text-sm">{data.userData.username} - <span class="uppercase">{data.userData.role}</span></h3>
                </div>
            {:else} 
                <p class="text-c-body-text">loadind data ...</p>
            {/if}
        </div>
        <div>
            {#if data}
            <div class="flex flex-col gap-2">
                <h2 class="text-c-body-text"><strong class="font-semibold text-lg uppercase">Email</strong> <br/>{data.userData.email}</h2>
                <h2 class="text-c-body-text"><strong class="font-semibold text-lg uppercase">Total de Envios</strong> <br/>{data.userPosts.length}</h2>
            </div>
            {:else} 
                <p class="text-c-body-text">loadind data ...</p>
            {/if}
        </div>
    
        <div class="p-4 bg-c-secondary rounded-2xl">
            <h2 class="text-c-body-text font-bold text-2xl mb-2">Envios</h2>
            <div class="flex flex-col gap-4">
                {#if data}
                    {#if data.userPosts.length > 0}
                        {#each data.userPosts as userPost }
                            <Envio multaDados={userPost} userDados={data.userData} enviadoPor={false} />    
                        {/each}
                    {/if}
                {:else}
                    <p>Sem multas enviadas por aqui.</p>
                {/if}
            </div>
        </div>
    </section>
</main>