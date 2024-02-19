import { render, screen } from '@testing-library/react';
import DonateHeader from './DonateHeader';

describe('DonateHeader', () => {

    test('displays text', () => {
        render(<DonateHeader text={"MAIN TEXT"} subtext={"SUBTEXT"} />);

        expect(screen.getByText('MAIN TEXT')).toBeInTheDocument();
        expect(screen.getByText('SUBTEXT')).toBeInTheDocument();
    });
});