// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PosturesAPI from 'cloudflare/resources/accounts/devices/postures/postures';
import * as IntegrationsAPI from 'cloudflare/resources/accounts/devices/postures/integrations';

export class Postures extends APIResource {
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);

  /**
   * Fetches a single device posture rule.
   */
  retrieve(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostureRetrieveResponse> {
    return this._client.get(`/accounts/${identifier}/devices/posture/${uuid}`, options);
  }

  /**
   * Updates a device posture rule.
   */
  update(
    identifier: unknown,
    uuid: string,
    body: PostureUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostureUpdateResponse> {
    return this._client.put(`/accounts/${identifier}/devices/posture/${uuid}`, { body, ...options });
  }

  /**
   * Deletes a device posture rule.
   */
  delete(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostureDeleteResponse> {
    return this._client.delete(`/accounts/${identifier}/devices/posture/${uuid}`, options);
  }

  /**
   * Creates a new device posture rule.
   */
  devicePostureRulesCreateDevicePostureRule(
    identifier: unknown,
    body: PostureDevicePostureRulesCreateDevicePostureRuleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostureDevicePostureRulesCreateDevicePostureRuleResponse> {
    return this._client.post(`/accounts/${identifier}/devices/posture`, { body, ...options });
  }

  /**
   * Fetches device posture rules for a Zero Trust account.
   */
  devicePostureRulesListDevicePostureRules(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostureDevicePostureRulesListDevicePostureRulesResponse> {
    return this._client.get(`/accounts/${identifier}/devices/posture`, options);
  }
}

export interface PostureRetrieveResponse {
  errors?: Array<PostureRetrieveResponse.Error>;

  messages?: Array<PostureRetrieveResponse.Message>;

  result?: PostureRetrieveResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace PostureRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * API UUID.
     */
    id?: string;

    /**
     * The description of the device posture rule.
     */
    description?: string;

    /**
     * Sets the expiration time for a posture check result. If empty, the result
     * remains valid until it is overwritten by new data from the WARP client.
     */
    expiration?: string;

    /**
     * The value to be checked against.
     */
    input?:
      | Result.ZR7Sv6YhFileInputRequest
      | Result.ZR7Sv6YhUniqueClientIDInputRequest
      | Result.ZR7Sv6YhDomainJoinedInputRequest
      | Result.ZR7Sv6YhOsVersionInputRequest
      | Result.ZR7Sv6YhFirewallInputRequest
      | Result.ZR7Sv6YhSentineloneInputRequest
      | Result.ZR7Sv6YhCarbonblackInputRequest
      | Result.ZR7Sv6YhDiskEncryptionInputRequest
      | Result.ZR7Sv6YhApplicationInputRequest
      | Result.ZR7Sv6YhClientCertificateInputRequest
      | Result.ZR7Sv6YhWorkspaceOneInputRequest
      | Result.ZR7Sv6YhCrowdstrikeInputRequest
      | Result.ZR7Sv6YhIntuneInputRequest
      | Result.ZR7Sv6YhKolideInputRequest
      | Result.ZR7Sv6YhTaniumInputRequest
      | Result.ZR7Sv6YhSentineloneS2sInputRequest;

    /**
     * The conditions that the client must match to run the rule.
     */
    match?: Array<Result.Match>;

    /**
     * The name of the device posture rule.
     */
    name?: string;

    /**
     * Polling frequency for the WARP client posture check. Default: `5m` (poll every
     * five minutes). Minimum: `1m`.
     */
    schedule?: string;

    /**
     * The type of device posture rule.
     */
    type?:
      | 'file'
      | 'application'
      | 'tanium'
      | 'gateway'
      | 'warp'
      | 'disk_encryption'
      | 'sentinelone'
      | 'carbonblack'
      | 'firewall'
      | 'os_version'
      | 'domain_joined'
      | 'client_certificate'
      | 'unique_client_id'
      | 'kolide'
      | 'tanium_s2s'
      | 'crowdstrike_s2s'
      | 'intune'
      | 'workspace_one'
      | 'sentinelone_s2s';
  }

  export namespace Result {
    export interface ZR7Sv6YhFileInputRequest {
      /**
       * Operating system
       */
      operating_system: 'windows' | 'linux' | 'mac';

      /**
       * File path.
       */
      path: string;

      /**
       * Whether or not file exists
       */
      exists?: boolean;

      /**
       * SHA-256.
       */
      sha256?: string;

      /**
       * Signing certificate thumbprint.
       */
      thumbprint?: string;
    }

    export interface ZR7Sv6YhUniqueClientIDInputRequest {
      /**
       * List ID.
       */
      id: string;

      /**
       * Operating System
       */
      operating_system: 'android' | 'ios' | 'chromeos';
    }

    export interface ZR7Sv6YhDomainJoinedInputRequest {
      /**
       * Operating System
       */
      operating_system: 'windows';

      /**
       * Domain
       */
      domain?: string;
    }

    export interface ZR7Sv6YhOsVersionInputRequest {
      /**
       * Operating System
       */
      operating_system: 'windows';

      /**
       * Operator
       */
      operator: '<' | '<=' | '>' | '>=' | '==';

      /**
       * Version of OS
       */
      version: string;

      /**
       * Operating System Distribution Name (linux only)
       */
      os_distro_name?: string;

      /**
       * Version of OS Distribution (linux only)
       */
      os_distro_revision?: string;

      /**
       * Product Verison Extra that Mac OS uses (mac only)
       */
      os_version_extra?: string;
    }

    export interface ZR7Sv6YhFirewallInputRequest {
      /**
       * Enabled
       */
      enabled: boolean;

      /**
       * Operating System
       */
      operating_system: 'windows' | 'mac';
    }

    export interface ZR7Sv6YhSentineloneInputRequest {
      /**
       * Operating system
       */
      operating_system: 'windows' | 'linux' | 'mac';

      /**
       * File path.
       */
      path: string;

      /**
       * SHA-256.
       */
      sha256?: string;

      /**
       * Signing certificate thumbprint.
       */
      thumbprint?: string;
    }

    export interface ZR7Sv6YhCarbonblackInputRequest {
      /**
       * Operating system
       */
      operating_system: 'windows' | 'linux' | 'mac';

      /**
       * File path.
       */
      path: string;

      /**
       * SHA-256.
       */
      sha256?: string;

      /**
       * Signing certificate thumbprint.
       */
      thumbprint?: string;
    }

    export interface ZR7Sv6YhDiskEncryptionInputRequest {
      /**
       * List of volume names to be checked for encryption.
       */
      checkDisks?: Array<string>;

      /**
       * Whether to check all disks for encryption.
       */
      requireAll?: boolean;
    }

    export interface ZR7Sv6YhApplicationInputRequest {
      /**
       * Operating system
       */
      operating_system: 'windows' | 'linux' | 'mac';

      /**
       * Path for the application.
       */
      path: string;

      /**
       * SHA-256.
       */
      sha256?: string;

      /**
       * Signing certificate thumbprint.
       */
      thumbprint?: string;
    }

    export interface ZR7Sv6YhClientCertificateInputRequest {
      /**
       * UUID of Cloudflare managed certificate.
       */
      certificate_id: string;

      /**
       * Common Name that is protected by the certificate
       */
      cn: string;
    }

    export interface ZR7Sv6YhWorkspaceOneInputRequest {
      /**
       * Compliance Status
       */
      compliance_status: 'compliant' | 'noncompliant' | 'unknown';

      /**
       * Posture Integration ID.
       */
      connection_id: string;
    }

    export interface ZR7Sv6YhCrowdstrikeInputRequest {
      /**
       * Posture Integration ID.
       */
      connection_id: string;

      /**
       * Operator
       */
      operator?: '<' | '<=' | '>' | '>=' | '==';

      /**
       * Os Version
       */
      os?: string;

      /**
       * overall
       */
      overall?: string;

      /**
       * SensorConfig
       */
      sensor_config?: string;

      /**
       * Version
       */
      version?: string;

      /**
       * Version Operator
       */
      versionOperator?: '<' | '<=' | '>' | '>=' | '==';
    }

    export interface ZR7Sv6YhIntuneInputRequest {
      /**
       * Compliance Status
       */
      compliance_status:
        | 'compliant'
        | 'noncompliant'
        | 'unknown'
        | 'notapplicable'
        | 'ingraceperiod'
        | 'error';

      /**
       * Posture Integration ID.
       */
      connection_id: string;
    }

    export interface ZR7Sv6YhKolideInputRequest {
      /**
       * Posture Integration ID.
       */
      connection_id: string;

      /**
       * Count Operator
       */
      countOperator: '<' | '<=' | '>' | '>=' | '==';

      /**
       * The Number of Issues.
       */
      issue_count: string;
    }

    export interface ZR7Sv6YhTaniumInputRequest {
      /**
       * Posture Integration ID.
       */
      connection_id: string;

      /**
       * For more details on eid last seen, refer to the Tanium documentation.
       */
      eid_last_seen?: string;

      /**
       * Operator to evaluate risk_level or eid_last_seen.
       */
      operator?: '<' | '<=' | '>' | '>=' | '==';

      /**
       * For more details on risk level, refer to the Tanium documentation.
       */
      risk_level?: 'low' | 'medium' | 'high' | 'critical';

      /**
       * Score Operator
       */
      scoreOperator?: '<' | '<=' | '>' | '>=' | '==';

      /**
       * For more details on total score, refer to the Tanium documentation.
       */
      total_score?: number;
    }

    export interface ZR7Sv6YhSentineloneS2sInputRequest {
      /**
       * Posture Integration ID.
       */
      connection_id: string;

      /**
       * The Number of active threats.
       */
      active_threats?: number;

      /**
       * Whether device is infected.
       */
      infected?: boolean;

      /**
       * Whether device is active.
       */
      is_active?: boolean;

      /**
       * Network status of device.
       */
      network_status?: 'connected' | 'disconnected' | 'disconnecting' | 'connecting';

      /**
       * operator
       */
      operator?: '<' | '<=' | '>' | '>=' | '==';
    }

    export interface Match {
      platform?: 'windows' | 'mac' | 'linux' | 'android' | 'ios';
    }
  }
}

export interface PostureUpdateResponse {
  errors?: Array<PostureUpdateResponse.Error>;

  messages?: Array<PostureUpdateResponse.Message>;

  result?: PostureUpdateResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace PostureUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * API UUID.
     */
    id?: string;

    /**
     * The description of the device posture rule.
     */
    description?: string;

    /**
     * Sets the expiration time for a posture check result. If empty, the result
     * remains valid until it is overwritten by new data from the WARP client.
     */
    expiration?: string;

    /**
     * The value to be checked against.
     */
    input?:
      | Result.ZR7Sv6YhFileInputRequest
      | Result.ZR7Sv6YhUniqueClientIDInputRequest
      | Result.ZR7Sv6YhDomainJoinedInputRequest
      | Result.ZR7Sv6YhOsVersionInputRequest
      | Result.ZR7Sv6YhFirewallInputRequest
      | Result.ZR7Sv6YhSentineloneInputRequest
      | Result.ZR7Sv6YhCarbonblackInputRequest
      | Result.ZR7Sv6YhDiskEncryptionInputRequest
      | Result.ZR7Sv6YhApplicationInputRequest
      | Result.ZR7Sv6YhClientCertificateInputRequest
      | Result.ZR7Sv6YhWorkspaceOneInputRequest
      | Result.ZR7Sv6YhCrowdstrikeInputRequest
      | Result.ZR7Sv6YhIntuneInputRequest
      | Result.ZR7Sv6YhKolideInputRequest
      | Result.ZR7Sv6YhTaniumInputRequest
      | Result.ZR7Sv6YhSentineloneS2sInputRequest;

    /**
     * The conditions that the client must match to run the rule.
     */
    match?: Array<Result.Match>;

    /**
     * The name of the device posture rule.
     */
    name?: string;

    /**
     * Polling frequency for the WARP client posture check. Default: `5m` (poll every
     * five minutes). Minimum: `1m`.
     */
    schedule?: string;

    /**
     * The type of device posture rule.
     */
    type?:
      | 'file'
      | 'application'
      | 'tanium'
      | 'gateway'
      | 'warp'
      | 'disk_encryption'
      | 'sentinelone'
      | 'carbonblack'
      | 'firewall'
      | 'os_version'
      | 'domain_joined'
      | 'client_certificate'
      | 'unique_client_id'
      | 'kolide'
      | 'tanium_s2s'
      | 'crowdstrike_s2s'
      | 'intune'
      | 'workspace_one'
      | 'sentinelone_s2s';
  }

  export namespace Result {
    export interface ZR7Sv6YhFileInputRequest {
      /**
       * Operating system
       */
      operating_system: 'windows' | 'linux' | 'mac';

      /**
       * File path.
       */
      path: string;

      /**
       * Whether or not file exists
       */
      exists?: boolean;

      /**
       * SHA-256.
       */
      sha256?: string;

      /**
       * Signing certificate thumbprint.
       */
      thumbprint?: string;
    }

    export interface ZR7Sv6YhUniqueClientIDInputRequest {
      /**
       * List ID.
       */
      id: string;

      /**
       * Operating System
       */
      operating_system: 'android' | 'ios' | 'chromeos';
    }

    export interface ZR7Sv6YhDomainJoinedInputRequest {
      /**
       * Operating System
       */
      operating_system: 'windows';

      /**
       * Domain
       */
      domain?: string;
    }

    export interface ZR7Sv6YhOsVersionInputRequest {
      /**
       * Operating System
       */
      operating_system: 'windows';

      /**
       * Operator
       */
      operator: '<' | '<=' | '>' | '>=' | '==';

      /**
       * Version of OS
       */
      version: string;

      /**
       * Operating System Distribution Name (linux only)
       */
      os_distro_name?: string;

      /**
       * Version of OS Distribution (linux only)
       */
      os_distro_revision?: string;

      /**
       * Product Verison Extra that Mac OS uses (mac only)
       */
      os_version_extra?: string;
    }

    export interface ZR7Sv6YhFirewallInputRequest {
      /**
       * Enabled
       */
      enabled: boolean;

      /**
       * Operating System
       */
      operating_system: 'windows' | 'mac';
    }

    export interface ZR7Sv6YhSentineloneInputRequest {
      /**
       * Operating system
       */
      operating_system: 'windows' | 'linux' | 'mac';

      /**
       * File path.
       */
      path: string;

      /**
       * SHA-256.
       */
      sha256?: string;

      /**
       * Signing certificate thumbprint.
       */
      thumbprint?: string;
    }

    export interface ZR7Sv6YhCarbonblackInputRequest {
      /**
       * Operating system
       */
      operating_system: 'windows' | 'linux' | 'mac';

      /**
       * File path.
       */
      path: string;

      /**
       * SHA-256.
       */
      sha256?: string;

      /**
       * Signing certificate thumbprint.
       */
      thumbprint?: string;
    }

    export interface ZR7Sv6YhDiskEncryptionInputRequest {
      /**
       * List of volume names to be checked for encryption.
       */
      checkDisks?: Array<string>;

      /**
       * Whether to check all disks for encryption.
       */
      requireAll?: boolean;
    }

    export interface ZR7Sv6YhApplicationInputRequest {
      /**
       * Operating system
       */
      operating_system: 'windows' | 'linux' | 'mac';

      /**
       * Path for the application.
       */
      path: string;

      /**
       * SHA-256.
       */
      sha256?: string;

      /**
       * Signing certificate thumbprint.
       */
      thumbprint?: string;
    }

    export interface ZR7Sv6YhClientCertificateInputRequest {
      /**
       * UUID of Cloudflare managed certificate.
       */
      certificate_id: string;

      /**
       * Common Name that is protected by the certificate
       */
      cn: string;
    }

    export interface ZR7Sv6YhWorkspaceOneInputRequest {
      /**
       * Compliance Status
       */
      compliance_status: 'compliant' | 'noncompliant' | 'unknown';

      /**
       * Posture Integration ID.
       */
      connection_id: string;
    }

    export interface ZR7Sv6YhCrowdstrikeInputRequest {
      /**
       * Posture Integration ID.
       */
      connection_id: string;

      /**
       * Operator
       */
      operator?: '<' | '<=' | '>' | '>=' | '==';

      /**
       * Os Version
       */
      os?: string;

      /**
       * overall
       */
      overall?: string;

      /**
       * SensorConfig
       */
      sensor_config?: string;

      /**
       * Version
       */
      version?: string;

      /**
       * Version Operator
       */
      versionOperator?: '<' | '<=' | '>' | '>=' | '==';
    }

    export interface ZR7Sv6YhIntuneInputRequest {
      /**
       * Compliance Status
       */
      compliance_status:
        | 'compliant'
        | 'noncompliant'
        | 'unknown'
        | 'notapplicable'
        | 'ingraceperiod'
        | 'error';

      /**
       * Posture Integration ID.
       */
      connection_id: string;
    }

    export interface ZR7Sv6YhKolideInputRequest {
      /**
       * Posture Integration ID.
       */
      connection_id: string;

      /**
       * Count Operator
       */
      countOperator: '<' | '<=' | '>' | '>=' | '==';

      /**
       * The Number of Issues.
       */
      issue_count: string;
    }

    export interface ZR7Sv6YhTaniumInputRequest {
      /**
       * Posture Integration ID.
       */
      connection_id: string;

      /**
       * For more details on eid last seen, refer to the Tanium documentation.
       */
      eid_last_seen?: string;

      /**
       * Operator to evaluate risk_level or eid_last_seen.
       */
      operator?: '<' | '<=' | '>' | '>=' | '==';

      /**
       * For more details on risk level, refer to the Tanium documentation.
       */
      risk_level?: 'low' | 'medium' | 'high' | 'critical';

      /**
       * Score Operator
       */
      scoreOperator?: '<' | '<=' | '>' | '>=' | '==';

      /**
       * For more details on total score, refer to the Tanium documentation.
       */
      total_score?: number;
    }

    export interface ZR7Sv6YhSentineloneS2sInputRequest {
      /**
       * Posture Integration ID.
       */
      connection_id: string;

      /**
       * The Number of active threats.
       */
      active_threats?: number;

      /**
       * Whether device is infected.
       */
      infected?: boolean;

      /**
       * Whether device is active.
       */
      is_active?: boolean;

      /**
       * Network status of device.
       */
      network_status?: 'connected' | 'disconnected' | 'disconnecting' | 'connecting';

      /**
       * operator
       */
      operator?: '<' | '<=' | '>' | '>=' | '==';
    }

    export interface Match {
      platform?: 'windows' | 'mac' | 'linux' | 'android' | 'ios';
    }
  }
}

export interface PostureDeleteResponse {
  errors?: Array<PostureDeleteResponse.Error>;

  messages?: Array<PostureDeleteResponse.Message>;

  result?: PostureDeleteResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace PostureDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * API UUID.
     */
    id?: string;
  }
}

export interface PostureDevicePostureRulesCreateDevicePostureRuleResponse {
  errors?: Array<PostureDevicePostureRulesCreateDevicePostureRuleResponse.Error>;

  messages?: Array<PostureDevicePostureRulesCreateDevicePostureRuleResponse.Message>;

  result?: PostureDevicePostureRulesCreateDevicePostureRuleResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace PostureDevicePostureRulesCreateDevicePostureRuleResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * API UUID.
     */
    id?: string;

    /**
     * The description of the device posture rule.
     */
    description?: string;

    /**
     * Sets the expiration time for a posture check result. If empty, the result
     * remains valid until it is overwritten by new data from the WARP client.
     */
    expiration?: string;

    /**
     * The value to be checked against.
     */
    input?:
      | Result.ZR7Sv6YhFileInputRequest
      | Result.ZR7Sv6YhUniqueClientIDInputRequest
      | Result.ZR7Sv6YhDomainJoinedInputRequest
      | Result.ZR7Sv6YhOsVersionInputRequest
      | Result.ZR7Sv6YhFirewallInputRequest
      | Result.ZR7Sv6YhSentineloneInputRequest
      | Result.ZR7Sv6YhCarbonblackInputRequest
      | Result.ZR7Sv6YhDiskEncryptionInputRequest
      | Result.ZR7Sv6YhApplicationInputRequest
      | Result.ZR7Sv6YhClientCertificateInputRequest
      | Result.ZR7Sv6YhWorkspaceOneInputRequest
      | Result.ZR7Sv6YhCrowdstrikeInputRequest
      | Result.ZR7Sv6YhIntuneInputRequest
      | Result.ZR7Sv6YhKolideInputRequest
      | Result.ZR7Sv6YhTaniumInputRequest
      | Result.ZR7Sv6YhSentineloneS2sInputRequest;

    /**
     * The conditions that the client must match to run the rule.
     */
    match?: Array<Result.Match>;

    /**
     * The name of the device posture rule.
     */
    name?: string;

    /**
     * Polling frequency for the WARP client posture check. Default: `5m` (poll every
     * five minutes). Minimum: `1m`.
     */
    schedule?: string;

    /**
     * The type of device posture rule.
     */
    type?:
      | 'file'
      | 'application'
      | 'tanium'
      | 'gateway'
      | 'warp'
      | 'disk_encryption'
      | 'sentinelone'
      | 'carbonblack'
      | 'firewall'
      | 'os_version'
      | 'domain_joined'
      | 'client_certificate'
      | 'unique_client_id'
      | 'kolide'
      | 'tanium_s2s'
      | 'crowdstrike_s2s'
      | 'intune'
      | 'workspace_one'
      | 'sentinelone_s2s';
  }

  export namespace Result {
    export interface ZR7Sv6YhFileInputRequest {
      /**
       * Operating system
       */
      operating_system: 'windows' | 'linux' | 'mac';

      /**
       * File path.
       */
      path: string;

      /**
       * Whether or not file exists
       */
      exists?: boolean;

      /**
       * SHA-256.
       */
      sha256?: string;

      /**
       * Signing certificate thumbprint.
       */
      thumbprint?: string;
    }

    export interface ZR7Sv6YhUniqueClientIDInputRequest {
      /**
       * List ID.
       */
      id: string;

      /**
       * Operating System
       */
      operating_system: 'android' | 'ios' | 'chromeos';
    }

    export interface ZR7Sv6YhDomainJoinedInputRequest {
      /**
       * Operating System
       */
      operating_system: 'windows';

      /**
       * Domain
       */
      domain?: string;
    }

    export interface ZR7Sv6YhOsVersionInputRequest {
      /**
       * Operating System
       */
      operating_system: 'windows';

      /**
       * Operator
       */
      operator: '<' | '<=' | '>' | '>=' | '==';

      /**
       * Version of OS
       */
      version: string;

      /**
       * Operating System Distribution Name (linux only)
       */
      os_distro_name?: string;

      /**
       * Version of OS Distribution (linux only)
       */
      os_distro_revision?: string;

      /**
       * Product Verison Extra that Mac OS uses (mac only)
       */
      os_version_extra?: string;
    }

    export interface ZR7Sv6YhFirewallInputRequest {
      /**
       * Enabled
       */
      enabled: boolean;

      /**
       * Operating System
       */
      operating_system: 'windows' | 'mac';
    }

    export interface ZR7Sv6YhSentineloneInputRequest {
      /**
       * Operating system
       */
      operating_system: 'windows' | 'linux' | 'mac';

      /**
       * File path.
       */
      path: string;

      /**
       * SHA-256.
       */
      sha256?: string;

      /**
       * Signing certificate thumbprint.
       */
      thumbprint?: string;
    }

    export interface ZR7Sv6YhCarbonblackInputRequest {
      /**
       * Operating system
       */
      operating_system: 'windows' | 'linux' | 'mac';

      /**
       * File path.
       */
      path: string;

      /**
       * SHA-256.
       */
      sha256?: string;

      /**
       * Signing certificate thumbprint.
       */
      thumbprint?: string;
    }

    export interface ZR7Sv6YhDiskEncryptionInputRequest {
      /**
       * List of volume names to be checked for encryption.
       */
      checkDisks?: Array<string>;

      /**
       * Whether to check all disks for encryption.
       */
      requireAll?: boolean;
    }

    export interface ZR7Sv6YhApplicationInputRequest {
      /**
       * Operating system
       */
      operating_system: 'windows' | 'linux' | 'mac';

      /**
       * Path for the application.
       */
      path: string;

      /**
       * SHA-256.
       */
      sha256?: string;

      /**
       * Signing certificate thumbprint.
       */
      thumbprint?: string;
    }

    export interface ZR7Sv6YhClientCertificateInputRequest {
      /**
       * UUID of Cloudflare managed certificate.
       */
      certificate_id: string;

      /**
       * Common Name that is protected by the certificate
       */
      cn: string;
    }

    export interface ZR7Sv6YhWorkspaceOneInputRequest {
      /**
       * Compliance Status
       */
      compliance_status: 'compliant' | 'noncompliant' | 'unknown';

      /**
       * Posture Integration ID.
       */
      connection_id: string;
    }

    export interface ZR7Sv6YhCrowdstrikeInputRequest {
      /**
       * Posture Integration ID.
       */
      connection_id: string;

      /**
       * Operator
       */
      operator?: '<' | '<=' | '>' | '>=' | '==';

      /**
       * Os Version
       */
      os?: string;

      /**
       * overall
       */
      overall?: string;

      /**
       * SensorConfig
       */
      sensor_config?: string;

      /**
       * Version
       */
      version?: string;

      /**
       * Version Operator
       */
      versionOperator?: '<' | '<=' | '>' | '>=' | '==';
    }

    export interface ZR7Sv6YhIntuneInputRequest {
      /**
       * Compliance Status
       */
      compliance_status:
        | 'compliant'
        | 'noncompliant'
        | 'unknown'
        | 'notapplicable'
        | 'ingraceperiod'
        | 'error';

      /**
       * Posture Integration ID.
       */
      connection_id: string;
    }

    export interface ZR7Sv6YhKolideInputRequest {
      /**
       * Posture Integration ID.
       */
      connection_id: string;

      /**
       * Count Operator
       */
      countOperator: '<' | '<=' | '>' | '>=' | '==';

      /**
       * The Number of Issues.
       */
      issue_count: string;
    }

    export interface ZR7Sv6YhTaniumInputRequest {
      /**
       * Posture Integration ID.
       */
      connection_id: string;

      /**
       * For more details on eid last seen, refer to the Tanium documentation.
       */
      eid_last_seen?: string;

      /**
       * Operator to evaluate risk_level or eid_last_seen.
       */
      operator?: '<' | '<=' | '>' | '>=' | '==';

      /**
       * For more details on risk level, refer to the Tanium documentation.
       */
      risk_level?: 'low' | 'medium' | 'high' | 'critical';

      /**
       * Score Operator
       */
      scoreOperator?: '<' | '<=' | '>' | '>=' | '==';

      /**
       * For more details on total score, refer to the Tanium documentation.
       */
      total_score?: number;
    }

    export interface ZR7Sv6YhSentineloneS2sInputRequest {
      /**
       * Posture Integration ID.
       */
      connection_id: string;

      /**
       * The Number of active threats.
       */
      active_threats?: number;

      /**
       * Whether device is infected.
       */
      infected?: boolean;

      /**
       * Whether device is active.
       */
      is_active?: boolean;

      /**
       * Network status of device.
       */
      network_status?: 'connected' | 'disconnected' | 'disconnecting' | 'connecting';

      /**
       * operator
       */
      operator?: '<' | '<=' | '>' | '>=' | '==';
    }

    export interface Match {
      platform?: 'windows' | 'mac' | 'linux' | 'android' | 'ios';
    }
  }
}

