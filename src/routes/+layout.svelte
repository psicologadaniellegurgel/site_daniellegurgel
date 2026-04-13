<script lang="ts">
	import "../app.css";
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import WhatsAppBtn from "$lib/components/WhatsAppBtn.svelte";

	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen relative">
	<Header />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
	<WhatsAppBtn />
</div>
