'use strict';

module.exports = {
  load () {
    // execute when package loaded
  },

  unload () {
    // execute when package unloaded
  },

  // register your ipc messages here
  messages: {
    'open' () {
      // open entry panel registered in package.json
      Editor.Panel.open('bezier');
    },
    'say-hello' () {
      Editor.warn('Hello World!');
      // send ipc message to panel
      Editor.Ipc.sendToPanel('bezier', 'bezier:hello');
    },
    'clicked' () {
      Editor.warn('Button clicked!');
    }
  },
};