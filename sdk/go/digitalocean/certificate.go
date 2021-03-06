// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package digitalocean

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a DigitalOcean Certificate resource that allows you to manage
// certificates for configuring TLS termination in Load Balancers.
// Certificates created with this resource can be referenced in your
// Load Balancer configuration via their ID.
type Certificate struct {
	s *pulumi.ResourceState
}

// NewCertificate registers a new resource with the given unique name, arguments, and options.
func NewCertificate(ctx *pulumi.Context,
	name string, args *CertificateArgs, opts ...pulumi.ResourceOpt) (*Certificate, error) {
	if args == nil || args.LeafCertificate == nil {
		return nil, errors.New("missing required argument 'LeafCertificate'")
	}
	if args == nil || args.PrivateKey == nil {
		return nil, errors.New("missing required argument 'PrivateKey'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["certificateChain"] = nil
		inputs["leafCertificate"] = nil
		inputs["name"] = nil
		inputs["privateKey"] = nil
	} else {
		inputs["certificateChain"] = args.CertificateChain
		inputs["leafCertificate"] = args.LeafCertificate
		inputs["name"] = args.Name
		inputs["privateKey"] = args.PrivateKey
	}
	inputs["notAfter"] = nil
	inputs["sha1Fingerprint"] = nil
	s, err := ctx.RegisterResource("digitalocean:index/certificate:Certificate", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Certificate{s: s}, nil
}

// GetCertificate gets an existing Certificate resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCertificate(ctx *pulumi.Context,
	name string, id pulumi.ID, state *CertificateState, opts ...pulumi.ResourceOpt) (*Certificate, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["certificateChain"] = state.CertificateChain
		inputs["leafCertificate"] = state.LeafCertificate
		inputs["name"] = state.Name
		inputs["notAfter"] = state.NotAfter
		inputs["privateKey"] = state.PrivateKey
		inputs["sha1Fingerprint"] = state.Sha1Fingerprint
	}
	s, err := ctx.ReadResource("digitalocean:index/certificate:Certificate", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Certificate{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Certificate) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Certificate) ID() *pulumi.IDOutput {
	return r.s.ID
}

// The full PEM-formatted trust chain
// between the certificate authority's certificate and your domain's TLS
// certificate.
func (r *Certificate) CertificateChain() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["certificateChain"])
}

// The contents of a PEM-formatted public
// TLS certificate.
func (r *Certificate) LeafCertificate() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["leafCertificate"])
}

// The name of the certificate for identification.
func (r *Certificate) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The expiration date of the certificate
func (r *Certificate) NotAfter() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["notAfter"])
}

// The contents of a PEM-formatted private-key
// corresponding to the SSL certificate.
func (r *Certificate) PrivateKey() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["privateKey"])
}

// The SHA-1 fingerprint of the certificate
func (r *Certificate) Sha1Fingerprint() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["sha1Fingerprint"])
}

// Input properties used for looking up and filtering Certificate resources.
type CertificateState struct {
	// The full PEM-formatted trust chain
	// between the certificate authority's certificate and your domain's TLS
	// certificate.
	CertificateChain interface{}
	// The contents of a PEM-formatted public
	// TLS certificate.
	LeafCertificate interface{}
	// The name of the certificate for identification.
	Name interface{}
	// The expiration date of the certificate
	NotAfter interface{}
	// The contents of a PEM-formatted private-key
	// corresponding to the SSL certificate.
	PrivateKey interface{}
	// The SHA-1 fingerprint of the certificate
	Sha1Fingerprint interface{}
}

// The set of arguments for constructing a Certificate resource.
type CertificateArgs struct {
	// The full PEM-formatted trust chain
	// between the certificate authority's certificate and your domain's TLS
	// certificate.
	CertificateChain interface{}
	// The contents of a PEM-formatted public
	// TLS certificate.
	LeafCertificate interface{}
	// The name of the certificate for identification.
	Name interface{}
	// The contents of a PEM-formatted private-key
	// corresponding to the SSL certificate.
	PrivateKey interface{}
}
