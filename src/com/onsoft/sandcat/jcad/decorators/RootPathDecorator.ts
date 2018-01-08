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

import {Decorator} from "jec-commons";
import {RootPathDescriptorRegistry} from "../../metadata/RootPathDescriptorRegistry";
import {JarsError, RoutePathParams} from "jec-jars";
import {RootPathSolver} from "../../utils/RootPathSolver";
import {RootPathDescriptor} from "../../reflect/RootPathDescriptor";
import {LocaleManager} from "jec-commons-node";
import {SandcatLocaleManager} from "../../i18n/SandcatLocaleManager";

/**
 * The <code>RootPathDecorator</code> class defines the <code>Decorator</code>  
 * implementation for the JARS <code>@RootPath</code> decorator.
 */
export class RootPathDecorator implements Decorator {
  
  ////////////////////////////////////////////////////////////////////////////
  // Constructor function
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>RootPathDecorator</code> instance.
   */
  constructor() {}

  ////////////////////////////////////////////////////////////////////////////
  // public methods
  ////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public decorate(target:any, params:RoutePathParams):any {
    let descriptor:RootPathDescriptor = null;
    let solver:RootPathSolver = null;
    let i18n:LocaleManager = SandcatLocaleManager.getInstance();
    if(!params) {
      throw new JarsError(i18n.get("errors.params", target));
    }
    descriptor = RootPathDescriptorRegistry.getRegisteredDescriptor();
    descriptor.path = params.path;
    descriptor.ref = params.ref;
    descriptor.version = params.version;
    solver = new RootPathSolver();
    solver.resolvePath(params, descriptor);
    return target;
  }
}
