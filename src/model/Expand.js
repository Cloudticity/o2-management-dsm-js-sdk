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
    root.Deepsecurity.Expand = factory(root.Deepsecurity.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Expand model module.
   * @module model/Expand
   * @version 12.0.446
   */

  /**
   * Constructs a new <code>Expand</code>.
   * The expand parameter for a Computer.
   * @alias module:model/Expand
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Expand</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Expand} obj Optional instance to populate.
   * @return {module:model/Expand} The populated <code>Expand</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Options')) {
        obj['Options'] = ApiClient.convertToType(data['Options'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The options of expand parameter.
   * @member {Array.<module:model/Expand.OptionsEnum>} Options
   */
  exports.prototype['Options'] = undefined;


  /**
   * Allowed values for the <code>options</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OptionsEnum = {
    /**
     * value: "none"
     * @const
     */
    "none": "none",
    /**
     * value: "all"
     * @const
     */
    "all": "all",
    /**
     * value: "computerStatus"
     * @const
     */
    "computerStatus": "computerStatus",
    /**
     * value: "tasks"
     * @const
     */
    "tasks": "tasks",
    /**
     * value: "securityUpdates"
     * @const
     */
    "securityUpdates": "securityUpdates",
    /**
     * value: "computerSettings"
     * @const
     */
    "computerSettings": "computerSettings",
    /**
     * value: "allSecurityModules"
     * @const
     */
    "allSecurityModules": "allSecurityModules",
    /**
     * value: "antiMalware"
     * @const
     */
    "antiMalware": "antiMalware",
    /**
     * value: "webReputation"
     * @const
     */
    "webReputation": "webReputation",
    /**
     * value: "firewall"
     * @const
     */
    "firewall": "firewall",
    /**
     * value: "intrusionPrevention"
     * @const
     */
    "intrusionPrevention": "intrusionPrevention",
    /**
     * value: "integrityMonitoring"
     * @const
     */
    "integrityMonitoring": "integrityMonitoring",
    /**
     * value: "logInspection"
     * @const
     */
    "logInspection": "logInspection",
    /**
     * value: "applicationControl"
     * @const
     */
    "applicationControl": "applicationControl",
    /**
     * value: "SAP"
     * @const
     */
    "SAP": "SAP",
    /**
     * value: "interfaces"
     * @const
     */
    "interfaces": "interfaces",
    /**
     * value: "ESXSummary"
     * @const
     */
    "ESXSummary": "ESXSummary",
    /**
     * value: "allVirtualMachineSummaries"
     * @const
     */
    "allVirtualMachineSummaries": "allVirtualMachineSummaries",
    /**
     * value: "azureARMVirtualMachineSummary"
     * @const
     */
    "azureARMVirtualMachineSummary": "azureARMVirtualMachineSummary",
    /**
     * value: "azureVMVirtualMachineSummary"
     * @const
     */
    "azureVMVirtualMachineSummary": "azureVMVirtualMachineSummary",
    /**
     * value: "ec2VirtualMachineSummary"
     * @const
     */
    "ec2VirtualMachineSummary": "ec2VirtualMachineSummary",
    /**
     * value: "noConnectorVirtualMachineSummary"
     * @const
     */
    "noConnectorVirtualMachineSummary": "noConnectorVirtualMachineSummary",
    /**
     * value: "vmwareVMVirtualMachineSummary"
     * @const
     */
    "vmwareVMVirtualMachineSummary": "vmwareVMVirtualMachineSummary",
    /**
     * value: "vcloudVMVirtualMachineSummary"
     * @const
     */
    "vcloudVMVirtualMachineSummary": "vcloudVMVirtualMachineSummary",
    /**
     * value: "workspaceVirtualMachineSummary"
     * @const
     */
    "workspaceVirtualMachineSummary": "workspaceVirtualMachineSummary"  };

  exports.Expand = class {
    constructor() {
      this.expandSet = new Set();
      this.add.apply(this, arguments);
    }

    add() {
      for (let i = 0; i < arguments.length; i++) {
        if (_isValidParam(arguments[i])) {
          this.expandSet.add(arguments[i]);
        } else {
          console.warn("Invalid value for `OptionsEnum`(" + arguments[i] + "), must be one of [" + Object.keys(exports.OptionsEnum).join(', ') + "]");
        }
      }
    }

    delete() {
      for (let i = 0; i < arguments.length; i++) {
        if (_isValidParam(arguments[i])) {
          this.expandSet.delete(arguments[i]);
        } else {
          console.warn("Invalid value for `OptionsEnum`(" + arguments[i] + "), must be one of [" + Object.keys(exports.OptionsEnum).join(', ') + "]");
        }
      }
    }

    clear() {
      this.expandSet.clear();
    }

    list() {
      return [...this.expandSet];
    }
  };

  function _isValidParam(param) {
    if (exports.OptionsEnum[param] !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  return exports;
}));



