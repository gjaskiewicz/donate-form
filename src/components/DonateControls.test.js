import { render, screen } from '@testing-library/react';
import DonateControls from './DonateControls';

describe('DonateControls', () => {

    test('displays buttons', () => {
        render(<DonateControls  />);

        expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Continue' })).toBeInTheDocument();
    });
});