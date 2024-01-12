/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as JulepApi from "../../api";
import * as core from "../../core";
export declare const ChatMlMessage: core.serialization.ObjectSchema<serializers.ChatMlMessage.Raw, JulepApi.ChatMlMessage>;
export declare namespace ChatMlMessage {
    interface Raw {
        role: serializers.ChatMlMessageRole.Raw;
        content: string;
        name?: string | null;
        created_at: string;
        id: string;
    }
}
