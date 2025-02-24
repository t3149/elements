// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import { SettingsFlowFromJSON } from "@ory/client-fetch"
import { Settings } from "@ory/elements-react/theme"
import { Meta, StoryObj } from "@storybook/react"
import { config } from "../../utils"

const meta = {
  title: "Ory Elements/Settings/Methods/OIDC",
  component: Settings,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Settings>

export default meta

type Story = StoryObj<typeof meta>

export const WithUnlinkProvider: Story = {
  args: {
    flow: SettingsFlowFromJSON(
      require("$/.stub-responses/settings/oidc/with-provider.json"),
    ),
    config,
  },
}
