/**
 * Trend Micro Deep Security API
 * Copyright 2018 - 2020 Trend Micro Incorporated.<br/>Get protected, stay secured, and keep informed with Trend Micro Deep Security's new RESTful API. Access system data and manage security configurations to automate your security workflows and integrate Deep Security into your CI/CD pipeline.
 *
 * OpenAPI spec version: 12.0.446
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Deepsecurity) {
      root.Deepsecurity = {};
    }
    root.Deepsecurity.Component = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Component model module.
   * @module model/Component
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>Component</code>.
   * Security update component.
   * @alias module:model/Component
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Component</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Component} obj Optional instance to populate.
   * @return {module:model/Component} The populated <code>Component</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('forUseBy')) {
        obj['forUseBy'] = ApiClient.convertToType(data['forUseBy'], 'String');
      }
      if (data.hasOwnProperty('platform')) {
        obj['platform'] = ApiClient.convertToType(data['platform'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('latest')) {
        obj['latest'] = ApiClient.convertToType(data['latest'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Name of the component.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Name and version of the component consumer.
   * @member {String} forUseBy
   */
  exports.prototype['forUseBy'] = undefined;
  /**
   * Platform of the component.
   * @member {String} platform
   */
  exports.prototype['platform'] = undefined;
  /**
   * Version of the component.
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * True if the component is the latest version.
   * @member {Boolean} latest
   */
  exports.prototype['latest'] = undefined;



  return exports;
}));



