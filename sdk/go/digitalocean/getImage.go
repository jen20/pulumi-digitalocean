// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package digitalocean

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Get information on an snapshot images. The aim of this datasource is to enable
// you to build droplets based on snapshot names.
// 
// An error is triggered if zero or more than one result is returned by the query.
func LookupImage(ctx *pulumi.Context, args *GetImageArgs) (*GetImageResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
	}
	outputs, err := ctx.Invoke("digitalocean:index/getImage:getImage", inputs)
	if err != nil {
		return nil, err
	}
	return &GetImageResult{
		Image: outputs["image"],
		MinDiskSize: outputs["minDiskSize"],
		Private: outputs["private"],
		Regions: outputs["regions"],
		Type: outputs["type"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getImage.
type GetImageArgs struct {
	// The name of the image.
	Name interface{}
}

// A collection of values returned by getImage.
type GetImageResult struct {
	// The id of the image.
	// * `min_disk_size`: The minimum 'disk' required for the image.
	Image interface{}
	MinDiskSize interface{}
	// Is image a public image or not. Public images represents
	// Linux distributions or Application, while non-public images represent
	// snapshots and backups and are only available within your account.
	// * `regions`: The regions that the image is available in.
	// * `size_gigabytes`: The size of the image in gigabytes.
	// * `type`: Type of the image. Can be "snapshot" or "backup".
	Private interface{}
	Regions interface{}
	Type interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
