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
    root.Deepsecurity.ScheduleRights = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ScheduleRights model module.
   * @module model/ScheduleRights
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>ScheduleRights</code>.
   * Schedule right details.
   * @alias module:model/ScheduleRights
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ScheduleRights</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScheduleRights} obj Optional instance to populate.
   * @return {module:model/ScheduleRights} The populated <code>ScheduleRights</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('canCreateNewSchedules')) {
        obj['canCreateNewSchedules'] = ApiClient.convertToType(data['canCreateNewSchedules'], 'Boolean');
      }
      if (data.hasOwnProperty('canDeleteSchedules')) {
        obj['canDeleteSchedules'] = ApiClient.convertToType(data['canDeleteSchedules'], 'Boolean');
      }
      if (data.hasOwnProperty('canEditScheduleProperties')) {
        obj['canEditScheduleProperties'] = ApiClient.convertToType(data['canEditScheduleProperties'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Right to create new schedules.
   * @member {Boolean} canCreateNewSchedules
   */
  exports.prototype['canCreateNewSchedules'] = undefined;
  /**
   * Right to delete schedules.
   * @member {Boolean} canDeleteSchedules
   */
  exports.prototype['canDeleteSchedules'] = undefined;
  /**
   * Right to edit schedule properties.
   * @member {Boolean} canEditScheduleProperties
   */
  exports.prototype['canEditScheduleProperties'] = undefined;



  return exports;
}));