export interface PostureDevicePostureRulesListDevicePostureRulesResponse {
  errors?: Array<PostureDevicePostureRulesListDevicePostureRulesResponse.Error>;

  messages?: Array<PostureDevicePostureRulesListDevicePostureRulesResponse.Message>;

  result?: Array<PostureDevicePostureRulesListDevicePostureRulesResponse.Result>;

  result_info?: PostureDevicePostureRulesListDevicePostureRulesResponse.ResultInfo;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace PostureDevicePostureRulesListDevicePostureRulesResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * API UUID.
     */
    id?: string;

    /**
     * The description of the device posture rule.
     */
    description?: string;

    /**
     * Sets the expiration time for a posture check result. If empty, the result
     * remains valid until it is overwritten by new data from the WARP client.
     */
    expiration?: string;

    /**
     * The value to be checked against.
     */
    input?:
      | Result.ZR7Sv6YhFileInputRequest
      | Result.ZR7Sv6YhUniqueClientIDInputRequest
      | Result.ZR7Sv6YhDomainJoinedInputRequest
      | Result.ZR7Sv6YhOsVersionInputRequest
      | Result.ZR7Sv6YhFirewallInputRequest
      | Result.ZR7Sv6YhSentineloneInputRequest
      | Result.ZR7Sv6YhCarbonblackInputRequest
      | Result.ZR7Sv6YhDiskEncryptionInputRequest
      | Result.ZR7Sv6YhApplicationInputRequest
      | Result.ZR7Sv6YhClientCertificateInputRequest
      | Result.ZR7Sv6YhWorkspaceOneInputRequest
      | Result.ZR7Sv6YhCrowdstrikeInputRequest
      | Result.ZR7Sv6YhIntuneInputRequest
      | Result.ZR7Sv6YhKolideInputRequest
      | Result.ZR7Sv6YhTaniumInputRequest
      | Result.ZR7Sv6YhSentineloneS2sInputRequest;

