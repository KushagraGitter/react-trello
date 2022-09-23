import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import App from './src/App';
const app = express();

app.use(express.static('./build', { index: false }));

app.get('/*', (req, res) => {
  const reactApp = renderToString(<App />);
  console.log(reactApp);
  return res.send(`
		<html>
			<body>
				<div id="root">${reactApp}</div>
			</body>
		</html>
	`);
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
