import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a DigitalOcean Certificate resource that allows you to manage
 * certificates for configuring TLS termination in Load Balancers.
 * Certificates created with this resource can be referenced in your
 * Load Balancer configuration via their ID.
 */
export declare class Certificate extends pulumi.CustomResource {
    /**
     * Get an existing Certificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CertificateState): Certificate;
    /**
     * The full PEM-formatted trust chain
     * between the certificate authority's certificate and your domain's TLS
     * certificate.
     */
    readonly certificateChain: pulumi.Output<string | undefined>;
    /**
     * The contents of a PEM-formatted public
     * TLS certificate.
     */
    readonly leafCertificate: pulumi.Output<string>;
    /**
     * The name of the certificate for identification.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The expiration date of the certificate
     */
    readonly notAfter: pulumi.Output<string>;
    /**
     * The contents of a PEM-formatted private-key
     * corresponding to the SSL certificate.
     */
    readonly privateKey: pulumi.Output<string>;
    /**
     * The SHA-1 fingerprint of the certificate
     */
    readonly sha1Fingerprint: pulumi.Output<string>;
    /**
     * Create a Certificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateArgs, opts?: pulumi.ResourceOptions);
}
/**
 * Input properties used for looking up and filtering Certificate resources.
 */
export interface CertificateState {
    /**
     * The full PEM-formatted trust chain
     * between the certificate authority's certificate and your domain's TLS
     * certificate.
     */
    readonly certificateChain?: pulumi.Input<string>;
    /**
     * The contents of a PEM-formatted public
     * TLS certificate.
     */
    readonly leafCertificate?: pulumi.Input<string>;
    /**
     * The name of the certificate for identification.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The expiration date of the certificate
     */
    readonly notAfter?: pulumi.Input<string>;
    /**
     * The contents of a PEM-formatted private-key
     * corresponding to the SSL certificate.
     */
    readonly privateKey?: pulumi.Input<string>;
    /**
     * The SHA-1 fingerprint of the certificate
     */
    readonly sha1Fingerprint?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Certificate resource.
 */
export interface CertificateArgs {
    /**
     * The full PEM-formatted trust chain
     * between the certificate authority's certificate and your domain's TLS
     * certificate.
     */
    readonly certificateChain?: pulumi.Input<string>;
    /**
     * The contents of a PEM-formatted public
     * TLS certificate.
     */
    readonly leafCertificate: pulumi.Input<string>;
    /**
     * The name of the certificate for identification.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The contents of a PEM-formatted private-key
     * corresponding to the SSL certificate.
     */
    readonly privateKey: pulumi.Input<string>;
}
