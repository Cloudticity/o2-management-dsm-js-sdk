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
    define(['ApiClient', 'model/ApplicationType', 'model/ApplicationTypes', 'model/SearchFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApplicationType'), require('../model/ApplicationTypes'), require('../model/SearchFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.Deepsecurity) {
      root.Deepsecurity = {};
    }
    root.Deepsecurity.ApplicationTypesApi = factory(root.Deepsecurity.ApiClient, root.Deepsecurity.ApplicationType, root.Deepsecurity.ApplicationTypes, root.Deepsecurity.SearchFilter);
  }
}(this, function(ApiClient, ApplicationType, ApplicationTypes, SearchFilter) {
  'use strict';

  /**
   * ApplicationTypes service.
   * @module api/ApplicationTypesApi
   * @version 12.0.446
   */

  /**
   * Constructs a new ApplicationTypesApi. 
   * @alias module:api/ApplicationTypesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create an Application Type
     * Create a new application type.
     * @param {module:model/ApplicationType} applicationType The settings of the new application type.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicationType} and HTTP response
     */
    this.createApplicationTypeWithHttpInfo = function(applicationType, apiVersion) {
      var postBody = applicationType;

      // verify the required parameter 'applicationType' is set
      if (applicationType === undefined || applicationType === null) {
        throw new Error("Missing the required parameter 'applicationType' when calling createApplicationType");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling createApplicationType");
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
      var returnType = ApplicationType;

      return this.apiClient.callApi(
        '/applicationtypes', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create an Application Type
     * Create a new application type.
     * @param {module:model/ApplicationType} applicationType The settings of the new application type.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicationType}
     */
    this.createApplicationType = function(applicationType, apiVersion) {
      return this.createApplicationTypeWithHttpInfo(applicationType, apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an Application Type
     * Delete an application type by ID.
     * @param {Number} applicationTypeID The ID number of the application type to delete.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteApplicationTypeWithHttpInfo = function(applicationTypeID, apiVersion) {
      var postBody = null;

      // verify the required parameter 'applicationTypeID' is set
      if (applicationTypeID === undefined || applicationTypeID === null) {
        throw new Error("Missing the required parameter 'applicationTypeID' when calling deleteApplicationType");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling deleteApplicationType");
      }


      var pathParams = {
        'applicationTypeID': applicationTypeID
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
        '/applicationtypes/{applicationTypeID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an Application Type
     * Delete an application type by ID.
     * @param {Number} applicationTypeID The ID number of the application type to delete.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteApplicationType = function(applicationTypeID, apiVersion) {
      return this.deleteApplicationTypeWithHttpInfo(applicationTypeID, apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Describe an Application Type
     * Describe an application type by ID.
     * @param {Number} applicationTypeID The ID number of the application type to describe.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicationType} and HTTP response
     */
    this.describeApplicationTypeWithHttpInfo = function(applicationTypeID, apiVersion) {
      var postBody = null;

      // verify the required parameter 'applicationTypeID' is set
      if (applicationTypeID === undefined || applicationTypeID === null) {
        throw new Error("Missing the required parameter 'applicationTypeID' when calling describeApplicationType");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling describeApplicationType");
      }


      var pathParams = {
        'applicationTypeID': applicationTypeID
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
      var returnType = ApplicationType;

      return this.apiClient.callApi(
        '/applicationtypes/{applicationTypeID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Describe an Application Type
     * Describe an application type by ID.
     * @param {Number} applicationTypeID The ID number of the application type to describe.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicationType}
     */
    this.describeApplicationType = function(applicationTypeID, apiVersion) {
      return this.describeApplicationTypeWithHttpInfo(applicationTypeID, apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Application Types
     * Lists all application types.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicationTypes} and HTTP response
     */
    this.listApplicationTypesWithHttpInfo = function(apiVersion) {
      var postBody = null;

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listApplicationTypes");
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
      var returnType = ApplicationTypes;

      return this.apiClient.callApi(
        '/applicationtypes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List Application Types
     * Lists all application types.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicationTypes}
     */
    this.listApplicationTypes = function(apiVersion) {
      return this.listApplicationTypesWithHttpInfo(apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify an Application Type
     * Modify an application type by ID. Any unset elements will be left unchanged.
     * @param {Number} applicationTypeID The ID number of the application type to modify.
     * @param {module:model/ApplicationType} applicationType The settings of the application type to modify.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicationType} and HTTP response
     */
    this.modifyApplicationTypeWithHttpInfo = function(applicationTypeID, applicationType, apiVersion) {
      var postBody = applicationType;

      // verify the required parameter 'applicationTypeID' is set
      if (applicationTypeID === undefined || applicationTypeID === null) {
        throw new Error("Missing the required parameter 'applicationTypeID' when calling modifyApplicationType");
      }

      // verify the required parameter 'applicationType' is set
      if (applicationType === undefined || applicationType === null) {
        throw new Error("Missing the required parameter 'applicationType' when calling modifyApplicationType");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling modifyApplicationType");
      }


      var pathParams = {
        'applicationTypeID': applicationTypeID
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
      var returnType = ApplicationType;

      return this.apiClient.callApi(
        '/applicationtypes/{applicationTypeID}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Modify an Application Type
     * Modify an application type by ID. Any unset elements will be left unchanged.
     * @param {Number} applicationTypeID The ID number of the application type to modify.
     * @param {module:model/ApplicationType} applicationType The settings of the application type to modify.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicationType}
     */
    this.modifyApplicationType = function(applicationTypeID, applicationType, apiVersion) {
      return this.modifyApplicationTypeWithHttpInfo(applicationTypeID, applicationType, apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search Application Types
     * Search for application types using optional filters.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {module:model/SearchFilter} opts.searchFilter A collection of options used to filter the search results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicationTypes} and HTTP response
     */
    this.searchApplicationTypesWithHttpInfo = function(apiVersion, opts) {
      opts = opts || {};
      var postBody = opts['searchFilter'];

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling searchApplicationTypes");
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
      var returnType = ApplicationTypes;

      return this.apiClient.callApi(
        '/applicationtypes/search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search Application Types
     * Search for application types using optional filters.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {module:model/SearchFilter} opts.searchFilter A collection of options used to filter the search results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicationTypes}
     */
    this.searchApplicationTypes = function(apiVersion, opts) {
      return this.searchApplicationTypesWithHttpInfo(apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
