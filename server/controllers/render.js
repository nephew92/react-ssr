import { readFileSync } from 'node:fs';

import { renderToPipeableStream } from "react-dom/server";
import { renderToPipeableStream as renderToPipeableStreamServer } from 'react-server-dom-webpack/server';

import StaticHTML from '../components/HTML';
import ServerApp from '../components/ServerApp';
import { formLoad } from '../service/api/back';
import { handler } from '../utils';

export default {
  index: handler(async (req, res) => {
    // pode fazer aqui chamadas para api para carrgar dados do site
    res.setHeader("content-type", "text/html");
    renderToPipeableStream(<StaticHTML title='SSR + RSC' />)
      .pipe(res)
  }),

  ssr: handler(async (req, res) => {
    const { selectedId, isEditing, searchText } = req.body

    const manifest = readFileSync(require.resolve('@/build/themes/ctc/static/react-client-manifest.json'));
    const moduleMap = JSON.parse(manifest);

    const props = { selectedId, isEditing, searchText }

    const { blocks } = require('@/_mock/react-ssr-theme-ctc.blocks.json')

    const { consumer } = await formLoad()

    res.set('X-Location', JSON.stringify(props));
    renderToPipeableStreamServer(<ServerApp blocks={blocks} session={{ consumer }} />, moduleMap)
      .pipe(res);
  }),
}
