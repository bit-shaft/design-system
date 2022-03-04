import { Text as Component } from '.';
import { TextProps as Props } from './types';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export type ComponentProps = typeof Component;

export default {
  title: 'Elements/Text',
  component: Component,
  argTypes: {
    children: {
      description: "The Text's content",
      type: 'string',
    },
  },
  args: {
    children: "Hi I'm a text",
  },
} as ComponentMeta<ComponentProps>;

export const Text: ComponentStory<ComponentProps> = (props: Props) => (
  <Component {...props} />
);
