import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a DigitalOcean Floating IP to represent a publicly-accessible static IP addresses that can be mapped to one of your Droplets.
 */
export declare class FloatingIp extends pulumi.CustomResource {
    /**
     * Get an existing FloatingIp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FloatingIpState): FloatingIp;
    /**
     * The ID of Droplet that the Floating IP will be assigned to.
     */
    readonly dropletId: pulumi.Output<number | undefined>;
    /**
     * The IP Address of the resource
     */
    readonly ipAddress: pulumi.Output<string>;
    /**
     * The region that the Floating IP is reserved to.
     */
    readonly region: pulumi.Output<string>;
    /**
     * Create a FloatingIp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FloatingIpArgs, opts?: pulumi.ResourceOptions);
}
/**
 * Input properties used for looking up and filtering FloatingIp resources.
 */
export interface FloatingIpState {
    /**
     * The ID of Droplet that the Floating IP will be assigned to.
     */
    readonly dropletId?: pulumi.Input<number>;
    /**
     * The IP Address of the resource
     */
    readonly ipAddress?: pulumi.Input<string>;
    /**
     * The region that the Floating IP is reserved to.
     */
    readonly region?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a FloatingIp resource.
 */
export interface FloatingIpArgs {
    /**
     * The ID of Droplet that the Floating IP will be assigned to.
     */
    readonly dropletId?: pulumi.Input<number>;
    /**
     * The IP Address of the resource
     */
    readonly ipAddress?: pulumi.Input<string>;
    /**
     * The region that the Floating IP is reserved to.
     */
    readonly region: pulumi.Input<string>;
}
