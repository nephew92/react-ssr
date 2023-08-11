import { hydrateRoot } from "react-dom/client";

import blockRegistration from "../themes/ctc";

import { App } from "./App";

hydrateRoot(document, <App blocks={blockRegistration} />);
