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
    root.Deepsecurity.ReportTemplate = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReportTemplate model module.
   * @module model/ReportTemplate
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>ReportTemplate</code>.
   * Details of a report template.
   * @alias module:model/ReportTemplate
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>ReportTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportTemplate} obj Optional instance to populate.
   * @return {module:model/ReportTemplate} The populated <code>ReportTemplate</code> instance.
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
      if (data.hasOwnProperty('timeFilterSupported')) {
        obj['timeFilterSupported'] = ApiClient.convertToType(data['timeFilterSupported'], 'Boolean');
      }
      if (data.hasOwnProperty('computerFilterSupported')) {
        obj['computerFilterSupported'] = ApiClient.convertToType(data['computerFilterSupported'], 'Boolean');
      }
      if (data.hasOwnProperty('tagFilterSupported')) {
        obj['tagFilterSupported'] = ApiClient.convertToType(data['tagFilterSupported'], 'Boolean');
      }
      if (data.hasOwnProperty('supportedFormats')) {
        obj['supportedFormats'] = ApiClient.convertToType(data['supportedFormats'], ['String']);
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Name of the report template.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Description of the report template.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Flag indicating whether or not the report template supports a time filter. Searchable as Boolean.
   * @member {Boolean} timeFilterSupported
   */
  exports.prototype['timeFilterSupported'] = undefined;
  /**
   * Flag indicating whether or not the report template supports a computer filter. Searchable as Boolean.
   * @member {Boolean} computerFilterSupported
   */
  exports.prototype['computerFilterSupported'] = undefined;
  /**
   * Flag indicating whether or not the report template supports a tag filter. Searchable as Boolean.
   * @member {Boolean} tagFilterSupported
   */
  exports.prototype['tagFilterSupported'] = undefined;
  /**
   * List of supported report formats.
   * @member {Array.<module:model/ReportTemplate.SupportedFormatsEnum>} supportedFormats
   */
  exports.prototype['supportedFormats'] = undefined;
  /**
   * ID of the report template. Searchable as ID.
   * @member {Number} ID
   */
  exports.prototype['ID'] = undefined;


  /**
   * Allowed values for the <code>supportedFormats</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SupportedFormatsEnum = {
    /**
     * value: "pdf"
     * @const
     */
    "pdf": "pdf",
    /**
     * value: "csv"
     * @const
     */
    "csv": "csv",
    /**
     * value: "html"
     * @const
     */
    "html": "html",
    /**
     * value: "plaintext"
     * @const
     */
    "plaintext": "plaintext",
    /**
     * value: "rtf"
     * @const
     */
    "rtf": "rtf",
    /**
     * value: "xls"
     * @const
     */
    "xls": "xls",
    /**
     * value: "xml"
     * @const
     */
    "xml": "xml"  };


  return exports;
}));



