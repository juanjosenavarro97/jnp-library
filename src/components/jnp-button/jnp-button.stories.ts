import type { Meta, StoryObj } from "@storybook/react-vite";

import { JnpButton } from "./jnp-button";

const meta = {
  title: "Components/Button",
  component: JnpButton,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    variant: { control: "select", options: ["primary", "secondary"] },
  },
} satisfies Meta<typeof JnpButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Texto",
  },
};

export const Secondary: Story = {
  args: {
    text: "Texto",
    variant: "secondary",
  },
};
