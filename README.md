# react-accordion
> Accordion for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-accordion
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-accordion/dist/style.css";

  // or use sass
  @import "~@jswork/react-accordion/dist/style.scss";
  ```
2. import js
  ```js
  import ReactAccordion from '@jswork/react-accordion';
  import '@jswork/react-accordion/dist/style.scss';
  import React, { useEffect } from 'react';

  function App() {
    const [v, setV] = React.useState('k1');

    useEffect(() => {
      setTimeout(() => {
        // console.log('update v');
        setV('k2');
      }, 1000);
    }, []);

    return (
      <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
        <div className="badge badge-warning absolute right-0 top-0 m-4">Build Time: {BUILD_TIME}</div>
        <h1>react-accordion</h1>
        <div className="y-5">
          <h3>Use value + onChange</h3>
          <ReactAccordion
            className="y-3 bg-purple-200 p-2 rounded-lg"
            value={v} onChange={(e) => setV(e)}>
            <ReactAccordion.Item
              className="border border-slate-500"
              title={<header className="bg-gray-200 px-4">aaa</header>}
              value="k1">
              <p>Content 1</p>
            </ReactAccordion.Item>
            <ReactAccordion.Item
              className="border border-slate-500"
              title={<header className="bg-gray-200 px-4">bbb</header>}
              value="k2">
              <p>Content 2</p>
            </ReactAccordion.Item>
            <ReactAccordion.Item
              className="border border-slate-500"
              title={<header className="bg-gray-200 px-4">ccc</header>}
              value="k3">
              <p>Content 3</p>
            </ReactAccordion.Item>
          </ReactAccordion>
          <hr />
          <h3>Use default Value</h3>
          <ReactAccordion className="y-1 bg-green-200 p-2 rounded-lg" defaultValue="k3">
            <ReactAccordion.Item
              className="border border-blue-500"
              title={(args, opts) => {
                // console.log(args, opts);
                return (
                  <header className="bg-gray-200 px-4">
                    {opts.active ? '-' : '+'}
                    aaa
                  </header>
                );
              }}
              value="k1">
              <p>Content 1</p>
            </ReactAccordion.Item>
            <ReactAccordion.Item
              className="border border-blue-500"
              title={(args, opts) => {
                // console.log(args, opts);
                return (
                  <header className="bg-gray-200 px-4">
                    {opts.active ? '-' : '+'}
                    bbb
                  </header>
                );
              }}
              value="k2">
              <p>Content 2</p>
            </ReactAccordion.Item>
            <ReactAccordion.Item
              className="border border-blue-500"
              title={<header className="bg-gray-200 px-4">ccc</header>}
              value="k3">
              <p>Content 3</p>
            </ReactAccordion.Item>
          </ReactAccordion>
        </div>
      </div>
    );
  }

  export default App;
  ```

## preview
- https://afeiship.github.io/react-accordion/

## license
Code released under [the MIT license](https://github.com/afeiship/react-accordion/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-accordion
[version-url]: https://npmjs.org/package/@jswork/react-accordion

[license-image]: https://img.shields.io/npm/l/@jswork/react-accordion
[license-url]: https://github.com/afeiship/react-accordion/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-accordion
[size-url]: https://github.com/afeiship/react-accordion/blob/master/dist/react-accordion.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-accordion
[download-url]: https://www.npmjs.com/package/@jswork/react-accordion
