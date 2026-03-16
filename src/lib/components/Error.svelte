<script lang="ts">
	interface Props {
		message: string | null;
	}

	let { message }: Props = $props();
</script>

<div class="error">
	<span class="error-icon">⚠️</span>
	<p class="error-message">{message}</p>
</div>

<style>
	.error {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-sm);
		height: 200px;
		color: var(--color-text-danger);
	}

	.error-icon {
		font-size: 2rem;
	}

	.error-message {
		font-size: 0.95rem;
	}
</style>
