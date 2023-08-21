import { renderToPipeableStream } from "react-dom/server";
import { renderToPipeableStream as renderToPipeableStreamServer } from 'react-server-dom-webpack/server';

import StaticHTML from '../components/HTML';
import { handler } from '../utils';

export default {
  index: handler(async (req, res) => {
    // pode fazer aqui chamadas para api para carrgar dados do site
    res.setHeader("content-type", "text/html");
    renderToPipeableStream(<StaticHTML title='SSR + RSC' />)
      .pipe(res)
  }),

  ssr: handler(async (req, res) => {
    const { module } = req.body

    const manifest = require('@/build/themes/ctc/static/react-client-manifest.json')

    const { default: Module } = require(`@/modules/${module}/server`)

    renderToPipeableStreamServer(<Module />, manifest)
      .pipe(res);
  }),
}
