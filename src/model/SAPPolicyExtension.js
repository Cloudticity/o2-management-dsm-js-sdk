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
    define(['ApiClient', 'model/PolicyModuleStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PolicyModuleStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.Deepsecurity) {
      root.Deepsecurity = {};
    }
    root.Deepsecurity.SAPPolicyExtension = factory(root.Deepsecurity.ApiClient, root.Deepsecurity.PolicyModuleStatus);
  }
}(this, function(ApiClient, PolicyModuleStatus) {
  'use strict';




  /**
   * The SAPPolicyExtension model module.
   * @module model/SAPPolicyExtension
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>SAPPolicyExtension</code>.
   * Policy-level configuration for the SAP module
   * @alias module:model/SAPPolicyExtension
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SAPPolicyExtension</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SAPPolicyExtension} obj Optional instance to populate.
   * @return {module:model/SAPPolicyExtension} The populated <code>SAPPolicyExtension</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('moduleStatus')) {
        obj['moduleStatus'] = PolicyModuleStatus.constructFromObject(data['moduleStatus']);
      }
    }
    return obj;
  }

  /**
   * Module state.
   * @member {module:model/SAPPolicyExtension.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {module:model/PolicyModuleStatus} moduleStatus
   */
  exports.prototype['moduleStatus'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "inherited"
     * @const
     */
    "inherited": "inherited",
    /**
     * value: "on"
     * @const
     */
    "on": "on",
    /**
     * value: "off"
     * @const
     */
    "off": "off"  };


  return exports;
}));



