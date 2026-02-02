<script>
	import favicon from '$lib/assets/favicon.svg'
	import '../app.css'
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

<main>
	<slot />
</main>

<Footer />
