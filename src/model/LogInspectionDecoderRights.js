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
    root.Deepsecurity.LogInspectionDecoderRights = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LogInspectionDecoderRights model module.
   * @module model/LogInspectionDecoderRights
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>LogInspectionDecoderRights</code>.
   * Log inspection decoder right details.
   * @alias module:model/LogInspectionDecoderRights
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>LogInspectionDecoderRights</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LogInspectionDecoderRights} obj Optional instance to populate.
   * @return {module:model/LogInspectionDecoderRights} The populated <code>LogInspectionDecoderRights</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('canCreateNewLogInspectionDecoders')) {
        obj['canCreateNewLogInspectionDecoders'] = ApiClient.convertToType(data['canCreateNewLogInspectionDecoders'], 'Boolean');
      }
      if (data.hasOwnProperty('canDeleteLogInspectionDecoders')) {
        obj['canDeleteLogInspectionDecoders'] = ApiClient.convertToType(data['canDeleteLogInspectionDecoders'], 'Boolean');
      }
      if (data.hasOwnProperty('canEditLogInspectionDecoderProperties')) {
        obj['canEditLogInspectionDecoderProperties'] = ApiClient.convertToType(data['canEditLogInspectionDecoderProperties'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Right to create new log inspection decoders.
   * @member {Boolean} canCreateNewLogInspectionDecoders
   */
  exports.prototype['canCreateNewLogInspectionDecoders'] = undefined;
  /**
   * Right to delete log inspection decoders.
   * @member {Boolean} canDeleteLogInspectionDecoders
   */
  exports.prototype['canDeleteLogInspectionDecoders'] = undefined;
  /**
   * Right to edit log inspection decoder properties.
   * @member {Boolean} canEditLogInspectionDecoderProperties
   */
  exports.prototype['canEditLogInspectionDecoderProperties'] = undefined;



  return exports;
}));


