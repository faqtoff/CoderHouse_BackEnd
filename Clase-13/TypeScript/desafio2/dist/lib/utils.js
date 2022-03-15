"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTime = void 0;
var getTime = function () {
    return {
        fyh: new Date().toLocaleString(),
        timestamp: Date.now(),
    };
};
exports.getTime = getTime;
