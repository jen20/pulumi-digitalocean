package main

import (
	"github.com/pulumi/pulumi-terraform/pkg/tfbridge"

	"github.com/jen20/pulumi-digitalocean"
	"github.com/jen20/pulumi-digitalocean/pkg/version"
)

func main() {
	tfbridge.Main("digitalocean", version.Version, digitalocean.Provider())
}
