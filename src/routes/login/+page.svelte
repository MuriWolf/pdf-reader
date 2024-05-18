<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Label from "$lib/components/Label.svelte";
    import * as Tooltip from "$lib/components/ui/tooltip";


</script>

<h1 class="max-w-xl mx-auto text-c-body-text font-bold text-5xl ">Login</h1>
<section class="flex flex-col gap-4 max-w-xl mx-auto mt-4 bg-c-secondary rounded-2xl p-8">
    <Label titulo="Email/ID" />
    <Label titulo="Senha" type="password" />
    <Button class="mt-8">Enviar</Button>
    <Tooltip.Root openDelay={0}>
        <Tooltip.Trigger class="text-blue-500 text-center hover:underline">Não possuo conta</Tooltip.Trigger>
        <Tooltip.Content >
          <p class="font-medium">Entre em contato com seu supervisor para ganhar acesso a um login. </p>
        </Tooltip.Content>
      </Tooltip.Root>
</section>