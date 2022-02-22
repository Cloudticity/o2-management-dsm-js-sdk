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
    root.Deepsecurity.DiscoverComputersTaskParameters = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DiscoverComputersTaskParameters model module.
   * @module model/DiscoverComputersTaskParameters
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>DiscoverComputersTaskParameters</code>.
   * Controls the behavior of a scheduled task of type discover-computers.
   * @alias module:model/DiscoverComputersTaskParameters
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>DiscoverComputersTaskParameters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DiscoverComputersTaskParameters} obj Optional instance to populate.
   * @return {module:model/DiscoverComputersTaskParameters} The populated <code>DiscoverComputersTaskParameters</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('discoveryType')) {
        obj['discoveryType'] = ApiClient.convertToType(data['discoveryType'], 'String');
      }
      if (data.hasOwnProperty('ip')) {
        obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
      }
      if (data.hasOwnProperty('scanDiscoveredComputers')) {
        obj['scanDiscoveredComputers'] = ApiClient.convertToType(data['scanDiscoveredComputers'], 'Boolean');
      }
      if (data.hasOwnProperty('resolveIPs')) {
        obj['resolveIPs'] = ApiClient.convertToType(data['resolveIPs'], 'Boolean');
      }
      if (data.hasOwnProperty('computerGroupID')) {
        obj['computerGroupID'] = ApiClient.convertToType(data['computerGroupID'], 'Number');
      }
      if (data.hasOwnProperty('ipmask')) {
        obj['ipmask'] = ApiClient.convertToType(data['ipmask'], 'String');
      }
      if (data.hasOwnProperty('iprangeLow')) {
        obj['iprangeLow'] = ApiClient.convertToType(data['iprangeLow'], 'String');
      }
      if (data.hasOwnProperty('iprangeHigh')) {
        obj['iprangeHigh'] = ApiClient.convertToType(data['iprangeHigh'], 'String');
      }
    }
    return obj;
  }

  /**
   * Discovery type. Default \"masked-ip\".
   * @member {module:model/DiscoverComputersTaskParameters.DiscoveryTypeEnum} discoveryType
   */
  exports.prototype['discoveryType'] = undefined;
  /**
   * IP address for masked-ip search.
   * @member {String} ip
   */
  exports.prototype['ip'] = undefined;
  /**
   * Automatically perform a port scan of discovered computers. Default false. Set true to enable.
   * @member {Boolean} scanDiscoveredComputers
   */
  exports.prototype['scanDiscoveredComputers'] = undefined;
  /**
   * Automatically resolve IPs to hostnames. Default true. Set false to disable.
   * @member {Boolean} resolveIPs
   */
  exports.prototype['resolveIPs'] = undefined;
  /**
   * ID of computer group that discovered computers will be added to, or null for no group.
   * @member {Number} computerGroupID
   */
  exports.prototype['computerGroupID'] = undefined;
  /**
   * @member {String} ipmask
   */
  exports.prototype['ipmask'] = undefined;
  /**
   * @member {String} iprangeLow
   */
  exports.prototype['iprangeLow'] = undefined;
  /**
   * @member {String} iprangeHigh
   */
  exports.prototype['iprangeHigh'] = undefined;


  /**
   * Allowed values for the <code>discoveryType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DiscoveryTypeEnum = {
    /**
     * value: "range"
     * @const
     */
    "range": "range",
    /**
     * value: "masked-ip"
     * @const
     */
    "masked-ip": "masked-ip"  };


  return exports;
}));


