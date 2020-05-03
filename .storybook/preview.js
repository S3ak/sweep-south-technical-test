import React from "react";
import { addDecorator } from "@storybook/react";
import WithGlobalStyling from "../src/utils/decorators/withGlobalStyling";

addDecorator((storyFn) => <WithGlobalStyling>{storyFn()}</WithGlobalStyling>);
