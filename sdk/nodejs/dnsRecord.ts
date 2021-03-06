// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Provides a DigitalOcean DNS record resource.
 */
export class DnsRecord extends pulumi.CustomResource {
    /**
     * Get an existing DnsRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DnsRecordState): DnsRecord {
        return new DnsRecord(name, <any>state, { id });
    }

    /**
     * The domain to add the record to
     */
    public readonly domain: pulumi.Output<string>;
    /**
     * The FQDN of the record
     */
    public /*out*/ readonly fqdn: pulumi.Output<string>;
    /**
     * The name of the record
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The port of the record, for SRV records.
     */
    public readonly port: pulumi.Output<string>;
    /**
     * The priority of the record, for MX and SRV
     * records.
     */
    public readonly priority: pulumi.Output<string>;
    /**
     * The time to live for the record, in seconds.
     */
    public readonly ttl: pulumi.Output<string>;
    /**
     * The type of record
     */
    public readonly type: pulumi.Output<string>;
    /**
     * The value of the record
     */
    public readonly value: pulumi.Output<string>;
    /**
     * The weight of the record, for SRV records.
     */
    public readonly weight: pulumi.Output<string>;

    /**
     * Create a DnsRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DnsRecordArgs, opts?: pulumi.ResourceOptions)
    constructor(name: string, argsOrState?: DnsRecordArgs | DnsRecordState, opts?: pulumi.ResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: DnsRecordState = argsOrState as DnsRecordState | undefined;
            inputs["domain"] = state ? state.domain : undefined;
            inputs["fqdn"] = state ? state.fqdn : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["port"] = state ? state.port : undefined;
            inputs["priority"] = state ? state.priority : undefined;
            inputs["ttl"] = state ? state.ttl : undefined;
            inputs["type"] = state ? state.type : undefined;
            inputs["value"] = state ? state.value : undefined;
            inputs["weight"] = state ? state.weight : undefined;
        } else {
            const args = argsOrState as DnsRecordArgs | undefined;
            if (!args || args.domain === undefined) {
                throw new Error("Missing required property 'domain'");
            }
            if (!args || args.type === undefined) {
                throw new Error("Missing required property 'type'");
            }
            inputs["domain"] = args ? args.domain : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["port"] = args ? args.port : undefined;
            inputs["priority"] = args ? args.priority : undefined;
            inputs["ttl"] = args ? args.ttl : undefined;
            inputs["type"] = args ? args.type : undefined;
            inputs["value"] = args ? args.value : undefined;
            inputs["weight"] = args ? args.weight : undefined;
            inputs["fqdn"] = undefined /*out*/;
        }
        super("digitalocean:index/dnsRecord:DnsRecord", name, inputs, opts);
    }
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
