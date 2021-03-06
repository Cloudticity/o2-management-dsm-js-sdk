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
    root.Deepsecurity.ApplicationType = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ApplicationType model module.
   * @module model/ApplicationType
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>ApplicationType</code>.
   * Application Types are useful for grouping intrusion prevention rules that have a common purpose.
   * @alias module:model/ApplicationType
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>ApplicationType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplicationType} obj Optional instance to populate.
   * @return {module:model/ApplicationType} The populated <code>ApplicationType</code> instance.
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
      if (data.hasOwnProperty('minimumAgentVersion')) {
        obj['minimumAgentVersion'] = ApiClient.convertToType(data['minimumAgentVersion'], 'String');
      }
      if (data.hasOwnProperty('direction')) {
        obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
      }
      if (data.hasOwnProperty('protocol')) {
        obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
      }
      if (data.hasOwnProperty('portType')) {
        obj['portType'] = ApiClient.convertToType(data['portType'], 'String');
      }
      if (data.hasOwnProperty('portMultiple')) {
        obj['portMultiple'] = ApiClient.convertToType(data['portMultiple'], ['String']);
      }
      if (data.hasOwnProperty('portListID')) {
        obj['portListID'] = ApiClient.convertToType(data['portListID'], 'Number');
      }
      if (data.hasOwnProperty('recommendationsMode')) {
        obj['recommendationsMode'] = ApiClient.convertToType(data['recommendationsMode'], 'String');
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Display name of the ApplicationType. Searchable as String.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Description of the ApplicationType. Searchable as String.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Version of the Deep Security agent or appliance required to support the ApplicationType. Searchable as String.
   * @member {String} minimumAgentVersion
   */
  exports.prototype['minimumAgentVersion'] = undefined;
  /**
   * Direction of the initial communication for the ApplicationType (e.g. 'outgoing' for web browsers). Searchable as Choice.
   * @member {module:model/ApplicationType.DirectionEnum} direction
   */
  exports.prototype['direction'] = undefined;
  /**
   * Protocol used by the ApplicationType. Searchable as Choice.
   * @member {module:model/ApplicationType.ProtocolEnum} protocol
   */
  exports.prototype['protocol'] = undefined;
  /**
   * Port number configuration type. Searchable as Choice.
   * @member {module:model/ApplicationType.PortTypeEnum} portType
   */
  exports.prototype['portType'] = undefined;
  /**
   * If portType is multiple, the list of port numbers the ApplicationType monitors. Searchable as String.
   * @member {Array.<String>} portMultiple
   */
  exports.prototype['portMultiple'] = undefined;
  /**
   * If portType is port-list, ID of the PortList containing the port numbers the ApplicationType monitors. Searchable as Numeric.
   * @member {Number} portListID
   */
  exports.prototype['portListID'] = undefined;
  /**
   * Indicates whether recommendation scans consider the ApplicationType. To avoid errors on existing ApplicationTypes, only change the value between enabled (ApplicationType is included in recommendations scan) and ignored (ApplicationType is ignored by recommendations scan). Other values (disabled or ignored) indicate that the ApplicationType is not supported by recommendation scans. Searchable as Choice.
   * @member {module:model/ApplicationType.RecommendationsModeEnum} recommendationsMode
   */
  exports.prototype['recommendationsMode'] = undefined;
  /**
   * ID of the ApplicationType. Searchable as ID.
   * @member {Number} ID
   */
  exports.prototype['ID'] = undefined;


  /**
   * Allowed values for the <code>direction</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DirectionEnum = {
    /**
     * value: "incoming"
     * @const
     */
    "incoming": "incoming",
    /**
     * value: "outgoing"
     * @const
     */
    "outgoing": "outgoing"  };

  /**
   * Allowed values for the <code>protocol</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProtocolEnum = {
    /**
     * value: "icmp"
     * @const
     */
    "icmp": "icmp",
    /**
     * value: "tcp"
     * @const
     */
    "tcp": "tcp",
    /**
     * value: "udp"
     * @const
     */
    "udp": "udp",
    /**
     * value: "tcp-udp"
     * @const
     */
    "tcp-udp": "tcp-udp"  };

  /**
   * Allowed values for the <code>portType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PortTypeEnum = {
    /**
     * value: "any"
     * @const
     */
    "any": "any",
    /**
     * value: "multiple"
     * @const
     */
    "multiple": "multiple",
    /**
     * value: "port-list"
     * @const
     */
    "port-list": "port-list"  };

  /**
   * Allowed values for the <code>recommendationsMode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RecommendationsModeEnum = {
    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown",
    /**
     * value: "enabled"
     * @const
     */
    "enabled": "enabled",
    /**
     * value: "ignored"
     * @const
     */
    "ignored": "ignored",
    /**
     * value: "disabled"
     * @const
     */
    "disabled": "disabled"  };


  return exports;
}));



