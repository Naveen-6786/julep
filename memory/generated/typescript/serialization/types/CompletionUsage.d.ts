/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as JulepApi from "../../api";
import * as core from "../../core";
export declare const CompletionUsage: core.serialization.ObjectSchema<serializers.CompletionUsage.Raw, JulepApi.CompletionUsage>;
export declare namespace CompletionUsage {
    interface Raw {
        completion_tokens: number;
        prompt_tokens: number;
        total_tokens: number;
    }
}
