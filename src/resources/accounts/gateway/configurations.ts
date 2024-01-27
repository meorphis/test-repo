// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConfigurationsAPI from 'cloudflare/resources/accounts/gateway/configurations';

export class Configurations extends APIResource {
  /**
   * Fetches the current Zero Trust account configuration.
   */
  zeroTrustAccountsGetZeroTrustAccountConfiguration(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigurationZeroTrustAccountsGetZeroTrustAccountConfigurationResponse> {
    return this._client.get(`/accounts/${identifier}/gateway/configuration`, options);
  }

  /**
   * Patches the current Zero Trust account configuration. This endpoint can update a
   * single subcollection of settings such as `antivirus`, `tls_decrypt`,
   * `activity_log`, `block_page`, `browser_isolation`, `fips`, `body_scanning`, or
   * `custom_certificate`, without updating the entire configuration object. Returns
   * an error if any collection of settings is not properly configured.
   */
  zeroTrustAccountsPatchZeroTrustAccountConfiguration(
    identifier: unknown,
    body: ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationResponse> {
    return this._client.patch(`/accounts/${identifier}/gateway/configuration`, { body, ...options });
  }

  /**
   * Updates the current Zero Trust account configuration.
   */
  zeroTrustAccountsUpdateZeroTrustAccountConfiguration(
    identifier: unknown,
    body: ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationResponse> {
    return this._client.put(`/accounts/${identifier}/gateway/configuration`, { body, ...options });
  }
}

export interface ConfigurationZeroTrustAccountsGetZeroTrustAccountConfigurationResponse {
  errors?: Array<ConfigurationZeroTrustAccountsGetZeroTrustAccountConfigurationResponse.Error>;

  messages?: Array<ConfigurationZeroTrustAccountsGetZeroTrustAccountConfigurationResponse.Message>;

  result?: ConfigurationZeroTrustAccountsGetZeroTrustAccountConfigurationResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConfigurationZeroTrustAccountsGetZeroTrustAccountConfigurationResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    created_at?: string;

    /**
     * account settings.
     */
    settings?: Result.Settings;

    updated_at?: string;
  }

  export namespace Result {
    /**
     * account settings.
     */
    export interface Settings {
      /**
       * Activity log settings.
       */
      activity_log?: Settings.ActivityLog;

      /**
       * Anti-virus settings.
       */
      antivirus?: Settings.Antivirus;

      /**
       * Block page layout settings.
       */
      block_page?: Settings.BlockPage;

      /**
       * DLP body scanning settings.
       */
      body_scanning?: Settings.BodyScanning;

      /**
       * Browser isolation settings.
       */
      browser_isolation?: Settings.BrowserIsolation;

      /**
       * Custom certificate settings for BYO-PKI.
       */
      custom_certificate?: Settings.CustomCertificate;

      /**
       * FIPS settings.
       */
      fips?: Settings.Fips;

      /**
       * Protocol Detection settings.
       */
      protocol_detection?: Settings.ProtocolDetection;

      /**
       * TLS interception settings.
       */
      tls_decrypt?: Settings.TlsDecrypt;
    }

    export namespace Settings {
      /**
       * Activity log settings.
       */
      export interface ActivityLog {
        /**
         * Enable activity logging.
         */
        enabled?: boolean;
      }

      /**
       * Anti-virus settings.
       */
      export interface Antivirus {
        /**
         * Enable anti-virus scanning on downloads.
         */
        enabled_download_phase?: boolean;

        /**
         * Enable anti-virus scanning on uploads.
         */
        enabled_upload_phase?: boolean;

        /**
         * Block requests for files that cannot be scanned.
         */
        fail_closed?: boolean;
      }

      /**
       * Block page layout settings.
       */
      export interface BlockPage {
        /**
         * Block page background color in #rrggbb format.
         */
        background_color?: string;

        /**
         * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
         */
        enabled?: boolean;

        /**
         * Block page footer text.
         */
        footer_text?: string;

        /**
         * Block page header text.
         */
        header_text?: string;

        /**
         * Full URL to the logo file.
         */
        logo_path?: string;

        /**
         * Admin email for users to contact.
         */
        mailto_address?: string;

        /**
         * Subject line for emails created from block page.
         */
        mailto_subject?: string;

        /**
         * Block page title.
         */
        name?: string;

        /**
         * Suppress detailed info at the bottom of the block page.
         */
        suppress_footer?: boolean;
      }

      /**
       * DLP body scanning settings.
       */
      export interface BodyScanning {
        /**
         * Set the inspection mode to either `deep` or `shallow`.
         */
        inspection_mode?: string;
      }

      /**
       * Browser isolation settings.
       */
      export interface BrowserIsolation {
        /**
         * Enable non-identity onramp support for Browser Isolation.
         */
        non_identity_enabled?: boolean;

        /**
         * Enable Clientless Browser Isolation.
         */
        url_browser_isolation_enabled?: boolean;
      }

      /**
       * Custom certificate settings for BYO-PKI.
       */
      export interface CustomCertificate {
        /**
         * Enable use of custom certificate authority for signing Gateway traffic.
         */
        enabled: boolean;

        /**
         * UUID of certificate (ID from MTLS certificate store).
         */
        id?: string;

        /**
         * Certificate status (internal).
         */
        binding_status?: string;

        updated_at?: string;
      }

      /**
       * FIPS settings.
       */
      export interface Fips {
        /**
         * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
         */
        tls?: boolean;
      }

      /**
       * Protocol Detection settings.
       */
      export interface ProtocolDetection {
        /**
         * Enable detecting protocol on initial bytes of client traffic.
         */
        enabled?: boolean;
      }

      /**
       * TLS interception settings.
       */
      export interface TlsDecrypt {
        /**
         * Enable inspecting encrypted HTTP traffic.
         */
        enabled?: boolean;
      }
    }
  }
}

export interface ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationResponse {
  errors?: Array<ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationResponse.Error>;

  messages?: Array<ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationResponse.Message>;

  result?: ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    created_at?: string;

    /**
     * account settings.
     */
    settings?: Result.Settings;

    updated_at?: string;
  }

  export namespace Result {
    /**
     * account settings.
     */
    export interface Settings {
      /**
       * Activity log settings.
       */
      activity_log?: Settings.ActivityLog;

      /**
       * Anti-virus settings.
       */
      antivirus?: Settings.Antivirus;

      /**
       * Block page layout settings.
       */
      block_page?: Settings.BlockPage;

      /**
       * DLP body scanning settings.
       */
      body_scanning?: Settings.BodyScanning;

      /**
       * Browser isolation settings.
       */
      browser_isolation?: Settings.BrowserIsolation;

      /**
       * Custom certificate settings for BYO-PKI.
       */
      custom_certificate?: Settings.CustomCertificate;

      /**
       * FIPS settings.
       */
      fips?: Settings.Fips;

      /**
       * Protocol Detection settings.
       */
      protocol_detection?: Settings.ProtocolDetection;

      /**
       * TLS interception settings.
       */
      tls_decrypt?: Settings.TlsDecrypt;
    }

    export namespace Settings {
      /**
       * Activity log settings.
       */
      export interface ActivityLog {
        /**
         * Enable activity logging.
         */
        enabled?: boolean;
      }

      /**
       * Anti-virus settings.
       */
      export interface Antivirus {
        /**
         * Enable anti-virus scanning on downloads.
         */
        enabled_download_phase?: boolean;

        /**
         * Enable anti-virus scanning on uploads.
         */
        enabled_upload_phase?: boolean;

        /**
         * Block requests for files that cannot be scanned.
         */
        fail_closed?: boolean;
      }

      /**
       * Block page layout settings.
       */
      export interface BlockPage {
        /**
         * Block page background color in #rrggbb format.
         */
        background_color?: string;

        /**
         * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
         */
        enabled?: boolean;

        /**
         * Block page footer text.
         */
        footer_text?: string;

        /**
         * Block page header text.
         */
        header_text?: string;

        /**
         * Full URL to the logo file.
         */
        logo_path?: string;

        /**
         * Admin email for users to contact.
         */
        mailto_address?: string;

        /**
         * Subject line for emails created from block page.
         */
        mailto_subject?: string;

        /**
         * Block page title.
         */
        name?: string;

        /**
         * Suppress detailed info at the bottom of the block page.
         */
        suppress_footer?: boolean;
      }

      /**
       * DLP body scanning settings.
       */
      export interface BodyScanning {
        /**
         * Set the inspection mode to either `deep` or `shallow`.
         */
        inspection_mode?: string;
      }

      /**
       * Browser isolation settings.
       */
      export interface BrowserIsolation {
        /**
         * Enable non-identity onramp support for Browser Isolation.
         */
        non_identity_enabled?: boolean;

        /**
         * Enable Clientless Browser Isolation.
         */
        url_browser_isolation_enabled?: boolean;
      }

      /**
       * Custom certificate settings for BYO-PKI.
       */
      export interface CustomCertificate {
        /**
         * Enable use of custom certificate authority for signing Gateway traffic.
         */
        enabled: boolean;

        /**
         * UUID of certificate (ID from MTLS certificate store).
         */
        id?: string;

        /**
         * Certificate status (internal).
         */
        binding_status?: string;

        updated_at?: string;
      }

      /**
       * FIPS settings.
       */
      export interface Fips {
        /**
         * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
         */
        tls?: boolean;
      }

      /**
       * Protocol Detection settings.
       */
      export interface ProtocolDetection {
        /**
         * Enable detecting protocol on initial bytes of client traffic.
         */
        enabled?: boolean;
      }

      /**
       * TLS interception settings.
       */
      export interface TlsDecrypt {
        /**
         * Enable inspecting encrypted HTTP traffic.
         */
        enabled?: boolean;
      }
    }
  }
}

export interface ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationResponse {
  errors?: Array<ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationResponse.Error>;

