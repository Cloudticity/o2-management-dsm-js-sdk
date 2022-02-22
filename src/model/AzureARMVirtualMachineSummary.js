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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Deepsecurity) {
      root.Deepsecurity = {};
    }
    root.Deepsecurity.AzureARMVirtualMachineSummary = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AzureARMVirtualMachineSummary model module.
   * @module model/AzureARMVirtualMachineSummary
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>AzureARMVirtualMachineSummary</code>.
   * Details of an Azure virtual machine that is managed using the Azure Resource Manager (ARM).
   * @alias module:model/AzureARMVirtualMachineSummary
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>AzureARMVirtualMachineSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AzureARMVirtualMachineSummary} obj Optional instance to populate.
   * @return {module:model/AzureARMVirtualMachineSummary} The populated <code>AzureARMVirtualMachineSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cloudProvider')) {
        obj['cloudProvider'] = ApiClient.convertToType(data['cloudProvider'], 'String');
      }
      if (data.hasOwnProperty('deploymentModel')) {
        obj['deploymentModel'] = ApiClient.convertToType(data['deploymentModel'], 'String');
      }
      if (data.hasOwnProperty('resourceGroup')) {
        obj['resourceGroup'] = ApiClient.convertToType(data['resourceGroup'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('operatingSystem')) {
        obj['operatingSystem'] = ApiClient.convertToType(data['operatingSystem'], 'String');
      }
      if (data.hasOwnProperty('publicIPAddress')) {
        obj['publicIPAddress'] = ApiClient.convertToType(data['publicIPAddress'], 'String');
      }
      if (data.hasOwnProperty('privateIPAddress')) {
        obj['privateIPAddress'] = ApiClient.convertToType(data['privateIPAddress'], 'String');
      }
      if (data.hasOwnProperty('cloudService')) {
        obj['cloudService'] = ApiClient.convertToType(data['cloudService'], 'String');
      }
      if (data.hasOwnProperty('deploymentID')) {
        obj['deploymentID'] = ApiClient.convertToType(data['deploymentID'], 'String');
      }
      if (data.hasOwnProperty('imageID')) {
        obj['imageID'] = ApiClient.convertToType(data['imageID'], 'String');
      }
      if (data.hasOwnProperty('securityGroup')) {
        obj['securityGroup'] = ApiClient.convertToType(data['securityGroup'], 'String');
      }
      if (data.hasOwnProperty('DNSName')) {
        obj['DNSName'] = ApiClient.convertToType(data['DNSName'], 'String');
      }
    }
    return obj;
  }

  /**
   * Cloud provider: \"Azure\".
   * @member {String} cloudProvider
   */
  exports.prototype['cloudProvider'] = undefined;
  /**
   * Deployment model: \"Classic\" or \"Resource Manager\".
   * @member {String} deploymentModel
   */
  exports.prototype['deploymentModel'] = undefined;
  /**
   * Name of resource group. Searchable as String.
   * @member {String} resourceGroup
   */
  exports.prototype['resourceGroup'] = undefined;
  /**
   * Power state, for example, \"POWER ON\".
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * Physical location of the resource, for example: \"East US\". Searchable as String.
   * @member {String} location
   */
  exports.prototype['location'] = undefined;
  /**
   * Hardware type, for example: \"Standard_DS1_v2\". Searchable as String.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Operating system, for example: \"Microsoft Windows\". Searchable as String.
   * @member {String} operatingSystem
   */
  exports.prototype['operatingSystem'] = undefined;
  /**
   * Public IP address. Searchable as String.
   * @member {String} publicIPAddress
   */
  exports.prototype['publicIPAddress'] = undefined;
  /**
   * Private IP address. Searchable as String.
   * @member {String} privateIPAddress
   */
  exports.prototype['privateIPAddress'] = undefined;
  /**
   * Cloud service, for example: \"DH-DC\". Searchable as String.
   * @member {String} cloudService
   */
  exports.prototype['cloudService'] = undefined;
  /**
   * Deployment ID, for example: \"76ab36a0fb8d4c4ab6b802acdf58b3a4\". Searchable as String.
   * @member {String} deploymentID
   */
  exports.prototype['deploymentID'] = undefined;
  /**
   * Image ID, for example: \"a699494373c04fc0bc8f2bb1389d6106__Windows-Server-2012-R2-201503.01-en.us-127GB.vhd\". Searchable as String.
   * @member {String} imageID
   */
  exports.prototype['imageID'] = undefined;
  /**
   * Network security group, for example: \"bh-Win10Pro-1-nsg\". Searchable as String.
   * @member {String} securityGroup
   */
  exports.prototype['securityGroup'] = undefined;
  /**
   * @member {String} DNSName
   */
  exports.prototype['DNSName'] = undefined;



  return exports;
}));



