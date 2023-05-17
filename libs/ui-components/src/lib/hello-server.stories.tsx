import type { Meta } from '@storybook/react';
import { HelloServer } from './hello-server';

const Story: Meta<typeof HelloServer> = {
  component: HelloServer,
  title: 'HelloServer',
};
export default Story;

export const Primary = {
  args: {},
};
