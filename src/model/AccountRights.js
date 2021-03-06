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
    root.Deepsecurity.AccountRights = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccountRights model module.
   * @module model/AccountRights
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>AccountRights</code>.
   * Account right details.
   * @alias module:model/AccountRights
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>AccountRights</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountRights} obj Optional instance to populate.
   * @return {module:model/AccountRights} The populated <code>AccountRights</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('canDeleteAccounts')) {
        obj['canDeleteAccounts'] = ApiClient.convertToType(data['canDeleteAccounts'], 'Boolean');
      }
      if (data.hasOwnProperty('canUpdateAccounts')) {
        obj['canUpdateAccounts'] = ApiClient.convertToType(data['canUpdateAccounts'], 'Boolean');
      }
      if (data.hasOwnProperty('canViewAccountBilling')) {
        obj['canViewAccountBilling'] = ApiClient.convertToType(data['canViewAccountBilling'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Right to delete accounts.
   * @member {Boolean} canDeleteAccounts
   */
  exports.prototype['canDeleteAccounts'] = undefined;
  /**
   * Right to update accounts.
   * @member {Boolean} canUpdateAccounts
   */
  exports.prototype['canUpdateAccounts'] = undefined;
  /**
   * Right to view account billing.
   * @member {Boolean} canViewAccountBilling
   */
  exports.prototype['canViewAccountBilling'] = undefined;



  return exports;
}));



