// processPolyfill.js

// if (typeof window !== 'undefined') {
//     window.process = {
//       env: { NODE_ENV: 'development' }
//     };
//   }
  
if (typeof window !== 'undefined') {
    window.process = {
      env: { NODE_ENV: 'development' },
      nextTick: function(callback) {
        return setTimeout(callback, 0);
      }
    };
  }
  