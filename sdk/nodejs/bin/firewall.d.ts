import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a DigitalOcean Cloud Firewall resource. This can be used to create,
 * modify, and delete Firewalls.
 */
export declare class Firewall extends pulumi.CustomResource {
    /**
     * Get an existing Firewall resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallState): Firewall;
    /**
     * A time value given in ISO8601 combined date and time format
     * that represents when the Firewall was created.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * The list of the IDs of the Droplets assigned
     * to the Firewall.
     */
    readonly dropletIds: pulumi.Output<string[] | undefined>;
    /**
     * The inbound access rule block for the Firewall.
     * The `inbound_rule` block is documented below.
     */
    readonly inboundRules: pulumi.Output<{
        portRange?: string;
        protocol?: string;
        sourceAddresses?: string[];
        sourceDropletIds?: number[];
        sourceLoadBalancerUids?: string[];
        sourceTags?: string[];
    }[] | undefined>;
    /**
     * The Firewall name
     */
    readonly name: pulumi.Output<string>;
    /**
     * The outbound access rule block for the Firewall.
     * The `outbound_rule` block is documented below.
     */
    readonly outboundRules: pulumi.Output<{
        destinationAddresses?: string[];
        destinationDropletIds?: number[];
        destinationLoadBalancerUids?: string[];
        destinationTags?: string[];
        portRange?: string;
        protocol?: string;
    }[] | undefined>;
    /**
     * An list of object containing the fields, "droplet_id",
     * "removing", and "status".  It is provided to detail exactly which Droplets
     * are having their security policies updated.  When empty, all changes
     * have been successfully applied.
     */
    readonly pendingChanges: pulumi.Output<{
        dropletId?: number;
        removing?: boolean;
        status?: string;
    }[]>;
    /**
     * A status string indicating the current state of the Firewall.
     * This can be "waiting", "succeeded", or "failed".
     */
    readonly status: pulumi.Output<string>;
    /**
     * The names of the Tags assigned to the Firewall.
     */
    readonly tags: pulumi.Output<string[] | undefined>;
    /**
     * Create a Firewall resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FirewallArgs, opts?: pulumi.ResourceOptions);
}
/**
 * Input properties used for looking up and filtering Firewall resources.
 */
export interface FirewallState {
    /**
     * A time value given in ISO8601 combined date and time format
     * that represents when the Firewall was created.
     */
    readonly createdAt?: pulumi.Input<string>;
    /**
     * The list of the IDs of the Droplets assigned
     * to the Firewall.
     */
    readonly dropletIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The inbound access rule block for the Firewall.
     * The `inbound_rule` block is documented below.
     */
    readonly inboundRules?: pulumi.Input<{
        portRange?: pulumi.Input<string>;
        protocol?: pulumi.Input<string>;
        sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
        sourceDropletIds?: pulumi.Input<pulumi.Input<number>[]>;
        sourceLoadBalancerUids?: pulumi.Input<pulumi.Input<string>[]>;
        sourceTags?: pulumi.Input<pulumi.Input<string>[]>;
    }[]>;
    /**
     * The Firewall name
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The outbound access rule block for the Firewall.
     * The `outbound_rule` block is documented below.
     */
    readonly outboundRules?: pulumi.Input<{
        destinationAddresses?: pulumi.Input<pulumi.Input<string>[]>;
        destinationDropletIds?: pulumi.Input<pulumi.Input<number>[]>;
        destinationLoadBalancerUids?: pulumi.Input<pulumi.Input<string>[]>;
        destinationTags?: pulumi.Input<pulumi.Input<string>[]>;
        portRange?: pulumi.Input<string>;
        protocol?: pulumi.Input<string>;
    }[]>;
    /**
     * An list of object containing the fields, "droplet_id",
     * "removing", and "status".  It is provided to detail exactly which Droplets
     * are having their security policies updated.  When empty, all changes
     * have been successfully applied.
     */
    readonly pendingChanges?: pulumi.Input<{
        dropletId?: pulumi.Input<number>;
        removing?: pulumi.Input<boolean>;
        status?: pulumi.Input<string>;
    }[]>;
    /**
     * A status string indicating the current state of the Firewall.
     * This can be "waiting", "succeeded", or "failed".
     */
    readonly status?: pulumi.Input<string>;
    /**
     * The names of the Tags assigned to the Firewall.
     */
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a Firewall resource.
 */
export interface FirewallArgs {
    /**
     * The list of the IDs of the Droplets assigned
     * to the Firewall.
     */
    readonly dropletIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The inbound access rule block for the Firewall.
     * The `inbound_rule` block is documented below.
     */
    readonly inboundRules?: pulumi.Input<{
        portRange?: pulumi.Input<string>;
        protocol?: pulumi.Input<string>;
        sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
        sourceDropletIds?: pulumi.Input<pulumi.Input<number>[]>;
        sourceLoadBalancerUids?: pulumi.Input<pulumi.Input<string>[]>;
        sourceTags?: pulumi.Input<pulumi.Input<string>[]>;
    }[]>;
    /**
     * The Firewall name
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The outbound access rule block for the Firewall.
     * The `outbound_rule` block is documented below.
     */
    readonly outboundRules?: pulumi.Input<{
        destinationAddresses?: pulumi.Input<pulumi.Input<string>[]>;
        destinationDropletIds?: pulumi.Input<pulumi.Input<number>[]>;
        destinationLoadBalancerUids?: pulumi.Input<pulumi.Input<string>[]>;
        destinationTags?: pulumi.Input<pulumi.Input<string>[]>;
        portRange?: pulumi.Input<string>;
        protocol?: pulumi.Input<string>;
    }[]>;
    /**
     * The names of the Tags assigned to the Firewall.
     */
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
}
