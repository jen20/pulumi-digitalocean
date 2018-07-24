// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Provides a DigitalOcean SSH key resource to allow you manage SSH
 * keys for Droplet access. Keys created with this resource
 * can be referenced in your droplet configuration via their ID or
 * fingerprint.
 */
export class SshKey extends pulumi.CustomResource {
    /**
     * Get an existing SshKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SshKeyState): SshKey {
        return new SshKey(name, <any>state, { id });
    }

    /**
     * The fingerprint of the SSH key
     */
    public /*out*/ readonly fingerprint: pulumi.Output<string>;
    /**
     * The unique ID of the key
     */
    public /*out*/ readonly id: pulumi.Output<string>;
    /**
     * The name of the SSH key for identification
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The public key. If this is a file, it
     * can be read using the file interpolation function
     */
    public readonly publicKey: pulumi.Output<string>;

    /**
     * Create a SshKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SshKeyArgs, opts?: pulumi.ResourceOptions)
    constructor(name: string, argsOrState?: SshKeyArgs | SshKeyState, opts?: pulumi.ResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: SshKeyState = argsOrState as SshKeyState | undefined;
            inputs["fingerprint"] = state ? state.fingerprint : undefined;
            inputs["id"] = state ? state.id : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["publicKey"] = state ? state.publicKey : undefined;
        } else {
            const args = argsOrState as SshKeyArgs | undefined;
            if (!args || args.publicKey === undefined) {
                throw new Error("Missing required property 'publicKey'");
            }
            inputs["name"] = args ? args.name : undefined;
            inputs["publicKey"] = args ? args.publicKey : undefined;
            inputs["fingerprint"] = undefined /*out*/;
            inputs["id"] = undefined /*out*/;
        }
        super("digitalocean:index/sshKey:SshKey", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SshKey resources.
 */
export interface SshKeyState {
    /**
     * The fingerprint of the SSH key
     */
    readonly fingerprint?: pulumi.Input<string>;
    /**
     * The unique ID of the key
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The name of the SSH key for identification
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The public key. If this is a file, it
     * can be read using the file interpolation function
     */
    readonly publicKey?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SshKey resource.
 */
export interface SshKeyArgs {
    /**
     * The name of the SSH key for identification
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The public key. If this is a file, it
     * can be read using the file interpolation function
     */
    readonly publicKey: pulumi.Input<string>;
}