'use strict';

function outputTo(domElement) {

  domElement.append(
    `<div class=mars>
    <h1>Mars</h1>
    <p><span>Discovered:</span> 1600 AD</p>
    <p><span>Mass:</span> 0.107 Earths</p>
    <p><span>Size:</span> 0.151 Earths</p>
    <p><span>Distance From Sun:</span> 141.6M mi</p>
    <p><span>Atmospheric Composition:</span> CO2, Ar</p>
    <p><span>Satellites:</span> Phobos, Deimos</p>
    <p><span>Probes:</span> Orbiter, Exploration</p>
    </div>`
  );

}

module.exports = {outputTo};
