<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Label from "$lib/components/Label.svelte";
    import * as Tooltip from "$lib/components/ui/tooltip";
</script>

<hgroup class="max-w-xl mx-auto p-8">
  <h1 class="text-c-body-text font-bold text-5xl mt-16">Login</h1>
  <h2 class="text-lg text-c-body-text/80 mt-2">Entre para gerenciar e analisar suas multas de forma eficiente.</h2>
</hgroup>
<section class="flex flex-col gap-4 max-w-xl mx-auto mt-4 rounded-2xl p-8">
    <Label titulo="Email/ID" />
    <Label titulo="Senha" type="password" />
    <Button class="mt-16">Enviar</Button>
    <Tooltip.Root openDelay={0}>
        <Tooltip.Trigger class="text-blue-500 text-center hover:underline">Não possuo conta</Tooltip.Trigger>
        <Tooltip.Content >
          <p class="font-medium">Entre em contato com seu supervisor para ganhar acesso a um login. </p>
        </Tooltip.Content>
      </Tooltip.Root>
</section>