# react-border-collapse
> Grouped compnents for border-collapse case.

## installation
```shell
npm install -S @feizheng/react-border-collapse
```

## update
```shell
npm update @feizheng/react-border-collapse
```

## properties
| property  | type   | default | description |
| --------- | ------ | ------- | ----------- |
| className | String | -       | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-border-collapse/dist/style.scss";

  // customize your styles:
  $react-border-collapse-options: ()
  ```
2. import js
  ```js
  import ReactBorderCollapse from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import ReactBlank from '@feizheng/react-blank';
  import './assets/style.scss';

  class App extends React.Component {
    componentDidMount() {}
    render() {
      return (
        <div className="app-container">
          <h4>Normal</h4>
          <div className="container">
            <div className="box">ABC</div>
            <div className="box">ABC</div>
          </div>

          <ReactBlank value={20} />
          <h4>Has Collapsed, less content</h4>
          <ReactBorderCollapse>
            <div className="box">ABC</div>
            <div className="box">ABC</div>
          </ReactBorderCollapse>
          <ReactBlank value={20} />
          <h4>Has Collapsed, plenty of content</h4>
          <ReactBorderCollapse>
            <div className="box">
              道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。
              故常无欲，以观其妙，常有欲，以观其徼。
              此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。
            </div>
            <div className="box">
              天下皆知美之为美，斯恶已，皆知善之为善，斯不善已。
              故有无相生，难易相成，长短相形，高下相倾，音声相和，前后相随。
              是以圣人处无为之事，行不言之教，万物作焉而不辞，生而不有，为而不恃，功成而弗居。
              夫惟弗居，是以不去。
            </div>
          </ReactBorderCollapse>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-border-collapse/
