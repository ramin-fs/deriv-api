import Immutable from '../Types/Immutable';

/**
 * Abstract class for trading assets
 */
export default class Assets extends Immutable {
    /**
     * @param {DerivAPI} api
     */
    constructor(api) {
        super();
        this.api = api;
    }

    // Called by the API to initialize the instance
    async init() {
        return Promise.resolve(undefined);
    }
}