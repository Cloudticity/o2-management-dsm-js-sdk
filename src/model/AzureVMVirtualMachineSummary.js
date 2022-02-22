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
    root.Deepsecurity.AzureVMVirtualMachineSummary = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AzureVMVirtualMachineSummary model module.
   * @module model/AzureVMVirtualMachineSummary
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>AzureVMVirtualMachineSummary</code>.
   * Details for an Azure virtual machine.
   * @alias module:model/AzureVMVirtualMachineSummary
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>AzureVMVirtualMachineSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AzureVMVirtualMachineSummary} obj Optional instance to populate.
   * @return {module:model/AzureVMVirtualMachineSummary} The populated <code>AzureVMVirtualMachineSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cloudProvider')) {
        obj['cloudProvider'] = ApiClient.convertToType(data['cloudProvider'], 'String');
      }
      if (data.hasOwnProperty('operatingSystem')) {
        obj['operatingSystem'] = ApiClient.convertToType(data['operatingSystem'], 'String');
      }
      if (data.hasOwnProperty('publicVirtualIPAddress')) {
        obj['publicVirtualIPAddress'] = ApiClient.convertToType(data['publicVirtualIPAddress'], 'String');
      }
      if (data.hasOwnProperty('privateIPAddress')) {
        obj['privateIPAddress'] = ApiClient.convertToType(data['privateIPAddress'], 'String');
      }
      if (data.hasOwnProperty('publicIPAddress')) {
        obj['publicIPAddress'] = ApiClient.convertToType(data['publicIPAddress'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('instanceID')) {
        obj['instanceID'] = ApiClient.convertToType(data['instanceID'], 'String');
      }
      if (data.hasOwnProperty('imageID')) {
        obj['imageID'] = ApiClient.convertToType(data['imageID'], 'String');
      }
      if (data.hasOwnProperty('cloudService')) {
        obj['cloudService'] = ApiClient.convertToType(data['cloudService'], 'String');
      }
      if (data.hasOwnProperty('deploymentID')) {
        obj['deploymentID'] = ApiClient.convertToType(data['deploymentID'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
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
   * Operating system, for example: \"Microsoft Windows\". Searchable as String.
   * @member {String} operatingSystem
   */
  exports.prototype['operatingSystem'] = undefined;
  /**
   * Public virtual IP address. Searchable as String.
   * @member {String} publicVirtualIPAddress
   */
  exports.prototype['publicVirtualIPAddress'] = undefined;
  /**
   * Private IP address. Searchable as String.
   * @member {String} privateIPAddress
   */
  exports.prototype['privateIPAddress'] = undefined;
  /**
   * Public IP address. Searchable as String.
   * @member {String} publicIPAddress
   */
  exports.prototype['publicIPAddress'] = undefined;
  /**
   * Physical location of the VM, for example: \"East US\". Searchable as String.
   * @member {String} location
   */
  exports.prototype['location'] = undefined;
  /**
   * Instance ID. Searchable as String.
   * @member {String} instanceID
   */
  exports.prototype['instanceID'] = undefined;
  /**
   * Image ID, for example: \"a699494373c04fc0bc8f2bb1389d6106__Windows-Server-2012-R2-201503.01-en.us-127GB.vhd\". Searchable as String.
   * @member {String} imageID
   */
  exports.prototype['imageID'] = undefined;
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
   * Hardware type, for example: \"Standard_DS1_v2\". Searchable as String.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Power state, for example, \"POWER ON\".
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {String} DNSName
   */
  exports.prototype['DNSName'] = undefined;



  return exports;
}));


