/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

let css = "body { width: fit-content; margin-left: auto; margin-right: auto; }";

browser.browserAction.onClicked.addListener(() => {

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let insertingCSS = browser.tabs.insertCSS({code: css});
    insertingCSS.then(null, onError);
});
