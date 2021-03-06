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
    root.Deepsecurity.StatefulConfiguration = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StatefulConfiguration model module.
   * @module model/StatefulConfiguration
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>StatefulConfiguration</code>.
   * Stateful configurations of the interface.
   * @alias module:model/StatefulConfiguration
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>StatefulConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatefulConfiguration} obj Optional instance to populate.
   * @return {module:model/StatefulConfiguration} The populated <code>StatefulConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('denyFragmentedPacketsEnabled')) {
        obj['denyFragmentedPacketsEnabled'] = ApiClient.convertToType(data['denyFragmentedPacketsEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('denyPacketsContainingCwrOrEceEnabled')) {
        obj['denyPacketsContainingCwrOrEceEnabled'] = ApiClient.convertToType(data['denyPacketsContainingCwrOrEceEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('maxIncomingConnections')) {
        obj['maxIncomingConnections'] = ApiClient.convertToType(data['maxIncomingConnections'], 'Number');
      }
      if (data.hasOwnProperty('maxOutgoingConnections')) {
        obj['maxOutgoingConnections'] = ApiClient.convertToType(data['maxOutgoingConnections'], 'Number');
      }
      if (data.hasOwnProperty('maxHalfOpenConnections')) {
        obj['maxHalfOpenConnections'] = ApiClient.convertToType(data['maxHalfOpenConnections'], 'Number');
      }
      if (data.hasOwnProperty('tcpstatefulInspectionEnabled')) {
        obj['tcpstatefulInspectionEnabled'] = ApiClient.convertToType(data['tcpstatefulInspectionEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('tcpstatefulLoggingEnabled')) {
        obj['tcpstatefulLoggingEnabled'] = ApiClient.convertToType(data['tcpstatefulLoggingEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('udpstatefulInspectionEnabled')) {
        obj['udpstatefulInspectionEnabled'] = ApiClient.convertToType(data['udpstatefulInspectionEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('udpstatefulLoggingEnabled')) {
        obj['udpstatefulLoggingEnabled'] = ApiClient.convertToType(data['udpstatefulLoggingEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('icmpstatefulInspectionEnabled')) {
        obj['icmpstatefulInspectionEnabled'] = ApiClient.convertToType(data['icmpstatefulInspectionEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('icmpstatefulLoggingEnabled')) {
        obj['icmpstatefulLoggingEnabled'] = ApiClient.convertToType(data['icmpstatefulLoggingEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Name of the stateful configuration. Searchable as String.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Description of the stateful configuration. Searchable as String.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Controls if fragmented packets are denied. Set to true to deny fragmented packets. Searchable as Boolean.
   * @member {Boolean} denyFragmentedPacketsEnabled
   */
  exports.prototype['denyFragmentedPacketsEnabled'] = undefined;
  /**
   * Controls if TCP CWR, ECE flags are denied. Set to true to enable CWR or ECE flags. Searchable as Boolean.
   * @member {Boolean} denyPacketsContainingCwrOrEceEnabled
   */
  exports.prototype['denyPacketsContainingCwrOrEceEnabled'] = undefined;
  /**
   * Maximum allowed incoming connections. Searchable as Numeric.
   * @member {Number} maxIncomingConnections
   */
  exports.prototype['maxIncomingConnections'] = undefined;
  /**
   * Maximum allowed outgoing connections. Searchable as Numeric.
   * @member {Number} maxOutgoingConnections
   */
  exports.prototype['maxOutgoingConnections'] = undefined;
  /**
   * Maximum allowed half open connections. Searchable as Numeric.
   * @member {Number} maxHalfOpenConnections
   */
  exports.prototype['maxHalfOpenConnections'] = undefined;
  /**
   * @member {Boolean} tcpstatefulInspectionEnabled
   */
  exports.prototype['tcpstatefulInspectionEnabled'] = undefined;
  /**
   * @member {Boolean} tcpstatefulLoggingEnabled
   */
  exports.prototype['tcpstatefulLoggingEnabled'] = undefined;
  /**
   * @member {Boolean} udpstatefulInspectionEnabled
   */
  exports.prototype['udpstatefulInspectionEnabled'] = undefined;
  /**
   * @member {Boolean} udpstatefulLoggingEnabled
   */
  exports.prototype['udpstatefulLoggingEnabled'] = undefined;
  /**
   * @member {Boolean} icmpstatefulInspectionEnabled
   */
  exports.prototype['icmpstatefulInspectionEnabled'] = undefined;
  /**
   * @member {Boolean} icmpstatefulLoggingEnabled
   */
  exports.prototype['icmpstatefulLoggingEnabled'] = undefined;
  /**
   * ID of the stateful configuration. Searchable as ID.
   * @member {Number} ID
   */
  exports.prototype['ID'] = undefined;



  return exports;
}));