    /**
     * The conditions that the client must match to run the rule.
     */
    match?: Array<Result.Match>;

    /**
     * The name of the device posture rule.
     */
    name?: string;

    /**
     * Polling frequency for the WARP client posture check. Default: `5m` (poll every
     * five minutes). Minimum: `1m`.
     */
    schedule?: string;

    /**
     * The type of device posture rule.
     */
    type?:
      | 'file'
      | 'application'
      | 'tanium'
      | 'gateway'
      | 'warp'
      | 'disk_encryption'
      | 'sentinelone'
      | 'carbonblack'
      | 'firewall'
      | 'os_version'
      | 'domain_joined'
      | 'client_certificate'
      | 'unique_client_id'
      | 'kolide'
      | 'tanium_s2s'
      | 'crowdstrike_s2s'
      | 'intune'
      | 'workspace_one'
      | 'sentinelone_s2s';
  }

  export namespace Result {
    export interface ZR7Sv6YhFileInputRequest {
      /**
       * Operating system
       */
      operating_system: 'windows' | 'linux' | 'mac';

      /**
       * File path.
       */
      path: string;

      /**
       * Whether or not file exists
       */
      exists?: boolean;

      /**
       * SHA-256.
       */
      sha256?: string;

      /**
       * Signing certificate thumbprint.
       */
      thumbprint?: string;
    }

    export interface ZR7Sv6YhUniqueClientIDInputRequest {
      /**
       * List ID.
       */
      id: string;

      /**
       * Operating System
       */
      operating_system: 'android' | 'ios' | 'chromeos';
    }

    export interface ZR7Sv6YhDomainJoinedInputRequest {
      /**
       * Operating System
       */
      operating_system: 'windows';

      /**
       * Domain
       */
      domain?: string;
    }

    export interface ZR7Sv6YhOsVersionInputRequest {
      /**
       * Operating System
       */
      operating_system: 'windows';

      /**
       * Operator
       */
      operator: '<' | '<=' | '>' | '>=' | '==';

      /**
       * Version of OS
       */
      version: string;

      /**
       * Operating System Distribution Name (linux only)
       */
      os_distro_name?: string;

      /**
       * Version of OS Distribution (linux only)
       */
      os_distro_revision?: string;

      /**
       * Product Verison Extra that Mac OS uses (mac only)
       */
      os_version_extra?: string;
    }

    export interface ZR7Sv6YhFirewallInputRequest {
      /**
       * Enabled
       */
      enabled: boolean;

      /**
       * Operating System
       */
      operating_system: 'windows' | 'mac';
    }

    export interface ZR7Sv6YhSentineloneInputRequest {
      /**
       * Operating system
       */
      operating_system: 'windows' | 'linux' | 'mac';

      /**
       * File path.
       */
      path: string;

      /**
       * SHA-256.
       */
      sha256?: string;

      /**
       * Signing certificate thumbprint.
       */
      thumbprint?: string;
    }

    export interface ZR7Sv6YhCarbonblackInputRequest {
      /**
       * Operating system
       */
      operating_system: 'windows' | 'linux' | 'mac';

      /**
       * File path.
       */
      path: string;

      /**
       * SHA-256.
       */
      sha256?: string;

      /**
       * Signing certificate thumbprint.
       */
      thumbprint?: string;
    }

    export interface ZR7Sv6YhDiskEncryptionInputRequest {
      /**
       * List of volume names to be checked for encryption.
       */
      checkDisks?: Array<string>;

      /**
       * Whether to check all disks for encryption.
       */
      requireAll?: boolean;
    }

    export interface ZR7Sv6YhApplicationInputRequest {
      /**
       * Operating system
       */
      operating_system: 'windows' | 'linux' | 'mac';

      /**
       * Path for the application.
       */
      path: string;

      /**
       * SHA-256.
       */
      sha256?: string;

      /**
       * Signing certificate thumbprint.
       */
      thumbprint?: string;
    }

    export interface ZR7Sv6YhClientCertificateInputRequest {
      /**
       * UUID of Cloudflare managed certificate.
       */
      certificate_id: string;

      /**
       * Common Name that is protected by the certificate
       */
      cn: string;
    }

    export interface ZR7Sv6YhWorkspaceOneInputRequest {
      /**
       * Compliance Status
       */
      compliance_status: 'compliant' | 'noncompliant' | 'unknown';

      /**
       * Posture Integration ID.
       */
      connection_id: string;
    }

    export interface ZR7Sv6YhCrowdstrikeInputRequest {
      /**
       * Posture Integration ID.
       */
      connection_id: string;

      /**
       * Operator
       */
      operator?: '<' | '<=' | '>' | '>=' | '==';

      /**
       * Os Version
       */
      os?: string;

      /**
       * overall
       */
      overall?: string;

      /**
       * SensorConfig
       */
      sensor_config?: string;

      /**
       * Version
       */
      version?: string;

      /**
       * Version Operator
       */
      versionOperator?: '<' | '<=' | '>' | '>=' | '==';
    }

    export interface ZR7Sv6YhIntuneInputRequest {
      /**
       * Compliance Status
       */
      compliance_status:
        | 'compliant'
        | 'noncompliant'
        | 'unknown'
        | 'notapplicable'
        | 'ingraceperiod'
        | 'error';

      /**
       * Posture Integration ID.
       */
      connection_id: string;
    }

    export interface ZR7Sv6YhKolideInputRequest {
      /**
       * Posture Integration ID.
       */
      connection_id: string;

      /**
       * Count Operator
       */
      countOperator: '<' | '<=' | '>' | '>=' | '==';

      /**
       * The Number of Issues.
       */
      issue_count: string;
    }

    export interface ZR7Sv6YhTaniumInputRequest {
      /**
       * Posture Integration ID.
       */
      connection_id: string;

      /**
       * For more details on eid last seen, refer to the Tanium documentation.
       */
      eid_last_seen?: string;

      /**
       * Operator to evaluate risk_level or eid_last_seen.
       */
      operator?: '<' | '<=' | '>' | '>=' | '==';

      /**
       * For more details on risk level, refer to the Tanium documentation.
       */
      risk_level?: 'low' | 'medium' | 'high' | 'critical';

      /**
       * Score Operator
       */
      scoreOperator?: '<' | '<=' | '>' | '>=' | '==';

      /**
       * For more details on total score, refer to the Tanium documentation.
       */
      total_score?: number;
    }

    export interface ZR7Sv6YhSentineloneS2sInputRequest {
      /**
       * Posture Integration ID.
       */
      connection_id: string;

      /**
       * The Number of active threats.
       */
      active_threats?: number;

      /**
       * Whether device is infected.
       */
      infected?: boolean;

      /**
       * Whether device is active.
       */
      is_active?: boolean;

      /**
       * Network status of device.
       */
      network_status?: 'connected' | 'disconnected' | 'disconnecting' | 'connecting';

      /**
       * operator
       */
      operator?: '<' | '<=' | '>' | '>=' | '==';
    }

    export interface Match {
      platform?: 'windows' | 'mac' | 'linux' | 'android' | 'ios';
    }
  }

  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export interface PostureUpdateParams {
  /**
   * The name of the device posture rule.
   */
  name: string;

  /**
   * The type of device posture rule.
   */
  type:
    | 'file'
    | 'application'
    | 'tanium'
    | 'gateway'
    | 'warp'
    | 'disk_encryption'
    | 'sentinelone'
    | 'carbonblack'
    | 'firewall'
    | 'os_version'
    | 'domain_joined'
    | 'client_certificate'
    | 'unique_client_id'
    | 'kolide'
    | 'tanium_s2s'
    | 'crowdstrike_s2s'
    | 'intune'
    | 'workspace_one'
    | 'sentinelone_s2s';

  /**
   * The description of the device posture rule.
   */
  description?: string;

  /**
   * Sets the expiration time for a posture check result. If empty, the result
   * remains valid until it is overwritten by new data from the WARP client.
   */
  expiration?: string;

  /**
   * The value to be checked against.
   */
  input?:
    | PostureUpdateParams.ZR7Sv6YhFileInputRequest
    | PostureUpdateParams.ZR7Sv6YhUniqueClientIDInputRequest
    | PostureUpdateParams.ZR7Sv6YhDomainJoinedInputRequest
    | PostureUpdateParams.ZR7Sv6YhOsVersionInputRequest
    | PostureUpdateParams.ZR7Sv6YhFirewallInputRequest
    | PostureUpdateParams.ZR7Sv6YhSentineloneInputRequest
    | PostureUpdateParams.ZR7Sv6YhCarbonblackInputRequest
    | PostureUpdateParams.ZR7Sv6YhDiskEncryptionInputRequest
    | PostureUpdateParams.ZR7Sv6YhApplicationInputRequest
    | PostureUpdateParams.ZR7Sv6YhClientCertificateInputRequest
    | PostureUpdateParams.ZR7Sv6YhWorkspaceOneInputRequest
    | PostureUpdateParams.ZR7Sv6YhCrowdstrikeInputRequest
    | PostureUpdateParams.ZR7Sv6YhIntuneInputRequest
    | PostureUpdateParams.ZR7Sv6YhKolideInputRequest
    | PostureUpdateParams.ZR7Sv6YhTaniumInputRequest
    | PostureUpdateParams.ZR7Sv6YhSentineloneS2sInputRequest;

  /**
   * The conditions that the client must match to run the rule.
   */
  match?: Array<PostureUpdateParams.Match>;

  /**
   * Polling frequency for the WARP client posture check. Default: `5m` (poll every
   * five minutes). Minimum: `1m`.
   */
  schedule?: string;
}