  messages?: Array<ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationResponse.Message>;

  result?: ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    created_at?: string;

    /**
     * account settings.
     */
    settings?: Result.Settings;

    updated_at?: string;
  }

  export namespace Result {
    /**
     * account settings.
     */
    export interface Settings {
      /**
       * Activity log settings.
       */
      activity_log?: Settings.ActivityLog;

      /**
       * Anti-virus settings.
       */
      antivirus?: Settings.Antivirus;

      /**
       * Block page layout settings.
       */
      block_page?: Settings.BlockPage;

      /**
       * DLP body scanning settings.
       */
      body_scanning?: Settings.BodyScanning;

      /**
       * Browser isolation settings.
       */
      browser_isolation?: Settings.BrowserIsolation;

      /**
       * Custom certificate settings for BYO-PKI.
       */
      custom_certificate?: Settings.CustomCertificate;

      /**
       * FIPS settings.
       */
      fips?: Settings.Fips;

      /**
       * Protocol Detection settings.
       */
      protocol_detection?: Settings.ProtocolDetection;

      /**
       * TLS interception settings.
       */
      tls_decrypt?: Settings.TlsDecrypt;
    }

    export namespace Settings {
      /**
       * Activity log settings.
       */
      export interface ActivityLog {
        /**
         * Enable activity logging.
         */
        enabled?: boolean;
      }

