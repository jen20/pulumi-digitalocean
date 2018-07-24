import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a DigitalOcean Block Storage volume which can be attached to a Droplet in order to provide expanded storage.
 */
export declare class Volume extends pulumi.CustomResource {
    /**
     * Get an existing Volume resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VolumeState): Volume;
    /**
     * A free-form text field up to a limit of 1024 bytes to describe a block storage volume.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * A list of associated droplet ids
     */
    readonly dropletIds: pulumi.Output<number[]>;
    /**
     * The unique identifier for the block storage volume.
     */
    readonly id: pulumi.Output<string>;
    /**
     * A name for the block storage volume. Must be lowercase and be composed only of numbers, letters and "-", up to a limit of 64 characters.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The region that the block storage volume will be created in.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The size of the block storage volume in GiB.
     */
    readonly size: pulumi.Output<number>;
    /**
     * Create a Volume resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumeArgs, opts?: pulumi.ResourceOptions);
}
/**
 * Input properties used for looking up and filtering Volume resources.
 */
export interface VolumeState {
    /**
     * A free-form text field up to a limit of 1024 bytes to describe a block storage volume.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * A list of associated droplet ids
     */
    readonly dropletIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The unique identifier for the block storage volume.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * A name for the block storage volume. Must be lowercase and be composed only of numbers, letters and "-", up to a limit of 64 characters.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The region that the block storage volume will be created in.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * The size of the block storage volume in GiB.
     */
    readonly size?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a Volume resource.
 */
export interface VolumeArgs {
    /**
     * A free-form text field up to a limit of 1024 bytes to describe a block storage volume.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * A name for the block storage volume. Must be lowercase and be composed only of numbers, letters and "-", up to a limit of 64 characters.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The region that the block storage volume will be created in.
     */
    readonly region: pulumi.Input<string>;
    /**
     * The size of the block storage volume in GiB.
     */
    readonly size: pulumi.Input<number>;
}
