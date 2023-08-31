#!/usr/bin/node 

exports.converter = function (base) {
    return function(numero) {
        return numero.toString(base);
    };
};