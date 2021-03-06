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
    root.Deepsecurity.ProxyRights = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProxyRights model module.
   * @module model/ProxyRights
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>ProxyRights</code>.
   * Proxy right details.
   * @alias module:model/ProxyRights
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ProxyRights</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProxyRights} obj Optional instance to populate.
   * @return {module:model/ProxyRights} The populated <code>ProxyRights</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('canCreateNewProxies')) {
        obj['canCreateNewProxies'] = ApiClient.convertToType(data['canCreateNewProxies'], 'Boolean');
      }
      if (data.hasOwnProperty('canDeleteProxies')) {
        obj['canDeleteProxies'] = ApiClient.convertToType(data['canDeleteProxies'], 'Boolean');
      }
      if (data.hasOwnProperty('canEditProxyProperties')) {
        obj['canEditProxyProperties'] = ApiClient.convertToType(data['canEditProxyProperties'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Right to create new proxies.
   * @member {Boolean} canCreateNewProxies
   */
  exports.prototype['canCreateNewProxies'] = undefined;
  /**
   * Right to delete proxies.
   * @member {Boolean} canDeleteProxies
   */
  exports.prototype['canDeleteProxies'] = undefined;
  /**
   * Right to edit proxy properties.
   * @member {Boolean} canEditProxyProperties
   */
  exports.prototype['canEditProxyProperties'] = undefined;



  return exports;
}));



