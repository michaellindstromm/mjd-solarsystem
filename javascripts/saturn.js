'use strict';

function outputTo(domElement) {

  domElement.append(
    `<div class=saturn>
    <h1>Saturn</h1>
    <p><span>Discovered:</span> 1610 AD</p>
    <p><span>Mass:</span> 95.159 Earths</p>
    <p><span>Size:</span> 763.59 Earths</p>
    <p><span>Distance From Sun:</span> 888.2M mi</p>
    <p><span>Atmospheric Composition:</span> H2, He</p>
    <p><span>Satellites:</span> Titan, Enceladus</p>
    <p><span>Probes:</span> Cassini</p>
    </div>`
  );

}

module.exports = {outputTo};
