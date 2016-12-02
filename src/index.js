// @flow

import micro from 'micro';
import type { ClientRequest, ServerResponse } from 'http';

const srv = micro(async (req: ClientRequest, res: ServerResponse) => {
  res.end('hehehehehehehe');
});

const PORT = process.env.PORT || 3000;
srv.listen(PORT);