export namespace PostureUpdateParams {
  export interface ZR7Sv6YhFileInputRequest {
    /**
     * Operating system
     */
    operating_system: 'windows' | 'linux' | 'mac';

    /**
     * File path.
     */
    path: string;

    /**
     * Whether or not file exists
     */
    exists?: boolean;

    /**
     * SHA-256.
     */
    sha256?: string;

    /**
     * Signing certificate thumbprint.
     */
    thumbprint?: string;
  }

  export interface ZR7Sv6YhUniqueClientIDInputRequest {
    /**
     * List ID.
     */
    id: string;

    /**
     * Operating System
     */
    operating_system: 'android' | 'ios' | 'chromeos';
  }

  export interface ZR7Sv6YhDomainJoinedInputRequest {
    /**
     * Operating System
     */
    operating_system: 'windows';

    /**
     * Domain
     */
    domain?: string;
  }

  export interface ZR7Sv6YhOsVersionInputRequest {
    /**
     * Operating System
     */
    operating_system: 'windows';

    /**
     * Operator
     */
    operator: '<' | '<=' | '>' | '>=' | '==';

    /**
     * Version of OS
     */
    version: string;

    /**
     * Operating System Distribution Name (linux only)
     */
    os_distro_name?: string;

    /**
     * Version of OS Distribution (linux only)
     */
    os_distro_revision?: string;

