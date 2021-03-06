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
    root.Deepsecurity.FileExtensionList = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FileExtensionList model module.
   * @module model/FileExtensionList
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>FileExtensionList</code>.
   * Collection of file extensions.
   * @alias module:model/FileExtensionList
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>FileExtensionList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileExtensionList} obj Optional instance to populate.
   * @return {module:model/FileExtensionList} The populated <code>FileExtensionList</code> instance.
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
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], ['String']);
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Name of the file extension list. Searchable as String.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Description of the file extension list. Searchable as String.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * List of file extensions. Asterisk (*) is a wildcard character.
   * @member {Array.<String>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * ID of the file extension list. This number is set automatically. Searchable as ID.
   * @member {Number} ID
   */
  exports.prototype['ID'] = undefined;



  return exports;
}));



