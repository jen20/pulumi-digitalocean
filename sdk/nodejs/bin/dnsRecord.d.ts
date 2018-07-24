import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a DigitalOcean DNS record resource.
 */
export declare class DnsRecord extends pulumi.CustomResource {
    /**
     * Get an existing DnsRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DnsRecordState): DnsRecord;
    /**
     * The domain to add the record to
     */
    readonly domain: pulumi.Output<string>;
    /**
     * The FQDN of the record
     */
    readonly fqdn: pulumi.Output<string>;
    /**
     * The name of the record
     */
    readonly name: pulumi.Output<string>;
    /**
     * The port of the record, for SRV records.
     */
    readonly port: pulumi.Output<string>;
    /**
     * The priority of the record, for MX and SRV
     * records.
     */
    readonly priority: pulumi.Output<string>;
    /**
     * The time to live for the record, in seconds.
     */
    readonly ttl: pulumi.Output<string>;
    /**
     * The type of record
     */
    readonly type: pulumi.Output<string>;
    /**
     * The value of the record
     */
    readonly value: pulumi.Output<string>;
    /**
     * The weight of the record, for SRV records.
     */
    readonly weight: pulumi.Output<string>;
    /**
     * Create a DnsRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DnsRecordArgs, opts?: pulumi.ResourceOptions);
}
/**
 * Input properties used for looking up and filtering DnsRecord resources.
 */
export interface DnsRecordState {
    /**
     * The domain to add the record to
     */
    readonly domain?: pulumi.Input<string>;
    /**
     * The FQDN of the record
     */
    readonly fqdn?: pulumi.Input<string>;
    /**
     * The name of the record
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The port of the record, for SRV records.
     */
    readonly port?: pulumi.Input<string>;
    /**
     * The priority of the record, for MX and SRV
     * records.
     */
    readonly priority?: pulumi.Input<string>;
    /**
     * The time to live for the record, in seconds.
     */
    readonly ttl?: pulumi.Input<string>;
    /**
     * The type of record
     */
    readonly type?: pulumi.Input<string>;
    /**
     * The value of the record
     */
    readonly value?: pulumi.Input<string>;
    /**
     * The weight of the record, for SRV records.
     */
    readonly weight?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DnsRecord resource.
 */
export interface DnsRecordArgs {
    /**
     * The domain to add the record to
     */
    readonly domain: pulumi.Input<string>;
    /**
     * The name of the record
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The port of the record, for SRV records.
     */
    readonly port?: pulumi.Input<string>;
    /**
     * The priority of the record, for MX and SRV
     * records.
     */
    readonly priority?: pulumi.Input<string>;
    /**
     * The time to live for the record, in seconds.
     */
    readonly ttl?: pulumi.Input<string>;
    /**
     * The type of record
     */
    readonly type: pulumi.Input<string>;
    /**
     * The value of the record
     */
    readonly value?: pulumi.Input<string>;
    /**
     * The weight of the record, for SRV records.
     */
    readonly weight?: pulumi.Input<string>;
}
