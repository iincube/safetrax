import { render } from '@testing-library/react';

import NxWelcome from './nx-welcome';

describe('NxWelcome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NxWelcome />);
    expect(baseElement).toBeTruthy();
  });
});
