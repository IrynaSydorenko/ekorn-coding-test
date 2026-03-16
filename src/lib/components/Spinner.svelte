<script lang="ts">
</script>

<div class="loading"></div>

<style>
	.loading {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 200px;
	}

	.loading::after {
		content: '';
		width: 32px;
		height: 32px;
		border: 3px solid var(--color-border);
		border-top-color: var(--color-text);
		border-radius: 50%;
		animation: spin 0.7s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
