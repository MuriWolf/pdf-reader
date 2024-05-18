<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
	import * as AlertDialog from "./index.js";
	import { cn, flyAndScale } from "$lib/utils.js";

	type $$Props = AlertDialogPrimitive.ContentProps;

	export let transition: $$Props["transition"] = flyAndScale;
	export let transitionConfig: $$Props["transitionConfig"] = undefined;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<AlertDialog.Portal>
	<AlertDialog.Overlay />
	<AlertDialogPrimitive.Content
		{transition}
		{transitionConfig}
		class={cn(
			"fixed left-[50%] top-[50%] z-50 grid w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border  bg-c-secondary p-6 shadow-lg rounded-2xl md:w-full",
			className
		)}
		{...$$restProps}
	>
		<slot />
	</AlertDialogPrimitive.Content>
</AlertDialog.Portal>
