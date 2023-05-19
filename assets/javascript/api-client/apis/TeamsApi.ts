/* tslint:disable */
/* eslint-disable */
/**
 * Convolys
 * Get more out of conversations
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Invitation,
  PaginatedInvitationList,
  PaginatedTeamList,
  PatchedInvitation,
  PatchedTeam,
  Team,
} from '../models';
import {
    InvitationFromJSON,
    InvitationToJSON,
    PaginatedInvitationListFromJSON,
    PaginatedInvitationListToJSON,
    PaginatedTeamListFromJSON,
    PaginatedTeamListToJSON,
    PatchedInvitationFromJSON,
    PatchedInvitationToJSON,
    PatchedTeamFromJSON,
    PatchedTeamToJSON,
    TeamFromJSON,
    TeamToJSON,
} from '../models';

export interface InvitationsCreateRequest {
    teamSlug: string;
    invitation: Invitation;
}

export interface InvitationsDestroyRequest {
    id: string;
    teamSlug: string;
}

export interface InvitationsListRequest {
    teamSlug: string;
    page?: number;
}

export interface InvitationsPartialUpdateRequest {
    id: string;
    teamSlug: string;
    patchedInvitation?: PatchedInvitation;
}

export interface InvitationsRetrieveRequest {
    id: string;
    teamSlug: string;
}

export interface InvitationsUpdateRequest {
    id: string;
    teamSlug: string;
    invitation: Invitation;
}

export interface TeamsCreateRequest {
    team: Team;
}

export interface TeamsDestroyRequest {
    id: number;
}

export interface TeamsListRequest {
    page?: number;
}

export interface TeamsPartialUpdateRequest {
    id: number;
    patchedTeam?: PatchedTeam;
}

export interface TeamsRetrieveRequest {
    id: number;
}

export interface TeamsUpdateRequest {
    id: number;
    team: Team;
}

/**
 * 
 */
export class TeamsApi extends runtime.BaseAPI {