    /**
     * Product Verison Extra that Mac OS uses (mac only)
     */
    os_version_extra?: string;
  }

  export interface ZR7Sv6YhFirewallInputRequest {
    /**
     * Enabled
     */
    enabled: boolean;

    /**
     * Operating System
     */
    operating_system: 'windows' | 'mac';
  }

  export interface ZR7Sv6YhSentineloneInputRequest {
    /**
     * Operating system
     */
    operating_system: 'windows' | 'linux' | 'mac';

    /**
     * File path.
     */
    path: string;

    /**
     * SHA-256.
     */
    sha256?: string;

    /**
     * Signing certificate thumbprint.
     */
    thumbprint?: string;
  }

  export interface ZR7Sv6YhCarbonblackInputRequest {
    /**
     * Operating system
     */
    operating_system: 'windows' | 'linux' | 'mac';

    /**
     * File path.
     */
    path: string;

    /**
     * SHA-256.
     */
    sha256?: string;

    /**
     * Signing certificate thumbprint.
     */
    thumbprint?: string;
  }

  export interface ZR7Sv6YhDiskEncryptionInputRequest {
    /**
     * List of volume names to be checked for encryption.
     */
    checkDisks?: Array<string>;

    /**
     * Whether to check all disks for encryption.
     */
    requireAll?: boolean;
  }

