'use strict';

function outputTo(domElement) {

  domElement.append(
    `<div class=venus>
    <h1>Venus</h1>
    <p><span>Discovered:</span> 1581 BCE</p>
    <p><span>Mass:</span> 0.815 Earths</p>
    <p><span>Size:</span> 0.866 Earths</p>
    <p><span>Distance From Sun:</span> 67.24M mi</p>
    <p><span>Atmospheric Composition:</span> CO2, N2</p>
    <p><span>Satellites:</span> None</p>
    <p><span>Probes:</span> Pioneer, Mariner 2</p>
    </div>`
  );

}

module.exports = {outputTo};
