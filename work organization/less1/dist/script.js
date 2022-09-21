"use strict";

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-set.js");

require("core-js/modules/web.dom-collections.iterator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _hidden = /*#__PURE__*/new WeakSet();

var Service = /*#__PURE__*/function () {
  function Service() {
    _classCallCheck(this, Service);

    _classPrivateMethodInitSpec(this, _hidden);
  }

  _createClass(Service, [{
    key: "publicMethod",
    value: function publicMethod() {
      this.hidden();
    }
  }]);

  return Service;
}();

function _hidden2() {
  console.log('this is a hidden method');
}

var service = new Service();
service.publicMethod();