  export interface ZR7Sv6YhApplicationInputRequest {
    /**
     * Operating system
     */
    operating_system: 'windows' | 'linux' | 'mac';

    /**
     * Path for the application.
     */
    path: string;

    /**
     * SHA-256.
     */
    sha256?: string;

    /**
     * Signing certificate thumbprint.
     */
    thumbprint?: string;
  }

  export interface ZR7Sv6YhClientCertificateInputRequest {
    /**
     * UUID of Cloudflare managed certificate.
     */
    certificate_id: string;

    /**
     * Common Name that is protected by the certificate
     */
    cn: string;
  }

  export interface ZR7Sv6YhWorkspaceOneInputRequest {
    /**
     * Compliance Status
     */
    compliance_status: 'compliant' | 'noncompliant' | 'unknown';

    /**
     * Posture Integration ID.
     */
    connection_id: string;
  }

  export interface ZR7Sv6YhCrowdstrikeInputRequest {
    /**
     * Posture Integration ID.
     */
    connection_id: string;

    /**
     * Operator
     */
    operator?: '<' | '<=' | '>' | '>=' | '==';

    /**
     * Os Version
     */
    os?: string;

    /**
     * overall
     */
    overall?: string;

    /**
     * SensorConfig
     */
    sensor_config?: string;

