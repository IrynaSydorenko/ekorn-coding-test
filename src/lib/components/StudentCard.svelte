<script lang="ts">
	import type { Student } from '$lib/data';

	interface Props {
		student: Student;
	}

	const { student }: Props = $props();
</script>

<article class="card">
	<h2 class="card-name">{student.name}</h2>
	<dl>
		<div class="card-row">
			<dt class="card-label">Age:</dt>
			<dd class="card-value">{student.age}</dd>
		</div>

		<div class="card-row">
			<dt class="card-label">Average Score:</dt>
			<dd class="card-value">{student.averageScore}</dd>
		</div>

		<div class="card-row">
			<dt class="card-label">Active:</dt>
			<dd class="card-value" class:danger={student.activeLabel === 'No'}>{student.activeLabel}</dd>
		</div>

		<div class="card-row">
			<dt class="card-label">Passed:</dt>
			<dd class="card-value" class:danger={student.passedLabel === 'No'}>{student.passedLabel}</dd>
		</div>

		<div class="card-row">
			<dt class="card-label">ID</dt>
			<dd class="card-value">{student.id}</dd>
		</div>
	</dl>
</article>

<style>
	.card {
		display: flex;
		flex-direction: column;
		border: solid 1px transparent;
		padding: var(--spacing-md);
		background-color: var(--color-bg-card);
		border-radius: var(--radius-card);
		box-shadow: var(--shadow-card);
		gap: var(--spacing-md);
	}

	dl {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.card-name {
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-md);
		color: var(--color-text);
	}

	.card-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: var(--font-size-base);
	}

	.card-label {
		color: var(--color-text-muted);
		font-weight: var(--font-weight-sm);
	}

	.card-value {
		font-weight: var(--font-weight-md);
		color: var(--color-text);
		margin: 0;
	}

	.card-value.danger {
		color: var(--color-text-danger);
	}
</style>
