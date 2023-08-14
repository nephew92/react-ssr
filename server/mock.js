/* eslint-disable no-invalid-this */
import * as nock from 'nock';

import { api } from '@Server/config';

nock(api)
  .get('/blueprint')
  .query(true)
  .reply(200, function () {
    const params = new URLSearchParams(this.req.options.search)
    return [{
      domain: 'new.local.consumertestconnect.com',
      theme: 'ctc',
      aliases: [
        'local.consumertestconnect.com',
      ],
    }, {
      domain: 'new.local.shopgala.com',
      theme: 'shopgala',
      aliases: [
        'local.shopgala.com',
        'dev.shopgala.com',
      ],
    }]
      .find(site => site.domain === params.get('domain') || site.aliases.includes(params.get('domain')))
  })
  .persist()
