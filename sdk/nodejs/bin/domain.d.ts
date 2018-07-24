import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a DigitalOcean domain resource.
 */
export declare class Domain extends pulumi.CustomResource {
    /**
     * Get an existing Domain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DomainState): Domain;
    /**
     * The IP address of the domain. This IP
     * is used to created an initial A record for the domain. It is required
     * upstream by the DigitalOcean API.
     */
    readonly ipAddress: pulumi.Output<string>;
    /**
     * The name of the domain
     */
    readonly name: pulumi.Output<string>;
    /**
     * Create a Domain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DomainArgs, opts?: pulumi.ResourceOptions);
}
/**
 * Input properties used for looking up and filtering Domain resources.
 */
export interface DomainState {
    /**
     * The IP address of the domain. This IP
     * is used to created an initial A record for the domain. It is required
     * upstream by the DigitalOcean API.
     */
    readonly ipAddress?: pulumi.Input<string>;
    /**
     * The name of the domain
     */
    readonly name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Domain resource.
 */
export interface DomainArgs {
    /**
     * The IP address of the domain. This IP
     * is used to created an initial A record for the domain. It is required
     * upstream by the DigitalOcean API.
     */
    readonly ipAddress: pulumi.Input<string>;
    /**
     * The name of the domain
     */
    readonly name?: pulumi.Input<string>;
}
