<script lang="ts">
	import StudentCard from '$lib/components/StudentCard.svelte';
	import ErrorMessage from '$lib/components/Error.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
	import { onMount } from 'svelte';
	import { debounce } from '$lib/utils/utils';
	import { filterAndSort, calculateAge } from '$lib/students';
	import type { StudentDataItem, Student } from '$lib/data';
	import { SORT_OPTIONS, type SortOption } from '$lib/constants';
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	// Fetch from GET /api/students, transform the response into the Student type, and assign to students
	let students = $state<Student[]>([]);

	let error = $state<string | null>();
	let loading = $state<boolean>(true);

	let showActiveOnly = $state<boolean>(false);
	let sortBy = $state<SortOption>(SORT_OPTIONS.DEFAULT);
	let searchQuery = $state<string>('');

	let displayedStudents = $derived<() => Student[]>(() =>
		filterAndSort(students, showActiveOnly, searchQuery, sortBy)
	);

	const handleSearch = debounce((value) => {
		searchQuery = value;
	}, 1000);

	onMount(async () => {
		// TODO: fetch from /api/students, parse the response as StudentDataItem[], transform into students
		try {
			const response = await fetch('/api/students');
			if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
			const data: StudentDataItem[] = await response.json();
			console.log(data);

			students = data.map((student) => {
				const averageScore = Math.round(
					(student.scores.english + student.scores.math + student.scores.science) / 3
				);

				return {
					id: String(student.id),
					name: `${student.firstName} ${student.lastName}`,
					age: calculateAge(student.birthdate),
					averageScore,
					activeLabel: student.isActive ? 'Yes' : 'No',
					passedLabel: averageScore >= 60 ? 'Yes' : 'No'
				};
			});
		} catch (err) {
			error = 'Something went wrong...';
		} finally {
			loading = false;
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main>
	<h1>Students</h1>
	{#if loading}
		<Spinner />
	{:else if error}
		<ErrorMessage message={error} />
	{:else}
		<div class="controls">
			<input
				type="text"
				placeholder="Search by name..."
				oninput={(e) => handleSearch((e.target as HTMLInputElement).value)}
			/>
			<button
				class="toggle"
				class:active={showActiveOnly}
				onclick={() => (showActiveOnly = !showActiveOnly)}
			>
				Active only
			</button>
			<div class="sort-control">
				<label for="order">Sort By:</label>
				<select id="order" onchange={(e) => (sortBy = e.currentTarget.value as typeof sortBy)}>
					<option value={SORT_OPTIONS.DEFAULT}>Default</option>
					<option value={SORT_OPTIONS.NAME}>Name</option>
					<option value={SORT_OPTIONS.AVERAGE_SCORE}>Average Score</option>
				</select>
			</div>
		</div>
		<section class="grid">
			{#each displayedStudents() as student (student.id)}
				<StudentCard {student} />
			{:else}
				<p class="empty">No students found</p>
			{/each}
		</section>
	{/if}
</main>

<style>
	main {
		padding: 40px var(--spacing-md);
		margin: 0 auto;
		min-height: 100vh;
		max-width: 1024px;
	}

	h1 {
		font-size: var(--font-size-heading);
		font-weight: var(--font-weight-md);
		font-family: var(--font-family-heading);
		margin-bottom: var(--spacing-lg);
		color: var(--color-text);
	}

	input[type='text'] {
		padding: 8px 16px;
		border-radius: 20px;
		border: 1px solid var(--color-border);
		background: transparent;
		font-size: 0.9rem;
		color: var(--color-text);
		outline: none;
		width: 220px;
	}

	input[type='text']::placeholder {
		color: var(--color-text-muted);
	}

	input[type='text']:focus {
		border-color: var(--color-text);
	}

	label[for='order'] {
		font-size: 0.9rem;
		color: var(--color-text-muted);
	}

	select {
		padding: 8px 16px;
		border-radius: 20px;
		border: 1px solid var(--color-border);
		background: transparent;
		cursor: pointer;
		font-size: 0.9rem;
		color: var(--color-text-muted);
		appearance: none;
		padding-right: 28px;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23555' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 10px center;
	}

	.controls {
		display: flex;
		align-items: center;
		gap: var(--spacing-md);
		margin-bottom: var(--spacing-lg);
	}

	.toggle {
		padding: 8px 16px;
		border-radius: 20px;
		border: 1px solid var(--color-border);
		background: transparent;
		cursor: pointer;
		font-size: 0.9rem;
		color: var(--color-text-muted);
	}

	.toggle.active {
		background: var(--color-text);
		color: white;
		border-color: var(--color-text);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;
	}

	.empty {
		color: var(--color-text-muted);
		font-size: var(--font-size-base);
		/* grid-column: 1 / -1; */
	}

	@media (max-width: 768px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
