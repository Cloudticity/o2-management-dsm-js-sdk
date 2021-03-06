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
    define(['ApiClient', 'model/PortList', 'model/PortLists', 'model/SearchFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PortList'), require('../model/PortLists'), require('../model/SearchFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.Deepsecurity) {
      root.Deepsecurity = {};
    }
    root.Deepsecurity.PortListsApi = factory(root.Deepsecurity.ApiClient, root.Deepsecurity.PortList, root.Deepsecurity.PortLists, root.Deepsecurity.SearchFilter);
  }
}(this, function(ApiClient, PortList, PortLists, SearchFilter) {
  'use strict';

  /**
   * PortLists service.
   * @module api/PortListsApi
   * @version 12.0.446
   */

  /**
   * Constructs a new PortListsApi. 
   * @alias module:api/PortListsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a Port List
     * Create a new port list.
     * @param {module:model/PortList} portList The settings of the new port list.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PortList} and HTTP response
     */
    this.createPortListWithHttpInfo = function(portList, apiVersion) {
      var postBody = portList;

      // verify the required parameter 'portList' is set
      if (portList === undefined || portList === null) {
        throw new Error("Missing the required parameter 'portList' when calling createPortList");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling createPortList");
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
      var returnType = PortList;

      return this.apiClient.callApi(
        '/portlists', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Port List
     * Create a new port list.
     * @param {module:model/PortList} portList The settings of the new port list.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortList}
     */
    this.createPortList = function(portList, apiVersion) {
      return this.createPortListWithHttpInfo(portList, apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Port List
     * Delete a port list by ID.
     * @param {Number} portListID The ID number of the port list to delete.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deletePortListWithHttpInfo = function(portListID, apiVersion) {
      var postBody = null;

      // verify the required parameter 'portListID' is set
      if (portListID === undefined || portListID === null) {
        throw new Error("Missing the required parameter 'portListID' when calling deletePortList");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling deletePortList");
      }


      var pathParams = {
        'portListID': portListID
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
        '/portlists/{portListID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Port List
     * Delete a port list by ID.
     * @param {Number} portListID The ID number of the port list to delete.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deletePortList = function(portListID, apiVersion) {
      return this.deletePortListWithHttpInfo(portListID, apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Describe a Port List
     * Describe a port list by ID.
     * @param {Number} portListID The ID number of the port list to describe.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PortList} and HTTP response
     */
    this.describePortListWithHttpInfo = function(portListID, apiVersion) {
      var postBody = null;

      // verify the required parameter 'portListID' is set
      if (portListID === undefined || portListID === null) {
        throw new Error("Missing the required parameter 'portListID' when calling describePortList");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling describePortList");
      }


      var pathParams = {
        'portListID': portListID
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
      var returnType = PortList;

      return this.apiClient.callApi(
        '/portlists/{portListID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Describe a Port List
     * Describe a port list by ID.
     * @param {Number} portListID The ID number of the port list to describe.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortList}
     */
    this.describePortList = function(portListID, apiVersion) {
      return this.describePortListWithHttpInfo(portListID, apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Port Lists
     * Lists all port lists.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PortLists} and HTTP response
     */
    this.listPortListsWithHttpInfo = function(apiVersion) {
      var postBody = null;

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listPortLists");
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
      var returnType = PortLists;

      return this.apiClient.callApi(
        '/portlists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List Port Lists
     * Lists all port lists.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortLists}
     */
    this.listPortLists = function(apiVersion) {
      return this.listPortListsWithHttpInfo(apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify a Port List
     * Modify a port list by ID. Any unset elements will be left unchanged.
     * @param {Number} portListID The ID number of the port list to modify.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {module:model/PortList} opts.portList The settings of the port list to modify.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PortList} and HTTP response
     */
    this.modifyPortListWithHttpInfo = function(portListID, apiVersion, opts) {
      opts = opts || {};
      var postBody = opts['portList'];

      // verify the required parameter 'portListID' is set
      if (portListID === undefined || portListID === null) {
        throw new Error("Missing the required parameter 'portListID' when calling modifyPortList");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling modifyPortList");
      }


      var pathParams = {
        'portListID': portListID
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
      var returnType = PortList;

      return this.apiClient.callApi(
        '/portlists/{portListID}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Modify a Port List
     * Modify a port list by ID. Any unset elements will be left unchanged.
     * @param {Number} portListID The ID number of the port list to modify.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {module:model/PortList} opts.portList The settings of the port list to modify.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortList}
     */
    this.modifyPortList = function(portListID, apiVersion, opts) {
      return this.modifyPortListWithHttpInfo(portListID, apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search Port Lists
     * Search for port lists using optional filters.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {module:model/SearchFilter} opts.searchFilter A collection of options used to filter the search results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PortLists} and HTTP response
     */
    this.searchPortListsWithHttpInfo = function(apiVersion, opts) {
      opts = opts || {};
      var postBody = opts['searchFilter'];

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling searchPortLists");
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
      var returnType = PortLists;

      return this.apiClient.callApi(
        '/portlists/search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search Port Lists
     * Search for port lists using optional filters.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {module:model/SearchFilter} opts.searchFilter A collection of options used to filter the search results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortLists}
     */
    this.searchPortLists = function(apiVersion, opts) {
      return this.searchPortListsWithHttpInfo(apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
