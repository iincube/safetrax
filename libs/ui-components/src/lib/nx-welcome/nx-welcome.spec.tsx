import { render } from '@testing-library/react';

import NxWelcome from './nx-welcome';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(() => ({
    t: jest.fn((key) => key), // Mocking the translation function
  })),
}));

describe('NxWelcome', () => {
  it('should render successfully', () => {
    const { getByText } = render(<NxWelcome appName="host" />);
    expect(getByText('greeting')).toBeTruthy(); // Assuming the translation key is 'greeting'
    expect(getByText('This is micrfrontend app host')).toBeTruthy();
  });
});
