import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a DigitalOcean Load Balancer resource. This can be used to create,
 * modify, and delete Load Balancers.
 */
export declare class LoadBalancer extends pulumi.CustomResource {
    /**
     * Get an existing LoadBalancer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoadBalancerState): LoadBalancer;
    /**
     * The load balancing algorithm used to determine
     * which backend Droplet will be selected by a client. It must be either `round_robin`
     * or `least_connections`. The default value is `round_robin`.
     */
    readonly algorithm: pulumi.Output<string | undefined>;
    /**
     * A list of the IDs of each droplet to be attached to the Load Balancer.
     */
    readonly dropletIds: pulumi.Output<string[] | undefined>;
    /**
     * The name of a Droplet tag corresponding to Droplets to be assigned to the Load Balancer.
     */
    readonly dropletTag: pulumi.Output<string | undefined>;
    /**
     * A list of `forwarding_rule` to be assigned to the
     * Load Balancer. The `forwarding_rule` block is documented below.
     */
    readonly forwardingRules: pulumi.Output<{
        certificateId?: string;
        entryPort: number;
        entryProtocol: string;
        targetPort: number;
        targetProtocol: string;
        tlsPassthrough?: boolean;
    }[]>;
    /**
     * A `healthcheck` block to be assigned to the
     * Load Balancer. The `healthcheck` block is documented below. Only 1 healthcheck is allowed.
     */
    readonly healthcheck: pulumi.Output<{
        checkIntervalSeconds?: number;
        healthyThreshold?: number;
        path?: string;
        port: number;
        protocol: string;
        responseTimeoutSeconds?: number;
        unhealthyThreshold?: number;
    } | undefined>;
    readonly ip: pulumi.Output<string>;
    /**
     * The Load Balancer name
     */
    readonly name: pulumi.Output<string>;
    /**
     * A boolean value indicating whether
     * HTTP requests to the Load Balancer on port 80 will be redirected to HTTPS on port 443.
     * Default value is `false`.
     */
    readonly redirectHttpToHttps: pulumi.Output<boolean | undefined>;
    /**
     * The region to start in
     */
    readonly region: pulumi.Output<string>;
    /**
     * A `sticky_sessions` block to be assigned to the
     * Load Balancer. The `sticky_sessions` block is documented below. Only 1 sticky_sessions block is allowed.
     */
    readonly stickySessions: pulumi.Output<{
        cookieName?: string;
        cookieTtlSeconds?: number;
        type?: string;
    }>;
    /**
     * Create a LoadBalancer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadBalancerArgs, opts?: pulumi.ResourceOptions);
}
/**
 * Input properties used for looking up and filtering LoadBalancer resources.
 */
export interface LoadBalancerState {
    /**
     * The load balancing algorithm used to determine
     * which backend Droplet will be selected by a client. It must be either `round_robin`
     * or `least_connections`. The default value is `round_robin`.
     */
    readonly algorithm?: pulumi.Input<string>;
    /**
     * A list of the IDs of each droplet to be attached to the Load Balancer.
     */
    readonly dropletIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of a Droplet tag corresponding to Droplets to be assigned to the Load Balancer.
     */
    readonly dropletTag?: pulumi.Input<string>;
    /**
     * A list of `forwarding_rule` to be assigned to the
     * Load Balancer. The `forwarding_rule` block is documented below.
     */
    readonly forwardingRules?: pulumi.Input<{
        certificateId?: pulumi.Input<string>;
        entryPort: pulumi.Input<number>;
        entryProtocol: pulumi.Input<string>;
        targetPort: pulumi.Input<number>;
        targetProtocol: pulumi.Input<string>;
        tlsPassthrough?: pulumi.Input<boolean>;
    }[]>;
    /**
     * A `healthcheck` block to be assigned to the
     * Load Balancer. The `healthcheck` block is documented below. Only 1 healthcheck is allowed.
     */
    readonly healthcheck?: pulumi.Input<{
        checkIntervalSeconds?: pulumi.Input<number>;
        healthyThreshold?: pulumi.Input<number>;
        path?: pulumi.Input<string>;
        port: pulumi.Input<number>;
        protocol: pulumi.Input<string>;
        responseTimeoutSeconds?: pulumi.Input<number>;
        unhealthyThreshold?: pulumi.Input<number>;
    }>;
    readonly ip?: pulumi.Input<string>;
    /**
     * The Load Balancer name
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A boolean value indicating whether
     * HTTP requests to the Load Balancer on port 80 will be redirected to HTTPS on port 443.
     * Default value is `false`.
     */
    readonly redirectHttpToHttps?: pulumi.Input<boolean>;
    /**
     * The region to start in
     */
    readonly region?: pulumi.Input<string>;
    /**
     * A `sticky_sessions` block to be assigned to the
     * Load Balancer. The `sticky_sessions` block is documented below. Only 1 sticky_sessions block is allowed.
     */
    readonly stickySessions?: pulumi.Input<{
        cookieName?: pulumi.Input<string>;
        cookieTtlSeconds?: pulumi.Input<number>;
        type?: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a LoadBalancer resource.
 */
export interface LoadBalancerArgs {
    /**
     * The load balancing algorithm used to determine
     * which backend Droplet will be selected by a client. It must be either `round_robin`
     * or `least_connections`. The default value is `round_robin`.
     */
    readonly algorithm?: pulumi.Input<string>;
    /**
     * A list of the IDs of each droplet to be attached to the Load Balancer.
     */
    readonly dropletIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of a Droplet tag corresponding to Droplets to be assigned to the Load Balancer.
     */
    readonly dropletTag?: pulumi.Input<string>;
    /**
     * A list of `forwarding_rule` to be assigned to the
     * Load Balancer. The `forwarding_rule` block is documented below.
     */
    readonly forwardingRules: pulumi.Input<{
        certificateId?: pulumi.Input<string>;
        entryPort: pulumi.Input<number>;
        entryProtocol: pulumi.Input<string>;
        targetPort: pulumi.Input<number>;
        targetProtocol: pulumi.Input<string>;
        tlsPassthrough?: pulumi.Input<boolean>;
    }[]>;
    /**
     * A `healthcheck` block to be assigned to the
     * Load Balancer. The `healthcheck` block is documented below. Only 1 healthcheck is allowed.
     */
    readonly healthcheck?: pulumi.Input<{
        checkIntervalSeconds?: pulumi.Input<number>;
        healthyThreshold?: pulumi.Input<number>;
        path?: pulumi.Input<string>;
        port: pulumi.Input<number>;
        protocol: pulumi.Input<string>;
        responseTimeoutSeconds?: pulumi.Input<number>;
        unhealthyThreshold?: pulumi.Input<number>;
    }>;
    /**
     * The Load Balancer name
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A boolean value indicating whether
     * HTTP requests to the Load Balancer on port 80 will be redirected to HTTPS on port 443.
     * Default value is `false`.
     */
    readonly redirectHttpToHttps?: pulumi.Input<boolean>;
    /**
     * The region to start in
     */
    readonly region: pulumi.Input<string>;
    /**
     * A `sticky_sessions` block to be assigned to the
     * Load Balancer. The `sticky_sessions` block is documented below. Only 1 sticky_sessions block is allowed.
     */
    readonly stickySessions?: pulumi.Input<{
        cookieName?: pulumi.Input<string>;
        cookieTtlSeconds?: pulumi.Input<number>;
        type?: pulumi.Input<string>;
    }>;
}
