package main

import (
	"github.com/pulumi/pulumi-terraform/pkg/tfgen"

	"github.com/jen20/pulumi-digitalocean"
	"github.com/jen20/pulumi-digitalocean/pkg/version"
)

func main() {
	tfgen.Main("digitalocean", version.Version, digitalocean.Provider())
}
