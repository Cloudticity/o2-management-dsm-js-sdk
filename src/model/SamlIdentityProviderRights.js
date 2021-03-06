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
    root.Deepsecurity.SamlIdentityProviderRights = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SamlIdentityProviderRights model module.
   * @module model/SamlIdentityProviderRights
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>SamlIdentityProviderRights</code>.
   * SAML Identity Provider right details.
   * @alias module:model/SamlIdentityProviderRights
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>SamlIdentityProviderRights</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SamlIdentityProviderRights} obj Optional instance to populate.
   * @return {module:model/SamlIdentityProviderRights} The populated <code>SamlIdentityProviderRights</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('canCreateNewSAMLIdentityProviders')) {
        obj['canCreateNewSAMLIdentityProviders'] = ApiClient.convertToType(data['canCreateNewSAMLIdentityProviders'], 'Boolean');
      }
      if (data.hasOwnProperty('canDeleteSAMLIdentityProviders')) {
        obj['canDeleteSAMLIdentityProviders'] = ApiClient.convertToType(data['canDeleteSAMLIdentityProviders'], 'Boolean');
      }
      if (data.hasOwnProperty('canEditSAMLIdentityProviders')) {
        obj['canEditSAMLIdentityProviders'] = ApiClient.convertToType(data['canEditSAMLIdentityProviders'], 'Boolean');
      }
      if (data.hasOwnProperty('canViewSAMLIdentityProviders')) {
        obj['canViewSAMLIdentityProviders'] = ApiClient.convertToType(data['canViewSAMLIdentityProviders'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Right to create new SAML identity providers.
   * @member {Boolean} canCreateNewSAMLIdentityProviders
   */
  exports.prototype['canCreateNewSAMLIdentityProviders'] = undefined;
  /**
   * Right to delete SAML identity providers.
   * @member {Boolean} canDeleteSAMLIdentityProviders
   */
  exports.prototype['canDeleteSAMLIdentityProviders'] = undefined;
  /**
   * Right to edit SAML identity providers.
   * @member {Boolean} canEditSAMLIdentityProviders
   */
  exports.prototype['canEditSAMLIdentityProviders'] = undefined;
  /**
   * Right to view SAML identity providers.
   * @member {Boolean} canViewSAMLIdentityProviders
   */
  exports.prototype['canViewSAMLIdentityProviders'] = undefined;



  return exports;
}));



