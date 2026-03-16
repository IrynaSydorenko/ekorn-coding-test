<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		text: string;
	}

	let { text }: Props = $props();

	let textToDisplay = $state('');
	let index = $state(0);

	onMount(() => {
		const interval = setInterval(() => {
			if (index < text.length) {
				textToDisplay += text[index];
				index++;
			} else {
				clearInterval(interval);
			}
		}, 12);
	});
</script>

<h1>{textToDisplay}</h1>

<style scoped>
	h1 {
		font-size: 28px;
		background: linear-gradient(75deg, #00ddff, #ffb6c1, #ff3e00);
		background-size: 300% 300%;
		margin-bottom: 30px;
		animation: gradient-shift 5s infinite;
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
		text-box-trim: trim-both;
		line-height: 1.2;
	}

	@keyframes gradient-shift {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