      /**
       * Anti-virus settings.
       */
      export interface Antivirus {
        /**
         * Enable anti-virus scanning on downloads.
         */
        enabled_download_phase?: boolean;

        /**
         * Enable anti-virus scanning on uploads.
         */
        enabled_upload_phase?: boolean;

        /**
         * Block requests for files that cannot be scanned.
         */
        fail_closed?: boolean;
      }

      /**
       * Block page layout settings.
       */
      export interface BlockPage {
        /**
         * Block page background color in #rrggbb format.
         */
        background_color?: string;

        /**
         * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
         */
        enabled?: boolean;

        /**
         * Block page footer text.
         */
        footer_text?: string;

        /**
         * Block page header text.
         */
        header_text?: string;

        /**
         * Full URL to the logo file.
         */
        logo_path?: string;

        /**
         * Admin email for users to contact.
         */
        mailto_address?: string;

        /**
         * Subject line for emails created from block page.
         */
        mailto_subject?: string;

        /**
         * Block page title.
         */
        name?: string;

        /**
         * Suppress detailed info at the bottom of the block page.
         */
        suppress_footer?: boolean;
      }

      /**
       * DLP body scanning settings.
       */
      export interface BodyScanning {
        /**
         * Set the inspection mode to either `deep` or `shallow`.
         */
        inspection_mode?: string;
      }

      /**
       * Browser isolation settings.
       */
      export interface BrowserIsolation {
        /**
         * Enable non-identity onramp support for Browser Isolation.
         */
        non_identity_enabled?: boolean;

        /**
         * Enable Clientless Browser Isolation.
         */
        url_browser_isolation_enabled?: boolean;
      }

      /**
       * Custom certificate settings for BYO-PKI.
       */
      export interface CustomCertificate {
        /**
         * Enable use of custom certificate authority for signing Gateway traffic.
         */
        enabled: boolean;

