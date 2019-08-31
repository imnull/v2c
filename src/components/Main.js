import React from 'react';

import { drawCanvas } from '../v2c';
import { createTemplate, calHeight } from '../v2c-template';

class AppComponent extends React.Component {

  componentDidMount(){
    const config = {};
    const pages = [{}, {}, {}];
    const layers = createTemplate(pages, config);
    this.canvas.width = 750;
    this.canvas.height = calHeight(pages.length, config);
    drawCanvas(this.canvas, layers, config);
  }

  render() {
    return (
      <div className="index">
        <canvas ref={dom => this.canvas = dom} ></canvas>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
