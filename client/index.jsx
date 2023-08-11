import { hydrateRoot } from "react-dom/client";

import blockRegistration from "../mocks/block-registration.js";

import { App } from "./App";

hydrateRoot(document, <App blocks={blockRegistration} />);
