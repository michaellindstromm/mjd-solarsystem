'use strict';

function outputTo(domElement) {

  domElement.append(
    `<div class=jupiter>
    <h1>Jupiter</h1>
    <p><span>Discovered:</span> 1610 AD</p>
    <p><span>Mass:</span> 317.8 Earths</p>
    <p><span>Size:</span> 1321 Earths</p>
    <p><span>Distance From Sun:</span> 483.8M mi</p>
    <p><span>Atmospheric Composition:</span> H2, He</p>
    <p><span>Satellites:</span> Europa, Ganymede</p>
    <p><span>Probes:</span> Pioneer, Voyager, Juno</p>
    </div>`
  );

}

module.exports = {outputTo};
