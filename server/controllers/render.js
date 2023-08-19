import { readFileSync } from 'node:fs';

import { renderToPipeableStream } from "react-dom/server";
import { renderToPipeableStream as renderToPipeableStreamServer } from 'react-server-dom-webpack/server';

import StaticHTML from '../components/HTML';
import ServerApp from '../components/ServerApp';
import { handler } from '../utils';

export default {
  index: handler(async (req, res) => {
    res.setHeader("content-type", "text/html");
    renderToPipeableStream(<StaticHTML title='SSR + RSC' />)
      .pipe(res)
  }),

  ssr: handler(async (req, res) => {
    const { selectedId, isEditing, searchText } = req.body

    const manifest = readFileSync(require.resolve('@/build/themes/ctc/static/react-client-manifest.json'));
    const moduleMap = JSON.parse(manifest);

    const props = { selectedId, isEditing, searchText }

    res.set('X-Location', JSON.stringify(props));
    renderToPipeableStreamServer(<ServerApp {...props} />, moduleMap)
      .pipe(res);
  }),
}
