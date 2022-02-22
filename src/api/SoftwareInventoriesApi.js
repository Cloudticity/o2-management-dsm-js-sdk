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
    define(['ApiClient', 'model/InventoryItem', 'model/InventoryItems', 'model/SearchFilter', 'model/SoftwareInventories', 'model/SoftwareInventory'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InventoryItem'), require('../model/InventoryItems'), require('../model/SearchFilter'), require('../model/SoftwareInventories'), require('../model/SoftwareInventory'));
  } else {
    // Browser globals (root is window)
    if (!root.Deepsecurity) {
      root.Deepsecurity = {};
    }
    root.Deepsecurity.SoftwareInventoriesApi = factory(root.Deepsecurity.ApiClient, root.Deepsecurity.InventoryItem, root.Deepsecurity.InventoryItems, root.Deepsecurity.SearchFilter, root.Deepsecurity.SoftwareInventories, root.Deepsecurity.SoftwareInventory);
  }
}(this, function(ApiClient, InventoryItem, InventoryItems, SearchFilter, SoftwareInventories, SoftwareInventory) {
  'use strict';

  /**
   * SoftwareInventories service.
   * @module api/SoftwareInventoriesApi
   * @version 12.0.446
   */

  /**
   * Constructs a new SoftwareInventoriesApi. 
   * @alias module:api/SoftwareInventoriesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a Software Inventory
     * Request the creation of a new software inventory to use in creating shared rulesets.
     * @param {module:model/SoftwareInventory} softwareInventory The settings of the new software inventory.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SoftwareInventory} and HTTP response
     */
    this.createSoftwareInventoryWithHttpInfo = function(softwareInventory, apiVersion) {
      var postBody = softwareInventory;

      // verify the required parameter 'softwareInventory' is set
      if (softwareInventory === undefined || softwareInventory === null) {
        throw new Error("Missing the required parameter 'softwareInventory' when calling createSoftwareInventory");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling createSoftwareInventory");
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
      var returnType = SoftwareInventory;

      return this.apiClient.callApi(
        '/softwareinventories', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Software Inventory
     * Request the creation of a new software inventory to use in creating shared rulesets.
     * @param {module:model/SoftwareInventory} softwareInventory The settings of the new software inventory.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SoftwareInventory}
     */
    this.createSoftwareInventory = function(softwareInventory, apiVersion) {
      return this.createSoftwareInventoryWithHttpInfo(softwareInventory, apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Software Inventory
     * Delete a software inventory by ID.
     * @param {Number} softwareInventoryID The ID number of the software inventory to delete.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteSoftwareInventoryWithHttpInfo = function(softwareInventoryID, apiVersion) {
      var postBody = null;

      // verify the required parameter 'softwareInventoryID' is set
      if (softwareInventoryID === undefined || softwareInventoryID === null) {
        throw new Error("Missing the required parameter 'softwareInventoryID' when calling deleteSoftwareInventory");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling deleteSoftwareInventory");
      }


      var pathParams = {
        'softwareInventoryID': softwareInventoryID
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
        '/softwareinventories/{softwareInventoryID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Software Inventory
     * Delete a software inventory by ID.
     * @param {Number} softwareInventoryID The ID number of the software inventory to delete.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteSoftwareInventory = function(softwareInventoryID, apiVersion) {
      return this.deleteSoftwareInventoryWithHttpInfo(softwareInventoryID, apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Describe a Software Inventory
     * Describe a software inventory by ID.
     * @param {Number} softwareInventoryID The ID number of the software inventory to describe.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SoftwareInventory} and HTTP response
     */
    this.describeSoftwareInventoryWithHttpInfo = function(softwareInventoryID, apiVersion) {
      var postBody = null;

      // verify the required parameter 'softwareInventoryID' is set
      if (softwareInventoryID === undefined || softwareInventoryID === null) {
        throw new Error("Missing the required parameter 'softwareInventoryID' when calling describeSoftwareInventory");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling describeSoftwareInventory");
      }


      var pathParams = {
        'softwareInventoryID': softwareInventoryID
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
      var returnType = SoftwareInventory;

      return this.apiClient.callApi(
        '/softwareinventories/{softwareInventoryID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Describe a Software Inventory
     * Describe a software inventory by ID.
     * @param {Number} softwareInventoryID The ID number of the software inventory to describe.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SoftwareInventory}
     */
    this.describeSoftwareInventory = function(softwareInventoryID, apiVersion) {
      return this.describeSoftwareInventoryWithHttpInfo(softwareInventoryID, apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Describe a Software Inventory Item
     * Describe a software inventory item by ID.
     * @param {Number} softwareInventoryID The ID number of the software inventory.
     * @param {Number} inventoryItemID The ID number of the inventory item to describe.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InventoryItem} and HTTP response
     */
    this.describeSoftwareInventoryItemWithHttpInfo = function(softwareInventoryID, inventoryItemID, apiVersion) {
      var postBody = null;

      // verify the required parameter 'softwareInventoryID' is set
      if (softwareInventoryID === undefined || softwareInventoryID === null) {
        throw new Error("Missing the required parameter 'softwareInventoryID' when calling describeSoftwareInventoryItem");
      }

      // verify the required parameter 'inventoryItemID' is set
      if (inventoryItemID === undefined || inventoryItemID === null) {
        throw new Error("Missing the required parameter 'inventoryItemID' when calling describeSoftwareInventoryItem");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling describeSoftwareInventoryItem");
      }


      var pathParams = {
        'softwareInventoryID': softwareInventoryID,
        'inventoryItemID': inventoryItemID
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
      var returnType = InventoryItem;

      return this.apiClient.callApi(
        '/softwareinventories/{softwareInventoryID}/items/{inventoryItemID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Describe a Software Inventory Item
     * Describe a software inventory item by ID.
     * @param {Number} softwareInventoryID The ID number of the software inventory.
     * @param {Number} inventoryItemID The ID number of the inventory item to describe.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InventoryItem}
     */
    this.describeSoftwareInventoryItem = function(softwareInventoryID, inventoryItemID, apiVersion) {
      return this.describeSoftwareInventoryItemWithHttpInfo(softwareInventoryID, inventoryItemID, apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Software Inventories
     * Lists all software inventories.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SoftwareInventories} and HTTP response
     */
    this.listSoftwareInventoriesWithHttpInfo = function(apiVersion) {
      var postBody = null;

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listSoftwareInventories");
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
      var returnType = SoftwareInventories;

      return this.apiClient.callApi(
        '/softwareinventories', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List Software Inventories
     * Lists all software inventories.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SoftwareInventories}
     */
    this.listSoftwareInventories = function(apiVersion) {
      return this.listSoftwareInventoriesWithHttpInfo(apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Software Inventory Items
     * Lists all items of a software inventory.
     * @param {Number} softwareInventoryID The ID number of the software inventory.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InventoryItems} and HTTP response
     */
    this.listSoftwareInventoryItemsWithHttpInfo = function(softwareInventoryID, apiVersion) {
      var postBody = null;

      // verify the required parameter 'softwareInventoryID' is set
      if (softwareInventoryID === undefined || softwareInventoryID === null) {
        throw new Error("Missing the required parameter 'softwareInventoryID' when calling listSoftwareInventoryItems");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listSoftwareInventoryItems");
      }


      var pathParams = {
        'softwareInventoryID': softwareInventoryID
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
      var returnType = InventoryItems;

      return this.apiClient.callApi(
        '/softwareinventories/{softwareInventoryID}/items', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List Software Inventory Items
     * Lists all items of a software inventory.
     * @param {Number} softwareInventoryID The ID number of the software inventory.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InventoryItems}
     */
    this.listSoftwareInventoryItems = function(softwareInventoryID, apiVersion) {
      return this.listSoftwareInventoryItemsWithHttpInfo(softwareInventoryID, apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search Software Inventories
     * Search for a software inventory using optional filters.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {module:model/SearchFilter} opts.searchFilter A collection of options used to filter the search results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SoftwareInventories} and HTTP response
     */
    this.searchSoftwareInventoriesWithHttpInfo = function(apiVersion, opts) {
      opts = opts || {};
      var postBody = opts['searchFilter'];

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling searchSoftwareInventories");
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
      var returnType = SoftwareInventories;

      return this.apiClient.callApi(
        '/softwareinventories/search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search Software Inventories
     * Search for a software inventory using optional filters.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {module:model/SearchFilter} opts.searchFilter A collection of options used to filter the search results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SoftwareInventories}
     */
    this.searchSoftwareInventories = function(apiVersion, opts) {
      return this.searchSoftwareInventoriesWithHttpInfo(apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search Software Inventory Items
     * Search for items of a software inventory using optional filters.
     * @param {Number} softwareInventoryID The ID number of the software inventory.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {module:model/SearchFilter} opts.searchFilter A collection of options used to filter the search results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InventoryItems} and HTTP response
     */
    this.searchSoftwareInventoryItemsWithHttpInfo = function(softwareInventoryID, apiVersion, opts) {
      opts = opts || {};
      var postBody = opts['searchFilter'];

      // verify the required parameter 'softwareInventoryID' is set
      if (softwareInventoryID === undefined || softwareInventoryID === null) {
        throw new Error("Missing the required parameter 'softwareInventoryID' when calling searchSoftwareInventoryItems");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling searchSoftwareInventoryItems");
      }


      var pathParams = {
        'softwareInventoryID': softwareInventoryID
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
      var returnType = InventoryItems;

      return this.apiClient.callApi(
        '/softwareinventories/{softwareInventoryID}/items/search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search Software Inventory Items
     * Search for items of a software inventory using optional filters.
     * @param {Number} softwareInventoryID The ID number of the software inventory.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {module:model/SearchFilter} opts.searchFilter A collection of options used to filter the search results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InventoryItems}
     */
    this.searchSoftwareInventoryItems = function(softwareInventoryID, apiVersion, opts) {
      return this.searchSoftwareInventoryItemsWithHttpInfo(softwareInventoryID, apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));