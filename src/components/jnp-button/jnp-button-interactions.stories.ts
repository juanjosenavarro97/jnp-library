import type { Meta, StoryObj } from "@storybook/react-vite";
import { JnpButton } from "./jnp-button";

const meta = {
  title: "Components/Button/interactions",
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
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof JnpButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnClick: Story = {
  args: {
    children: "Texto",
  },
};

export const Disabled: Story = {
  args: {
    children: "Texto",
    disabled: true,
  },
};
