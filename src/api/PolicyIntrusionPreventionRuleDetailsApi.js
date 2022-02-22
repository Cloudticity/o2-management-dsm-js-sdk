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
    define(['ApiClient', 'model/IntrusionPreventionRule', 'model/IntrusionPreventionRules'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/IntrusionPreventionRule'), require('../model/IntrusionPreventionRules'));
  } else {
    // Browser globals (root is window)
    if (!root.Deepsecurity) {
      root.Deepsecurity = {};
    }
    root.Deepsecurity.PolicyIntrusionPreventionRuleDetailsApi = factory(root.Deepsecurity.ApiClient, root.Deepsecurity.IntrusionPreventionRule, root.Deepsecurity.IntrusionPreventionRules);
  }
}(this, function(ApiClient, IntrusionPreventionRule, IntrusionPreventionRules) {
  'use strict';

  /**
   * PolicyIntrusionPreventionRuleDetails service.
   * @module api/PolicyIntrusionPreventionRuleDetailsApi
   * @version 12.0.446
   */

  /**
   * Constructs a new PolicyIntrusionPreventionRuleDetailsApi. 
   * @alias module:api/PolicyIntrusionPreventionRuleDetailsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Describe an intrusion prevention rule
     * Describe an intrusion prevention rule including policy-level overrides.
     * @param {Number} policyID The ID number of the policy.
     * @param {Number} intrusionPreventionRuleID The ID number of the intrusion prevention rule.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only overrides defined for the current policy.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntrusionPreventionRule} and HTTP response
     */
    this.describeIntrusionPreventionRuleOnPolicyWithHttpInfo = function(policyID, intrusionPreventionRuleID, apiVersion, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'policyID' is set
      if (policyID === undefined || policyID === null) {
        throw new Error("Missing the required parameter 'policyID' when calling describeIntrusionPreventionRuleOnPolicy");
      }

      // verify the required parameter 'intrusionPreventionRuleID' is set
      if (intrusionPreventionRuleID === undefined || intrusionPreventionRuleID === null) {
        throw new Error("Missing the required parameter 'intrusionPreventionRuleID' when calling describeIntrusionPreventionRuleOnPolicy");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling describeIntrusionPreventionRuleOnPolicy");
      }


      var pathParams = {
        'policyID': policyID,
        'intrusionPreventionRuleID': intrusionPreventionRuleID
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
      var returnType = IntrusionPreventionRule;

      return this.apiClient.callApi(
        '/policies/{policyID}/intrusionprevention/rules/{intrusionPreventionRuleID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Describe an intrusion prevention rule
     * Describe an intrusion prevention rule including policy-level overrides.
     * @param {Number} policyID The ID number of the policy.
     * @param {Number} intrusionPreventionRuleID The ID number of the intrusion prevention rule.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only overrides defined for the current policy.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntrusionPreventionRule}
     */
    this.describeIntrusionPreventionRuleOnPolicy = function(policyID, intrusionPreventionRuleID, apiVersion, opts) {
      return this.describeIntrusionPreventionRuleOnPolicyWithHttpInfo(policyID, intrusionPreventionRuleID, apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List intrusion prevention rules
     * Lists all intrusion prevention rules assigned to a policy.
     * @param {Number} policyID The ID number of the policy.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only rules assigned to the current policy.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntrusionPreventionRules} and HTTP response
     */
    this.listIntrusionPreventionRulesOnPolicyWithHttpInfo = function(policyID, apiVersion, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'policyID' is set
      if (policyID === undefined || policyID === null) {
        throw new Error("Missing the required parameter 'policyID' when calling listIntrusionPreventionRulesOnPolicy");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listIntrusionPreventionRulesOnPolicy");
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
      var returnType = IntrusionPreventionRules;

      return this.apiClient.callApi(
        '/policies/{policyID}/intrusionprevention/rules', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List intrusion prevention rules
     * Lists all intrusion prevention rules assigned to a policy.
     * @param {Number} policyID The ID number of the policy.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only rules assigned to the current policy.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntrusionPreventionRules}
     */
    this.listIntrusionPreventionRulesOnPolicy = function(policyID, apiVersion, opts) {
      return this.listIntrusionPreventionRulesOnPolicyWithHttpInfo(policyID, apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify an intrusion prevention rule
     * Modify an intrusion prevention rule assigned to a policy. Any unset elements will be left unchanged.
     * @param {Number} policyID The ID number of the policy.
     * @param {Number} intrusionPreventionRuleID The ID number of the intrusion prevention rule to modify.
     * @param {module:model/IntrusionPreventionRule} intrusionPreventionRule The settings of the intrusion prevention rule to modify.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only overrides defined for the current policy.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntrusionPreventionRule} and HTTP response
     */
    this.modifyIntrusionPreventionRuleOnPolicyWithHttpInfo = function(policyID, intrusionPreventionRuleID, intrusionPreventionRule, apiVersion, opts) {
      opts = opts || {};
      var postBody = intrusionPreventionRule;

      // verify the required parameter 'policyID' is set
      if (policyID === undefined || policyID === null) {
        throw new Error("Missing the required parameter 'policyID' when calling modifyIntrusionPreventionRuleOnPolicy");
      }

      // verify the required parameter 'intrusionPreventionRuleID' is set
      if (intrusionPreventionRuleID === undefined || intrusionPreventionRuleID === null) {
        throw new Error("Missing the required parameter 'intrusionPreventionRuleID' when calling modifyIntrusionPreventionRuleOnPolicy");
      }

      // verify the required parameter 'intrusionPreventionRule' is set
      if (intrusionPreventionRule === undefined || intrusionPreventionRule === null) {
        throw new Error("Missing the required parameter 'intrusionPreventionRule' when calling modifyIntrusionPreventionRuleOnPolicy");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling modifyIntrusionPreventionRuleOnPolicy");
      }


      var pathParams = {
        'policyID': policyID,
        'intrusionPreventionRuleID': intrusionPreventionRuleID
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
      var returnType = IntrusionPreventionRule;

      return this.apiClient.callApi(
        '/policies/{policyID}/intrusionprevention/rules/{intrusionPreventionRuleID}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Modify an intrusion prevention rule
     * Modify an intrusion prevention rule assigned to a policy. Any unset elements will be left unchanged.
     * @param {Number} policyID The ID number of the policy.
     * @param {Number} intrusionPreventionRuleID The ID number of the intrusion prevention rule to modify.
     * @param {module:model/IntrusionPreventionRule} intrusionPreventionRule The settings of the intrusion prevention rule to modify.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only overrides defined for the current policy.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntrusionPreventionRule}
     */
    this.modifyIntrusionPreventionRuleOnPolicy = function(policyID, intrusionPreventionRuleID, intrusionPreventionRule, apiVersion, opts) {
      return this.modifyIntrusionPreventionRuleOnPolicyWithHttpInfo(policyID, intrusionPreventionRuleID, intrusionPreventionRule, apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Reset intrusion prevention rule overrides
     * Remove all overrides for an intrusion prevention rule from a policy.
     * @param {Number} policyID The ID number of the policy.
     * @param {Number} intrusionPreventionRuleID The ID number of the intrusion prevention rule to reset.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only overrides defined for the current policy.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntrusionPreventionRule} and HTTP response
     */
    this.resetIntrusionPreventionRuleOnPolicyWithHttpInfo = function(policyID, intrusionPreventionRuleID, apiVersion, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'policyID' is set
      if (policyID === undefined || policyID === null) {
        throw new Error("Missing the required parameter 'policyID' when calling resetIntrusionPreventionRuleOnPolicy");
      }

      // verify the required parameter 'intrusionPreventionRuleID' is set
      if (intrusionPreventionRuleID === undefined || intrusionPreventionRuleID === null) {
        throw new Error("Missing the required parameter 'intrusionPreventionRuleID' when calling resetIntrusionPreventionRuleOnPolicy");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling resetIntrusionPreventionRuleOnPolicy");
      }


      var pathParams = {
        'policyID': policyID,
        'intrusionPreventionRuleID': intrusionPreventionRuleID
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
      var returnType = IntrusionPreventionRule;

      return this.apiClient.callApi(
        '/policies/{policyID}/intrusionprevention/rules/{intrusionPreventionRuleID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Reset intrusion prevention rule overrides
     * Remove all overrides for an intrusion prevention rule from a policy.
     * @param {Number} policyID The ID number of the policy.
     * @param {Number} intrusionPreventionRuleID The ID number of the intrusion prevention rule to reset.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only overrides defined for the current policy.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntrusionPreventionRule}
     */
    this.resetIntrusionPreventionRuleOnPolicy = function(policyID, intrusionPreventionRuleID, apiVersion, opts) {
      return this.resetIntrusionPreventionRuleOnPolicyWithHttpInfo(policyID, intrusionPreventionRuleID, apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
