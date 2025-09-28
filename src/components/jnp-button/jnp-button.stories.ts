import type { Meta, StoryObj } from "@storybook/react-vite";

import { JnpButton } from "./jnp-button";

const meta = {
  title: "Components/Button",
  component: JnpButton,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    variant: {
      control: "select",
      options: ["primary", "secondary", "info", "warning", "danger"],
    },
    rounded: { control: "boolean" },
    full: { control: "boolean" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof JnpButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Texto",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Texto",
    variant: "secondary",
  },
};

export const Info: Story = {
  args: {
    children: "Texto",
    variant: "info",
  },
};

export const Warning: Story = {
  args: {
    children: "Texto",
    variant: "warning",
  },
};

export const Danger: Story = {
  args: {
    children: "Texto",
    variant: "danger",
  },
};
