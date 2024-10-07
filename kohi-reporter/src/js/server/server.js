import restana from 'restana';
import cors from 'cors';
import bodyParser from 'body-parser';

export async function start () {
  let app, port;

  port = 5002;
  app = restana ();
  app.use (cors ());
  app.use (bodyParser.json ());
  app.get ('/api/status', (req, res) => res.send ({ status: 'ok' }));
  app.post ('/api/kohi/reporter/coverage', generateCoverageReport);

  console.log (`- starting server on port: ${port}`);
  app.start (port);
}

async function generateCoverageReport (req, res) {
  console.log ('- got updated coverage...');
  res.send ({ status: 'ok' });
}

/*
    'C:/Users/r-bravo/projects/kohi/src/js/browser/main.js': {
      path: 'C:/Users/r-bravo/projects/kohi/src/js/browser/main.js',
      statementMap: [Object],
      fnMap: [Object],
      branchMap: {},
      s: [Object],
      f: [Object],
      b: {},
      inputSourceMap: [Object],
      _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
      hash: 'b113050faaba760be8ef693841736306c883d22a'
    }

    'C:/Users/r-bravo/projects/kohi/src/js/browser/main.js': {
      path: 'C:/Users/r-bravo/projects/kohi/src/js/browser/main.js',
      statementMap: [Object],
      fnMap: [Object],
      branchMap: {},
      s: [Object],
      f: [Object],
      b: {},
      inputSourceMap: [Object],
      _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
      _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
      hash: 'b113050faaba760be8ef693841736306c883d22a'
      hash: 'b113050faaba760be8ef693841736306c883d22a'
    }


    'C:/Users/r-bravo/projects/kohi/src/js/common/kohi.js': {
      path: 'C:/Users/r-bravo/projects/kohi/src/js/common/kohi.js',
      statementMap: [Object],
      fnMap: [Object],
      branchMap: [Object],
      s: [Object],
      f: [Object],
      b: [Object],
      inputSourceMap: [Object],
      _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
      hash: 'bd8462644ea486966509dacdf7ec8b12b51506bf'
    },

    'C:/Users/r-bravo/projects/kohi/src/js/common/kohi.js': {
      path: 'C:/Users/r-bravo/projects/kohi/src/js/common/kohi.js',
      statementMap: [Object],
      fnMap: [Object],
      branchMap: [Object],
      s: [Object],
      f: [Object],
      b: [Object],
      inputSourceMap: [Object],
      _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
      hash: '00f5b9778489de567bcaaffa7a2bfc6bf3e1bacc'
    },
*/