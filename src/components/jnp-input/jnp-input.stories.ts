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