    /**
     * Version
     */
    version?: string;

    /**
     * Version Operator
     */
    versionOperator?: '<' | '<=' | '>' | '>=' | '==';
  }

  export interface ZR7Sv6YhIntuneInputRequest {
    /**
     * Compliance Status
     */
    compliance_status: 'compliant' | 'noncompliant' | 'unknown' | 'notapplicable' | 'ingraceperiod' | 'error';

    /**
     * Posture Integration ID.
     */
    connection_id: string;
  }

  export interface ZR7Sv6YhKolideInputRequest {
    /**
     * Posture Integration ID.
     */
    connection_id: string;

    /**
     * Count Operator
     */
    countOperator: '<' | '<=' | '>' | '>=' | '==';

    /**
     * The Number of Issues.
     */
    issue_count: string;
  }

  export interface ZR7Sv6YhTaniumInputRequest {
    /**
     * Posture Integration ID.
     */
    connection_id: string;

    /**
     * For more details on eid last seen, refer to the Tanium documentation.
     */
    eid_last_seen?: string;

    /**
     * Operator to evaluate risk_level or eid_last_seen.
     */
    operator?: '<' | '<=' | '>' | '>=' | '==';

    /**
     * For more details on risk level, refer to the Tanium documentation.
     */
    risk_level?: 'low' | 'medium' | 'high' | 'critical';

    /**
     * Score Operator
     */
    scoreOperator?: '<' | '<=' | '>' | '>=' | '==';

    /**
     * For more details on total score, refer to the Tanium documentation.
     */
    total_score?: number;
  }

  export interface ZR7Sv6YhSentineloneS2sInputRequest {
    /**
     * Posture Integration ID.
     */
    connection_id: string;

    /**
     * The Number of active threats.
     */
    active_threats?: number;

    /**
     * Whether device is infected.
     */
    infected?: boolean;

    /**
     * Whether device is active.
     */
    is_active?: boolean;

    /**
     * Network status of device.
     */
    network_status?: 'connected' | 'disconnected' | 'disconnecting' | 'connecting';

    /**
     * operator
     */
    operator?: '<' | '<=' | '>' | '>=' | '==';
  }

  export interface Match {
    platform?: 'windows' | 'mac' | 'linux' | 'android' | 'ios';
  }
}

export interface PostureDevicePostureRulesCreateDevicePostureRuleParams {
  /**
   * The name of the device posture rule.
   */
  name: string;

  /**
   * The type of device posture rule.
   */
  type:
    | 'file'
    | 'application'
    | 'tanium'
    | 'gateway'
    | 'warp'
    | 'disk_encryption'
    | 'sentinelone'
    | 'carbonblack'
    | 'firewall'
    | 'os_version'
    | 'domain_joined'
    | 'client_certificate'
    | 'unique_client_id'
    | 'kolide'
    | 'tanium_s2s'
    | 'crowdstrike_s2s'
    | 'intune'
    | 'workspace_one'
    | 'sentinelone_s2s';

  /**
   * The description of the device posture rule.
   */
  description?: string;

  /**
   * Sets the expiration time for a posture check result. If empty, the result
   * remains valid until it is overwritten by new data from the WARP client.
   */
  expiration?: string;

  /**
   * The value to be checked against.
   */
  input?:
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.ZR7Sv6YhFileInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.ZR7Sv6YhUniqueClientIDInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.ZR7Sv6YhDomainJoinedInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.ZR7Sv6YhOsVersionInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.ZR7Sv6YhFirewallInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.ZR7Sv6YhSentineloneInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.ZR7Sv6YhCarbonblackInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.ZR7Sv6YhDiskEncryptionInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.ZR7Sv6YhApplicationInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.ZR7Sv6YhClientCertificateInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.ZR7Sv6YhWorkspaceOneInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.ZR7Sv6YhCrowdstrikeInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.ZR7Sv6YhIntuneInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.ZR7Sv6YhKolideInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.ZR7Sv6YhTaniumInputRequest
    | PostureDevicePostureRulesCreateDevicePostureRuleParams.ZR7Sv6YhSentineloneS2sInputRequest;

  /**
   * The conditions that the client must match to run the rule.
   */
  match?: Array<PostureDevicePostureRulesCreateDevicePostureRuleParams.Match>;

  /**
   * Polling frequency for the WARP client posture check. Default: `5m` (poll every
   * five minutes). Minimum: `1m`.
   */
  schedule?: string;
}

export namespace PostureDevicePostureRulesCreateDevicePostureRuleParams {
  export interface ZR7Sv6YhFileInputRequest {
    /**
     * Operating system
     */
    operating_system: 'windows' | 'linux' | 'mac';

    /**
     * File path.
     */
    path: string;

    /**
     * Whether or not file exists
     */
    exists?: boolean;

    /**
     * SHA-256.
     */
    sha256?: string;

    /**
     * Signing certificate thumbprint.
     */
    thumbprint?: string;
  }

  export interface ZR7Sv6YhUniqueClientIDInputRequest {
    /**
     * List ID.
     */
    id: string;

    /**
     * Operating System
     */
    operating_system: 'android' | 'ios' | 'chromeos';
  }

  export interface ZR7Sv6YhDomainJoinedInputRequest {
    /**
     * Operating System
     */
    operating_system: 'windows';

    /**
     * Domain
     */
    domain?: string;
  }

