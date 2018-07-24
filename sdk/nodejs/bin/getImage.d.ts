import * as pulumi from "@pulumi/pulumi";
/**
 * Get information on an snapshot images. The aim of this datasource is to enable
 * you to build droplets based on snapshot names.
 *
 * An error is triggered if zero or more than one result is returned by the query.
 */
export declare function getImage(args: GetImageArgs): Promise<GetImageResult>;
/**
 * A collection of arguments for invoking getImage.
 */
export interface GetImageArgs {
    /**
     * The name of the image.
     */
    readonly name: pulumi.Input<string>;
}
/**
 * A collection of values returned by getImage.
 */
export interface GetImageResult {
    /**
     * The id of the image.
     * * `min_disk_size`: The minimum 'disk' required for the image.
     */
    readonly image: string;
    readonly minDiskSize: number;
    /**
     * Is image a public image or not. Public images represents
     * Linux distributions or Application, while non-public images represent
     * snapshots and backups and are only available within your account.
     * * `regions`: The regions that the image is available in.
     * * `size_gigabytes`: The size of the image in gigabytes.
     * * `type`: Type of the image. Can be "snapshot" or "backup".
     */
    readonly private: boolean;
    readonly regions: string[];
    readonly type: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
