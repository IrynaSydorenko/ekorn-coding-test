import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import StudentCard from './StudentCard.svelte';

const mockStudent = {
	id: '1',
	name: 'Alice Smith',
	age: 16,
	averageScore: 78,
	activeLabel: 'Yes' as const,
	passedLabel: 'Yes' as const
};

const renderCard = (overrides = {}) => {
	return render(StudentCard, {
		props: { student: { ...mockStudent, ...overrides } }
	});
};

describe('StudentCard', () => {
	it('renders student name', () => {
		const { getByText } = renderCard();

		expect(getByText('Alice Smith')).toBeInTheDocument();
	});

	it('applies danger class when activeLabel is No', () => {
		const { getByText } = renderCard({ activeLabel: 'No' });

		expect(getByText('No')).toHaveClass('danger');
	});

	it('applies danger class when passedLabel is No', () => {
		const { getByText } = renderCard({ passedLabel: 'No', averageScore: 45 });

		expect(getByText('No')).toHaveClass('danger');
	});
});
