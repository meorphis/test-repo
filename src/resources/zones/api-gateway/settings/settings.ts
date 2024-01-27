// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as SchemaValidationsAPI from 'cloudflare/resources/zones/api-gateway/settings/schema-validations';

export class Settings extends APIResource {
  schemaValidations: SchemaValidationsAPI.SchemaValidations = new SchemaValidationsAPI.SchemaValidations(
    this._client,
  );
}

export namespace Settings {
  export import SchemaValidations = SchemaValidationsAPI.SchemaValidations;
  export import SchemaValidationRetrieveResponse = SchemaValidationsAPI.SchemaValidationRetrieveResponse;
  export import SchemaValidationUpdateResponse = SchemaValidationsAPI.SchemaValidationUpdateResponse;
  export import SchemaValidationPatchResponse = SchemaValidationsAPI.SchemaValidationPatchResponse;
  export import SchemaValidationUpdateParams = SchemaValidationsAPI.SchemaValidationUpdateParams;
  export import SchemaValidationPatchParams = SchemaValidationsAPI.SchemaValidationPatchParams;
}
