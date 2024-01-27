// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AnalyzesAPI from 'cloudflare/resources/zones/ssls/analyzes';
import * as RecommendationsAPI from 'cloudflare/resources/zones/ssls/recommendations';
import * as VerificationsAPI from 'cloudflare/resources/zones/ssls/verifications';
import * as CertificatePacksAPI from 'cloudflare/resources/zones/ssls/certificate-packs/certificate-packs';
import * as UniversalsAPI from 'cloudflare/resources/zones/ssls/universals/universals';

export class Ssls extends APIResource {
  analyzes: AnalyzesAPI.Analyzes = new AnalyzesAPI.Analyzes(this._client);
  certificatePacks: CertificatePacksAPI.CertificatePacks = new CertificatePacksAPI.CertificatePacks(
    this._client,
  );
  recommendations: RecommendationsAPI.Recommendations = new RecommendationsAPI.Recommendations(this._client);
  universals: UniversalsAPI.Universals = new UniversalsAPI.Universals(this._client);
  verifications: VerificationsAPI.Verifications = new VerificationsAPI.Verifications(this._client);
}

export namespace Ssls {
  export import Analyzes = AnalyzesAPI.Analyzes;
  export import AnalyzeAnalyzeCertificateAnalyzeCertificateResponse = AnalyzesAPI.AnalyzeAnalyzeCertificateAnalyzeCertificateResponse;
  export import AnalyzeAnalyzeCertificateAnalyzeCertificateParams = AnalyzesAPI.AnalyzeAnalyzeCertificateAnalyzeCertificateParams;
  export import CertificatePacks = CertificatePacksAPI.CertificatePacks;
  export import CertificatePackRetrieveResponse = CertificatePacksAPI.CertificatePackRetrieveResponse;
  export import CertificatePackUpdateResponse = CertificatePacksAPI.CertificatePackUpdateResponse;
  export import CertificatePackDeleteResponse = CertificatePacksAPI.CertificatePackDeleteResponse;
  export import CertificatePackCertificatePacksListCertificatePacksResponse = CertificatePacksAPI.CertificatePackCertificatePacksListCertificatePacksResponse;
  export import CertificatePackCertificatePacksListCertificatePacksParams = CertificatePacksAPI.CertificatePackCertificatePacksListCertificatePacksParams;
  export import Recommendations = RecommendationsAPI.Recommendations;
  export import RecommendationListResponse = RecommendationsAPI.RecommendationListResponse;
  export import Universals = UniversalsAPI.Universals;
  export import Verifications = VerificationsAPI.Verifications;
  export import VerificationUpdateResponse = VerificationsAPI.VerificationUpdateResponse;
  export import VerificationSslVerificationSslVerificationDetailsResponse = VerificationsAPI.VerificationSslVerificationSslVerificationDetailsResponse;
  export import VerificationUpdateParams = VerificationsAPI.VerificationUpdateParams;
  export import VerificationSslVerificationSslVerificationDetailsParams = VerificationsAPI.VerificationSslVerificationSslVerificationDetailsParams;
}
