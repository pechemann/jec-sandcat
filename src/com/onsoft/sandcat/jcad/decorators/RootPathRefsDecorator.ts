//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
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
import {ResourceDescriptorRegistry} from "../../metadata/ResourceDescriptorRegistry";
import {ResourceDescriptor} from "../../reflect/ResourceDescriptor";
import {JarsError} from "jec-jars";

/**
 * The <code>RootPathRefsDecorator</code> class defines the 
 * <code>Decorator</code> implementation  for the JARS
 * <code>@RootPathRefs</code> decorator.
 */
export class RootPathRefsDecorator implements Decorator {
  
  ////////////////////////////////////////////////////////////////////////////
  // Constructor function
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>RootPathRefsDecorator</code> instance.
   */
  constructor() {}

  ////////////////////////////////////////////////////////////////////////////
  // public methods
  ////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public decorate(target:any, pathRefs:string[]):any {
    if(!pathRefs) {
      throw new JarsError(
        "RootPathRefs error: 'pathRefs' parameter is missing for resource " +
        target
      );
    }
    let descriptor:ResourceDescriptor =
                           ResourceDescriptorRegistry.getRegisteredDescriptor();
    descriptor.rootPathRefs = pathRefs;
    return target;
  }
}