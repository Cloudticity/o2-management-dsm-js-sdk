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
    define(['ApiClient', 'model/ReportTemplate', 'model/ReportTemplates', 'model/SearchFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ReportTemplate'), require('../model/ReportTemplates'), require('../model/SearchFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.Deepsecurity) {
      root.Deepsecurity = {};
    }
    root.Deepsecurity.ReportTemplatesApi = factory(root.Deepsecurity.ApiClient, root.Deepsecurity.ReportTemplate, root.Deepsecurity.ReportTemplates, root.Deepsecurity.SearchFilter);
  }
}(this, function(ApiClient, ReportTemplate, ReportTemplates, SearchFilter) {
  'use strict';

  /**
   * ReportTemplates service.
   * @module api/ReportTemplatesApi
   * @version 12.0.446
   */

  /**
   * Constructs a new ReportTemplatesApi. 
   * @alias module:api/ReportTemplatesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Describe a Report
     * Describe a report template by ID.
     * @param {Number} reportTemplateID The ID number of the report to describe.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ReportTemplate} and HTTP response
     */
    this.describeReportTemplateWithHttpInfo = function(reportTemplateID, apiVersion) {
      var postBody = null;

      // verify the required parameter 'reportTemplateID' is set
      if (reportTemplateID === undefined || reportTemplateID === null) {
        throw new Error("Missing the required parameter 'reportTemplateID' when calling describeReportTemplate");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling describeReportTemplate");
      }


      var pathParams = {
        'reportTemplateID': reportTemplateID
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
      var returnType = ReportTemplate;

      return this.apiClient.callApi(
        '/reporttemplates/{reportTemplateID}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Describe a Report
     * Describe a report template by ID.
     * @param {Number} reportTemplateID The ID number of the report to describe.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ReportTemplate}
     */
    this.describeReportTemplate = function(reportTemplateID, apiVersion) {
      return this.describeReportTemplateWithHttpInfo(reportTemplateID, apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Reports
     * Lists all report templates.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ReportTemplates} and HTTP response
     */
    this.listReportTemplatesWithHttpInfo = function(apiVersion) {
      var postBody = null;

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listReportTemplates");
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
      var returnType = ReportTemplates;

      return this.apiClient.callApi(
        '/reporttemplates', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List Reports
     * Lists all report templates.
     * @param {String} apiVersion The version of the api being called.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ReportTemplates}
     */
    this.listReportTemplates = function(apiVersion) {
      return this.listReportTemplatesWithHttpInfo(apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search Reports
     * Search for report templates using optional filters.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {module:model/SearchFilter} opts.searchFilter A collection of options used to filter the search results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ReportTemplates} and HTTP response
     */
    this.searchReportTemplatesWithHttpInfo = function(apiVersion, opts) {
      opts = opts || {};
      var postBody = opts['searchFilter'];

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling searchReportTemplates");
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
      var returnType = ReportTemplates;

      return this.apiClient.callApi(
        '/reporttemplates/search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search Reports
     * Search for report templates using optional filters.
     * @param {String} apiVersion The version of the api being called.
     * @param {Object} opts Optional parameters
     * @param {module:model/SearchFilter} opts.searchFilter A collection of options used to filter the search results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ReportTemplates}
     */
    this.searchReportTemplates = function(apiVersion, opts) {
      return this.searchReportTemplatesWithHttpInfo(apiVersion, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
