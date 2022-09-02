import { setup } from "testing-library-visualizer";
import path from "path";
import { expect } from "@jest/globals";
import { screen, within, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

setup(path.join(__dirname, "..", "build")); // This should point to wherever your built assets are

registerCommands({ screen, within, fireEvent, userEvent, expect }); // This should include any commands you want to run. See the custom command section below.
