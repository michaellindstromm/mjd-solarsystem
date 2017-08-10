'use strict';

function outputTo(domElement) {

  domElement.append(
    `<div class=earth>
    <h1>Earth</h1>
    <p><span>Discovered:</span> 1600 AD</p>
    <p><span>Mass:</span> 1 Earths</p>
    <p><span>Size:</span> 1 Earths</p>
    <p><span>Distance From Sun:</span> 92.96M mi</p>
    <p><span>Atmospheric Composition:</span> N2, O2</p>
    <p><span>Satellites:</span> Moon</p>
    <p><span>Probes:</span> Dish, HBO, etc.</p>
    </div>`
  );

}

module.exports = {outputTo};
