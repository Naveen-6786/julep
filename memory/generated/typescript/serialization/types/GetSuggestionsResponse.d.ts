/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as JulepApi from "../../api";
import * as core from "../../core";
export declare const GetSuggestionsResponse: core.serialization.ObjectSchema<serializers.GetSuggestionsResponse.Raw, JulepApi.GetSuggestionsResponse>;
export declare namespace GetSuggestionsResponse {
    interface Raw {
        items?: serializers.Suggestion.Raw[] | null;
    }
}
