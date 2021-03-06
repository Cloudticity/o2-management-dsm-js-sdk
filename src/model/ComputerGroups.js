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
    define(['ApiClient', 'model/ComputerGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ComputerGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.Deepsecurity) {
      root.Deepsecurity = {};
    }
    root.Deepsecurity.ComputerGroups = factory(root.Deepsecurity.ApiClient, root.Deepsecurity.ComputerGroup);
  }
}(this, function(ApiClient, ComputerGroup) {
  'use strict';




  /**
   * The ComputerGroups model module.
   * @module model/ComputerGroups
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>ComputerGroups</code>.
   * @alias module:model/ComputerGroups
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ComputerGroups</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ComputerGroups} obj Optional instance to populate.
   * @return {module:model/ComputerGroups} The populated <code>ComputerGroups</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('computerGroups')) {
        obj['computerGroups'] = ApiClient.convertToType(data['computerGroups'], [ComputerGroup]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ComputerGroup>} computerGroups
   */
  exports.prototype['computerGroups'] = undefined;



  return exports;
}));