        /**
         * UUID of certificate (ID from MTLS certificate store).
         */
        id?: string;

        /**
         * Certificate status (internal).
         */
        binding_status?: string;

        updated_at?: string;
      }

      /**
       * FIPS settings.
       */
      export interface Fips {
        /**
         * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
         */
        tls?: boolean;
      }

      /**
       * Protocol Detection settings.
       */
      export interface ProtocolDetection {
        /**
         * Enable detecting protocol on initial bytes of client traffic.
         */
        enabled?: boolean;
      }

      /**
       * TLS interception settings.
       */
      export interface TlsDecrypt {
        /**
         * Enable inspecting encrypted HTTP traffic.
         */
        enabled?: boolean;
      }
    }
  }
}

export interface ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationParams {
  /**
   * account settings.
   */
  settings?: ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationParams.Settings;
}

export namespace ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationParams {
  /**
   * account settings.
   */
  export interface Settings {
    /**
     * Activity log settings.
     */
    activity_log?: Settings.ActivityLog;

    /**
     * Anti-virus settings.
     */
    antivirus?: Settings.Antivirus;

    /**
     * Block page layout settings.
     */
    block_page?: Settings.BlockPage;

    /**
     * DLP body scanning settings.
     */
    body_scanning?: Settings.BodyScanning;

    /**
     * Browser isolation settings.
     */
    browser_isolation?: Settings.BrowserIsolation;

    /**
     * Custom certificate settings for BYO-PKI.
     */
    custom_certificate?: Settings.CustomCertificate;

    /**
     * FIPS settings.
     */
    fips?: Settings.Fips;

    /**
     * Protocol Detection settings.
     */
    protocol_detection?: Settings.ProtocolDetection;

    /**
     * TLS interception settings.
     */
    tls_decrypt?: Settings.TlsDecrypt;
  }

  export namespace Settings {
    /**
     * Activity log settings.
     */
    export interface ActivityLog {
      /**
       * Enable activity logging.
       */
      enabled?: boolean;
    }

    /**
     * Anti-virus settings.
     */
    export interface Antivirus {
      /**
       * Enable anti-virus scanning on downloads.
       */
      enabled_download_phase?: boolean;

      /**
       * Enable anti-virus scanning on uploads.
       */
      enabled_upload_phase?: boolean;

      /**
       * Block requests for files that cannot be scanned.
       */
      fail_closed?: boolean;
    }

    /**
     * Block page layout settings.
     */
    export interface BlockPage {
      /**
       * Block page background color in #rrggbb format.
       */
      background_color?: string;

      /**
       * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
       */
      enabled?: boolean;

      /**
       * Block page footer text.
       */
      footer_text?: string;

      /**
       * Block page header text.
       */
      header_text?: string;

      /**
       * Full URL to the logo file.
       */
      logo_path?: string;

      /**
       * Admin email for users to contact.
       */
      mailto_address?: string;

      /**
       * Subject line for emails created from block page.
       */
      mailto_subject?: string;

      /**
       * Block page title.
       */
      name?: string;

      /**
       * Suppress detailed info at the bottom of the block page.
       */
      suppress_footer?: boolean;
    }

    /**
     * DLP body scanning settings.
     */
    export interface BodyScanning {
      /**
       * Set the inspection mode to either `deep` or `shallow`.
       */
      inspection_mode?: string;
    }

    /**
     * Browser isolation settings.
     */
    export interface BrowserIsolation {
      /**
       * Enable non-identity onramp support for Browser Isolation.
       */
      non_identity_enabled?: boolean;

      /**
       * Enable Clientless Browser Isolation.
       */
      url_browser_isolation_enabled?: boolean;
    }

    /**
     * Custom certificate settings for BYO-PKI.
     */
    export interface CustomCertificate {
      /**
       * Enable use of custom certificate authority for signing Gateway traffic.
       */
      enabled: boolean;

      /**
       * UUID of certificate (ID from MTLS certificate store).
       */
      id?: string;
    }

    /**
     * FIPS settings.
     */
    export interface Fips {
      /**
       * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
       */
      tls?: boolean;
    }

    /**
     * Protocol Detection settings.
     */
    export interface ProtocolDetection {
      /**
       * Enable detecting protocol on initial bytes of client traffic.
       */
      enabled?: boolean;
    }

    /**
     * TLS interception settings.
     */
    export interface TlsDecrypt {
      /**
       * Enable inspecting encrypted HTTP traffic.
       */
      enabled?: boolean;
    }
  }
}

