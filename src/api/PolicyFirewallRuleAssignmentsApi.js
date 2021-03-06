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
    define(['ApiClient', 'model/FirewallAssignments', 'model/RuleIDs'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FirewallAssignments'), require('../model/RuleIDs'));
  } else {
    // Browser globals (root is window)
    if (!root.Deepsecurity) {
      root.Deepsecurity = {};
    }
    root.Deepsecurity.PolicyFirewallRuleAssignmentsApi = factory(root.Deepsecurity.ApiClient, root.Deepsecurity.FirewallAssignments, root.Deepsecurity.RuleIDs);
  }
}(this, function(ApiClient, FirewallAssignments, RuleIDs) {
  'use strict';

  /**
   * PolicyFirewallRuleAssignments service.
   * @module api/PolicyFirewallRuleAssignmentsApi
   * @version 12.0.446
   */

  /**
   * Constructs a new PolicyFirewallRuleAssignmentsApi. 
   * @alias module:api/PolicyFirewallRuleAssignmentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add Firewall Rule IDs
     * Assign firewall rule IDs to a policy.
     * @param {Number} policyID The ID number of the policy.
     * @param {module:model/RuleIDs} firewallRuleIDs The ID numbers of the firewall rules to add.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Return only rule IDs assigned directly to the current policy.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FirewallAssignments} and HTTP response
     */
    this.addFirewallRuleIDsToPolicyWithHttpInfo = function(policyID, firewallRuleIDs, apiVersion, opts) {
      opts = opts || {};
      var postBody = firewallRuleIDs;

      // verify the required parameter 'policyID' is set
      if (policyID === undefined || policyID === null) {
        throw new Error("Missing the required parameter 'policyID' when calling addFirewallRuleIDsToPolicy");
      }

      // verify the required parameter 'firewallRuleIDs' is set
      if (firewallRuleIDs === undefined || firewallRuleIDs === null) {
        throw new Error("Missing the required parameter 'firewallRuleIDs' when calling addFirewallRuleIDsToPolicy");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling addFirewallRuleIDsToPolicy");
      }


      var pathParams = {
        'policyID': policyID
      };
      var queryParams = {
        'overrides': opts['overrides'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'api-version': apiVersion
      };
      var formParams = {
      };

      var authNames = ['DefaultAuthentication'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FirewallAssignments;

      return this.apiClient.callApi(
        '/policies/{policyID}/firewall/assignments', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add Firewall Rule IDs
     * Assign firewall rule IDs to a policy.
     * @param {Number} policyID The ID number of the policy.
     * @param {module:model/RuleIDs} firewallRuleIDs The ID numbers of the firewall rules to add.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Return only rule IDs assigned directly to the current policy.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FirewallAssignments}
     */
    this.addFirewallRuleIDsToPolicy = function(policyID, firewallRuleIDs, apiVersion, opts) {
      return this.addFirewallRuleIDsToPolicyWithHttpInfo(policyID, firewallRuleIDs, apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Firewall Rule IDs
     * Lists all firewall rule IDs assigned to a policy.
     * @param {Number} policyID The ID number of the policy.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Return only rule IDs assigned directly to the current policy.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FirewallAssignments} and HTTP response
     */
    this.listFirewallRuleIDsOnPolicyWithHttpInfo = function(policyID, apiVersion, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'policyID' is set
      if (policyID === undefined || policyID === null) {
        throw new Error("Missing the required parameter 'policyID' when calling listFirewallRuleIDsOnPolicy");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listFirewallRuleIDsOnPolicy");
      }


      var pathParams = {
        'policyID': policyID
      };
      var queryParams = {
        'overrides': opts['overrides'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'api-version': apiVersion
      };
      var formParams = {
      };

      var authNames = ['DefaultAuthentication'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FirewallAssignments;

      return this.apiClient.callApi(
        '/policies/{policyID}/firewall/assignments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List Firewall Rule IDs
     * Lists all firewall rule IDs assigned to a policy.
     * @param {Number} policyID The ID number of the policy.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Return only rule IDs assigned directly to the current policy.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FirewallAssignments}
     */
    this.listFirewallRuleIDsOnPolicy = function(policyID, apiVersion, opts) {
      return this.listFirewallRuleIDsOnPolicyWithHttpInfo(policyID, apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove a Firewall Rule ID
     * Unassign a firewall rule ID from a policy.
     * @param {Number} policyID The ID number of the policy.
     * @param {Number} firewallRuleID The ID number of the firewall rule to delete.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Return only rule IDs assigned directly to the current policy.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FirewallAssignments} and HTTP response
     */
    this.removeFirewallRuleIDFromPolicyWithHttpInfo = function(policyID, firewallRuleID, apiVersion, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'policyID' is set
      if (policyID === undefined || policyID === null) {
        throw new Error("Missing the required parameter 'policyID' when calling removeFirewallRuleIDFromPolicy");
      }

      // verify the required parameter 'firewallRuleID' is set
      if (firewallRuleID === undefined || firewallRuleID === null) {
        throw new Error("Missing the required parameter 'firewallRuleID' when calling removeFirewallRuleIDFromPolicy");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling removeFirewallRuleIDFromPolicy");
      }


      var pathParams = {
        'policyID': policyID,
        'firewallRuleID': firewallRuleID
      };
      var queryParams = {
        'overrides': opts['overrides'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'api-version': apiVersion
      };
      var formParams = {
      };

      var authNames = ['DefaultAuthentication'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FirewallAssignments;

      return this.apiClient.callApi(
        '/policies/{policyID}/firewall/assignments/{firewallRuleID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove a Firewall Rule ID
     * Unassign a firewall rule ID from a policy.
     * @param {Number} policyID The ID number of the policy.
     * @param {Number} firewallRuleID The ID number of the firewall rule to delete.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Return only rule IDs assigned directly to the current policy.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FirewallAssignments}
     */
    this.removeFirewallRuleIDFromPolicy = function(policyID, firewallRuleID, apiVersion, opts) {
      return this.removeFirewallRuleIDFromPolicyWithHttpInfo(policyID, firewallRuleID, apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set Firewall Rule IDs
     * Set firewall rule IDs assigned to a policy.
     * @param {Number} policyID The ID number of the policy.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {module:model/RuleIDs} opts.firewallRuleIDs The ID numbers of the firewall rules to set.
     * @param {Boolean} opts.overrides Return only rule IDs assigned directly to the current policy.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FirewallAssignments} and HTTP response
     */
    this.setFirewallRuleIDsOnPolicyWithHttpInfo = function(policyID, apiVersion, opts) {
      opts = opts || {};
      var postBody = opts['firewallRuleIDs'];

      // verify the required parameter 'policyID' is set
      if (policyID === undefined || policyID === null) {
        throw new Error("Missing the required parameter 'policyID' when calling setFirewallRuleIDsOnPolicy");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling setFirewallRuleIDsOnPolicy");
      }


      var pathParams = {
        'policyID': policyID
      };
      var queryParams = {
        'overrides': opts['overrides'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'api-version': apiVersion
      };
      var formParams = {
      };

      var authNames = ['DefaultAuthentication'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FirewallAssignments;

      return this.apiClient.callApi(
        '/policies/{policyID}/firewall/assignments', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set Firewall Rule IDs
     * Set firewall rule IDs assigned to a policy.
     * @param {Number} policyID The ID number of the policy.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {module:model/RuleIDs} opts.firewallRuleIDs The ID numbers of the firewall rules to set.
     * @param {Boolean} opts.overrides Return only rule IDs assigned directly to the current policy.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FirewallAssignments}
     */
    this.setFirewallRuleIDsOnPolicy = function(policyID, apiVersion, opts) {
      return this.setFirewallRuleIDsOnPolicyWithHttpInfo(policyID, apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
