# react-border-collapse
> Grouped compnents for border-collapse case.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-border-collapse
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |


## usage
1. import css
  ```scss
  @import "~@jswork/react-border-collapse/dist/style.css";

  // or use sass
  @import "~@jswork/react-border-collapse/dist/style.scss";

  // customize your styles:
  $react-border-collapse-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactBorderCollapse from '@jswork/react-border-collapse';
  import ReactBlank from '@jswork/react-blank';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-border-collapse">
          <h4>Normal</h4>
          <div className="container">
            <div className="is-box-item">ABC</div>
            <div className="is-box-item">ABC</div>
          </div>

          <ReactBlank value={20} />
          <h4>Has Collapsed, less content</h4>
          <ReactBorderCollapse>
            <div className="is-box-item">ABC</div>
            <div className="is-box-item">ABC</div>
          </ReactBorderCollapse>
          <ReactBlank value={20} />
          <h4>Has Collapsed, plenty of content</h4>
          <ReactBorderCollapse>
            <div className="is-box-item">
              道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。
              故常无欲，以观其妙，常有欲，以观其徼。
              此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。
            </div>
            <div className="is-box-item">
              天下皆知美之为美，斯恶已，皆知善之为善，斯不善已。
              故有无相生，难易相成，长短相形，高下相倾，音声相和，前后相随。
              是以圣人处无为之事，行不言之教，万物作焉而不辞，生而不有，为而不恃，功成而弗居。
              夫惟弗居，是以不去。
            </div>
            <div className="is-box-item">
              不尚贤，使民不争；不贵难得之货，使民不为盗；不见可欲，使民心不乱。
              是以圣人之治，虚其心，实其腹，弱其志，强其骨，常使民无知无欲。
              使夫知者不敢为也。 为无为，则无不治。
            </div>
          </ReactBorderCollapse>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-border-collapse/


## license
Code released under [the MIT license](https://github.com/afeiship/react-border-collapse/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-border-collapse
[version-url]: https://npmjs.org/package/@jswork/react-border-collapse

[license-image]: https://img.shields.io/npm/l/@jswork/react-border-collapse
[license-url]: https://github.com/afeiship/react-border-collapse/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-border-collapse
[size-url]: https://github.com/afeiship/react-border-collapse/blob/master/dist/react-border-collapse.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-border-collapse
[download-url]: https://www.npmjs.com/package/@jswork/react-border-collapse
