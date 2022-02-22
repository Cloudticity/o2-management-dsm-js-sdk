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
    define(['ApiClient', 'model/ApplicationType', 'model/ApplicationTypes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApplicationType'), require('../model/ApplicationTypes'));
  } else {
    // Browser globals (root is window)
    if (!root.Deepsecurity) {
      root.Deepsecurity = {};
    }
    root.Deepsecurity.ComputerIntrusionPreventionApplicationTypeDetailsApi = factory(root.Deepsecurity.ApiClient, root.Deepsecurity.ApplicationType, root.Deepsecurity.ApplicationTypes);
  }
}(this, function(ApiClient, ApplicationType, ApplicationTypes) {
  'use strict';

  /**
   * ComputerIntrusionPreventionApplicationTypeDetails service.
   * @module api/ComputerIntrusionPreventionApplicationTypeDetailsApi
   * @version 12.0.446
   */

  /**
   * Constructs a new ComputerIntrusionPreventionApplicationTypeDetailsApi. 
   * @alias module:api/ComputerIntrusionPreventionApplicationTypeDetailsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Describe an intrusion prevention application type
     * Describe an intrusion prevention application type including computer-level overrides.
     * @param {Number} computerID The ID number of the computer.
     * @param {Number} applicationTypeID The ID number of the application type.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only overrides defined for the current computer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicationType} and HTTP response
     */
    this.describeIntrusionPreventionApplicationTypeOnComputerWithHttpInfo = function(computerID, applicationTypeID, apiVersion, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'computerID' is set
      if (computerID === undefined || computerID === null) {
        throw new Error("Missing the required parameter 'computerID' when calling describeIntrusionPreventionApplicationTypeOnComputer");
      }

      // verify the required parameter 'applicationTypeID' is set
      if (applicationTypeID === undefined || applicationTypeID === null) {
        throw new Error("Missing the required parameter 'applicationTypeID' when calling describeIntrusionPreventionApplicationTypeOnComputer");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling describeIntrusionPreventionApplicationTypeOnComputer");
      }


      var pathParams = {
        'computerID': computerID,
        'applicationTypeID': applicationTypeID
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
      var returnType = ApplicationType;

      return this.apiClient.callApi(
        '/computers/{computerID}/intrusionprevention/applicationtypes/{applicationTypeID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Describe an intrusion prevention application type
     * Describe an intrusion prevention application type including computer-level overrides.
     * @param {Number} computerID The ID number of the computer.
     * @param {Number} applicationTypeID The ID number of the application type.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only overrides defined for the current computer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicationType}
     */
    this.describeIntrusionPreventionApplicationTypeOnComputer = function(computerID, applicationTypeID, apiVersion, opts) {
      return this.describeIntrusionPreventionApplicationTypeOnComputerWithHttpInfo(computerID, applicationTypeID, apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List intrusion prevention application types
     * Lists all intrusion prevention application types assigned to a computer.
     * @param {Number} computerID The ID number of the computer.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only application types assigned to the current computer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicationTypes} and HTTP response
     */
    this.listIntrusionPreventionApplicationTypesOnComputerWithHttpInfo = function(computerID, apiVersion, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'computerID' is set
      if (computerID === undefined || computerID === null) {
        throw new Error("Missing the required parameter 'computerID' when calling listIntrusionPreventionApplicationTypesOnComputer");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listIntrusionPreventionApplicationTypesOnComputer");
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
      var returnType = ApplicationTypes;

      return this.apiClient.callApi(
        '/computers/{computerID}/intrusionprevention/applicationtypes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List intrusion prevention application types
     * Lists all intrusion prevention application types assigned to a computer.
     * @param {Number} computerID The ID number of the computer.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only application types assigned to the current computer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicationTypes}
     */
    this.listIntrusionPreventionApplicationTypesOnComputer = function(computerID, apiVersion, opts) {
      return this.listIntrusionPreventionApplicationTypesOnComputerWithHttpInfo(computerID, apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify an intrusion prevention application type
     * Modify an intrusion prevention application type assigned to a computer. Any unset elements will be left unchanged.
     * @param {Number} computerID The ID number of the computer.
     * @param {Number} applicationTypeID The ID number of the application type to modify.
     * @param {module:model/ApplicationType} applicationType The settings of the application type to modify.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only overrides defined for the current computer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicationType} and HTTP response
     */
    this.modifyIntrusionPreventionApplicationTypeOnComputerWithHttpInfo = function(computerID, applicationTypeID, applicationType, apiVersion, opts) {
      opts = opts || {};
      var postBody = applicationType;

      // verify the required parameter 'computerID' is set
      if (computerID === undefined || computerID === null) {
        throw new Error("Missing the required parameter 'computerID' when calling modifyIntrusionPreventionApplicationTypeOnComputer");
      }

      // verify the required parameter 'applicationTypeID' is set
      if (applicationTypeID === undefined || applicationTypeID === null) {
        throw new Error("Missing the required parameter 'applicationTypeID' when calling modifyIntrusionPreventionApplicationTypeOnComputer");
      }

      // verify the required parameter 'applicationType' is set
      if (applicationType === undefined || applicationType === null) {
        throw new Error("Missing the required parameter 'applicationType' when calling modifyIntrusionPreventionApplicationTypeOnComputer");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling modifyIntrusionPreventionApplicationTypeOnComputer");
      }


      var pathParams = {
        'computerID': computerID,
        'applicationTypeID': applicationTypeID
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
      var returnType = ApplicationType;

      return this.apiClient.callApi(
        '/computers/{computerID}/intrusionprevention/applicationtypes/{applicationTypeID}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Modify an intrusion prevention application type
     * Modify an intrusion prevention application type assigned to a computer. Any unset elements will be left unchanged.
     * @param {Number} computerID The ID number of the computer.
     * @param {Number} applicationTypeID The ID number of the application type to modify.
     * @param {module:model/ApplicationType} applicationType The settings of the application type to modify.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only overrides defined for the current computer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicationType}
     */
    this.modifyIntrusionPreventionApplicationTypeOnComputer = function(computerID, applicationTypeID, applicationType, apiVersion, opts) {
      return this.modifyIntrusionPreventionApplicationTypeOnComputerWithHttpInfo(computerID, applicationTypeID, applicationType, apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Reset intrusion prevention application type overrides
     * Remove all overrides for an intrusion prevention application type from a computer.
     * @param {Number} computerID The ID number of the computer.
     * @param {Number} applicationTypeID The ID number of the application type to reset.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only overrides defined for the current computer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicationType} and HTTP response
     */
    this.resetIntrusionPreventionApplicationTypeOnComputerWithHttpInfo = function(computerID, applicationTypeID, apiVersion, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'computerID' is set
      if (computerID === undefined || computerID === null) {
        throw new Error("Missing the required parameter 'computerID' when calling resetIntrusionPreventionApplicationTypeOnComputer");
      }

      // verify the required parameter 'applicationTypeID' is set
      if (applicationTypeID === undefined || applicationTypeID === null) {
        throw new Error("Missing the required parameter 'applicationTypeID' when calling resetIntrusionPreventionApplicationTypeOnComputer");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling resetIntrusionPreventionApplicationTypeOnComputer");
      }


      var pathParams = {
        'computerID': computerID,
        'applicationTypeID': applicationTypeID
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
      var returnType = ApplicationType;

      return this.apiClient.callApi(
        '/computers/{computerID}/intrusionprevention/applicationtypes/{applicationTypeID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Reset intrusion prevention application type overrides
     * Remove all overrides for an intrusion prevention application type from a computer.
     * @param {Number} computerID The ID number of the computer.
     * @param {Number} applicationTypeID The ID number of the application type to reset.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrides Show only overrides defined for the current computer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicationType}
     */
    this.resetIntrusionPreventionApplicationTypeOnComputer = function(computerID, applicationTypeID, apiVersion, opts) {
      return this.resetIntrusionPreventionApplicationTypeOnComputerWithHttpInfo(computerID, applicationTypeID, apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
