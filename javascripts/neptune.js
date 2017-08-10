'use strict';

function outputTo(domElement) {

  domElement.append(
    `<div class=neptune>
    <h1>Neptune</h1>
    <p><span>Discovered:</span> 1846 AD</p>
    <p><span>Mass:</span> 17.147 Earths</p>
    <p><span>Size:</span> 57.74 Earths</p>
    <p><span>Distance From Sun:</span> 2.795B mi</p>
    <p><span>Atmospheric Composition:</span> H2, He</p>
    <p><span>Satellites:</span> Triton, Laomedeia</p>
    <p><span>Probes:</span> Voyager 2</p>
    </div>`
  );

}

module.exports = {outputTo};
