// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AccountSettingsAPI from 'cloudflare/resources/accounts/workers/account-settings';
import * as DomainsAPI from 'cloudflare/resources/accounts/workers/domains';
import * as SubdomainsAPI from 'cloudflare/resources/accounts/workers/subdomains';
import * as DeploymentsAPI from 'cloudflare/resources/accounts/workers/deployments/deployments';
import * as DispatchAPI from 'cloudflare/resources/accounts/workers/dispatch/dispatch';
import * as DurableObjectsAPI from 'cloudflare/resources/accounts/workers/durable-objects/durable-objects';
import * as QueuesAPI from 'cloudflare/resources/accounts/workers/queues/queues';
import * as ScriptsAPI from 'cloudflare/resources/accounts/workers/scripts/scripts';
import * as ServicesAPI from 'cloudflare/resources/accounts/workers/services/services';

export class Workers extends APIResource {
  accountSettings: AccountSettingsAPI.AccountSettings = new AccountSettingsAPI.AccountSettings(this._client);
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  durableObjects: DurableObjectsAPI.DurableObjects = new DurableObjectsAPI.DurableObjects(this._client);
  queues: QueuesAPI.Queues = new QueuesAPI.Queues(this._client);
  scripts: ScriptsAPI.Scripts = new ScriptsAPI.Scripts(this._client);
  subdomains: SubdomainsAPI.Subdomains = new SubdomainsAPI.Subdomains(this._client);
  dispatch: DispatchAPI.Dispatch = new DispatchAPI.Dispatch(this._client);
  services: ServicesAPI.Services = new ServicesAPI.Services(this._client);
}

export namespace Workers {
  export import AccountSettings = AccountSettingsAPI.AccountSettings;
  export import AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse = AccountSettingsAPI.AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse;
  export import AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse = AccountSettingsAPI.AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse;
  export import AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsParams = AccountSettingsAPI.AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsParams;
  export import Deployments = DeploymentsAPI.Deployments;
  export import Domains = DomainsAPI.Domains;
  export import DomainRetrieveResponse = DomainsAPI.DomainRetrieveResponse;
  export import DomainWorkerDomainAttachToDomainResponse = DomainsAPI.DomainWorkerDomainAttachToDomainResponse;
  export import DomainWorkerDomainListDomainsResponse = DomainsAPI.DomainWorkerDomainListDomainsResponse;
  export import DomainWorkerDomainAttachToDomainParams = DomainsAPI.DomainWorkerDomainAttachToDomainParams;
  export import DomainWorkerDomainListDomainsParams = DomainsAPI.DomainWorkerDomainListDomainsParams;
  export import DurableObjects = DurableObjectsAPI.DurableObjects;
  export import Queues = QueuesAPI.Queues;
  export import QueueRetrieveResponse = QueuesAPI.QueueRetrieveResponse;
  export import QueueUpdateResponse = QueuesAPI.QueueUpdateResponse;
  export import QueueListResponse = QueuesAPI.QueueListResponse;
  export import QueueDeleteResponse = QueuesAPI.QueueDeleteResponse;
  export import QueueQueueCreateQueueResponse = QueuesAPI.QueueQueueCreateQueueResponse;
  export import QueueUpdateParams = QueuesAPI.QueueUpdateParams;
  export import QueueQueueCreateQueueParams = QueuesAPI.QueueQueueCreateQueueParams;
  export import Scripts = ScriptsAPI.Scripts;
  export import ScriptUpdateResponse = ScriptsAPI.ScriptUpdateResponse;
  export import ScriptWorkerScriptListWorkersResponse = ScriptsAPI.ScriptWorkerScriptListWorkersResponse;
  export import ScriptUpdateParams = ScriptsAPI.ScriptUpdateParams;
  export import ScriptDeleteParams = ScriptsAPI.ScriptDeleteParams;
  export import Subdomains = SubdomainsAPI.Subdomains;
  export import SubdomainWorkerSubdomainCreateSubdomainResponse = SubdomainsAPI.SubdomainWorkerSubdomainCreateSubdomainResponse;
  export import SubdomainWorkerSubdomainGetSubdomainResponse = SubdomainsAPI.SubdomainWorkerSubdomainGetSubdomainResponse;
  export import SubdomainWorkerSubdomainCreateSubdomainParams = SubdomainsAPI.SubdomainWorkerSubdomainCreateSubdomainParams;
  export import Dispatch = DispatchAPI.Dispatch;
  export import Services = ServicesAPI.Services;
}
