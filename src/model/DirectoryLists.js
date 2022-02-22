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
    define(['ApiClient', 'model/DirectoryList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DirectoryList'));
  } else {
    // Browser globals (root is window)
    if (!root.Deepsecurity) {
      root.Deepsecurity = {};
    }
    root.Deepsecurity.DirectoryLists = factory(root.Deepsecurity.ApiClient, root.Deepsecurity.DirectoryList);
  }
}(this, function(ApiClient, DirectoryList) {
  'use strict';




  /**
   * The DirectoryLists model module.
   * @module model/DirectoryLists
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>DirectoryLists</code>.
   * @alias module:model/DirectoryLists
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DirectoryLists</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DirectoryLists} obj Optional instance to populate.
   * @return {module:model/DirectoryLists} The populated <code>DirectoryLists</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('directoryLists')) {
        obj['directoryLists'] = ApiClient.convertToType(data['directoryLists'], [DirectoryList]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/DirectoryList>} directoryLists
   */
  exports.prototype['directoryLists'] = undefined;



  return exports;
}));


