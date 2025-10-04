import type { Meta, StoryObj } from "@storybook/react-vite";

import { JnpInput } from "./jnp-input";

const meta = {
  title: "Components/Input",
  component: JnpInput,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof JnpInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Label",
  },
};

export const Secondary: Story = {
  args: {
    label: "Label",
    variant: "secondary",
  },
};

export const Warning: Story = {
  args: {
    label: "Label",
    variant: "warning",
  },
};

export const Danger: Story = {
  args: {
    label: "Label",
    variant: "danger",
  },
};
