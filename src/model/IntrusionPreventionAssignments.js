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
    root.Deepsecurity.IntrusionPreventionAssignments = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The IntrusionPreventionAssignments model module.
   * @module model/IntrusionPreventionAssignments
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>IntrusionPreventionAssignments</code>.
   * @alias module:model/IntrusionPreventionAssignments
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>IntrusionPreventionAssignments</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntrusionPreventionAssignments} obj Optional instance to populate.
   * @return {module:model/IntrusionPreventionAssignments} The populated <code>IntrusionPreventionAssignments</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('assignedRuleIDs')) {
        obj['assignedRuleIDs'] = ApiClient.convertToType(data['assignedRuleIDs'], ['Number']);
      }
      if (data.hasOwnProperty('assignedApplicationTypeIDs')) {
        obj['assignedApplicationTypeIDs'] = ApiClient.convertToType(data['assignedApplicationTypeIDs'], ['Number']);
      }
      if (data.hasOwnProperty('recommendationScanStatus')) {
        obj['recommendationScanStatus'] = ApiClient.convertToType(data['recommendationScanStatus'], 'String');
      }
      if (data.hasOwnProperty('lastRecommendationScanDate')) {
        obj['lastRecommendationScanDate'] = ApiClient.convertToType(data['lastRecommendationScanDate'], 'Number');
      }
      if (data.hasOwnProperty('recommendedToAssignRuleIDs')) {
        obj['recommendedToAssignRuleIDs'] = ApiClient.convertToType(data['recommendedToAssignRuleIDs'], ['Number']);
      }
      if (data.hasOwnProperty('recommendedToUnassignRuleIDs')) {
        obj['recommendedToUnassignRuleIDs'] = ApiClient.convertToType(data['recommendedToUnassignRuleIDs'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * IDs of the intrusion prevention rules currently assigned.
   * @member {Array.<Number>} assignedRuleIDs
   */
  exports.prototype['assignedRuleIDs'] = undefined;
  /**
   * IDs of the application types currently assigned.
   * @member {Array.<Number>} assignedApplicationTypeIDs
   */
  exports.prototype['assignedApplicationTypeIDs'] = undefined;
  /**
   * Status of the last recommendation scan.
   * @member {module:model/IntrusionPreventionAssignments.RecommendationScanStatusEnum} recommendationScanStatus
   */
  exports.prototype['recommendationScanStatus'] = undefined;
  /**
   * Timestamp of the last recommendation scan, in milliseconds since epoch.
   * @member {Number} lastRecommendationScanDate
   */
  exports.prototype['lastRecommendationScanDate'] = undefined;
  /**
   * IDs of the intrusion prevention rules recommended for assignment.
   * @member {Array.<Number>} recommendedToAssignRuleIDs
   */
  exports.prototype['recommendedToAssignRuleIDs'] = undefined;
  /**
   * IDs of the intrusion prevention rules recommended for unassignment.
   * @member {Array.<Number>} recommendedToUnassignRuleIDs
   */
  exports.prototype['recommendedToUnassignRuleIDs'] = undefined;


  /**
   * Allowed values for the <code>recommendationScanStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RecommendationScanStatusEnum = {
    /**
     * value: "none"
     * @const
     */
    "none": "none",
    /**
     * value: "valid"
     * @const
     */
    "valid": "valid",
    /**
     * value: "out-of-date"
     * @const
     */
    "out-of-date": "out-of-date",
    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown"  };


  return exports;
}));



