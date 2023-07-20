/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

const css = [
{title: "no change", css: ""},
{title: "body margin auto", css: `
body {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
}
`},
{title: "html padding 30%", css: `
html {
    padding-left: 30%;
    padding-right: 30%;
}
`}
];

let level = 0;

browser.browserAction.onClicked.addListener(() => {

    function onError(error) {
        console.log(`Center Body - Error: ${error}`);
    }

    if (!(0 <= level < css.length)) {
        return;
    }
    
    browser.tabs
        .removeCSS({code: css[level].css})
        .then(null, onError);

    level = (level + 1) % css.length;

    browser.tabs
        .insertCSS({code: css[level].css})
        .then(null, onError);
       
    let new_title = `[${level + 1}/${css.length}] ${css[level].title}`;
    browser.browserAction.setTitle({ title: new_title });
});
