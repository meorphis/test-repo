// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ValidatesAPI from 'cloudflare/resources/accounts/dlp/patterns/validates';

export class Validates extends APIResource {
  /**
   * Validates whether this pattern is a valid regular expression. Rejects it if the
   * regular expression is too complex or can match an unbounded-length string. Your
   * regex will be rejected if it uses the Kleene Star -- be sure to bound the
   * maximum number of characters that can be matched.
   */
  dlpPatternValidationValidatePattern(
    accountIdentifier: string,
    body: ValidateDlpPatternValidationValidatePatternParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValidateDlpPatternValidationValidatePatternResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/dlp/patterns/validate`, { body, ...options });
  }
}

export interface ValidateDlpPatternValidationValidatePatternResponse {
  errors?: Array<ValidateDlpPatternValidationValidatePatternResponse.Error>;

  messages?: Array<ValidateDlpPatternValidationValidatePatternResponse.Message>;

  result?: ValidateDlpPatternValidationValidatePatternResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ValidateDlpPatternValidationValidatePatternResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    valid?: boolean;
  }
}

export interface ValidateDlpPatternValidationValidatePatternParams {
  /**
   * The regex pattern.
   */
  regex: string;
}

export namespace Validates {
  export import ValidateDlpPatternValidationValidatePatternResponse = ValidatesAPI.ValidateDlpPatternValidationValidatePatternResponse;
  export import ValidateDlpPatternValidationValidatePatternParams = ValidatesAPI.ValidateDlpPatternValidationValidatePatternParams;
}
