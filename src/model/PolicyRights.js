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
    root.Deepsecurity.PolicyRights = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PolicyRights model module.
   * @module model/PolicyRights
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>PolicyRights</code>.
   * Policy right details.
   * @alias module:model/PolicyRights
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>PolicyRights</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PolicyRights} obj Optional instance to populate.
   * @return {module:model/PolicyRights} The populated <code>PolicyRights</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('canCreateNewPolicies')) {
        obj['canCreateNewPolicies'] = ApiClient.convertToType(data['canCreateNewPolicies'], 'Boolean');
      }
      if (data.hasOwnProperty('canDeletePolicies')) {
        obj['canDeletePolicies'] = ApiClient.convertToType(data['canDeletePolicies'], 'Boolean');
      }
      if (data.hasOwnProperty('canEditPolicyProperties')) {
        obj['canEditPolicyProperties'] = ApiClient.convertToType(data['canEditPolicyProperties'], 'Boolean');
      }
      if (data.hasOwnProperty('canImportPolicies')) {
        obj['canImportPolicies'] = ApiClient.convertToType(data['canImportPolicies'], 'Boolean');
      }
      if (data.hasOwnProperty('canViewOtherPolicies')) {
        obj['canViewOtherPolicies'] = ApiClient.convertToType(data['canViewOtherPolicies'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Right to create new policies.
   * @member {Boolean} canCreateNewPolicies
   */
  exports.prototype['canCreateNewPolicies'] = undefined;
  /**
   * Right to delete policies.
   * @member {Boolean} canDeletePolicies
   */
  exports.prototype['canDeletePolicies'] = undefined;
  /**
   * Right to edit policy properties.
   * @member {Boolean} canEditPolicyProperties
   */
  exports.prototype['canEditPolicyProperties'] = undefined;
  /**
   * Right to import policies.
   * @member {Boolean} canImportPolicies
   */
  exports.prototype['canImportPolicies'] = undefined;
  /**
   * Right to view non-selected policies.
   * @member {Boolean} canViewOtherPolicies
   */
  exports.prototype['canViewOtherPolicies'] = undefined;



  return exports;
}));


