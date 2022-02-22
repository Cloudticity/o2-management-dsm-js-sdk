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
    root.Deepsecurity.ContactRights = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ContactRights model module.
   * @module model/ContactRights
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>ContactRights</code>.
   * Contact right details.
   * @alias module:model/ContactRights
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ContactRights</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContactRights} obj Optional instance to populate.
   * @return {module:model/ContactRights} The populated <code>ContactRights</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('canCreateNewContacts')) {
        obj['canCreateNewContacts'] = ApiClient.convertToType(data['canCreateNewContacts'], 'Boolean');
      }
      if (data.hasOwnProperty('canDeleteContacts')) {
        obj['canDeleteContacts'] = ApiClient.convertToType(data['canDeleteContacts'], 'Boolean');
      }
      if (data.hasOwnProperty('canEditContactProperties')) {
        obj['canEditContactProperties'] = ApiClient.convertToType(data['canEditContactProperties'], 'Boolean');
      }
      if (data.hasOwnProperty('canViewContacts')) {
        obj['canViewContacts'] = ApiClient.convertToType(data['canViewContacts'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Right to create new contacts.
   * @member {Boolean} canCreateNewContacts
   */
  exports.prototype['canCreateNewContacts'] = undefined;
  /**
   * Right to delete contacts.
   * @member {Boolean} canDeleteContacts
   */
  exports.prototype['canDeleteContacts'] = undefined;
  /**
   * Right to edit contacts.
   * @member {Boolean} canEditContactProperties
   */
  exports.prototype['canEditContactProperties'] = undefined;
  /**
   * Right to view contacts.
   * @member {Boolean} canViewContacts
   */
  exports.prototype['canViewContacts'] = undefined;



  return exports;
}));


