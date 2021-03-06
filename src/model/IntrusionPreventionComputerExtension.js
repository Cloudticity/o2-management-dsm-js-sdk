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
    define(['ApiClient', 'model/ComputerModuleStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ComputerModuleStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.Deepsecurity) {
      root.Deepsecurity = {};
    }
    root.Deepsecurity.IntrusionPreventionComputerExtension = factory(root.Deepsecurity.ApiClient, root.Deepsecurity.ComputerModuleStatus);
  }
}(this, function(ApiClient, ComputerModuleStatus) {
  'use strict';




  /**
   * The IntrusionPreventionComputerExtension model module.
   * @module model/IntrusionPreventionComputerExtension
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>IntrusionPreventionComputerExtension</code>.
   * Computer-level configuration for the Intrusion Prevention module.
   * @alias module:model/IntrusionPreventionComputerExtension
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>IntrusionPreventionComputerExtension</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntrusionPreventionComputerExtension} obj Optional instance to populate.
   * @return {module:model/IntrusionPreventionComputerExtension} The populated <code>IntrusionPreventionComputerExtension</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('moduleStatus')) {
        obj['moduleStatus'] = ComputerModuleStatus.constructFromObject(data['moduleStatus']);
      }
      if (data.hasOwnProperty('ruleIDs')) {
        obj['ruleIDs'] = ApiClient.convertToType(data['ruleIDs'], ['Number']);
      }
      if (data.hasOwnProperty('applicationTypeIDs')) {
        obj['applicationTypeIDs'] = ApiClient.convertToType(data['applicationTypeIDs'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * Module state.
   * @member {module:model/IntrusionPreventionComputerExtension.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {module:model/ComputerModuleStatus} moduleStatus
   */
  exports.prototype['moduleStatus'] = undefined;
  /**
   * IDs of the assigned Intrusion Prevention rules.
   * @member {Array.<Number>} ruleIDs
   */
  exports.prototype['ruleIDs'] = undefined;
  /**
   * IDs of the assigned Application Types.
   * @member {Array.<Number>} applicationTypeIDs
   */
  exports.prototype['applicationTypeIDs'] = undefined;


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
     * value: "prevent"
     * @const
     */
    "prevent": "prevent",
    /**
     * value: "detect"
     * @const
     */
    "detect": "detect",
    /**
     * value: "off"
     * @const
     */
    "off": "off"  };


  return exports;
}));



