import { hydrateRoot } from "react-dom/client";

import { App } from "./App";

const blocks = require(`@Build/themes/${process.env.THEME}/blocks.json`);
hydrateRoot(document, <App blocks={blocks} />);
