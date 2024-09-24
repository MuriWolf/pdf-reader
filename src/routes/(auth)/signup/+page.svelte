<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Label from "$lib/components/Label.svelte";
    import * as Select from "$lib/components/ui/select";
    import type { UserSignupType } from "$lib/types/UserSignupType"
    import ImageImportModal from "$lib/components/modals/ImageImportModal.svelte";
    import { ImageUp } from "lucide-svelte";

    let showImageImportModal: boolean = false;

    let userData: UserSignupType = {
      nome_user: "",
      email: "",
      role: {value: "user"},
      senha: "",
      username: "",
    };

    function handlePhotoProfileChange(e: any) {}

    function handleSelectedChange(v: any) {
      // v && (userData.role = v);
      // userData = userData;
      console.log(v)
    }
</script>

<hgroup class="max-w-xl mx-auto p-8">
    <h1 class="text-c-body-text font-bold text-5xl">Adicionar perfil</h1>
    <h2 class="text-lg text-c-body-text/80 mt-2">Entre para gerenciar e analisar suas multas de forma eficiente.</h2>
  </hgroup>
  <section class="flex flex-col gap-4 max-w-xl mx-auto mt-4 rounded-2xl p-8">
    <button class="w-40 h-40 mx-auto rounded-full bg-c-secondary-lighter mb-8" on:click={() => showImageImportModal = true}>
      <img src={userData.foto} alt="Enviar imagem" class="flex justify-center items-center" width="160" height="160">
        <div class="flex items-center justify-center relative bottom-10 right-0 w-11 h-11 rounded-full bg-c-primary">
        <ImageUp color={"#f7f7f7"} />
      </div>
    </button>
      <Label titulo="nome" bind:value={userData.nome_user} />
      <Label titulo="username" bind:value={userData.username} />
      <Label titulo="Senha" bind:value={userData.senha} />
      <Label titulo="Email" bind:value={userData.email} />
      <Label titulo={"Role"}>
        <Select.Root 
        preventScroll={false}
        onSelectedChange={handleSelectedChange}
        selected={userData.role}
      >
        <Select.Trigger class="w-full !ring-c-primary !ring-offset-0 rounded-[5px] bg-c-body-text" > 
            <Select.Value placeholder="User" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="admin">Admin</Select.Item>
          <Select.Item value="user">User</Select.Item>
        </Select.Content>
      </Select.Root>
      </Label>
      <Button class="mt-16">Enviar</Button>
  </section>

{#if showImageImportModal}
  <ImageImportModal 
    title={"teste"}
    on:closeModal={(e) => {
      showImageImportModal = false;
      handlePhotoProfileChange(e);
    }}
  />
{/if}