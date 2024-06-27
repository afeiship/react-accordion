import ReactAccordion from '@jswork/react-accordion/src';
import '@jswork/react-accordion/src/style.scss';

function App() {
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">Build Time: {BUILD_TIME}</div>
      <h1>react-accordion</h1>
      <ReactAccordion>
        <ReactAccordion.Item title={<header>aaa</header>} key="k1">
          <p>Content 1</p>
        </ReactAccordion.Item>
        <ReactAccordion.Item title={<header>bbb</header>} key="k2">
          <p>Content 2</p>
        </ReactAccordion.Item>
        <ReactAccordion.Item title={<header>ccc</header>} key="k3">
          <p>Content 3</p>
        </ReactAccordion.Item>
      </ReactAccordion>
    </div>
  );
}

export default App;
