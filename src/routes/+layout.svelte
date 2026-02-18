<script>
	import { base } from '$app/paths'
	import '../app.css'
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
	<link rel="icon" href="{base}/images/logo.jpg" />
	<title>LCID - Informatique et Développement</title>
</svelte:head>



<Navbar />

<main>
	<slot />
</main>

<Footer />
