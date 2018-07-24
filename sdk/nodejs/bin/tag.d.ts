import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a DigitalOcean Tag resource. A Tag is a label that can be applied to a
 * droplet resource in order to better organize or facilitate the lookups and
 * actions on it. Tags created with this resource can be referenced in your droplet
 * configuration via their ID or name.
 */
export declare class Tag extends pulumi.CustomResource {
    /**
     * Get an existing Tag resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TagState): Tag;
    /**
     * The name of the tag
     */
    readonly name: pulumi.Output<string>;
    /**
     * Create a Tag resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TagArgs, opts?: pulumi.ResourceOptions);
}
/**
 * Input properties used for looking up and filtering Tag resources.
 */
export interface TagState {
    /**
     * The name of the tag
     */
    readonly name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Tag resource.
 */
export interface TagArgs {
    /**
     * The name of the tag
     */
    readonly name?: pulumi.Input<string>;
}
