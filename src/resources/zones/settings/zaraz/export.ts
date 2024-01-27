// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ExportAPI from 'cloudflare/resources/zones/settings/zaraz/export';

export class Export extends APIResource {
  /**
   * Exports full current published Zaraz configuration for a zone, secret variables
   * included.
   */
  retrieve(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<ExportRetrieveResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/zaraz/v2/export`, options);
  }
}

export interface ExportRetrieveResponse {
  /**
   * Consent management configuration.
   */
  consent?: ExportRetrieveResponse.Consent;

  /**
   * Data layer compatibility mode enabled.
   */
  dataLayer?: boolean;

  /**
   * The key for Zaraz debug mode.
   */
  debugKey?: string;

  /**
   * Single Page Application support enabled.
   */
  historyChange?: boolean;

  /**
   * General Zaraz settings.
   */
  settings?: ExportRetrieveResponse.Settings;

  /**
   * Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID
   * and value is the tool configuration object.
   */
  tools?: unknown;

  /**
   * Triggers set up under Zaraz configuration, where key is the trigger
   * alpha-numeric ID and value is the trigger configuration.
   */
  triggers?: unknown;

  /**
   * Variables set up under Zaraz configuration, where key is the variable
   * alpha-numeric ID and value is the variable configuration. Values of variables of
   * type secret are not included.
   */
  variables?: unknown;

  /**
   * Zaraz internal version of the config.
   */
  zarazVersion?: number;
}

export namespace ExportRetrieveResponse {
  /**
   * Consent management configuration.
   */
  export interface Consent {
    enabled: boolean;

    buttonTextTranslations?: Consent.ButtonTextTranslations;

    companyEmail?: string;

    companyName?: string;

    companyStreetAddress?: string;

    consentModalIntroHTML?: string;

    /**
     * Object where keys are language codes
     */
    consentModalIntroHTMLWithTranslations?: unknown;

    cookieName?: string;

    customCSS?: string;

    customIntroDisclaimerDismissed?: boolean;

    defaultLanguage?: string;

    hideModal?: boolean;

    /**
     * Object where keys are purpose alpha-numeric IDs
     */
    purposes?: unknown;

    /**
     * Object where keys are purpose alpha-numeric IDs
     */
    purposesWithTranslations?: unknown;
  }

  export namespace Consent {
    export interface ButtonTextTranslations {
      /**
       * Object where keys are language codes
       */
      accept_all: unknown;

      /**
       * Object where keys are language codes
       */
      confirm_my_choices: unknown;

      /**
       * Object where keys are language codes
       */
      reject_all: unknown;
    }
  }

  /**
   * General Zaraz settings.
   */
  export interface Settings {
    /**
     * Automatic injection of Zaraz scripts enabled.
     */
    autoInjectScript: boolean;

    /**
     * Details of the worker that receives and edits Zaraz Context object.
     */
    contextEnricher?: Settings.ContextEnricher;

    /**
     * The domain Zaraz will use for writing and reading its cookies.
     */
    cookieDomain?: string;

    /**
     * Ecommerce API enabled.
     */
    ecommerce?: boolean;

    /**
     * Custom endpoint for server-side track events.
     */
    eventsApiPath?: string;

    /**
     * Hiding external referrer URL enabled.
     */
    hideExternalReferer?: boolean;

    /**
     * Trimming IP address enabled.
     */
    hideIPAddress?: boolean;

    /**
     * Removing URL query params enabled.
     */
    hideQueryParams?: boolean;

    /**
     * Removing sensitive data from User Aagent string enabled.
     */
    hideUserAgent?: boolean;

    /**
     * Custom endpoint for Zaraz init script.
     */
    initPath?: string;

    /**
     * Injection of Zaraz scripts into iframes enabled.
     */
    injectIframes?: boolean;

    /**
     * Custom path for Managed Components server functionalities.
     */
    mcRootPath?: string;

    /**
     * Custom endpoint for Zaraz main script.
     */
    scriptPath?: string;

    /**
     * Custom endpoint for Zaraz tracking requests.
     */
    trackPath?: string;
  }

  export namespace Settings {
    /**
     * Details of the worker that receives and edits Zaraz Context object.
     */
    export interface ContextEnricher {
      escapedWorkerName: string;

      workerTag: string;
    }
  }
}

export namespace Export {
  export import ExportRetrieveResponse = ExportAPI.ExportRetrieveResponse;
}
