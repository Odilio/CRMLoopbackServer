import { ApplicationConfig, BindingKey } from '@loopback/core';
import { RestApplication } from '@loopback/rest';
export interface PackageInfo {
    name: string;
    version: string;
    description: string;
}
export declare const PackageKey: BindingKey<PackageInfo>;
declare const MobbyPlatformServersideApplication_base;
export declare class MobbyPlatformServersideApplication extends MobbyPlatformServersideApplication_base {
    setUpBindings(): void;
    constructor(options?: ApplicationConfig);
}
export {};
