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

import { TestSuite, Test } from "jec-juta";
import { expect } from "chai";
import { SandcatBuilder } from "../../../../../src/com/onsoft/sandcat/builders/SandcatBuilder";
import { DomainContainer } from "jec-glasscat-core";
import { DefaultSandcatContainer } from "../../../../../src/com/onsoft/sandcat/core/DefaultSandcatContainer";
import { Logger, ConsoleLogger } from "jec-commons";

@TestSuite({
  description: "Test the SandcatBuilder class properties"
})
export class SandcatBuilderTest {
  
  @Test({
    description: "should return a new DefaultSandcatContainer object"
  })
  public buildTest():void {
    let builder = new SandcatBuilder();
    let container:DomainContainer = ({
      init: null,
      getJsletContext: null,
      getLoginStrategy: null,
      getMappedResource: null,
      getSourceFileInspector:null,
      getState: null,
      process: null,
      getLogger: function():Logger {
        return new ConsoleLogger();
      }
    } as DomainContainer);
    expect(
      builder.build(container)
    ).to.be.an.instanceOf(DefaultSandcatContainer);
  }
}