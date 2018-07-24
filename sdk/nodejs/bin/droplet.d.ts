import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a DigitalOcean Droplet resource. This can be used to create,
 * modify, and delete Droplets. Droplets also support
 * [provisioning](/docs/provisioners/index.html).
 */
export declare class Droplet extends pulumi.CustomResource {
    /**
     * Get an existing Droplet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DropletState): Droplet;
    /**
     * Boolean controlling if backups are made. Defaults to
     * false.
     */
    readonly backups: pulumi.Output<boolean | undefined>;
    /**
     * The size of the instance's disk in GB
     */
    readonly disk: pulumi.Output<number>;
    /**
     * The Droplet image ID or slug.
     */
    readonly image: pulumi.Output<string>;
    /**
     * The IPv4 address
     */
    readonly ipv4Address: pulumi.Output<string>;
    /**
     * The private networking IPv4 address
     */
    readonly ipv4AddressPrivate: pulumi.Output<string>;
    /**
     * Boolean controlling if IPv6 is enabled. Defaults to false.
     */
    readonly ipv6: pulumi.Output<boolean | undefined>;
    /**
     * The IPv6 address
     */
    readonly ipv6Address: pulumi.Output<string>;
    /**
     * The private networking IPv6 address
     */
    readonly ipv6AddressPrivate: pulumi.Output<string>;
    /**
     * Is the Droplet locked
     */
    readonly locked: pulumi.Output<string>;
    /**
     * Boolean controlling whether monitoring agent is installed.
     * Defaults to false.
     */
    readonly monitoring: pulumi.Output<boolean | undefined>;
    /**
     * The Droplet name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Droplet hourly price
     */
    readonly priceHourly: pulumi.Output<number>;
    /**
     * Droplet monthly price
     */
    readonly priceMonthly: pulumi.Output<number>;
    /**
     * Boolean controlling if private networks are
     * enabled. Defaults to false.
     */
    readonly privateNetworking: pulumi.Output<boolean | undefined>;
    /**
     * The region to start in
     */
    readonly region: pulumi.Output<string>;
    /**
     * Boolean controlling whether to increase the disk
     * size when resizing a Droplet. It defaults to `true`. When set to `false`,
     * only the Droplet's RAM and CPU will be resized. **Increasing a Droplet's disk
     * size is a permanent change**. Increasing only RAM and CPU is reversible.
     */
    readonly resizeDisk: pulumi.Output<boolean | undefined>;
    /**
     * The instance size to start
     */
    readonly size: pulumi.Output<string>;
    /**
     * A list of SSH IDs or fingerprints to enable in
     * the format `[12345, 123456]`. To retrieve this info, use a tool such
     * as `curl` with the [DigitalOcean API](https://developers.digitalocean.com/#keys),
     * to retrieve them.
     */
    readonly sshKeys: pulumi.Output<string[] | undefined>;
    /**
     * The status of the droplet
     */
    readonly status: pulumi.Output<string>;
    /**
     * A list of the tags to label this droplet. A tag resource
     * must exist before it can be associated with a droplet.
     */
    readonly tags: pulumi.Output<string[] | undefined>;
    /**
     * A string of the desired User Data for the Droplet.
     */
    readonly userData: pulumi.Output<string | undefined>;
    /**
     * The number of the instance's virtual CPUs
     */
    readonly vcpus: pulumi.Output<number>;
    /**
     * A list of the IDs of each [block storage volume](/docs/providers/do/r/volume.html) to be attached to the Droplet.
     */
    readonly volumeIds: pulumi.Output<string[] | undefined>;
    /**
     * Create a Droplet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DropletArgs, opts?: pulumi.ResourceOptions);
}
/**
 * Input properties used for looking up and filtering Droplet resources.
 */
export interface DropletState {
    /**
     * Boolean controlling if backups are made. Defaults to
     * false.
     */
    readonly backups?: pulumi.Input<boolean>;
    /**
     * The size of the instance's disk in GB
     */
    readonly disk?: pulumi.Input<number>;
    /**
     * The Droplet image ID or slug.
     */
    readonly image?: pulumi.Input<string>;
    /**
     * The IPv4 address
     */
    readonly ipv4Address?: pulumi.Input<string>;
    /**
     * The private networking IPv4 address
     */
    readonly ipv4AddressPrivate?: pulumi.Input<string>;
    /**
     * Boolean controlling if IPv6 is enabled. Defaults to false.
     */
    readonly ipv6?: pulumi.Input<boolean>;
    /**
     * The IPv6 address
     */
    readonly ipv6Address?: pulumi.Input<string>;
    /**
     * The private networking IPv6 address
     */
    readonly ipv6AddressPrivate?: pulumi.Input<string>;
    /**
     * Is the Droplet locked
     */
    readonly locked?: pulumi.Input<string>;
    /**
     * Boolean controlling whether monitoring agent is installed.
     * Defaults to false.
     */
    readonly monitoring?: pulumi.Input<boolean>;
    /**
     * The Droplet name
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Droplet hourly price
     */
    readonly priceHourly?: pulumi.Input<number>;
    /**
     * Droplet monthly price
     */
    readonly priceMonthly?: pulumi.Input<number>;
    /**
     * Boolean controlling if private networks are
     * enabled. Defaults to false.
     */
    readonly privateNetworking?: pulumi.Input<boolean>;
    /**
     * The region to start in
     */
    readonly region?: pulumi.Input<string>;
    /**
     * Boolean controlling whether to increase the disk
     * size when resizing a Droplet. It defaults to `true`. When set to `false`,
     * only the Droplet's RAM and CPU will be resized. **Increasing a Droplet's disk
     * size is a permanent change**. Increasing only RAM and CPU is reversible.
     */
    readonly resizeDisk?: pulumi.Input<boolean>;
    /**
     * The instance size to start
     */
    readonly size?: pulumi.Input<string>;
    /**
     * A list of SSH IDs or fingerprints to enable in
     * the format `[12345, 123456]`. To retrieve this info, use a tool such
     * as `curl` with the [DigitalOcean API](https://developers.digitalocean.com/#keys),
     * to retrieve them.
     */
    readonly sshKeys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The status of the droplet
     */
    readonly status?: pulumi.Input<string>;
    /**
     * A list of the tags to label this droplet. A tag resource
     * must exist before it can be associated with a droplet.
     */
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A string of the desired User Data for the Droplet.
     */
    readonly userData?: pulumi.Input<string>;
    /**
     * The number of the instance's virtual CPUs
     */
    readonly vcpus?: pulumi.Input<number>;
    /**
     * A list of the IDs of each [block storage volume](/docs/providers/do/r/volume.html) to be attached to the Droplet.
     */
    readonly volumeIds?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a Droplet resource.
 */
export interface DropletArgs {
    /**
     * Boolean controlling if backups are made. Defaults to
     * false.
     */
    readonly backups?: pulumi.Input<boolean>;
    /**
     * The Droplet image ID or slug.
     */
    readonly image: pulumi.Input<string>;
    /**
     * Boolean controlling if IPv6 is enabled. Defaults to false.
     */
    readonly ipv6?: pulumi.Input<boolean>;
    /**
     * Boolean controlling whether monitoring agent is installed.
     * Defaults to false.
     */
    readonly monitoring?: pulumi.Input<boolean>;
    /**
     * The Droplet name
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Boolean controlling if private networks are
     * enabled. Defaults to false.
     */
    readonly privateNetworking?: pulumi.Input<boolean>;
    /**
     * The region to start in
     */
    readonly region: pulumi.Input<string>;
    /**
     * Boolean controlling whether to increase the disk
     * size when resizing a Droplet. It defaults to `true`. When set to `false`,
     * only the Droplet's RAM and CPU will be resized. **Increasing a Droplet's disk
     * size is a permanent change**. Increasing only RAM and CPU is reversible.
     */
    readonly resizeDisk?: pulumi.Input<boolean>;
    /**
     * The instance size to start
     */
    readonly size: pulumi.Input<string>;
    /**
     * A list of SSH IDs or fingerprints to enable in
     * the format `[12345, 123456]`. To retrieve this info, use a tool such
     * as `curl` with the [DigitalOcean API](https://developers.digitalocean.com/#keys),
     * to retrieve them.
     */
    readonly sshKeys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of the tags to label this droplet. A tag resource
     * must exist before it can be associated with a droplet.
     */
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A string of the desired User Data for the Droplet.
     */
    readonly userData?: pulumi.Input<string>;
    /**
     * A list of the IDs of each [block storage volume](/docs/providers/do/r/volume.html) to be attached to the Droplet.
     */
    readonly volumeIds?: pulumi.Input<pulumi.Input<string>[]>;
}
