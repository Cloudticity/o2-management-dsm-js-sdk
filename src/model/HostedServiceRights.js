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
    define(['ApiClient', 'model/AccountRights', 'model/FixRights', 'model/HeapRights', 'model/LicenseRateRights', 'model/QueryRights', 'model/QueryTracebackRights', 'model/ServerLogRights', 'model/StackTraceRights'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountRights'), require('./FixRights'), require('./HeapRights'), require('./LicenseRateRights'), require('./QueryRights'), require('./QueryTracebackRights'), require('./ServerLogRights'), require('./StackTraceRights'));
  } else {
    // Browser globals (root is window)
    if (!root.Deepsecurity) {
      root.Deepsecurity = {};
    }
    root.Deepsecurity.HostedServiceRights = factory(root.Deepsecurity.ApiClient, root.Deepsecurity.AccountRights, root.Deepsecurity.FixRights, root.Deepsecurity.HeapRights, root.Deepsecurity.LicenseRateRights, root.Deepsecurity.QueryRights, root.Deepsecurity.QueryTracebackRights, root.Deepsecurity.ServerLogRights, root.Deepsecurity.StackTraceRights);
  }
}(this, function(ApiClient, AccountRights, FixRights, HeapRights, LicenseRateRights, QueryRights, QueryTracebackRights, ServerLogRights, StackTraceRights) {
  'use strict';




  /**
   * The HostedServiceRights model module.
   * @module model/HostedServiceRights
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>HostedServiceRights</code>.
   * Hosted service rights details.
   * @alias module:model/HostedServiceRights
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>HostedServiceRights</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HostedServiceRights} obj Optional instance to populate.
   * @return {module:model/HostedServiceRights} The populated <code>HostedServiceRights</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountRights')) {
        obj['accountRights'] = AccountRights.constructFromObject(data['accountRights']);
      }
      if (data.hasOwnProperty('fixRights')) {
        obj['fixRights'] = FixRights.constructFromObject(data['fixRights']);
      }
      if (data.hasOwnProperty('heapRights')) {
        obj['heapRights'] = HeapRights.constructFromObject(data['heapRights']);
      }
      if (data.hasOwnProperty('licenseRateRights')) {
        obj['licenseRateRights'] = LicenseRateRights.constructFromObject(data['licenseRateRights']);
      }
      if (data.hasOwnProperty('queryRights')) {
        obj['queryRights'] = QueryRights.constructFromObject(data['queryRights']);
      }
      if (data.hasOwnProperty('queryTracebackRights')) {
        obj['queryTracebackRights'] = QueryTracebackRights.constructFromObject(data['queryTracebackRights']);
      }
      if (data.hasOwnProperty('serverLogRights')) {
        obj['serverLogRights'] = ServerLogRights.constructFromObject(data['serverLogRights']);
      }
      if (data.hasOwnProperty('stackTraceRights')) {
        obj['stackTraceRights'] = StackTraceRights.constructFromObject(data['stackTraceRights']);
      }
    }
    return obj;
  }

  /**
   * Rights related to accounts.
   * @member {module:model/AccountRights} accountRights
   */
  exports.prototype['accountRights'] = undefined;
  /**
   * Rights related to fixes.
   * @member {module:model/FixRights} fixRights
   */
  exports.prototype['fixRights'] = undefined;
  /**
   * Rights related to the heap.
   * @member {module:model/HeapRights} heapRights
   */
  exports.prototype['heapRights'] = undefined;
  /**
   * Rights related to license rates.
   * @member {module:model/LicenseRateRights} licenseRateRights
   */
  exports.prototype['licenseRateRights'] = undefined;
  /**
   * Rights related to queries.
   * @member {module:model/QueryRights} queryRights
   */
  exports.prototype['queryRights'] = undefined;
  /**
   * Rights related to query traceback.
   * @member {module:model/QueryTracebackRights} queryTracebackRights
   */
  exports.prototype['queryTracebackRights'] = undefined;
  /**
   * Rights related to server logs.
   * @member {module:model/ServerLogRights} serverLogRights
   */
  exports.prototype['serverLogRights'] = undefined;
  /**
   * Rights related to stack traces.
   * @member {module:model/StackTraceRights} stackTraceRights
   */
  exports.prototype['stackTraceRights'] = undefined;



  return exports;
}));



