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
    root.Deepsecurity.Recipients = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Recipients model module.
   * @module model/Recipients
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>Recipients</code>.
   * Details of the recipients for a scheduled task. A recipiant is an administrator or contact who recieves reports or event summaries via scheduled tasks.
   * @alias module:model/Recipients
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Recipients</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Recipients} obj Optional instance to populate.
   * @return {module:model/Recipients} The populated <code>Recipients</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allAdministratorsAndContacts')) {
        obj['allAdministratorsAndContacts'] = ApiClient.convertToType(data['allAdministratorsAndContacts'], 'Boolean');
      }
      if (data.hasOwnProperty('administratorIDs')) {
        obj['administratorIDs'] = ApiClient.convertToType(data['administratorIDs'], ['Number']);
      }
      if (data.hasOwnProperty('contactIDs')) {
        obj['contactIDs'] = ApiClient.convertToType(data['contactIDs'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * Send to all administrators and contacts with a valid email address.
   * @member {Boolean} allAdministratorsAndContacts
   */
  exports.prototype['allAdministratorsAndContacts'] = undefined;
  /**
   * List of recipient administrators IDs.
   * @member {Array.<Number>} administratorIDs
   */
  exports.prototype['administratorIDs'] = undefined;
  /**
   * List of recipient contact IDs.
   * @member {Array.<Number>} contactIDs
   */
  exports.prototype['contactIDs'] = undefined;



  return exports;
}));



