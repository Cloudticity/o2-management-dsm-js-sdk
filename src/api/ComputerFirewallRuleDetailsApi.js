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
    define(['ApiClient', 'model/FirewallRule', 'model/FirewallRules'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FirewallRule'), require('../model/FirewallRules'));
  } else {
    // Browser globals (root is window)
    if (!root.Deepsecurity) {
      root.Deepsecurity = {};
    }
    root.Deepsecurity.ComputerFirewallRuleDetailsApi = factory(root.Deepsecurity.ApiClient, root.Deepsecurity.FirewallRule, root.Deepsecurity.FirewallRules);
  }
}(this, function(ApiClient, FirewallRule, FirewallRules) {
  'use strict';

  /**
   * ComputerFirewallRuleDetails service.
   * @module api/ComputerFirewallRuleDetailsApi
   * @version 12.0.446
   */

  /**
   * Constructs a new ComputerFirewallRuleDetailsApi. 
   * @alias module:api/ComputerFirewallRuleDetailsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Describe a firewall rule
     * Describe a firewall rule including computer-level overrides.
     * @param {Number} computerID The ID number of the computer.
     * @param {Number} firewallRuleID The ID number of the firewall rule.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only overrides defined for the current computer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FirewallRule} and HTTP response
     */
    this.describeFirewallRuleOnComputerWithHttpInfo = function(computerID, firewallRuleID, apiVersion, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'computerID' is set
      if (computerID === undefined || computerID === null) {
        throw new Error("Missing the required parameter 'computerID' when calling describeFirewallRuleOnComputer");
      }

      // verify the required parameter 'firewallRuleID' is set
      if (firewallRuleID === undefined || firewallRuleID === null) {
        throw new Error("Missing the required parameter 'firewallRuleID' when calling describeFirewallRuleOnComputer");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling describeFirewallRuleOnComputer");
      }


      var pathParams = {
        'computerID': computerID,
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
      var returnType = FirewallRule;

      return this.apiClient.callApi(
        '/computers/{computerID}/firewall/rules/{firewallRuleID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Describe a firewall rule
     * Describe a firewall rule including computer-level overrides.
     * @param {Number} computerID The ID number of the computer.
     * @param {Number} firewallRuleID The ID number of the firewall rule.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only overrides defined for the current computer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FirewallRule}
     */
    this.describeFirewallRuleOnComputer = function(computerID, firewallRuleID, apiVersion, opts) {
      return this.describeFirewallRuleOnComputerWithHttpInfo(computerID, firewallRuleID, apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List firewall rules
     * Lists all firewall rules assigned to a computer.
     * @param {Number} computerID The ID number of the computer.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only rules assigned to the current computer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FirewallRules} and HTTP response
     */
    this.listFirewallRulesOnComputerWithHttpInfo = function(computerID, apiVersion, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'computerID' is set
      if (computerID === undefined || computerID === null) {
        throw new Error("Missing the required parameter 'computerID' when calling listFirewallRulesOnComputer");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listFirewallRulesOnComputer");
      }


      var pathParams = {
        'computerID': computerID
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
      var returnType = FirewallRules;

      return this.apiClient.callApi(
        '/computers/{computerID}/firewall/rules', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List firewall rules
     * Lists all firewall rules assigned to a computer.
     * @param {Number} computerID The ID number of the computer.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only rules assigned to the current computer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FirewallRules}
     */
    this.listFirewallRulesOnComputer = function(computerID, apiVersion, opts) {
      return this.listFirewallRulesOnComputerWithHttpInfo(computerID, apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify a firewall rule
     * Modify a firewall rule assigned to a computer. Any unset elements will be left unchanged.
     * @param {Number} computerID The ID number of the computer.
     * @param {Number} firewallRuleID The ID number of the firewall rule to modify.
     * @param {module:model/FirewallRule} firewallRule The settings of the firewall rule to modify.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only overrides defined for the current computer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FirewallRule} and HTTP response
     */
    this.modifyFirewallRuleOnComputerWithHttpInfo = function(computerID, firewallRuleID, firewallRule, apiVersion, opts) {
      opts = opts || {};
      var postBody = firewallRule;

      // verify the required parameter 'computerID' is set
      if (computerID === undefined || computerID === null) {
        throw new Error("Missing the required parameter 'computerID' when calling modifyFirewallRuleOnComputer");
      }

      // verify the required parameter 'firewallRuleID' is set
      if (firewallRuleID === undefined || firewallRuleID === null) {
        throw new Error("Missing the required parameter 'firewallRuleID' when calling modifyFirewallRuleOnComputer");
      }

      // verify the required parameter 'firewallRule' is set
      if (firewallRule === undefined || firewallRule === null) {
        throw new Error("Missing the required parameter 'firewallRule' when calling modifyFirewallRuleOnComputer");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling modifyFirewallRuleOnComputer");
      }


      var pathParams = {
        'computerID': computerID,
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
      var returnType = FirewallRule;

      return this.apiClient.callApi(
        '/computers/{computerID}/firewall/rules/{firewallRuleID}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Modify a firewall rule
     * Modify a firewall rule assigned to a computer. Any unset elements will be left unchanged.
     * @param {Number} computerID The ID number of the computer.
     * @param {Number} firewallRuleID The ID number of the firewall rule to modify.
     * @param {module:model/FirewallRule} firewallRule The settings of the firewall rule to modify.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only overrides defined for the current computer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FirewallRule}
     */
    this.modifyFirewallRuleOnComputer = function(computerID, firewallRuleID, firewallRule, apiVersion, opts) {
      return this.modifyFirewallRuleOnComputerWithHttpInfo(computerID, firewallRuleID, firewallRule, apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Reset firewall rule overrides
     * Remove all overrides for a firewall rule from a computer.
     * @param {Number} computerID The ID number of the computer.
     * @param {Number} firewallRuleID The ID number of the firewall rule to reset.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only overrides defined for the current computer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FirewallRule} and HTTP response
     */
    this.resetFirewallRuleOnComputerWithHttpInfo = function(computerID, firewallRuleID, apiVersion, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'computerID' is set
      if (computerID === undefined || computerID === null) {
        throw new Error("Missing the required parameter 'computerID' when calling resetFirewallRuleOnComputer");
      }

      // verify the required parameter 'firewallRuleID' is set
      if (firewallRuleID === undefined || firewallRuleID === null) {
        throw new Error("Missing the required parameter 'firewallRuleID' when calling resetFirewallRuleOnComputer");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling resetFirewallRuleOnComputer");
      }


      var pathParams = {
        'computerID': computerID,
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
      var returnType = FirewallRule;

      return this.apiClient.callApi(
        '/computers/{computerID}/firewall/rules/{firewallRuleID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Reset firewall rule overrides
     * Remove all overrides for a firewall rule from a computer.
     * @param {Number} computerID The ID number of the computer.
     * @param {Number} firewallRuleID The ID number of the firewall rule to reset.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only overrides defined for the current computer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FirewallRule}
     */
    this.resetFirewallRuleOnComputer = function(computerID, firewallRuleID, apiVersion, opts) {
      return this.resetFirewallRuleOnComputerWithHttpInfo(computerID, firewallRuleID, apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
