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
    root.Deepsecurity.RelayGroupRights = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RelayGroupRights model module.
   * @module model/RelayGroupRights
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>RelayGroupRights</code>.
   * Relay group right details.
   * @alias module:model/RelayGroupRights
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>RelayGroupRights</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RelayGroupRights} obj Optional instance to populate.
   * @return {module:model/RelayGroupRights} The populated <code>RelayGroupRights</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('canCreateNewRelayGroups')) {
        obj['canCreateNewRelayGroups'] = ApiClient.convertToType(data['canCreateNewRelayGroups'], 'Boolean');
      }
      if (data.hasOwnProperty('canDeleteRelayGroups')) {
        obj['canDeleteRelayGroups'] = ApiClient.convertToType(data['canDeleteRelayGroups'], 'Boolean');
      }
      if (data.hasOwnProperty('canEditRelayGroupProperties')) {
        obj['canEditRelayGroupProperties'] = ApiClient.convertToType(data['canEditRelayGroupProperties'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Right to create new relay groups.
   * @member {Boolean} canCreateNewRelayGroups
   */
  exports.prototype['canCreateNewRelayGroups'] = undefined;
  /**
   * Right to delete relay groups.
   * @member {Boolean} canDeleteRelayGroups
   */
  exports.prototype['canDeleteRelayGroups'] = undefined;
  /**
   * Right to edit relay group properties.
   * @member {Boolean} canEditRelayGroupProperties
   */
  exports.prototype['canEditRelayGroupProperties'] = undefined;



  return exports;
}));



