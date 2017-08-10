'use strict';

function outputTo(domElement) {

  domElement.append(
    `<div class=uranus>
    <h1>Uranus</h1>
    <p><span>Discovered:</span> 1781 AD</p>
    <p><span>Mass:</span> 14.536 Earths</p>
    <p><span>Size:</span> 63.086 Earths</p>
    <p><span>Distance From Sun:</span> 1.784B mi</p>
    <p><span>Atmospheric Composition:</span> H2, He</p>
    <p><span>Satellites:</span> Titania, Miranda, Umbriel</p>
    <p><span>Probes:</span> Voyager 2</p>
    </div>`
  );

}

module.exports = {outputTo};