export interface ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationParams {
  /**
   * account settings.
   */
  settings?: ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationParams.Settings;
}

export namespace ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationParams {
  /**
   * account settings.
   */
  export interface Settings {
    /**
     * Activity log settings.
     */
    activity_log?: Settings.ActivityLog;

    /**
     * Anti-virus settings.
     */
    antivirus?: Settings.Antivirus;

    /**
     * Block page layout settings.
     */
    block_page?: Settings.BlockPage;

    /**
     * DLP body scanning settings.
     */
    body_scanning?: Settings.BodyScanning;

    /**
     * Browser isolation settings.
     */
    browser_isolation?: Settings.BrowserIsolation;

    /**
     * Custom certificate settings for BYO-PKI.
     */
    custom_certificate?: Settings.CustomCertificate;

    /**
     * FIPS settings.
     */
    fips?: Settings.Fips;

    /**
     * Protocol Detection settings.
     */
    protocol_detection?: Settings.ProtocolDetection;

    /**
     * TLS interception settings.
     */
    tls_decrypt?: Settings.TlsDecrypt;
  }

  export namespace Settings {
    /**
     * Activity log settings.
     */
    export interface ActivityLog {
      /**
       * Enable activity logging.
       */
      enabled?: boolean;
    }

    /**
     * Anti-virus settings.
     */
    export interface Antivirus {
      /**
       * Enable anti-virus scanning on downloads.
       */
      enabled_download_phase?: boolean;

      /**
       * Enable anti-virus scanning on uploads.
       */
      enabled_upload_phase?: boolean;

      /**
       * Block requests for files that cannot be scanned.
       */
      fail_closed?: boolean;
    }

    /**
     * Block page layout settings.
     */
    export interface BlockPage {
      /**
       * Block page background color in #rrggbb format.
       */
      background_color?: string;

      /**
       * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
       */
      enabled?: boolean;

      /**
       * Block page footer text.
       */
      footer_text?: string;

      /**
       * Block page header text.
       */
      header_text?: string;

      /**
       * Full URL to the logo file.
       */
      logo_path?: string;

      /**
       * Admin email for users to contact.
       */
      mailto_address?: string;

      /**
       * Subject line for emails created from block page.
       */
      mailto_subject?: string;

      /**
       * Block page title.
       */
      name?: string;

      /**
       * Suppress detailed info at the bottom of the block page.
       */
      suppress_footer?: boolean;
    }

    /**
     * DLP body scanning settings.
     */
    export interface BodyScanning {
      /**
       * Set the inspection mode to either `deep` or `shallow`.
       */
      inspection_mode?: string;
    }

    /**
     * Browser isolation settings.
     */
    export interface BrowserIsolation {
      /**
       * Enable non-identity onramp support for Browser Isolation.
       */
      non_identity_enabled?: boolean;

      /**
       * Enable Clientless Browser Isolation.
       */
      url_browser_isolation_enabled?: boolean;
    }

    /**
     * Custom certificate settings for BYO-PKI.
     */
    export interface CustomCertificate {
      /**
       * Enable use of custom certificate authority for signing Gateway traffic.
       */
      enabled: boolean;

      /**
       * UUID of certificate (ID from MTLS certificate store).
       */
      id?: string;
    }

    /**
     * FIPS settings.
     */
    export interface Fips {
      /**
       * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
       */
      tls?: boolean;
    }

    /**
     * Protocol Detection settings.
     */
    export interface ProtocolDetection {
      /**
       * Enable detecting protocol on initial bytes of client traffic.
       */
      enabled?: boolean;
    }

    /**
     * TLS interception settings.
     */
    export interface TlsDecrypt {
      /**
       * Enable inspecting encrypted HTTP traffic.
       */
      enabled?: boolean;
    }
  }
}

export namespace Configurations {
  export import ConfigurationZeroTrustAccountsGetZeroTrustAccountConfigurationResponse = ConfigurationsAPI.ConfigurationZeroTrustAccountsGetZeroTrustAccountConfigurationResponse;
  export import ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationResponse = ConfigurationsAPI.ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationResponse;
  export import ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationResponse = ConfigurationsAPI.ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationResponse;
  export import ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationParams = ConfigurationsAPI.ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationParams;
  export import ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationParams = ConfigurationsAPI.ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationParams;
}
