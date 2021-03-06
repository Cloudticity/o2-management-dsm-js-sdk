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
    root.Deepsecurity.ContextRights = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ContextRights model module.
   * @module model/ContextRights
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>ContextRights</code>.
   * Context right details.
   * @alias module:model/ContextRights
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ContextRights</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContextRights} obj Optional instance to populate.
   * @return {module:model/ContextRights} The populated <code>ContextRights</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('canCreateNewContexts')) {
        obj['canCreateNewContexts'] = ApiClient.convertToType(data['canCreateNewContexts'], 'Boolean');
      }
      if (data.hasOwnProperty('canDeleteContexts')) {
        obj['canDeleteContexts'] = ApiClient.convertToType(data['canDeleteContexts'], 'Boolean');
      }
      if (data.hasOwnProperty('canEditContextProperties')) {
        obj['canEditContextProperties'] = ApiClient.convertToType(data['canEditContextProperties'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Right to create new contexts.
   * @member {Boolean} canCreateNewContexts
   */
  exports.prototype['canCreateNewContexts'] = undefined;
  /**
   * Right to delete contexts.
   * @member {Boolean} canDeleteContexts
   */
  exports.prototype['canDeleteContexts'] = undefined;
  /**
   * Right to edit context properties.
   * @member {Boolean} canEditContextProperties
   */
  exports.prototype['canEditContextProperties'] = undefined;



  return exports;
}));



