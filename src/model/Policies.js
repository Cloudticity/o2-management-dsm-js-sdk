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
    define(['ApiClient', 'model/Policy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Policy'));
  } else {
    // Browser globals (root is window)
    if (!root.Deepsecurity) {
      root.Deepsecurity = {};
    }
    root.Deepsecurity.Policies = factory(root.Deepsecurity.ApiClient, root.Deepsecurity.Policy);
  }
}(this, function(ApiClient, Policy) {
  'use strict';




  /**
   * The Policies model module.
   * @module model/Policies
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>Policies</code>.
   * List of policies
   * @alias module:model/Policies
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Policies</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Policies} obj Optional instance to populate.
   * @return {module:model/Policies} The populated <code>Policies</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('policies')) {
        obj['policies'] = ApiClient.convertToType(data['policies'], [Policy]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Policy>} policies
   */
  exports.prototype['policies'] = undefined;



  return exports;
}));



