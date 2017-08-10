'use strict';

function outputTo(domElement) {

  domElement.append(
    `<div class=mercury>
    <h1>Mercury</h1>
    <p><span>Discovered:</span> 3000 BCE</p>
    <p><span>Mass:</span> 0.055 Earths</p>
    <p><span>Size:</span> 0.056 Earths</p>
    <p><span>Distance From Sun:</span> 35.98M mi</p>
    <p><span>Atmospheric Composition:</span> O2, Na, H2, He</p>
    <p><span>Satellites:</span> Ganymede, Neso</p>
    <p><span>Probes:</span> Mariner 10, Messenger</p>
    </div>`
  );

}

module.exports = {outputTo};
