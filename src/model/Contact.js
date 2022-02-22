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
    root.Deepsecurity.Contact = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Contact model module.
   * @module model/Contact
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>Contact</code>.
   * Details of a Contact. A contact is a user who cannot sign into Deep Security Manager but can be sent reports via scheduled tasks.
   * @alias module:model/Contact
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Contact} obj Optional instance to populate.
   * @return {module:model/Contact} The populated <code>Contact</code> instance.
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
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
      if (data.hasOwnProperty('mobileNumber')) {
        obj['mobileNumber'] = ApiClient.convertToType(data['mobileNumber'], 'String');
      }
      if (data.hasOwnProperty('pagerNumber')) {
        obj['pagerNumber'] = ApiClient.convertToType(data['pagerNumber'], 'String');
      }
      if (data.hasOwnProperty('emailAddress')) {
        obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
      }
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }
      if (data.hasOwnProperty('roleID')) {
        obj['roleID'] = ApiClient.convertToType(data['roleID'], 'Number');
      }
      if (data.hasOwnProperty('reportPDFPasswordEnabled')) {
        obj['reportPDFPasswordEnabled'] = ApiClient.convertToType(data['reportPDFPasswordEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('reportPDFPassword')) {
        obj['reportPDFPassword'] = ApiClient.convertToType(data['reportPDFPassword'], 'String');
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Name of the Contact. Searchable as String.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Description of the Contact. Searchable as String.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Phone number of the Contact. Searchable as String.
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * Mobile number of the Contact. Searchable as String.
   * @member {String} mobileNumber
   */
  exports.prototype['mobileNumber'] = undefined;
  /**
   * Pager number of the Contact. Searchable as String.
   * @member {String} pagerNumber
   */
  exports.prototype['pagerNumber'] = undefined;
  /**
   * Email address of the Contact. Searchable as String.
   * @member {String} emailAddress
   */
  exports.prototype['emailAddress'] = undefined;
  /**
   * Locale of the Contact.
   * @member {module:model/Contact.LocaleEnum} locale
   */
  exports.prototype['locale'] = undefined;
  /**
   * ID of the role assigned to the Contact. Searchable as Numeric.
   * @member {Number} roleID
   */
  exports.prototype['roleID'] = undefined;
  /**
   * Controls whether the reports that the Contact generates are password-protected. Set to true to password-protect, and false otherwise. Defaults to false. Searchable as Boolean.
   * @member {Boolean} reportPDFPasswordEnabled
   */
  exports.prototype['reportPDFPasswordEnabled'] = undefined;
  /**
   * Password that protects the reports that the Contact generates. Ignored when reportPDFPasswordEnabled is false.
   * @member {String} reportPDFPassword
   */
  exports.prototype['reportPDFPassword'] = undefined;
  /**
   * ID of the Contact. Searchable as ID.
   * @member {Number} ID
   */
  exports.prototype['ID'] = undefined;


  /**
   * Allowed values for the <code>locale</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LocaleEnum = {
    /**
     * value: "en-US"
     * @const
     */
    "en-US": "en-US",
    /**
     * value: "ja-JP"
     * @const
     */
    "ja-JP": "ja-JP"  };


  return exports;
}));


