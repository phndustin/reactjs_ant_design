// import { ApisauceInstance, create, ApiResponse } from 'apisauce'
import { ApiConfig, DEFAULT_API_CONFIG } from './api-config'
// import { handleError, handleDataError } from './error-handler'
import axios, { AxiosInstance } from 'axios'

/**
 * Manages all requests to the API.
 */
export default class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  api: AxiosInstance

  /**
   * Configurable options.
   */
  // config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    // this.config = config

    this.api = axios.create({
      baseURL: config.url,
      timeout: config.timeout,
      headers: {
        Accept: 'application/json',
      },
    })
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    
  }

  getRoute() {
    return [
      {
        icon: 'dashboard',
        id: '1',
        name: 'Dashboard',
        route: '/'
      },
      {
        icon: 'dashboard',
        id: '2',
        name: 'Staff',
        route: '/staff'
      }
    ]
  }
}