    /**
     */
    async invitationsCreateRaw(requestParameters: InvitationsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Invitation>> {
        if (requestParameters.teamSlug === null || requestParameters.teamSlug === undefined) {
            throw new runtime.RequiredError('teamSlug','Required parameter requestParameters.teamSlug was null or undefined when calling invitationsCreate.');
        }

        if (requestParameters.invitation === null || requestParameters.invitation === undefined) {
            throw new runtime.RequiredError('invitation','Required parameter requestParameters.invitation was null or undefined when calling invitationsCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/a/{team_slug}/team/api/invitations/`.replace(`{${"team_slug"}}`, encodeURIComponent(String(requestParameters.teamSlug))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InvitationToJSON(requestParameters.invitation),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvitationFromJSON(jsonValue));
    }

    /**
     */
    async invitationsCreate(requestParameters: InvitationsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Invitation> {
        const response = await this.invitationsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async invitationsDestroyRaw(requestParameters: InvitationsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling invitationsDestroy.');
        }

        if (requestParameters.teamSlug === null || requestParameters.teamSlug === undefined) {
            throw new runtime.RequiredError('teamSlug','Required parameter requestParameters.teamSlug was null or undefined when calling invitationsDestroy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/a/{team_slug}/team/api/invitations/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"team_slug"}}`, encodeURIComponent(String(requestParameters.teamSlug))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async invitationsDestroy(requestParameters: InvitationsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.invitationsDestroyRaw(requestParameters, initOverrides);
    }

    /**
     */
    async invitationsListRaw(requestParameters: InvitationsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedInvitationList>> {
        if (requestParameters.teamSlug === null || requestParameters.teamSlug === undefined) {
            throw new runtime.RequiredError('teamSlug','Required parameter requestParameters.teamSlug was null or undefined when calling invitationsList.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/a/{team_slug}/team/api/invitations/`.replace(`{${"team_slug"}}`, encodeURIComponent(String(requestParameters.teamSlug))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedInvitationListFromJSON(jsonValue));
    }

    /**
     */
    async invitationsList(requestParameters: InvitationsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedInvitationList> {
        const response = await this.invitationsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async invitationsPartialUpdateRaw(requestParameters: InvitationsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Invitation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling invitationsPartialUpdate.');
        }

        if (requestParameters.teamSlug === null || requestParameters.teamSlug === undefined) {
            throw new runtime.RequiredError('teamSlug','Required parameter requestParameters.teamSlug was null or undefined when calling invitationsPartialUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/a/{team_slug}/team/api/invitations/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"team_slug"}}`, encodeURIComponent(String(requestParameters.teamSlug))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedInvitationToJSON(requestParameters.patchedInvitation),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvitationFromJSON(jsonValue));
    }

    /**
     */
    async invitationsPartialUpdate(requestParameters: InvitationsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Invitation> {
        const response = await this.invitationsPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async invitationsRetrieveRaw(requestParameters: InvitationsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Invitation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling invitationsRetrieve.');
        }

        if (requestParameters.teamSlug === null || requestParameters.teamSlug === undefined) {
            throw new runtime.RequiredError('teamSlug','Required parameter requestParameters.teamSlug was null or undefined when calling invitationsRetrieve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/a/{team_slug}/team/api/invitations/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"team_slug"}}`, encodeURIComponent(String(requestParameters.teamSlug))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvitationFromJSON(jsonValue));
    }

    /**
     */
    async invitationsRetrieve(requestParameters: InvitationsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Invitation> {
        const response = await this.invitationsRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async invitationsUpdateRaw(requestParameters: InvitationsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Invitation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling invitationsUpdate.');
        }

        if (requestParameters.teamSlug === null || requestParameters.teamSlug === undefined) {
            throw new runtime.RequiredError('teamSlug','Required parameter requestParameters.teamSlug was null or undefined when calling invitationsUpdate.');
        }

        if (requestParameters.invitation === null || requestParameters.invitation === undefined) {
            throw new runtime.RequiredError('invitation','Required parameter requestParameters.invitation was null or undefined when calling invitationsUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/a/{team_slug}/team/api/invitations/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"team_slug"}}`, encodeURIComponent(String(requestParameters.teamSlug))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: InvitationToJSON(requestParameters.invitation),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvitationFromJSON(jsonValue));
    }

    /**
     */
    async invitationsUpdate(requestParameters: InvitationsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Invitation> {
        const response = await this.invitationsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async teamsCreateRaw(requestParameters: TeamsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Team>> {
        if (requestParameters.team === null || requestParameters.team === undefined) {
            throw new runtime.RequiredError('team','Required parameter requestParameters.team was null or undefined when calling teamsCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/teams/api/teams/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TeamToJSON(requestParameters.team),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TeamFromJSON(jsonValue));
    }

    /**
     */
    async teamsCreate(requestParameters: TeamsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Team> {
        const response = await this.teamsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async teamsDestroyRaw(requestParameters: TeamsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling teamsDestroy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/teams/api/teams/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async teamsDestroy(requestParameters: TeamsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.teamsDestroyRaw(requestParameters, initOverrides);
    }

    /**
     */
    async teamsListRaw(requestParameters: TeamsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedTeamList>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/teams/api/teams/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedTeamListFromJSON(jsonValue));
    }

    /**
     */
    async teamsList(requestParameters: TeamsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedTeamList> {
        const response = await this.teamsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async teamsPartialUpdateRaw(requestParameters: TeamsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Team>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling teamsPartialUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/teams/api/teams/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedTeamToJSON(requestParameters.patchedTeam),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TeamFromJSON(jsonValue));
    }

    /**
     */
    async teamsPartialUpdate(requestParameters: TeamsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Team> {
        const response = await this.teamsPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async teamsRetrieveRaw(requestParameters: TeamsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Team>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling teamsRetrieve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/teams/api/teams/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TeamFromJSON(jsonValue));
    }

    /**
     */
    async teamsRetrieve(requestParameters: TeamsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Team> {
        const response = await this.teamsRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async teamsUpdateRaw(requestParameters: TeamsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Team>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling teamsUpdate.');
        }

        if (requestParameters.team === null || requestParameters.team === undefined) {
            throw new runtime.RequiredError('team','Required parameter requestParameters.team was null or undefined when calling teamsUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/teams/api/teams/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TeamToJSON(requestParameters.team),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TeamFromJSON(jsonValue));
    }

    /**
     */
    async teamsUpdate(requestParameters: TeamsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Team> {
        const response = await this.teamsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
