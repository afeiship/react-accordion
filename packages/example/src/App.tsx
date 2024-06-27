import ReactAccordion from '@jswork/react-accordion/src';
import '@jswork/react-accordion/src/style.scss';
import React, { useEffect } from 'react';

function App() {
  const [v, setV] = React.useState('k1');

  useEffect(() => {
    setTimeout(() => {
      console.log('update v');
      setV('k2');
    }, 1000);
  });

  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">Build Time: {BUILD_TIME}</div>
      <h1>react-accordion</h1>
      <div className="y-5">
        <h3>Use value + onChange</h3>
        <ReactAccordion
          className="y-3 bg-purple-200 p-2 rounded-lg"
          value={v}
          onChange={(e) => setV(e)}>
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
              console.log(args, opts);
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
            title={<header className="bg-gray-200 px-4">bbb</header>}
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