  export interface ZR7Sv6YhOsVersionInputRequest {
    /**
     * Operating System
     */
    operating_system: 'windows';

    /**
     * Operator
     */
    operator: '<' | '<=' | '>' | '>=' | '==';

    /**
     * Version of OS
     */
    version: string;

    /**
     * Operating System Distribution Name (linux only)
     */
    os_distro_name?: string;

    /**
     * Version of OS Distribution (linux only)
     */
    os_distro_revision?: string;

    /**
     * Product Verison Extra that Mac OS uses (mac only)
     */
    os_version_extra?: string;
  }

  export interface ZR7Sv6YhFirewallInputRequest {
    /**
     * Enabled
     */
    enabled: boolean;

    /**
     * Operating System
     */
    operating_system: 'windows' | 'mac';
  }

  export interface ZR7Sv6YhSentineloneInputRequest {
    /**
     * Operating system
     */
    operating_system: 'windows' | 'linux' | 'mac';

    /**
     * File path.
     */
    path: string;

    /**
     * SHA-256.
     */
    sha256?: string;

    /**
     * Signing certificate thumbprint.
     */
    thumbprint?: string;
  }

  export interface ZR7Sv6YhCarbonblackInputRequest {
    /**
     * Operating system
     */
    operating_system: 'windows' | 'linux' | 'mac';

    /**
     * File path.
     */
    path: string;

    /**
     * SHA-256.
     */
    sha256?: string;

    /**
     * Signing certificate thumbprint.
     */
    thumbprint?: string;
  }

  export interface ZR7Sv6YhDiskEncryptionInputRequest {
    /**
     * List of volume names to be checked for encryption.
     */
    checkDisks?: Array<string>;

    /**
     * Whether to check all disks for encryption.
     */
    requireAll?: boolean;
  }

  export interface ZR7Sv6YhApplicationInputRequest {
    /**
     * Operating system
     */
    operating_system: 'windows' | 'linux' | 'mac';

    /**
     * Path for the application.
     */
    path: string;

    /**
     * SHA-256.
     */
    sha256?: string;

    /**
     * Signing certificate thumbprint.
     */
    thumbprint?: string;
  }

  export interface ZR7Sv6YhClientCertificateInputRequest {
    /**
     * UUID of Cloudflare managed certificate.
     */
    certificate_id: string;

    /**
     * Common Name that is protected by the certificate
     */
    cn: string;
  }

  export interface ZR7Sv6YhWorkspaceOneInputRequest {
    /**
     * Compliance Status
     */
    compliance_status: 'compliant' | 'noncompliant' | 'unknown';

    /**
     * Posture Integration ID.
     */
    connection_id: string;
  }

  export interface ZR7Sv6YhCrowdstrikeInputRequest {
    /**
     * Posture Integration ID.
     */
    connection_id: string;

    /**
     * Operator
     */
    operator?: '<' | '<=' | '>' | '>=' | '==';

    /**
     * Os Version
     */
    os?: string;

    /**
     * overall
     */
    overall?: string;

    /**
     * SensorConfig
     */
    sensor_config?: string;

    /**
     * Version
     */
    version?: string;

    /**
     * Version Operator
     */
    versionOperator?: '<' | '<=' | '>' | '>=' | '==';
  }

  export interface ZR7Sv6YhIntuneInputRequest {
    /**
     * Compliance Status
     */
    compliance_status: 'compliant' | 'noncompliant' | 'unknown' | 'notapplicable' | 'ingraceperiod' | 'error';

    /**
     * Posture Integration ID.
     */
    connection_id: string;
  }

  export interface ZR7Sv6YhKolideInputRequest {
    /**
     * Posture Integration ID.
     */
    connection_id: string;

    /**
     * Count Operator
     */
    countOperator: '<' | '<=' | '>' | '>=' | '==';

    /**
     * The Number of Issues.
     */
    issue_count: string;
  }

  export interface ZR7Sv6YhTaniumInputRequest {
    /**
     * Posture Integration ID.
     */
    connection_id: string;

    /**
     * For more details on eid last seen, refer to the Tanium documentation.
     */
    eid_last_seen?: string;

    /**
     * Operator to evaluate risk_level or eid_last_seen.
     */
    operator?: '<' | '<=' | '>' | '>=' | '==';

    /**
     * For more details on risk level, refer to the Tanium documentation.
     */
    risk_level?: 'low' | 'medium' | 'high' | 'critical';

    /**
     * Score Operator
     */
    scoreOperator?: '<' | '<=' | '>' | '>=' | '==';

    /**
     * For more details on total score, refer to the Tanium documentation.
     */
    total_score?: number;
  }

  export interface ZR7Sv6YhSentineloneS2sInputRequest {
    /**
     * Posture Integration ID.
     */
    connection_id: string;

    /**
     * The Number of active threats.
     */
    active_threats?: number;

    /**
     * Whether device is infected.
     */
    infected?: boolean;

    /**
     * Whether device is active.
     */
    is_active?: boolean;

    /**
     * Network status of device.
     */
    network_status?: 'connected' | 'disconnected' | 'disconnecting' | 'connecting';

    /**
     * operator
     */
    operator?: '<' | '<=' | '>' | '>=' | '==';
  }

  export interface Match {
    platform?: 'windows' | 'mac' | 'linux' | 'android' | 'ios';
  }
}

export namespace Postures {
  export import PostureRetrieveResponse = PosturesAPI.PostureRetrieveResponse;
  export import PostureUpdateResponse = PosturesAPI.PostureUpdateResponse;
  export import PostureDeleteResponse = PosturesAPI.PostureDeleteResponse;
  export import PostureDevicePostureRulesCreateDevicePostureRuleResponse = PosturesAPI.PostureDevicePostureRulesCreateDevicePostureRuleResponse;
  export import PostureDevicePostureRulesListDevicePostureRulesResponse = PosturesAPI.PostureDevicePostureRulesListDevicePostureRulesResponse;
  export import PostureUpdateParams = PosturesAPI.PostureUpdateParams;
  export import PostureDevicePostureRulesCreateDevicePostureRuleParams = PosturesAPI.PostureDevicePostureRulesCreateDevicePostureRuleParams;
  export import Integrations = IntegrationsAPI.Integrations;
  export import IntegrationRetrieveResponse = IntegrationsAPI.IntegrationRetrieveResponse;
  export import IntegrationUpdateResponse = IntegrationsAPI.IntegrationUpdateResponse;
  export import IntegrationDeleteResponse = IntegrationsAPI.IntegrationDeleteResponse;
  export import IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationResponse = IntegrationsAPI.IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationResponse;
  export import IntegrationDevicePostureIntegrationsListDevicePostureIntegrationsResponse = IntegrationsAPI.IntegrationDevicePostureIntegrationsListDevicePostureIntegrationsResponse;
  export import IntegrationUpdateParams = IntegrationsAPI.IntegrationUpdateParams;
  export import IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationParams = IntegrationsAPI.IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationParams;
}
