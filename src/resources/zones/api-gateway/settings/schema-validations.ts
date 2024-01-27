// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SchemaValidationsAPI from 'cloudflare/resources/zones/api-gateway/settings/schema-validations';

export class SchemaValidations extends APIResource {
  /**
   * Retrieves zone level schema validation settings currently set on the zone
   */
  retrieve(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<SchemaValidationRetrieveResponse> {
    return this._client.get(`/zones/${zoneId}/api_gateway/settings/schema_validation`, options);
  }

  /**
   * Updates zone level schema validation settings on the zone
   */
  update(
    zoneId: string,
    body: SchemaValidationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SchemaValidationUpdateResponse> {
    return this._client.put(`/zones/${zoneId}/api_gateway/settings/schema_validation`, { body, ...options });
  }

  /**
   * Updates zone level schema validation settings on the zone
   */
  patch(
    zoneId: string,
    body: SchemaValidationPatchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SchemaValidationPatchResponse> {
    return this._client.patch(`/zones/${zoneId}/api_gateway/settings/schema_validation`, {
      body,
      ...options,
    });
  }
}

export interface SchemaValidationRetrieveResponse {
  /**
   * The default mitigation action used when there is no mitigation action defined on
   * the operation
   *
   * Mitigation actions are as follows:
   *
   * - `log` - log request when request does not conform to schema
   * - `block` - deny access to the site when request does not conform to schema
   *
   * A special value of of `none` will skip running schema validation entirely for
   * the request when there is no mitigation action defined on the operation
   */
  validation_default_mitigation_action?: 'none' | 'log' | 'block';

  /**
   * When set, this overrides both zone level and operation level mitigation actions.
   *
   * - `none` will skip running schema validation entirely for the request
   * - `null` indicates that no override is in place
   */
  validation_override_mitigation_action?: 'none' | null;
}

export interface SchemaValidationUpdateResponse {
  /**
   * The default mitigation action used when there is no mitigation action defined on
   * the operation
   *
   * Mitigation actions are as follows:
   *
   * - `log` - log request when request does not conform to schema
   * - `block` - deny access to the site when request does not conform to schema
   *
   * A special value of of `none` will skip running schema validation entirely for
   * the request when there is no mitigation action defined on the operation
   */
  validation_default_mitigation_action?: 'none' | 'log' | 'block';

  /**
   * When set, this overrides both zone level and operation level mitigation actions.
   *
   * - `none` will skip running schema validation entirely for the request
   * - `null` indicates that no override is in place
   */
  validation_override_mitigation_action?: 'none' | null;
}

export interface SchemaValidationPatchResponse {
  /**
   * The default mitigation action used when there is no mitigation action defined on
   * the operation
   *
   * Mitigation actions are as follows:
   *
   * - `log` - log request when request does not conform to schema
   * - `block` - deny access to the site when request does not conform to schema
   *
   * A special value of of `none` will skip running schema validation entirely for
   * the request when there is no mitigation action defined on the operation
   */
  validation_default_mitigation_action?: 'none' | 'log' | 'block';

  /**
   * When set, this overrides both zone level and operation level mitigation actions.
   *
   * - `none` will skip running schema validation entirely for the request
   * - `null` indicates that no override is in place
   */
  validation_override_mitigation_action?: 'none' | null;
}

export interface SchemaValidationUpdateParams {
  /**
   * The default mitigation action used when there is no mitigation action defined on
   * the operation
   *
   * Mitigation actions are as follows:
   *
   * - `log` - log request when request does not conform to schema
   * - `block` - deny access to the site when request does not conform to schema
   *
   * A special value of of `none` will skip running schema validation entirely for
   * the request when there is no mitigation action defined on the operation
   */
  validation_default_mitigation_action: 'none' | 'log' | 'block';

  /**
   * When set, this overrides both zone level and operation level mitigation actions.
   *
   * - `none` will skip running schema validation entirely for the request
   * - `null` indicates that no override is in place
   *
   * To clear any override, use the special value `disable_override` or `null`
   */
  validation_override_mitigation_action?: 'none' | 'disable_override' | null;
}

export interface SchemaValidationPatchParams {
  /**
   * The default mitigation action used when there is no mitigation action defined on
   * the operation Mitigation actions are as follows:
   *
   * - `log` - log request when request does not conform to schema
   * - `block` - deny access to the site when request does not conform to schema
   *
   * A special value of of `none` will skip running schema validation entirely for
   * the request when there is no mitigation action defined on the operation
   *
   * `null` will have no effect.
   */
  validation_default_mitigation_action?: 'none' | 'log' | 'block' | null;

  /**
   * When set, this overrides both zone level and operation level mitigation actions.
   *
   * - `none` will skip running schema validation entirely for the request
   *
   * To clear any override, use the special value `disable_override`
   *
   * `null` will have no effect.
   */
  validation_override_mitigation_action?: 'none' | 'disable_override' | null;
}

export namespace SchemaValidations {
  export import SchemaValidationRetrieveResponse = SchemaValidationsAPI.SchemaValidationRetrieveResponse;
  export import SchemaValidationUpdateResponse = SchemaValidationsAPI.SchemaValidationUpdateResponse;
  export import SchemaValidationPatchResponse = SchemaValidationsAPI.SchemaValidationPatchResponse;
  export import SchemaValidationUpdateParams = SchemaValidationsAPI.SchemaValidationUpdateParams;
  export import SchemaValidationPatchParams = SchemaValidationsAPI.SchemaValidationPatchParams;
}
