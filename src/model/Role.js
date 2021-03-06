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
    define(['ApiClient', 'model/Rights'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Rights'));
  } else {
    // Browser globals (root is window)
    if (!root.Deepsecurity) {
      root.Deepsecurity = {};
    }
    root.Deepsecurity.Role = factory(root.Deepsecurity.ApiClient, root.Deepsecurity.Rights);
  }
}(this, function(ApiClient, Rights) {
  'use strict';




  /**
   * The Role model module.
   * @module model/Role
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>Role</code>.
   * Administrator role details.
   * @alias module:model/Role
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>Role</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Role} obj Optional instance to populate.
   * @return {module:model/Role} The populated <code>Role</code> instance.
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
      if (data.hasOwnProperty('urn')) {
        obj['urn'] = ApiClient.convertToType(data['urn'], 'String');
      }
      if (data.hasOwnProperty('immutable')) {
        obj['immutable'] = ApiClient.convertToType(data['immutable'], 'Boolean');
      }
      if (data.hasOwnProperty('canOnlyManipulateUsersWithEqualOrLesserRights')) {
        obj['canOnlyManipulateUsersWithEqualOrLesserRights'] = ApiClient.convertToType(data['canOnlyManipulateUsersWithEqualOrLesserRights'], 'Boolean');
      }
      if (data.hasOwnProperty('allComputers')) {
        obj['allComputers'] = ApiClient.convertToType(data['allComputers'], 'Boolean');
      }
      if (data.hasOwnProperty('allPolicies')) {
        obj['allPolicies'] = ApiClient.convertToType(data['allPolicies'], 'Boolean');
      }
      if (data.hasOwnProperty('allowUserInterface')) {
        obj['allowUserInterface'] = ApiClient.convertToType(data['allowUserInterface'], 'Boolean');
      }
      if (data.hasOwnProperty('allowWebService')) {
        obj['allowWebService'] = ApiClient.convertToType(data['allowWebService'], 'Boolean');
      }
      if (data.hasOwnProperty('rights')) {
        obj['rights'] = Rights.constructFromObject(data['rights']);
      }
      if (data.hasOwnProperty('computerIDs')) {
        obj['computerIDs'] = ApiClient.convertToType(data['computerIDs'], ['Number']);
      }
      if (data.hasOwnProperty('computerGroupIDs')) {
        obj['computerGroupIDs'] = ApiClient.convertToType(data['computerGroupIDs'], ['Number']);
      }
      if (data.hasOwnProperty('policyIDs')) {
        obj['policyIDs'] = ApiClient.convertToType(data['policyIDs'], ['Number']);
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Name of the administrator role. Searchable as String.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Description of the administrator role. Searchable as String.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Uniform resource name.
   * @member {String} urn
   */
  exports.prototype['urn'] = undefined;
  /**
   * The default immutable role in Deep Security Manager.
   * @member {Boolean} immutable
   */
  exports.prototype['immutable'] = undefined;
  /**
   * Controls whether or not the role can only manipulate users with equal or lesser rights. Searchable as Boolean.
   * @member {Boolean} canOnlyManipulateUsersWithEqualOrLesserRights
   */
  exports.prototype['canOnlyManipulateUsersWithEqualOrLesserRights'] = undefined;
  /**
   * Controls whether or not the role is allowed to access all computers. Searchable as Boolean.
   * @member {Boolean} allComputers
   */
  exports.prototype['allComputers'] = undefined;
  /**
   * Controls whether or not the role is allowed to access all policies. Searchable as Boolean.
   * @member {Boolean} allPolicies
   */
  exports.prototype['allPolicies'] = undefined;
  /**
   * Controls whether or not the role is allowed to use the user interface. Searchable as Boolean.
   * @member {Boolean} allowUserInterface
   */
  exports.prototype['allowUserInterface'] = undefined;
  /**
   * Controls whether or not the role is allowed to use the web service API. Searchable as Boolean.
   * @member {Boolean} allowWebService
   */
  exports.prototype['allowWebService'] = undefined;
  /**
   * Rights that the role is granted.
   * @member {module:model/Rights} rights
   */
  exports.prototype['rights'] = undefined;
  /**
   * List of computer IDs that the role can access. Ignored if 'allComputers' is true.
   * @member {Array.<Number>} computerIDs
   */
  exports.prototype['computerIDs'] = undefined;
  /**
   * List of computer group IDs that the role can access. A group ID of '0' allows access to computers not in a computer group. Note that groups must be identified individually and that access to sub-groups is not automatically granted. Ignored if 'allComputers' is true.
   * @member {Array.<Number>} computerGroupIDs
   */
  exports.prototype['computerGroupIDs'] = undefined;
  /**
   * List of policy IDs that the role can access. Ignored if 'allPolicies' is true.
   * @member {Array.<Number>} policyIDs
   */
  exports.prototype['policyIDs'] = undefined;
  /**
   * ID of the administrator role. Searchable as ID.
   * @member {Number} ID
   */
  exports.prototype['ID'] = undefined;



  return exports;
}));



