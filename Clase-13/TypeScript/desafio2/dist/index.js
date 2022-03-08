"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var utils_1 = require("./lib/utils");
var Persona_1 = __importDefault(require("./Persona"));
var p = new Persona_1.default("Coder", "House");
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.send({
        time: (0, utils_1.getTime)(),
        name: p.getFullName(),
    });
});
var PORT = 8080;
app.listen(PORT, function () {
    console.log("conectado al puerto: ".concat(PORT));
});
