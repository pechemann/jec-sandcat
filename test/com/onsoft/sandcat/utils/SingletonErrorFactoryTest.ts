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

import { TestSuite, Test } from "jec-juta";
import { expect, assert } from "chai";
import { SingletonErrorFactory } from "../../../../../src/com/onsoft/sandcat/utils/SingletonErrorFactory";
import { SingletonError } from "jec-commons";

@TestSuite({
  description: "Test the SingletonErrorFactory class properties."
})
export class SingletonErrorFactoryTest {

  @Test({
    description: "should throw a SingletonError exception"
  })
  public throwTest():void {
    let factory:SingletonErrorFactory = new SingletonErrorFactory();
    let invokeThrox:Function = function():void {
      factory.throw(SingletonErrorFactory);
    };
    expect(invokeThrox).to.throw(SingletonError);
  }
}