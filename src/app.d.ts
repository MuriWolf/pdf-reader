// See https://kit.svelte.dev/docs/types#app

import type { UserType } from "$lib/types/UserType";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: str | null
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}


	declare namespace svelteHTML {
		interface HTMLAttributes<T> {
			"on:click_outside"?: CompositionEventHandler<T>;
		}
		interface HTMLAttributes<T> {
			"on:drag_drop"?: CompositionEventHandler<T>;
		}
	}

}

export {};
