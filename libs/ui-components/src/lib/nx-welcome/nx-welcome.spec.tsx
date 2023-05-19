import { render } from '@testing-library/react';

import NxWelcome from './nx-welcome';

describe('NxWelcome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NxWelcome title="Welcome"/>);
    expect(baseElement).toBeTruthy();
  });
});
