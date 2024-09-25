<script lang="ts">
	import { enhance } from '$app/forms';
    import Button from "$lib/components/Button.svelte";
    import Label from "$lib/components/Label.svelte";
    import * as Tooltip from "$lib/components/ui/tooltip";

    export let form;
</script>

<hgroup class="max-w-xl mx-auto p-8">
  <h1 class="text-c-body-text font-bold text-5xl mt-16">Login</h1>
  <h2 class="text-lg text-c-body-text/80 mt-2">Entre para gerenciar e analisar suas multas de forma eficiente.</h2>
</hgroup>
<section class="max-w-xl mx-auto mt-4 rounded-2xl p-8">
    <form method="POST" use:enhance class="flex flex-col gap-4 ">
      {#if form?.errors?.api?.[0]}
        <span class="text-red-400 mt-1">{form?.errors?.api?.[0]}</span>
      {/if}
      <Label titulo="Email">
        <input
          name="email"
          type="email" 
          class="h-10 w-full rounded-[5px] bg-c-secondary-light px-3 py-2 focus:outline-none text-c-body-text ring-c-primary focus:ring-2 transition-all "
          placeholder="Digite o email"
          value={form?.data?.email ?? ''}
        />
        {#if form}
          {#if form?.errors?.form?.email?.[0]}
            <span class="text-red-400 mt-1">{form?.errors?.form?.email?.[0]}</span>
          {/if}
        {/if}
      </Label>
      <Label titulo="Senha" >
        <input
          name="senha"
          type="password" 
          class="h-10 w-full rounded-[5px] bg-c-secondary-light px-3 py-2 focus:outline-none text-c-body-text ring-c-primary focus:ring-2 transition-all {form?.errors?.form?.senha?.[0] ? 'border-2 border-red-400' : ''}"
          placeholder="Digite a senha"
        />
 
          {#if form?.errors?.form?.senha?.[0]}
            <span class="text-red-400 mt-1">{form?.errors?.form?.senha?.[0]}</span>
          {/if}
 
      </Label>
      <Button type="submit" class="mt-16">Enviar</Button>
      <Tooltip.Root openDelay={0}>
        <Tooltip.Trigger class="text-blue-500 text-center hover:underline">Não possuo conta</Tooltip.Trigger>
        <Tooltip.Content >
          <p class="font-medium">Entre em contato com seu supervisor para ganhar acesso a um login. </p>
        </Tooltip.Content>
      </Tooltip.Root>
    </form>

</section>