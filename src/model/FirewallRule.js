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
    root.Deepsecurity.FirewallRule = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FirewallRule model module.
   * @module model/FirewallRule
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>FirewallRule</code>.
   * Firewall rule details.
   * @alias module:model/FirewallRule
   * @class
   */
  var exports = function() {
    var _this = this;


























































  };

  /**
   * Constructs a <code>FirewallRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FirewallRule} obj Optional instance to populate.
   * @return {module:model/FirewallRule} The populated <code>FirewallRule</code> instance.
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
      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
      }
      if (data.hasOwnProperty('direction')) {
        obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
      }
      if (data.hasOwnProperty('frameType')) {
        obj['frameType'] = ApiClient.convertToType(data['frameType'], 'String');
      }
      if (data.hasOwnProperty('frameNumber')) {
        obj['frameNumber'] = ApiClient.convertToType(data['frameNumber'], 'Number');
      }
      if (data.hasOwnProperty('frameNot')) {
        obj['frameNot'] = ApiClient.convertToType(data['frameNot'], 'Boolean');
      }
      if (data.hasOwnProperty('protocol')) {
        obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
      }
      if (data.hasOwnProperty('protocolNumber')) {
        obj['protocolNumber'] = ApiClient.convertToType(data['protocolNumber'], 'Number');
      }
      if (data.hasOwnProperty('protocolNot')) {
        obj['protocolNot'] = ApiClient.convertToType(data['protocolNot'], 'Boolean');
      }
      if (data.hasOwnProperty('sourceIPType')) {
        obj['sourceIPType'] = ApiClient.convertToType(data['sourceIPType'], 'String');
      }
      if (data.hasOwnProperty('sourceIPValue')) {
        obj['sourceIPValue'] = ApiClient.convertToType(data['sourceIPValue'], 'String');
      }
      if (data.hasOwnProperty('sourceIPMask')) {
        obj['sourceIPMask'] = ApiClient.convertToType(data['sourceIPMask'], 'String');
      }
      if (data.hasOwnProperty('sourceIPRangeFrom')) {
        obj['sourceIPRangeFrom'] = ApiClient.convertToType(data['sourceIPRangeFrom'], 'String');
      }
      if (data.hasOwnProperty('sourceIPRangeTo')) {
        obj['sourceIPRangeTo'] = ApiClient.convertToType(data['sourceIPRangeTo'], 'String');
      }
      if (data.hasOwnProperty('sourceIPMultiple')) {
        obj['sourceIPMultiple'] = ApiClient.convertToType(data['sourceIPMultiple'], ['String']);
      }
      if (data.hasOwnProperty('sourceIPListID')) {
        obj['sourceIPListID'] = ApiClient.convertToType(data['sourceIPListID'], 'Number');
      }
      if (data.hasOwnProperty('sourceIPNot')) {
        obj['sourceIPNot'] = ApiClient.convertToType(data['sourceIPNot'], 'Boolean');
      }
      if (data.hasOwnProperty('sourceMACType')) {
        obj['sourceMACType'] = ApiClient.convertToType(data['sourceMACType'], 'String');
      }
      if (data.hasOwnProperty('sourceMACValue')) {
        obj['sourceMACValue'] = ApiClient.convertToType(data['sourceMACValue'], 'String');
      }
      if (data.hasOwnProperty('sourceMACMultiple')) {
        obj['sourceMACMultiple'] = ApiClient.convertToType(data['sourceMACMultiple'], ['String']);
      }
      if (data.hasOwnProperty('sourceMACListID')) {
        obj['sourceMACListID'] = ApiClient.convertToType(data['sourceMACListID'], 'Number');
      }
      if (data.hasOwnProperty('sourceMACNot')) {
        obj['sourceMACNot'] = ApiClient.convertToType(data['sourceMACNot'], 'Boolean');
      }
      if (data.hasOwnProperty('sourcePortType')) {
        obj['sourcePortType'] = ApiClient.convertToType(data['sourcePortType'], 'String');
      }
      if (data.hasOwnProperty('sourcePortMultiple')) {
        obj['sourcePortMultiple'] = ApiClient.convertToType(data['sourcePortMultiple'], ['String']);
      }
      if (data.hasOwnProperty('sourcePortListID')) {
        obj['sourcePortListID'] = ApiClient.convertToType(data['sourcePortListID'], 'Number');
      }
      if (data.hasOwnProperty('sourcePortNot')) {
        obj['sourcePortNot'] = ApiClient.convertToType(data['sourcePortNot'], 'Boolean');
      }
      if (data.hasOwnProperty('destinationIPType')) {
        obj['destinationIPType'] = ApiClient.convertToType(data['destinationIPType'], 'String');
      }
      if (data.hasOwnProperty('destinationIPValue')) {
        obj['destinationIPValue'] = ApiClient.convertToType(data['destinationIPValue'], 'String');
      }
      if (data.hasOwnProperty('destinationIPMask')) {
        obj['destinationIPMask'] = ApiClient.convertToType(data['destinationIPMask'], 'String');
      }
      if (data.hasOwnProperty('destinationIPRangeFrom')) {
        obj['destinationIPRangeFrom'] = ApiClient.convertToType(data['destinationIPRangeFrom'], 'String');
      }
      if (data.hasOwnProperty('destinationIPRangeTo')) {
        obj['destinationIPRangeTo'] = ApiClient.convertToType(data['destinationIPRangeTo'], 'String');
      }
      if (data.hasOwnProperty('destinationIPMultiple')) {
        obj['destinationIPMultiple'] = ApiClient.convertToType(data['destinationIPMultiple'], ['String']);
      }
      if (data.hasOwnProperty('destinationIPListID')) {
        obj['destinationIPListID'] = ApiClient.convertToType(data['destinationIPListID'], 'Number');
      }
      if (data.hasOwnProperty('destinationIPNot')) {
        obj['destinationIPNot'] = ApiClient.convertToType(data['destinationIPNot'], 'Boolean');
      }
      if (data.hasOwnProperty('destinationMACType')) {
        obj['destinationMACType'] = ApiClient.convertToType(data['destinationMACType'], 'String');
      }
      if (data.hasOwnProperty('destinationMACValue')) {
        obj['destinationMACValue'] = ApiClient.convertToType(data['destinationMACValue'], 'String');
      }
      if (data.hasOwnProperty('destinationMACMultiple')) {
        obj['destinationMACMultiple'] = ApiClient.convertToType(data['destinationMACMultiple'], ['String']);
      }
      if (data.hasOwnProperty('destinationMACListID')) {
        obj['destinationMACListID'] = ApiClient.convertToType(data['destinationMACListID'], 'Number');
      }
      if (data.hasOwnProperty('destinationMACNot')) {
        obj['destinationMACNot'] = ApiClient.convertToType(data['destinationMACNot'], 'Boolean');
      }
      if (data.hasOwnProperty('destinationPortType')) {
        obj['destinationPortType'] = ApiClient.convertToType(data['destinationPortType'], 'String');
      }
      if (data.hasOwnProperty('destinationPortMultiple')) {
        obj['destinationPortMultiple'] = ApiClient.convertToType(data['destinationPortMultiple'], ['String']);
      }
      if (data.hasOwnProperty('destinationPortListID')) {
        obj['destinationPortListID'] = ApiClient.convertToType(data['destinationPortListID'], 'Number');
      }
      if (data.hasOwnProperty('destinationPortNot')) {
        obj['destinationPortNot'] = ApiClient.convertToType(data['destinationPortNot'], 'Boolean');
      }
      if (data.hasOwnProperty('anyFlags')) {
        obj['anyFlags'] = ApiClient.convertToType(data['anyFlags'], 'Boolean');
      }
      if (data.hasOwnProperty('logDisabled')) {
        obj['logDisabled'] = ApiClient.convertToType(data['logDisabled'], 'Boolean');
      }
      if (data.hasOwnProperty('includePacketData')) {
        obj['includePacketData'] = ApiClient.convertToType(data['includePacketData'], 'Boolean');
      }
      if (data.hasOwnProperty('alertEnabled')) {
        obj['alertEnabled'] = ApiClient.convertToType(data['alertEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('scheduleID')) {
        obj['scheduleID'] = ApiClient.convertToType(data['scheduleID'], 'Number');
      }
      if (data.hasOwnProperty('contextID')) {
        obj['contextID'] = ApiClient.convertToType(data['contextID'], 'Number');
      }
      if (data.hasOwnProperty('tcpflags')) {
        obj['tcpflags'] = ApiClient.convertToType(data['tcpflags'], ['String']);
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
      }
      if (data.hasOwnProperty('ICMPType')) {
        obj['ICMPType'] = ApiClient.convertToType(data['ICMPType'], 'Number');
      }
      if (data.hasOwnProperty('ICMPCode')) {
        obj['ICMPCode'] = ApiClient.convertToType(data['ICMPCode'], 'Number');
      }
      if (data.hasOwnProperty('ICMPNot')) {
        obj['ICMPNot'] = ApiClient.convertToType(data['ICMPNot'], 'Boolean');
      }
      if (data.hasOwnProperty('TCPNot')) {
        obj['TCPNot'] = ApiClient.convertToType(data['TCPNot'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Name of the firewall rule. Searchable as String.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Description of the firewall rule. Searchable as String.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Action of the packet filter. Searchable as Choice.
   * @member {module:model/FirewallRule.ActionEnum} action
   */
  exports.prototype['action'] = undefined;
  /**
   * Priority of the packet filter. Searchable as Choice.
   * @member {module:model/FirewallRule.PriorityEnum} priority
   */
  exports.prototype['priority'] = undefined;
  /**
   * Packet direction. Searchable as Choice.
   * @member {module:model/FirewallRule.DirectionEnum} direction
   */
  exports.prototype['direction'] = undefined;
  /**
   * Supported frame types. Searchable as Choice.
   * @member {module:model/FirewallRule.FrameTypeEnum} frameType
   */
  exports.prototype['frameType'] = undefined;
  /**
   * Ethernet frame number. Only required for FrameType \"other\". Searchable as Numeric.
   * @member {Number} frameNumber
   */
  exports.prototype['frameNumber'] = undefined;
  /**
   * Controls if the frame setting should be inverted. Set to true to invert. Searchable as Boolean.
   * @member {Boolean} frameNot
   */
  exports.prototype['frameNot'] = undefined;
  /**
   * Protocol. Searchable as Choice.
   * @member {module:model/FirewallRule.ProtocolEnum} protocol
   */
  exports.prototype['protocol'] = undefined;
  /**
   * Two-byte protocol number. Searchable as Numeric.
   * @member {Number} protocolNumber
   */
  exports.prototype['protocolNumber'] = undefined;
  /**
   * Controls if the protocol setting should be inverted. Set to true to invert. Searchable as Boolean.
   * @member {Boolean} protocolNot
   */
  exports.prototype['protocolNot'] = undefined;
  /**
   * Source IP type. Default is \"any\". Searchable as Choice.
   * @member {module:model/FirewallRule.SourceIPTypeEnum} sourceIPType
   */
  exports.prototype['sourceIPType'] = undefined;
  /**
   * Source IP. Only applies to source IP type \"masked-ip\" or \"single\". Searchable as String.
   * @member {String} sourceIPValue
   */
  exports.prototype['sourceIPValue'] = undefined;
  /**
   * Source IP mask. Only applies to source IP type \"masked-ip\". Searchable as String.
   * @member {String} sourceIPMask
   */
  exports.prototype['sourceIPMask'] = undefined;
  /**
   * The first value for a range of source IP addresses. Only applies to source IP type \"range\". Searchable as String.
   * @member {String} sourceIPRangeFrom
   */
  exports.prototype['sourceIPRangeFrom'] = undefined;
  /**
   * The last value for a range of source IP addresses. Only applies to source IP type \"range\". Searchable as String.
   * @member {String} sourceIPRangeTo
   */
  exports.prototype['sourceIPRangeTo'] = undefined;
  /**
   * List of source IP addresses. Only applies to source IP type \"multiple\". Searchable as String.
   * @member {Array.<String>} sourceIPMultiple
   */
  exports.prototype['sourceIPMultiple'] = undefined;
  /**
   * ID of source IP list. Only applies to source IP type \"ip-list\". Searchable as Numeric.
   * @member {Number} sourceIPListID
   */
  exports.prototype['sourceIPListID'] = undefined;
  /**
   * Controls if the source IP setting should be inverted. Set to true to invert. Searchable as Boolean.
   * @member {Boolean} sourceIPNot
   */
  exports.prototype['sourceIPNot'] = undefined;
  /**
   * Source MAC type. Default is \"any\". Searchable as Choice.
   * @member {module:model/FirewallRule.SourceMACTypeEnum} sourceMACType
   */
  exports.prototype['sourceMACType'] = undefined;
  /**
   * Source MAC address. Only applies to MAC type \"single\". Searchable as String.
   * @member {String} sourceMACValue
   */
  exports.prototype['sourceMACValue'] = undefined;
  /**
   * List of MAC addresses. Only applies to MAC type \"multiple\". Searchable as String.
   * @member {Array.<String>} sourceMACMultiple
   */
  exports.prototype['sourceMACMultiple'] = undefined;
  /**
   * ID of MAC address list. Only applies to MAC type \"mac-list\". Searchable as Numeric.
   * @member {Number} sourceMACListID
   */
  exports.prototype['sourceMACListID'] = undefined;
  /**
   * Controls if the source MAC setting should be inverted. Set to true to invert. Searchable as Boolean.
   * @member {Boolean} sourceMACNot
   */
  exports.prototype['sourceMACNot'] = undefined;
  /**
   * The type of source port. Searchable as Choice.
   * @member {module:model/FirewallRule.SourcePortTypeEnum} sourcePortType
   */
  exports.prototype['sourcePortType'] = undefined;
  /**
   * List of comma-delimited source ports. Only applies to source type \"multiple\". Searchable as String.
   * @member {Array.<String>} sourcePortMultiple
   */
  exports.prototype['sourcePortMultiple'] = undefined;
  /**
   * ID of source port list. Only applies to source type \"port-list\". Searchable as Numeric.
   * @member {Number} sourcePortListID
   */
  exports.prototype['sourcePortListID'] = undefined;
  /**
   * Controls if the source port setting should be inverted. Set to true to invert. Searchable as Boolean.
   * @member {Boolean} sourcePortNot
   */
  exports.prototype['sourcePortNot'] = undefined;
  /**
   * Destination IP type. Default is \"any\". Searchable as Choice.
   * @member {module:model/FirewallRule.DestinationIPTypeEnum} destinationIPType
   */
  exports.prototype['destinationIPType'] = undefined;
  /**
   * Destination IP. Only applies to destination IP type \"masked-ip\" or \"single\". Searchable as String.
   * @member {String} destinationIPValue
   */
  exports.prototype['destinationIPValue'] = undefined;
  /**
   * Destination IP mask. Only applies to destination IP type \"masked-ip\". Searchable as String.
   * @member {String} destinationIPMask
   */
  exports.prototype['destinationIPMask'] = undefined;
  /**
   * The first value for a range of destination IP addresses. Only applies to estination IP type \"range\". Searchable as String.
   * @member {String} destinationIPRangeFrom
   */
  exports.prototype['destinationIPRangeFrom'] = undefined;
  /**
   * The last value for a range of destination IP addresses. Only applies to destination IP type \"range\". Searchable as String.
   * @member {String} destinationIPRangeTo
   */
  exports.prototype['destinationIPRangeTo'] = undefined;
  /**
   * List of comma-delimited destination IP addresses. Only applies to destination IP type \"multiple\". Searchable as String.
   * @member {Array.<String>} destinationIPMultiple
   */
  exports.prototype['destinationIPMultiple'] = undefined;
  /**
   * ID of destination IP list. Only applies to destination IP type \"ip-list\". Searchable as Numeric.
   * @member {Number} destinationIPListID
   */
  exports.prototype['destinationIPListID'] = undefined;
  /**
   * Controls if the destination IP setting should be inverted. Set to true to invert. Searchable as Boolean.
   * @member {Boolean} destinationIPNot
   */
  exports.prototype['destinationIPNot'] = undefined;
  /**
   * Destination MAC type. Default is \"any\". Searchable as Choice.
   * @member {module:model/FirewallRule.DestinationMACTypeEnum} destinationMACType
   */
  exports.prototype['destinationMACType'] = undefined;
  /**
   * Destination MAC address. Only applies to MAC type \"single\". Searchable as String.
   * @member {String} destinationMACValue
   */
  exports.prototype['destinationMACValue'] = undefined;
  /**
   * List of comma-delimited MAC addresses. Only applies to MAC type \"multiple\". Searchable as String.
   * @member {Array.<String>} destinationMACMultiple
   */
  exports.prototype['destinationMACMultiple'] = undefined;
  /**
   * ID of MAC address list. Only applies to MAC type \"mac-list\". Searchable as Numeric.
   * @member {Number} destinationMACListID
   */
  exports.prototype['destinationMACListID'] = undefined;
  /**
   * Controls if the destination MAC setting should be inverted. Set to true to invert. Searchable as Boolean.
   * @member {Boolean} destinationMACNot
   */
  exports.prototype['destinationMACNot'] = undefined;
  /**
   * The type of destination port. Searchable as Choice.
   * @member {module:model/FirewallRule.DestinationPortTypeEnum} destinationPortType
   */
  exports.prototype['destinationPortType'] = undefined;
  /**
   * List of comma-delimited destination ports. Only applies to destination type \"multiple\". Searchable as String.
   * @member {Array.<String>} destinationPortMultiple
   */
  exports.prototype['destinationPortMultiple'] = undefined;
  /**
   * ID of destination port list. Only applies to destination type \"port-list\". Searchable as Numeric.
   * @member {Number} destinationPortListID
   */
  exports.prototype['destinationPortListID'] = undefined;
  /**
   * Controls if the destination port setting should be inverted. Set to true to invert. Searchable as Boolean.
   * @member {Boolean} destinationPortNot
   */
  exports.prototype['destinationPortNot'] = undefined;
  /**
   * True if any flags are used. Searchable as Boolean.
   * @member {Boolean} anyFlags
   */
  exports.prototype['anyFlags'] = undefined;
  /**
   * Controls if logging for this filter is disabled. Only applies to filter action \"log-only\" or \"deny\". Searchable as Boolean.
   * @member {Boolean} logDisabled
   */
  exports.prototype['logDisabled'] = undefined;
  /**
   * Controls if this filter should capture data for every log. Searchable as Boolean.
   * @member {Boolean} includePacketData
   */
  exports.prototype['includePacketData'] = undefined;
  /**
   * Controls if this filter should be alerted on. Searchable as Boolean.
   * @member {Boolean} alertEnabled
   */
  exports.prototype['alertEnabled'] = undefined;
  /**
   * ID of the schedule to control when this filter is \"on\". Searchable as Numeric.
   * @member {Number} scheduleID
   */
  exports.prototype['scheduleID'] = undefined;
  /**
   * RuleContext that is applied to this filter.  Searchable as Numeric.
   * @member {Number} contextID
   */
  exports.prototype['contextID'] = undefined;
  /**
   * @member {Array.<module:model/FirewallRule.TcpflagsEnum>} tcpflags
   */
  exports.prototype['tcpflags'] = undefined;
  /**
   * ID of the firewall rule. Searchable as ID.
   * @member {Number} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {Number} ICMPType
   */
  exports.prototype['ICMPType'] = undefined;
  /**
   * @member {Number} ICMPCode
   */
  exports.prototype['ICMPCode'] = undefined;
  /**
   * @member {Boolean} ICMPNot
   */
  exports.prototype['ICMPNot'] = undefined;
  /**
   * @member {Boolean} TCPNot
   */
  exports.prototype['TCPNot'] = undefined;


  /**
   * Allowed values for the <code>action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionEnum = {
    /**
     * value: "log-only"
     * @const
     */
    "log-only": "log-only",
    /**
     * value: "allow"
     * @const
     */
    "allow": "allow",
    /**
     * value: "deny"
     * @const
     */
    "deny": "deny",
    /**
     * value: "force-allow"
     * @const
     */
    "force-allow": "force-allow",
    /**
     * value: "bypass"
     * @const
     */
    "bypass": "bypass"  };

  /**
   * Allowed values for the <code>priority</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PriorityEnum = {
    /**
     * value: "0"
     * @const
     */
    "0": "0",
    /**
     * value: "1"
     * @const
     */
    "1": "1",
    /**
     * value: "2"
     * @const
     */
    "2": "2",
    /**
     * value: "3"
     * @const
     */
    "3": "3",
    /**
     * value: "4"
     * @const
     */
    "4": "4"  };

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
   * Allowed values for the <code>frameType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FrameTypeEnum = {
    /**
     * value: "any"
     * @const
     */
    "any": "any",
    /**
     * value: "ip"
     * @const
     */
    "ip": "ip",
    /**
     * value: "arp"
     * @const
     */
    "arp": "arp",
    /**
     * value: "revarp"
     * @const
     */
    "revarp": "revarp",
    /**
     * value: "ipv4"
     * @const
     */
    "ipv4": "ipv4",
    /**
     * value: "ipv6"
     * @const
     */
    "ipv6": "ipv6",
    /**
     * value: "other"
     * @const
     */
    "other": "other"  };

  /**
   * Allowed values for the <code>protocol</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProtocolEnum = {
    /**
     * value: "any"
     * @const
     */
    "any": "any",
    /**
     * value: "icmp"
     * @const
     */
    "icmp": "icmp",
    /**
     * value: "igmp"
     * @const
     */
    "igmp": "igmp",
    /**
     * value: "ggp"
     * @const
     */
    "ggp": "ggp",
    /**
     * value: "tcp"
     * @const
     */
    "tcp": "tcp",
    /**
     * value: "pup"
     * @const
     */
    "pup": "pup",
    /**
     * value: "udp"
     * @const
     */
    "udp": "udp",
    /**
     * value: "idp"
     * @const
     */
    "idp": "idp",
    /**
     * value: "nd"
     * @const
     */
    "nd": "nd",
    /**
     * value: "raw"
     * @const
     */
    "raw": "raw",
    /**
     * value: "tcp-udp"
     * @const
     */
    "tcp-udp": "tcp-udp",
    /**
     * value: "icmpv6"
     * @const
     */
    "icmpv6": "icmpv6",
    /**
     * value: "other"
     * @const
     */
    "other": "other"  };

  /**
   * Allowed values for the <code>sourceIPType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SourceIPTypeEnum = {
    /**
     * value: "any"
     * @const
     */
    "any": "any",
    /**
     * value: "masked-ip"
     * @const
     */
    "masked-ip": "masked-ip",
    /**
     * value: "range"
     * @const
     */
    "range": "range",
    /**
     * value: "ip-list"
     * @const
     */
    "ip-list": "ip-list",
    /**
     * value: "single"
     * @const
     */
    "single": "single",
    /**
     * value: "multiple"
     * @const
     */
    "multiple": "multiple"  };

  /**
   * Allowed values for the <code>sourceMACType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SourceMACTypeEnum = {
    /**
     * value: "any"
     * @const
     */
    "any": "any",
    /**
     * value: "single"
     * @const
     */
    "single": "single",
    /**
     * value: "mac-list"
     * @const
     */
    "mac-list": "mac-list",
    /**
     * value: "multiple"
     * @const
     */
    "multiple": "multiple"  };

  /**
   * Allowed values for the <code>sourcePortType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SourcePortTypeEnum = {
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
   * Allowed values for the <code>destinationIPType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DestinationIPTypeEnum = {
    /**
     * value: "any"
     * @const
     */
    "any": "any",
    /**
     * value: "masked-ip"
     * @const
     */
    "masked-ip": "masked-ip",
    /**
     * value: "range"
     * @const
     */
    "range": "range",
    /**
     * value: "ip-list"
     * @const
     */
    "ip-list": "ip-list",
    /**
     * value: "single"
     * @const
     */
    "single": "single",
    /**
     * value: "multiple"
     * @const
     */
    "multiple": "multiple"  };

  /**
   * Allowed values for the <code>destinationMACType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DestinationMACTypeEnum = {
    /**
     * value: "any"
     * @const
     */
    "any": "any",
    /**
     * value: "single"
     * @const
     */
    "single": "single",
    /**
     * value: "mac-list"
     * @const
     */
    "mac-list": "mac-list",
    /**
     * value: "multiple"
     * @const
     */
    "multiple": "multiple"  };

  /**
   * Allowed values for the <code>destinationPortType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DestinationPortTypeEnum = {
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
   * Allowed values for the <code>tcpflags</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TcpflagsEnum = {
    /**
     * value: "fin"
     * @const
     */
    "fin": "fin",
    /**
     * value: "syn"
     * @const
     */
    "syn": "syn",
    /**
     * value: "rst"
     * @const
     */
    "rst": "rst",
    /**
     * value: "psh"
     * @const
     */
    "psh": "psh",
    /**
     * value: "ack"
     * @const
     */
    "ack": "ack",
    /**
     * value: "urg"
     * @const
     */
    "urg": "urg"  };


  return exports;
}));



