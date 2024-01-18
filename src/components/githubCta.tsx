import React from 'react';

import Link from 'next/link';
import { serverContext } from 'sentry-docs/serverContext';
import { nodeForPath } from 'sentry-docs/docTree';

export function GitHubCTA() {
  const { path, rootNode } = serverContext();
  if (!rootNode) {
    return null;
  }
  let sourceUrl = 'https://github.com/getsentry/sentry-docs/';
  const pageNode = nodeForPath(rootNode, path);
  console.log(path, pageNode?.sourcePath);
  if (pageNode && pageNode.sourcePath) {
    sourceUrl += `edit/master/${pageNode.sourcePath}`;
  }

  return (
    <div className="github-cta">
      <small>Help improve this content</small>
      <br />
      <small>
        Our documentation is open source and available on GitHub. Your contributions are
        welcome, whether fixing a typo (drat!) to suggesting an update ("yeah, this would
        be better").
        <div className="muted">
          <Link
            href={sourceUrl}
          >
            Suggest an edit to this page
          </Link>{' '}
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link href="/contributing/">
            Contribute to Docs
          </Link>{' '}
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link href="https://github.com/getsentry/sentry-docs/issues/new/choose">
            Report a problem
          </Link>{' '}
        </div>
      </small>
    </div>
  );
}
