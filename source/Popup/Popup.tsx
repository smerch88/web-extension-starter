import * as React from 'react';
import { browser, Tabs } from 'webextension-polyfill-ts';

import './styles.scss';

function openWebPage(url: string): Promise<Tabs.Tab> {
  return browser.tabs.create({ url });
}

const Popup: React.FC = () => {
  return (
    <section id="popup">
      <h2>WEB-EXTENSION-STARTER</h2>
      <button
        id="options__button"
        type="button"
        onClick={(): Promise<Tabs.Tab> => {
          return openWebPage('options.html');
        }}
      >
        Options Page
      </button>
      <div className="links__holder">
        <ul>
          <li>
            <button
              type="button"
              onClick={(): Promise<Tabs.Tab> => {
                return openWebPage(
                  'https://github.com/smerch88/web-extension-starter'
                );
              }}
            >
              GitHub
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Popup;
