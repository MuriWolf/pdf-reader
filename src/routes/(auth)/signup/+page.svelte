<script lang="ts">
	  import { enhance } from '$app/forms';
    import Button from "$lib/components/Button.svelte";
    import Label from "$lib/components/Label.svelte";
    import * as Select from "$lib/components/ui/select";
    import type { UserSignupType } from "$lib/types/UserSignupType"
    import ImageImportModal from "$lib/components/modals/ImageImportModal.svelte";
    import { ImageUp } from "lucide-svelte";
    import { Toaster } from '$lib/components/ui/sonner';
    import { toast } from 'svelte-sonner';

    export let form;

    let showImageImportModal: boolean = false;
    
    let userData: UserSignupType = {
      nome_user: "",
      email: "",
      role: "user",
      senha: "",
      username: "",
    };

    let showRoleOnSelect: { value: "user" | "admin" } = { value: userData.role };

    function handlePhotoProfileChange(e: any) {}

    function handleSelectedChange(v: any) {
      userData.role = v.value;
      userData = userData;
      showRoleOnSelect = v;
    }

    function createSucessToast(userRole: 'admin' | 'user') {
      toast(`Perfil de ${userRole} criado com sucesso.`);
    }

    function handleFormSubmit(userRole: 'admin' | 'user' ) {
      createSucessToast(userRole);
    }
</script>

<hgroup class="max-w-xl mx-auto p-8">
    <h1 class="text-c-body-text font-bold text-5xl">Adicionar perfil</h1>
  </hgroup>
  <form method="POST" action="/signup" use:enhance on:submit={() => handleFormSubmit(userData.role)} class="flex flex-col gap-4 max-w-xl mx-auto mt-4 rounded-2xl p-8">
    {#if form?.errors?.api?.[0]}
      <span class="text-red-400 mt-1">{form?.errors?.api?.[0]}</span>
    {/if}
    <button class="w-40 h-40 mx-auto rounded-full bg-c-secondary-lighter mb-8" on:click={() => showImageImportModal = true}>
      <img src={userData.foto} alt="Enviar imagem" class="flex justify-center items-center" width="160" height="160">
        <div class="flex items-center justify-center relative bottom-10 right-0 w-11 h-11 rounded-full bg-c-primary">
        <ImageUp color={"#f7f7f7"} />
      </div>
      <input type="hidden" name="foto" value="">
    </button>
    <Label titulo="nome" bind:value={userData.nome_user} >
      <input
        name="nome_user"
        type="text" 
        class="h-10 w-full rounded-[5px] bg-c-secondary-light px-3 py-2 focus:outline-none text-c-body-text transition-all {form?.errors?.form?.nome_user?.[0] ? 'border-2 border-red-400' : 'ring-c-primary focus:ring-2'}"
        placeholder="Digite o nome completo"
        value={form?.data?.nome_user ?? ''}
      />
      {#if form}
        {#if form?.errors?.form?.nome_user?.[0]}
          <span class="text-red-400 mt-1">{form?.errors?.form?.nome_user?.[0]}</span>
        {/if}
      {/if}
    </Label>
    <Label titulo="username" bind:value={userData.username}>
      <input
        name="username"
        type="text" 
        class="h-10 w-full rounded-[5px] bg-c-secondary-light px-3 py-2 focus:outline-none text-c-body-text transition-all {form?.errors?.form?.username?.[0] ? 'border-2 border-red-400' : 'ring-c-primary focus:ring-2'}"
        placeholder="Digite um username"
        value={form?.data?.username ?? ''}
      />
      {#if form}
        {#if form?.errors?.form?.username?.[0]}
          <span class="text-red-400 mt-1">{form?.errors?.form?.username?.[0]}</span>
        {/if}
      {/if}
    </Label>
    <Label titulo="Senha" bind:value={userData.senha}>
      <input
        name="senha"
        type="password" 
        class="h-10 w-full rounded-[5px] bg-c-secondary-light px-3 py-2 focus:outline-none text-c-body-text transition-all {form?.errors?.form?.senha?.[0] ? 'border-2 border-red-400' : 'ring-c-primary focus:ring-2'}"
        placeholder="Digite a senha"
      />
      {#if form}
        {#if form?.errors?.form?.senha?.[0]}
          <span class="text-red-400 mt-1">{form?.errors?.form?.senha?.[0]}</span>
        {/if}
      {/if}
    </Label>
    <Label titulo="email" bind:value={userData.nome_user} >
      <input
        name="email"
        type="email" 
        class="h-10 w-full rounded-[5px] bg-c-secondary-light px-3 py-2 focus:outline-none text-c-body-text transition-all {form?.errors?.form?.email?.[0] ? 'border-2 border-red-400' : 'ring-c-primary focus:ring-2'}"
        placeholder="Digite o email"
        value={form?.data?.email ?? ''}
      />
      {#if form}
        {#if form?.errors?.form?.email?.[0]}
          <span class="text-red-400 mt-1">{form?.errors?.form?.email?.[0]}</span>
        {/if}
      {/if}
    </Label>
    <Label titulo={"Role"}>
      <Select.Root 
      preventScroll={false}
      onSelectedChange={handleSelectedChange}
      selected={showRoleOnSelect}
    >
      <Select.Trigger class="w-full !ring-c-primary !ring-offset-0 rounded-[5px] bg-c-body-text {form?.errors?.form?.role?.[0] ? 'border-2 border-red-400' : ''}" > 
          <Select.Value placeholder="User" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="admin">Admin</Select.Item>
        <Select.Item value="user">User</Select.Item>
      </Select.Content>
    </Select.Root>
      <input type="hidden" name="role" bind:value={userData.role}>
      {#if form}
        {#if form?.errors?.form?.role?.[0]}
          <span class="text-red-400 mt-1">{form?.errors?.form?.role?.[0]}</span>
        {/if}
      {/if}
    </Label>
    <Button type="submit" class="mt-16">Enviar</Button>
  </form>

<Toaster />

{#if showImageImportModal}
  <ImageImportModal 
    title={"teste"}
    on:closeModal={(e) => {
      showImageImportModal = false;
      handlePhotoProfileChange(e);
    }}
  />
{/if}