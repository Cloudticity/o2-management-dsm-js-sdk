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
    root.Deepsecurity.LogFile = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LogFile model module.
   * @module model/LogFile
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>LogFile</code>.
   * Describes the file path and format of the log file.
   * @alias module:model/LogFile
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>LogFile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LogFile} obj Optional instance to populate.
   * @return {module:model/LogFile} The populated <code>LogFile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
    }
    return obj;
  }

  /**
   * File path of the log file.
   * @member {String} location
   */
  exports.prototype['location'] = undefined;
  /**
   * Structure of the data in the log file. The application that generates the log file defines the structure of the data.
   * @member {module:model/LogFile.FormatEnum} format
   */
  exports.prototype['format'] = undefined;


  /**
   * Allowed values for the <code>format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FormatEnum = {
    /**
     * value: "syslog"
     * @const
     */
    "syslog": "syslog",
    /**
     * value: "snort-full"
     * @const
     */
    "snort-full": "snort-full",
    /**
     * value: "snort-fast"
     * @const
     */
    "snort-fast": "snort-fast",
    /**
     * value: "apache"
     * @const
     */
    "apache": "apache",
    /**
     * value: "iis"
     * @const
     */
    "iis": "iis",
    /**
     * value: "squid"
     * @const
     */
    "squid": "squid",
    /**
     * value: "nmapg"
     * @const
     */
    "nmapg": "nmapg",
    /**
     * value: "mysql-log"
     * @const
     */
    "mysql-log": "mysql-log",
    /**
     * value: "postgresql-log"
     * @const
     */
    "postgresql-log": "postgresql-log",
    /**
     * value: "dbj-multilog"
     * @const
     */
    "dbj-multilog": "dbj-multilog",
    /**
     * value: "eventlog"
     * @const
     */
    "eventlog": "eventlog",
    /**
     * value: "single-line-text-log"
     * @const
     */
    "single-line-text-log": "single-line-text-log"  };


  return exports;
}));



