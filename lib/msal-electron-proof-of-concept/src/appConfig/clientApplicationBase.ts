// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { ApplicationConfiguration, buildApplicationConfiguration } from './applicationConfiguration';

/**
 * ClientApplicationBase abstract class
 *
 * Abstract class that provides a base for Public and Private Application classes.
 */
export abstract class ClientApplicationBase {
    private _config: ApplicationConfiguration;

    constructor(applicationConfiguration: ApplicationConfiguration) {
        this._config = buildApplicationConfiguration(applicationConfiguration);
    }

    get config(): ApplicationConfiguration {
        return this._config;
    }
}