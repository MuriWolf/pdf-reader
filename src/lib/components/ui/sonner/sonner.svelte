<script lang="ts">
	import { Toaster as Sonner, type ToasterProps as SonnerProps } from "svelte-sonner";
	import { mode } from "mode-watcher";

	type $$Props = SonnerProps;
</script>

<Sonner
	theme={$mode}
	class="toaster group"
	toastOptions={{
		classes: {
			toast: "group toast group-[.toaster]:bg-c-primary !font-semibold group-[.toaster]:text-c-body-text group-[.toaster]:border-none group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-c-body-text/80",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-c-body-text/80",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-c-body-text/80",
		},
	}}
	{...$$restProps}
/>
