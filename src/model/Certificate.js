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
    define(['ApiClient', 'model/CertificateDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CertificateDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Deepsecurity) {
      root.Deepsecurity = {};
    }
    root.Deepsecurity.Certificate = factory(root.Deepsecurity.ApiClient, root.Deepsecurity.CertificateDetails);
  }
}(this, function(ApiClient, CertificateDetails) {
  'use strict';




  /**
   * The Certificate model module.
   * @module model/Certificate
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>Certificate</code>.
   * Certificate
   * @alias module:model/Certificate
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Certificate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Certificate} obj Optional instance to populate.
   * @return {module:model/Certificate} The populated <code>Certificate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
      }
      if (data.hasOwnProperty('certificate')) {
        obj['certificate'] = ApiClient.convertToType(data['certificate'], 'String');
      }
      if (data.hasOwnProperty('certificateDetails')) {
        obj['certificateDetails'] = CertificateDetails.constructFromObject(data['certificateDetails']);
      }
      if (data.hasOwnProperty('trusted')) {
        obj['trusted'] = ApiClient.convertToType(data['trusted'], 'Boolean');
      }
      if (data.hasOwnProperty('purpose')) {
        obj['purpose'] = ApiClient.convertToType(data['purpose'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID of the SSL certificate. This ID is set automatically.
   * @member {Number} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * The certificate. It's a PEM formatted string
   * @member {String} certificate
   */
  exports.prototype['certificate'] = undefined;
  /**
   * Detailed information about the certificate.
   * @member {module:model/CertificateDetails} certificateDetails
   */
  exports.prototype['certificateDetails'] = undefined;
  /**
   * True if the certificate is trusted by Deep Security Manager or verified by a CA.
   * @member {Boolean} trusted
   */
  exports.prototype['trusted'] = undefined;
  /**
   * The type of connections for which the certificate is to be used.
   * @member {module:model/Certificate.PurposeEnum} purpose
   */
  exports.prototype['purpose'] = undefined;


  /**
   * Allowed values for the <code>purpose</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PurposeEnum = {
    /**
     * value: "SSL"
     * @const
     */
    "SSL": "SSL"  };


  return exports;
}));



