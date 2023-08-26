// if (typeof window !== 'undefined') {
//     if (!window._readableState) {
//         window._readableState = {};
//     }
// }

if (typeof window !== 'undefined') {
    window.process = window.process || {};
    window.process.nextTick = window.process.nextTick || function (callback) { setTimeout(callback, 0); };
    window.ReadableStream = window.ReadableStream || {};
    window.ReadableStream.prototype._readableState = window.ReadableStream.prototype._readableState || {};
}

