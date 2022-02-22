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
    define(['ApiClient', 'model/LogInspectionRule', 'model/LogInspectionRules', 'model/SearchFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LogInspectionRule'), require('../model/LogInspectionRules'), require('../model/SearchFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.Deepsecurity) {
      root.Deepsecurity = {};
    }
    root.Deepsecurity.LogInspectionRulesApi = factory(root.Deepsecurity.ApiClient, root.Deepsecurity.LogInspectionRule, root.Deepsecurity.LogInspectionRules, root.Deepsecurity.SearchFilter);
  }
}(this, function(ApiClient, LogInspectionRule, LogInspectionRules, SearchFilter) {
  'use strict';

  /**
   * LogInspectionRules service.
   * @module api/LogInspectionRulesApi
   * @version 12.0.446
   */

  /**
   * Constructs a new LogInspectionRulesApi. 
   * @alias module:api/LogInspectionRulesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a Log Inspection Rule
     * Create a new log inspection rule.
     * @param {module:model/LogInspectionRule} logInspectionRule The settings of the new log inspection rule.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LogInspectionRule} and HTTP response
     */
    this.createLogInspectionRuleWithHttpInfo = function(logInspectionRule, apiVersion) {
      var postBody = logInspectionRule;

      // verify the required parameter 'logInspectionRule' is set
      if (logInspectionRule === undefined || logInspectionRule === null) {
        throw new Error("Missing the required parameter 'logInspectionRule' when calling createLogInspectionRule");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling createLogInspectionRule");
      }


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = LogInspectionRule;

      return this.apiClient.callApi(
        '/loginspectionrules', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Log Inspection Rule
     * Create a new log inspection rule.
     * @param {module:model/LogInspectionRule} logInspectionRule The settings of the new log inspection rule.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LogInspectionRule}
     */
    this.createLogInspectionRule = function(logInspectionRule, apiVersion) {
      return this.createLogInspectionRuleWithHttpInfo(logInspectionRule, apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Log Inspection Rule
     * Delete a log inspection rule by ID.
     * @param {Number} logInspectionRuleID The ID number of the log inspection rule to delete.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteLogInspectionRuleWithHttpInfo = function(logInspectionRuleID, apiVersion) {
      var postBody = null;

      // verify the required parameter 'logInspectionRuleID' is set
      if (logInspectionRuleID === undefined || logInspectionRuleID === null) {
        throw new Error("Missing the required parameter 'logInspectionRuleID' when calling deleteLogInspectionRule");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling deleteLogInspectionRule");
      }


      var pathParams = {
        'logInspectionRuleID': logInspectionRuleID
      };
      var queryParams = {
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
      var returnType = null;

      return this.apiClient.callApi(
        '/loginspectionrules/{logInspectionRuleID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Log Inspection Rule
     * Delete a log inspection rule by ID.
     * @param {Number} logInspectionRuleID The ID number of the log inspection rule to delete.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteLogInspectionRule = function(logInspectionRuleID, apiVersion) {
      return this.deleteLogInspectionRuleWithHttpInfo(logInspectionRuleID, apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Describe a Log Inspection Rule
     * Describe a log inspection rule by ID.
     * @param {Number} logInspectionRuleID The ID number of the log inspection rule to describe.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LogInspectionRule} and HTTP response
     */
    this.describeLogInspectionRuleWithHttpInfo = function(logInspectionRuleID, apiVersion) {
      var postBody = null;

      // verify the required parameter 'logInspectionRuleID' is set
      if (logInspectionRuleID === undefined || logInspectionRuleID === null) {
        throw new Error("Missing the required parameter 'logInspectionRuleID' when calling describeLogInspectionRule");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling describeLogInspectionRule");
      }


      var pathParams = {
        'logInspectionRuleID': logInspectionRuleID
      };
      var queryParams = {
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
      var returnType = LogInspectionRule;

      return this.apiClient.callApi(
        '/loginspectionrules/{logInspectionRuleID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Describe a Log Inspection Rule
     * Describe a log inspection rule by ID.
     * @param {Number} logInspectionRuleID The ID number of the log inspection rule to describe.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LogInspectionRule}
     */
    this.describeLogInspectionRule = function(logInspectionRuleID, apiVersion) {
      return this.describeLogInspectionRuleWithHttpInfo(logInspectionRuleID, apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Log Inspection Rules
     * Lists all log inspection rules.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LogInspectionRules} and HTTP response
     */
    this.listLogInspectionRulesWithHttpInfo = function(apiVersion) {
      var postBody = null;

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listLogInspectionRules");
      }


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = LogInspectionRules;

      return this.apiClient.callApi(
        '/loginspectionrules', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List Log Inspection Rules
     * Lists all log inspection rules.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LogInspectionRules}
     */
    this.listLogInspectionRules = function(apiVersion) {
      return this.listLogInspectionRulesWithHttpInfo(apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify a Log Inspection Rule
     * Modify a log inspection rule by ID. Any unset elements will be left unchanged.
     * @param {Number} logInspectionRuleID The ID number of the log inspection rule to modify.
     * @param {module:model/LogInspectionRule} logInspectionRule The settings of the log inspection rule to modify.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LogInspectionRule} and HTTP response
     */
    this.modifyLogInspectionRuleWithHttpInfo = function(logInspectionRuleID, logInspectionRule, apiVersion) {
      var postBody = logInspectionRule;

      // verify the required parameter 'logInspectionRuleID' is set
      if (logInspectionRuleID === undefined || logInspectionRuleID === null) {
        throw new Error("Missing the required parameter 'logInspectionRuleID' when calling modifyLogInspectionRule");
      }

      // verify the required parameter 'logInspectionRule' is set
      if (logInspectionRule === undefined || logInspectionRule === null) {
        throw new Error("Missing the required parameter 'logInspectionRule' when calling modifyLogInspectionRule");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling modifyLogInspectionRule");
      }


      var pathParams = {
        'logInspectionRuleID': logInspectionRuleID
      };
      var queryParams = {
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
      var returnType = LogInspectionRule;

      return this.apiClient.callApi(
        '/loginspectionrules/{logInspectionRuleID}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Modify a Log Inspection Rule
     * Modify a log inspection rule by ID. Any unset elements will be left unchanged.
     * @param {Number} logInspectionRuleID The ID number of the log inspection rule to modify.
     * @param {module:model/LogInspectionRule} logInspectionRule The settings of the log inspection rule to modify.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LogInspectionRule}
     */
    this.modifyLogInspectionRule = function(logInspectionRuleID, logInspectionRule, apiVersion) {
      return this.modifyLogInspectionRuleWithHttpInfo(logInspectionRuleID, logInspectionRule, apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search Log Inspection Rules
     * Search for log inspection rules using optional filters.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {module:model/SearchFilter} opts.searchFilter A collection of options used to filter the search results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LogInspectionRules} and HTTP response
     */
    this.searchLogInspectionRulesWithHttpInfo = function(apiVersion, opts) {
      opts = opts || {};
      var postBody = opts['searchFilter'];

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling searchLogInspectionRules");
      }


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = LogInspectionRules;

      return this.apiClient.callApi(
        '/loginspectionrules/search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search Log Inspection Rules
     * Search for log inspection rules using optional filters.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {module:model/SearchFilter} opts.searchFilter A collection of options used to filter the search results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LogInspectionRules}
     */
    this.searchLogInspectionRules = function(apiVersion, opts) {
      return this.searchLogInspectionRulesWithHttpInfo(apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
