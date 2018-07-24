package digitalocean

import (
	"errors"
	"unicode"

	"github.com/hashicorp/terraform/helper/schema"
	"github.com/hashicorp/terraform/terraform"
	"github.com/pulumi/pulumi-terraform/pkg/tfbridge"
	"github.com/pulumi/pulumi/pkg/resource"
	"github.com/pulumi/pulumi/pkg/tokens"
	"github.com/terraform-providers/terraform-provider-digitalocean/digitalocean"
)

// all of the AWS token components used below.
const (
	// packages:
	digitalOceanPkg = "digitalocean"
	// modules:
	digitalOceanMod = "index" // the root index.
)

// digitalOceanMember manufactures a type token for the Digital Ocean package and the given module and type.
func digitalOceanMember(mod string, mem string) tokens.ModuleMember {
	return tokens.ModuleMember(digitalOceanPkg + ":" + mod + ":" + mem)
}

// digitalOceanType manufactures a type token for the Digital Ocean package and the given module and type.
func digitalOceanType(mod string, typ string) tokens.Type {
	return tokens.Type(digitalOceanMember(mod, typ))
}

// digitalOceanDataSource manufactures a standard resource token given a module and resource name.
// It automatically uses the Digital Ocean package and names the file by simply lower casing the data
// source's first character.
func digitalOceanDataSource(mod string, res string) tokens.ModuleMember {
	fn := string(unicode.ToLower(rune(res[0]))) + res[1:]
	return digitalOceanMember(mod+"/"+fn, res)
}

// digitalOceanResource manufactures a standard resource token given a module and resource name.  It automatically uses the AWS
// package and names the file by simply lower casing the resource's first character.
func digitalOceanResource(mod string, res string) tokens.Type {
	fn := string(unicode.ToLower(rune(res[0]))) + res[1:]
	return digitalOceanType(mod+"/"+fn, res)
}

// stringValue gets a string value from a property map if present, else ""
func stringValue(vars resource.PropertyMap, prop resource.PropertyKey) string {
	val, ok := vars[prop]
	if ok && val.IsString() {
		return val.StringValue()
	}
	return ""
}

// preConfigureCallback validates that AWS credentials can be succesfully discovered. This emulates the credentials
// configuration subset of `github.com/terraform-providers/terraform-provider-aws/aws.providerConfigure`.  We do this
// before passing control to the TF provider to ensure we can report actionable errors.
func preConfigureCallback(vars resource.PropertyMap, c *terraform.ResourceConfig) error {
	if stringValue(vars, "token") == "" {
		return errors.New("unable to discover Digital Ocean credentials" +
			"- see https://pulumi.io/install/digitalocean.html for details on configuration")
	}

	return nil
}

// Provider returns additional overlaid schema and metadata associated with the Digital Ocean package.
func Provider() tfbridge.ProviderInfo {
	p := digitalocean.Provider().(*schema.Provider)
	prov := tfbridge.ProviderInfo{
		P:                    p,
		Name:                 "digitalocean",
		Description:          "A Pulumi package for creating and managing Digital Ocean cloud resources.",
		Keywords:             []string{"pulumi", "digital ocean"},
		License:              "Apache-2.0",
		Homepage:             "https://pulumi.io",
		Repository:           "https://github.com/jen20/pulumi-digitalocean",
		PreConfigureCallback: preConfigureCallback,
		Resources: map[string]*tfbridge.ResourceInfo{
			"digitalocean_certificate":  {Tok: digitalOceanResource(digitalOceanMod, "Certificate")},
			"digitalocean_domain":       {Tok: digitalOceanResource(digitalOceanMod, "Domain")},
			"digitalocean_droplet":      {Tok: digitalOceanResource(digitalOceanMod, "Droplet")},
			"digitalocean_firewall":     {Tok: digitalOceanResource(digitalOceanMod, "Firewall")},
			"digitalocean_floating_ip":  {Tok: digitalOceanResource(digitalOceanMod, "FloatingIp")},
			"digitalocean_loadbalancer": {Tok: digitalOceanResource(digitalOceanMod, "LoadBalancer")},
			"digitalocean_record":       {Tok: digitalOceanResource(digitalOceanMod, "DnsRecord")},
			"digitalocean_ssh_key":      {Tok: digitalOceanResource(digitalOceanMod, "SshKey")},
			"digitalocean_tag":          {Tok: digitalOceanResource(digitalOceanMod, "Tag")},
			"digitalocean_volume":       {Tok: digitalOceanResource(digitalOceanMod, "Volume")},
		},
		DataSources: map[string]*tfbridge.DataSourceInfo{
			"digitalocean_image": {Tok: digitalOceanDataSource(digitalOceanMod, "getImage")},
		},
		JavaScript: &tfbridge.JavaScriptInfo{
			Dependencies: map[string]string{
				"@pulumi/pulumi":    "^0.14.0",
				"builtin-modules":   "3.0.0",
				"read-package-tree": "^5.2.1",
				"resolve":           "^1.7.1",
			},
			DevDependencies: map[string]string{
				"@types/node": "^8.0.25", // so we can access strongly typed node definitions.
			},
			Overlay: &tfbridge.OverlayInfo{
				Files:   []string{},
				Modules: map[string]*tfbridge.OverlayInfo{},
			},
		},
		//Python: &tfbridge.PythonInfo{
		//	Requires: map[string]string{
		//		"pulumi": ">=0.14.2,<0.15.0",
		//	},
		//},
	}

	// For all resources with name properties, we will add an auto-name property.  Make sure to skip those that
	// already have a name mapping entry, since those may have custom overrides set above (e.g., for length).
	const nameField = "name"
	for resname, res := range prov.Resources {
		if schema := p.ResourcesMap[resname]; schema != nil {
			// Only apply auto-name to input properties (Optional || Required) named `name`
			if tfs, has := schema.Schema[nameField]; has && (tfs.Optional || tfs.Required) {
				if _, hasfield := res.Fields[nameField]; !hasfield {
					if res.Fields == nil {
						res.Fields = make(map[string]*tfbridge.SchemaInfo)
					}
					res.Fields[nameField] = tfbridge.AutoName(nameField, 255)
				}
			}
		}
	}

	return prov
}
