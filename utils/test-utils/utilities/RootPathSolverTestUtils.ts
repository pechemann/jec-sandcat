//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import { RootPathVersion, RoutePathParams } from "jec-jars";

/*!
 * This module constains utilities used by the RootPathSolverTest test suite.
 */

// Utilities:
export const BASE_PATH:string = "/url/pattern";
export const NO_SLASH_BASE_PATH:string = "url/pattern";
export const SLASH:string = "/";
export const VERSION:RootPathVersion = ({
  major: 1,
  minor: 1,
  prefix: "v"
} as RootPathVersion);
export const VERSION_STRING:string = "v1.1";
export const buildRoutePathParams = function(version:RootPathVersion = null):RoutePathParams {
  const params: RoutePathParams = {
    path: null,
    ref: null,
    version: version
  };
  return params;
}
